import React from 'react';

const Footer = () => {
    return (
        <footer className="p-2 bg-head">
            <div className="flex items-center justify-around font-DM font-medium">
                <div className="">
                    <p>&copy; 2024 EduVidwaan. All rights reserved.</p>
                </div>
                <div className="flex-center flex-row gap-5 max-md:hidden">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;