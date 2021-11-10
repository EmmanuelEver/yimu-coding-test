import React, { useState } from 'react'

const Feature = ({title, items}) => {
    const [idx, setIdx] = useState(0);

    const changeSlide = (action) => {
        switch (action) {
            case "NEXT":
                if(idx !== (items.length - 1)) {
                    setIdx((prevState) => prevState + 1);
                }
                else {
                    setIdx(0);
                }
                break;
        
            case "PREV":
                if(idx !== 0) {
                    setIdx((prevState) => prevState - 1);
                }
                else {
                    setIdx(items.length - 1);
                }
                break;
        }
    }

    return (
        <div className="feature">
            <ul className="feature__images">
                <button className="slider-control left" onClick={() => changeSlide("PREV")}>
                    <svg data-baseweb="icon" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M9 12a1 1 0 00.293.707l4 4a1 1 0 001.414-1.414L11.414 12l3.293-3.293a1 1 0 00-1.414-1.414l-4 4A1 1 0 009 12z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </button>
                <ul className="slider" style={{width: `${items.length * 100}%`, transform: `translateX(${-idx * (100 / items.length)}%)`}}>
                    {
                        items.map((item, index) => (
                            <li key={index} className="slide">
                                <img src={item.image} alt={item.label} />
                            </li>
                        ))
                    }
                </ul>
                <button className="slider-control right" onClick={() => changeSlide("NEXT")}>
                    <svg data-baseweb="icon" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M9.293 7.293a1 1 0 000 1.414L12.586 12l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </button>
            </ul>
            <div className="feature__content">
                <h3> {title} </h3>
                <div className="feature__content__labels">
                    {
                        items.map((item, index) => (
                            <button key={item.label} onClick={() => setIdx(index)} className={idx === index ? "active" : ""}>
                                {item.label}
                            </button>
                        ))
                    }
                </div>
                <p>
                    {items[idx].description}
                </p>
            </div>
        </div>
    )
}

export default Feature
