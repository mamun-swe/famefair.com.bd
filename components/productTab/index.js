import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import ReviewForm from '../reviewForm/index'

const index = (props) => {
    const [key, setKey] = useState('description')

    return (
        <div className="product-tab">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {/* Description */}
                <Tab eventKey="description" title="Description">
                    <div>
                        <h6 className="title">Product description</h6>
                        {ReactHtmlParser(props.data ? props.data.description : null)}
                    </div>
                </Tab>

                {/* Review */}
                <Tab eventKey="reviews" title={'Reviews'}>
                    <div className="pt-4">
                        {[1, 2, 3, 4, 5].map((item, i) =>
                            <div className="review d-flex" key={i}>
                                <div className="name-circle rounded-circle">
                                    <div className="flex-center flex-column">
                                        <h5>M</h5>
                                    </div>
                                </div>
                                <div className="ps-3 w-100">
                                    <div className="name-review-section d-flex mb-2">
                                        <div>
                                            <h6>Abdullah al mamun</h6>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="d-flex">
                                                <div><small className="text-muted me-2">Jun 14, 2021</small></div>
                                                <div>
                                                    {/* <RatingStar star={parseInt(item.rating)} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                                </div>
                            </div>
                        )}

                        <br />
                        <ReviewForm />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default index;