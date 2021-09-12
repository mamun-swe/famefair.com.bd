import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArrowUpRight, Search } from 'react-feather'
import { SearchSuggestion } from '../../pages/api/index'

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
        try {
            const value = event.target.value

            setQuery(value)
            if (!value) {
                setItems({ values: null, message: null })
                setShow(false)
                setQuery(null)
                return
            }

            setShow(true)
            const response = await SearchSuggestion(value)

            if (response && response.status === 200) {
                if (response.data && response.data.data.length)
                    setItems({ values: response.data.data, message: null })
            }
        } catch (error) {
            if (error) {
                setItems({ values: [], message: error.response ? error.response.data.message : null })
            }
        }
    }

    // Product click handeller
    const clickHandeller = product => {
        let productName = product
        productName = productName.replace(/ /g, "-")

        setItems({ values: null, message: null })
        setShow(false)
        router.push(`/search-results?query=${productName}`)
    }

    // Handle submit
    const handleSubmit = event => {
        event.preventDefault()
        if (query) {
            setItems({ values: null, message: null })
            setShow(false)

            let name = query
            name = name.replace(/ /g, "+")
            router.push(`/search-results?query=${name}`)
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
                        defaultValue={router && router.query ? router.query.query : null}
                        onChange={handleSearch}
                    />
                    <Search size={20} className="icon" />
                </div>
            </form>

            {/* Suggested items container */}
            {show ?
                <div className="suggest-container" ref={wrapperRef}>
                    <div className="card shadow border-0">
                        {items.values && items.values.length ?
                            items.values.map((product, i) =>
                                <div className="item d-flex" key={i} onClick={() => clickHandeller(product.name)}>
                                    <div className="img-container">
                                        <img src={product.image} className="img-fluid" alt="..." />
                                    </div>
                                    <div><p>{product.name}</p></div>
                                    <div className="ms-auto pt-2">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            ) : null}

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