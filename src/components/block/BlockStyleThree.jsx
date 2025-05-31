import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleThree = () => {
    return (
        <Fragment>
            <div className="block-style-three mb-45">
                <h6 className="sub-title mb-20">About Us</h6>
                <h2 className="sect-title mb-15">
  We Build High-Impact Web Solutions — From eCommerce to AI-Powered Platforms
</h2>
<p>
  We specialize in crafting cutting-edge full-stack web applications, powerful eCommerce platforms, high-converting landing pages, and intelligent AI chatbot systems. Whether you're launching a business, managing operations, or scaling with a custom LMS or admin dashboard, our solutions are tailored to deliver performance, creativity, and scalability.
</p>

                <Link className="theme_btn mt-55" to="/about">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleThree