import React from 'react'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <div className='home-content'>
                <h1>xGameTracker</h1>
                <p>Organiza tu vida Gamer</p>
                <a href="/juegos" className='home-button'>Ver mis juegos</a>


            </div>


        </div>
    );
}