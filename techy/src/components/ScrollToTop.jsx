import React, {Fragment, useEffect, useState} from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page Behavior: smooth
    // keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Fragment>
            {isVisible && (
                <button className="scroll-top" onClick={scrollToTop}>
                    <i className="fas fa-chevron-double-up"></i>
                </button>
            )}
        </Fragment>
    );
}