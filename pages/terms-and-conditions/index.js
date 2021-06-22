import Head from 'next/head'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const index = () => {
    return (
        <div>
            <Head>
                <title>Famefair || Terms & Conditions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />
            <main>

                <div className="container static-page py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header text-center bg-white border-0 p-4">
                                    <h5 className="mb-0">Terms & Conditions</h5>
                                </div>
                                <div className="card-body p-4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
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
                                        quasi aliquam eligendi, placeat qui corporis!
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
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
                                        quasi aliquam eligendi, placeat qui corporis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <GotoTop />
            </main>
        </div>
    );
};

export default index;