import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";


function Footer() {
    return (
        <footer>
            <div>
            <img src='' className="my-2"  alt='Pic of me'></img>
            <h4>Contact me here!</h4>
            </div>
            <div className="" >
                <ul>
                    <div >
                        <a href="https://github.com/WesleyLere">
                            Github
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/wesley-lere-29b0b3245/">
                            Linkedin
                        </a>
                    </div>
                    <div>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                            Email
                        </a>
                    </div>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
