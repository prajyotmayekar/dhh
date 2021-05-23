import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_section">
                {/* <div id="circular-logo">
                    logo to come here
                </div> */}
            </div>
            <div className="footer_section">
                <div className="footer_title">
                    Drive Holiday Homes
                </div>
                <div className="footer-left">
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Rules
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>
                            Blog
                        </li>
                        <li>
                            Career
                        </li>
                        <li>
                            Support
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_section">
                <div className="footer_title">
                    Settings
                </div>
                <div className="footer-left">
                    <ul>
                        <li>
                            English
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>
                            AED
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_section">
                <div className="footer_title">
                    Are you a landlord?
                </div>
                <div className="footer-center">
                    <button className="footerBtn">Host Guests</button>
                </div>
            </div>
            <div className="footer_section">
                <div className="footer-left">
                    <div className="footer_title">
                        Follow us
                    </div>

                    <ul className="social-links">
                        <li>
                            About
                        </li>
                        <li>
                            Rules
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="footer_title">
                        Contact us
                    </div>

                    <ul className="social-links">
                        <li>
                            About
                        </li>
                        <li>
                            Rules
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
            </div>
        
            <div id="footer-notation">
                <div id="right-reserved">Copyright © 1996-2018 Driven Holiday Homes™. All rights reserved.</div>

                <div id="terms-policies">
                    Terms & policies
                </div>
                <div id="made-with">
                    made with <b className="t-name">tentwenty*</b>
                </div>
            </div>
        </footer>
    )
}

export default Footer
