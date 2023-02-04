import React from "react";



function Nav({ currentTab, changeTab }) {

    return (
        <>
            <div>
                
                <div>
                    Wesley's Portfolio
                </div>
            </div>
            <nav className="sticky top-0 px-2 sm:px-4 py-2.5 bg-blue-400  flex-row md:h-auto md:w-auto items-stretch">
                <div className="nav-tabs container flex  flex-wrap items-center md-block  mx-auto">

                    <ul className="nav nav-tabs flex-row  justify-spacebetween  flex ">
                        <li className="nav-item m-5">
                            <a
                                href="#about"
                                onClick={() => changeTab('About')}
                                // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item m-5">
                            <a
                                href="#portfolio"
                                onClick={() => changeTab('Portfolio')}
                                // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                       
                        <li className="nav-item m-5">
                            <a
                                href="#resume"
                                onClick={() => changeTab('Resume')}
                                // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Nav;