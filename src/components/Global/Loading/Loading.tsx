import React from 'react';
import './Loading.css'
const Loading:React.FC = () => {
    return (
        <div>
            <main className="main">
                <div className="preloader">
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                </div>
                <div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span
                    className="status__dot">.</span></div>
            </main>
        </div>
    );
};

export default Loading;