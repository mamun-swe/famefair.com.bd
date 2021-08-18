import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TumblrShareButton,
    TumblrIcon
} from 'react-share'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { PrepareForCart } from '../../utils/_helpers'
import { addProduct } from '../../redux/Actions/cart'
import { addWistlist } from '../../redux/Actions/wishlist'
import { Check, Heart } from 'react-feather'

const index = (props) => {
    const dispatch = useDispatch()
    const shareUrl = 'http://famefairbd.vercel.app/' + useRouter().asPath

    // Add to cart 
    const addToCart = data => {
        let selectedProduct = { ...data, quantity: 1 }
        const product = PrepareForCart(selectedProduct)
        dispatch(addProduct(product))
    }

    // Add to wishlist 
    const addToWishList = data => {
        let selectedProduct = { ...data, quantity: 1 }
        const product = PrepareForCart(selectedProduct)
        dispatch(addWistlist(product))
    }

    console.log(props.data);

    return (
        <div className="product-content-container">
            <h5>{props.data.name}</h5>
            <p><span>SKU:</span> {props.data.sku}</p>
            <p className="mb-4"><span>BRAND:</span> {props.data.brand ? props.data.brand.name : "N/A"}</p>


            <p className="mb-0">PRICE</p>
            <h6 className="mb-3">{props.data.salePrice} tk.</h6>
            <p className="small-content mb-0"><Check className="text-success" size={16} /> 30 days return.</p>
            <p className="small-content mb-0"><Check className="text-success" size={16} /> Cash on delivery.</p>
            <p className="small-content mb-0"><Check className="text-success" size={16} /> Delivery charge 60 tk inside dhaka.</p>
            <p className="small-content mb-0"><Check className="text-success" size={16} /> Delivery charge 100 tk outside dhaka.</p>
            <p className="small-content mb-4"><Check className="text-success" size={16} /> 7 days delivery anywhere in Bangladesh.</p>
            <button type="button" className="btn shadow-sm" onClick={() => addToCart(props.data)}>ADD TO CART</button>
            <button type="button" className="btn shadow-sm rounded-circle heart-btn ms-2" onClick={() => addToWishList(props.data)}>
                <Heart size={20} />
            </button>

            {/* Social sharing */}
            {props.data ?
                <div className="social-share pt-4">
                    <ul>
                        <li className="pr-2">
                            <FacebookShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                        </li>
                        <li className="pr-2">
                            <TwitterShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                        </li>
                        <li className="pr-2">
                            <WhatsappShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                        </li>
                        <li className="pr-2">
                            <LinkedinShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <LinkedinIcon size={32} round={true} />
                            </LinkedinShareButton>
                        </li>
                        <li className="pr-2">
                            <EmailShareButton url={shareUrl} subject={props.data.name} body={'Take a look, you may like it.'}>
                                <EmailIcon size={32} round={true} />
                            </EmailShareButton>
                        </li>
                        <li className="pr-2">
                            <RedditShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <RedditIcon size={32} round={true} />
                            </RedditShareButton>
                        </li>
                        <li className="pr-2">
                            <TelegramShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <TelegramIcon size={32} round={true} />
                            </TelegramShareButton>
                        </li>
                        <li className="pr-2">
                            <TumblrShareButton url={shareUrl} quote={props.data.name} hashtag={'#Famefair'}>
                                <TumblrIcon size={32} round={true} />
                            </TumblrShareButton>
                        </li>
                    </ul>
                </div>
                : null}
        </div>
    );
};

export default index;