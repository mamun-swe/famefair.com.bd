import { useState, useRef, useEffect } from 'react'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/feather'
import { ic_call_made } from 'react-icons-kit/md'
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter()
    const wrapperRef = useRef(null)
    const [show, setShow] = useState(false)
    const [query, setQuery] = useState(null)
    const [items, setItems] = useState({ values: null, message: null })

    // Out side click
    const useOutsideClick = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }, [ref])
    }
    useOutsideClick(wrapperRef)

    // Handle search
    const handleSearch = async event => {
        const value = event.target.value
        setQuery(value)
        if (!value) {
            setItems({ values: null, message: null })
            setShow(false)
            setQuery(null)
            return
        }

        // const response = await searchSuggest(value)
        // if (response.status === true && response.results.length) {
        //     setShow(true)
        //     setItems({ values: response.results, message: null })
        // } else if (response.status === false) {
        //     setShow(true)
        //     setItems({ values: null, message: response.message })
        // } else {
        //     setItems({ values: null, message: null })
        //     setShow(false)
        //     return
        // }
    }

    // Product click handeller
    const clickHandeller = product => {
        let productName = product
        productName = productName.replace(/ /g, "-")

        setItems({ values: null, message: null })
        setShow(false)
        router.push(`/search/${productName}`)
    }

    // Handle submit
    const handleSubmit = event => {
        event.preventDefault()
        if (query) {
            setItems({ values: null, message: null })
            setShow(false)

            let name = query
            name = name.replace(/ /g, "+")
            router.push(`/search-results?page=1&query=${name}`)
        }
    }

    return (
        <div className="search-field-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-0">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                    <Icon icon={search} size={20} className="icon" />
                </div>
            </form>

            {/* Suggested items container */}
            {show ?
                <div className="suggest-container" ref={wrapperRef}>
                    <div className="card shadow border-0">
                        {items.values && items.values.length && items.values.map((product, i) =>
                            <div className="item d-flex" key={i} onClick={() => clickHandeller(product.name)}>
                                <div className="img-container">
                                    <img src={product.thumbnail} className="img-fluid" alt="..." />
                                </div>
                                <div><p>{product.name}</p></div>
                                <div className="ml-auto pt-2">
                                    <Icon icon={ic_call_made} size={18} />
                                </div>
                            </div>
                        )}

                        {items.message ?
                            <div className="message text-center p-4">
                                <p>No results found !</p>
                            </div>
                            : null}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Index;