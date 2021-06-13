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
import { Icon } from 'react-icons-kit'
import { check } from 'react-icons-kit/feather/check'
import { useRouter } from 'next/router'

const index = (props) => {
    const shareUrl = 'http://famefairbd.vercel.app/' + useRouter().asPath

    return (
        <div className="product-content-container">
            <h5>Product name goes here</h5>
            <p><span>SKU:</span> 1234sku</p>
            <p className="mb-4"><span>BRAND:</span> Brand</p>


            <p className="mb-0">PRICE</p>
            <h6 className="mb-3">15555 tk.</h6>
            <p className="small-content mb-0"><Icon className="text-success" icon={check} size={16} /> 30 days return.</p>
            <p className="small-content mb-0"><Icon className="text-success" icon={check} size={16} /> Cash on delivery.</p>
            <p className="small-content mb-0"><Icon className="text-success" icon={check} size={16} /> Delivery charge 60 tk inside dhaka.</p>
            <p className="small-content mb-0"><Icon className="text-success" icon={check} size={16} /> Delivery charge 100 tk outside dhaka.</p>
            <p className="small-content mb-4"><Icon className="text-success" icon={check} size={16} /> 7 days delivery anywhere in Bangladesh.</p>
            <button type="button" className="btn shadow-sm">ADD TO CART</button>

            {/* Social sharing */}
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
        </div>
    );
};

export default index;