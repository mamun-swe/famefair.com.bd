import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Icon } from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/feather'

import ReviewForm from '../reviewForm/index'

const index = () => {
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!</p>
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
                                <div className="pl-3 w-100">
                                    <div className="name-review-section d-flex mb-2">
                                        <div>
                                            <h6>Abdullah al mamun</h6>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="d-flex">
                                                <div><small className="text-muted mr-2">Jun 14, 2021</small></div>
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