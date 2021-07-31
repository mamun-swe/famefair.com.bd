import React, { useState } from 'react'
import { Star } from 'react-feather'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
    autoClose: 1500,
    transition: Slide,
    position: "bottom-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})


const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)
    const [rating, setRating] = useState({ value: null, error: null })

    const onSubmit = async (data) => {
        try {
            if (!rating.value) return setRating({ value: null, error: 'Rating is required.' })

            setLoading(true)
            const reviewData = {
                ...data,
                rating: rating.value
            }

            console.log(reviewData)
            setTimeout(() => {
                setLoading(false)
                toast.success('Your review submitted')
            }, 1000)

        } catch (error) {
            if (error) {
                setLoading(false)
                console.log(error)
            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Ratings */}
                {rating && rating.error ? <small className="text-danger mb-1">{rating.error}</small> : <small className="mb-1">Rating</small>}
                <div className="mb-3">
                    <div className={rating.value === 1 ? "text-warning" : "text-muted"}
                        onClick={() => setRating({ value: 1, error: null })}
                    >
                        <Star size={16} />
                    </div>
                    <div className={rating.value === 2 ? "text-warning" : "text-muted"}
                        onClick={() => setRating({ value: 2, error: null })}
                    >
                        <Star size={16} />
                        <Star size={16} />
                    </div>
                    <div
                        className={rating.value === 3 ? "text-warning" : "text-muted"}
                        onClick={() => setRating({ value: 3, error: null })}
                    >
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                    </div>
                    <div
                        className={rating.value === 4 ? "text-warning" : "text-muted"}
                        onClick={() => setRating({ value: 4, error: null })}
                    >
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                    </div>
                    <div
                        className={rating.value === 5 ? "text-warning" : "text-muted"}
                        onClick={() => setRating({ value: 5, error: null })}
                    >
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                        <Star size={16} />
                    </div>
                </div>

                {/* Review */}
                <div className="form-group mb-3">
                    {errors.review && errors.review.message ? (
                        <small className="text-danger">{errors.review && errors.review.message}</small>
                    ) : <small>Give your review</small>}

                    <textarea
                        rows={5}
                        placeholder="Your review"
                        className="form-control shadow-none"
                        {...register("review", { required: "Write your review" })}
                    />
                </div>

                <div className="text-right">
                    <button type="submit" className="btn shadow-none submit-btn" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit Review'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default index;