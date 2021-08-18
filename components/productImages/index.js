
import { useState } from 'react'
import { useWindowSize } from '../window/windowSize'
import ReactImageMagnify from 'react-image-magnify'


const Index = (props) => {
    const size = useWindowSize()
    const [largeImage, setLargeImage] = useState(null)

    return (
        <div className="product-images-container d-lg-flex">

            {/* Small images container */}
            <div className="small-images d-none d-lg-block">
                <ul>
                    {props.data.additional && props.data.additional.map((item, i) =>
                        <li key={i} onClick={() => setLargeImage(item)}>
                            <img src={item} className="img-fluid" alt="..." />
                        </li>
                    )}
                </ul>
            </div>

            {/* Large image */}
            <div className="large-image-container flex-fill">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: '...',
                        src: largeImage || props.data.large,
                        width: size.width <= 1200 ? 300 : 450,
                        height: size.width <= 1200 ? 300 : 450
                    },
                    style: { margin: 'auto' },
                    imageClassName: 'magnifiySmallImage',
                    largeImage: {
                        src: largeImage || props.data.large,
                        width: 1200,
                        height: 1800
                    },
                    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                }} />
            </div>

            {/* Small images container */}
            <div className="small-images d-block d-lg-none">
                <ul>
                    {props.data.additional && props.data.additional.map((item, i) =>
                        <li key={i} onClick={() => setLargeImage(item)}>
                            <img src={item} width={80} height={65} alt="..." />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Index;