// import React from 'react'
// import './Footer.css'

// function Footer() {
//     return (
//         <footer className="site-footer">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-12 col-md-6">
//                         <h6>About</h6>
//                         <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most .</p>
//                     </div>

//                     <div className="col-xs-6 col-md-3">
//                         <h6>Quick Links</h6>
//                         <ul className="footer-links">
//                             <li><a href="http://scanfcode.com/about/">About</a></li>
//                             <li><a href="http://scanfcode.com/contact/">Projects</a></li>
//                             <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Skills</a></li>
//                             <li><a href="http://scanfcode.com/privacy-policy/">Contact</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <hr />
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-8 col-sm-6 col-xs-12">
//                         <p className="copyright-text">
//                             Copyright &copy; 2023 All Rights Reserved by{" "}
//                             <a href="#">WOSMO</a>.
//                         </p>
//                     </div>

//                     <div className="col-md-4 col-sm-6 col-xs-12">
                        // <ul className="social-icons">
                        //     <li>
                        //         <a href="#">
                        //             <i className="fa-brands fa-instagram instagram"></i>
                        //         </a>
                        //     </li>
                        //     <li>
                        //         <a href="#">
                        //             <i className="fa-brands fa-whatsapp whatsapp"></i>
                        //         </a>
                        //     </li>
                        //     <li>
                        //         <a href="#">
                        //             <i className="fa-brands fa-twitter twitter"></i>
                        //         </a>
                        //     </li>
                        //     <li>
                        //         <a href="#">
                        //             <i className="fa-brands fa-github github"></i>
                        //         </a>
                        //     </li>
                        // </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>

//     )
// }

// export default Footer
import React from 'react'
// import './Footer.css'

function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-purple-400 text-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md">
                    <strong
                        className="block text-center text-xl font-bold text-blue-100 sm:text-3xl"
                    >
                        Want us to email you with the latest blockbuster news?
                    </strong>

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email"> Email </label>

                            <input
                                className="w-full rounded-full border-white-200  p-4 pe-32 text-sm font-medium bg-purple-900"
                                id="email"
                                type="email"
                                placeholder="m.wasifmalik17@gmail.com"
                            />

                            <button
                                className=" absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <p className="mt-4 text-center text-white-500 lg:text-left lg:text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
                            natus quod eveniet aut perferendis distinctio iusto repudiandae,
                            provident velit earum?
                        </p>

                        <ul className="social-icons  mt-6 flex justify-center gap-4 lg:justify-start">
                            <li>
                                <a href="#" className='text-white-700 transition hover:text-white-700/75'>
                                    <i className="fa-brands fa-instagram instagram"></i>
                                </a>
                            </li>
                            <li >
                                <a href="#" className='text-white-700 transition hover:text-white-700/75'>
                                    <i className="fa-brands fa-whatsapp whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-white-700 transition hover:text-white-700/75'>
                                    <i className="fa-brands fa-twitter twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-white-700 transition hover:text-white-700/75'>
                                    <i className="fa-brands fa-github github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        <div>
                            <strong className="font-medium text-white-900"> Services </strong>

                            <nav
                                aria-label="Footer Services Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    UX/UI
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Graphic Design
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    App Development
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Web Development
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong className="font-medium text-white-900"> About </strong>

                            <nav
                                aria-label="Footer About Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    About
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Careers
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    History
                                </a>
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Our Team
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong className="font-medium text-white-900"> Support </strong>

                            <nav
                                aria-label="Footer Support Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    FAQs
                                </a>

                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Contact
                                </a>

                                <a className="text-white-700 transition hover:text-white-700/75" href="/">
                                    Live Chat
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white-100 pt-8">
                    <p className="text-center text-xs/relaxed text-white-500">
                        © Company 2022. All rights reserved.

                        <br />

                        Created with
                        <a
                            href=""
                            className="text-white-700 underline transition hover:text-white-700/75"
                        >Laravel</a
                        >
                        and
                        <a
                            href=""
                            className="text-white-700 underline transition hover:text-white-700/75"
                        >Laravel Livewire</a
                        >.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer

















