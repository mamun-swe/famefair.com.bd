import Head from 'next/head'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const index = () => {
    return (
        <div>
            <Head>
                <title>Famefair || FAQs</title>
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
                                    <h5 className="mb-0">FAQs</h5>
                                </div>
                                <div className="card-body p-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ?</p>
                                    <ol>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                    </ol>

                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ?</p>
                                    <ol>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                    </ol>

                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ?</p>
                                    <ol>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                    </ol>

                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ?</p>
                                    <ol>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                    </ol>

                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ?</p>
                                    <ol>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                    </ol>
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