import React from 'react';
import './News.css';

const News = () => { 
    return (
        <div>
            <section className="news-ticker">
                <div><h5>NEWS</h5></div>
                <span className="news-content">
                        <div><span>TSC beats HSC in an exciting match.</span></div>
                        <div><span>TurkuClub beats TSC in a thrilling day night match.</span></div>
                        <div><span>Vaasa Club is going to host 2020 summer league.</span></div>
                        <div><span>JSC beats TSC in an exciting match.</span></div>
                </span>
            </section>
        </div>
    );
}

export default News;