import React from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'

const Main = () => {
    return (
        <>
            <Navbar />

            <div className="main-container">

                <div className="left-section">

                    <h1>Your feet deserve the best</h1>

                    <p>Just Do It or JDI for short is a trademark of shoe company Nike. The tagline was coined in 1988 at an advertising agency meeting.</p>

                    <div className="buttons-container">

                        <button className='shop-btn'>Shop Now</button>
                        <button className='category-btn'>Category</button>

                    </div>

                    <div className="shopping-icons">

                        <span>Also availabe on</span>

                        <div className="ecom-icons">

                            <img src="/images/flipkart.png" alt="" />
                            <img src="/images/amazon.png" alt="" />

                        </div>

                    </div>

                </div>

                <div className="right-section">
                    <img src="/images/shoe_image.png" alt="" />
                </div>

            </div>


        </>
    )
}

export default Main
