import React, { useState } from 'react';
import frameAnatomy from "../../data/frameAnatomy";

const reducer = (state,{ type, payload}) => {
    switch (type) {
        case "SET_SHOW":
            
            break;
    
        default:
            break;
    }
}

const FrameAnatomy = () => {
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [show, setShow] = useState({show:false, data: {}});

    const showHandler = (type) => {
        setShow({show: true, data: frameAnatomy[type]});
    }

    return (
        <div className="frameAnatomy">
            <h2>The anatomy of frame</h2>
            <div className="frameAnatomy__image">
                <img src="https://westshade.com/images/product/canopy-tent/anatomy-y7.png" alt=""/>
                <div className="frameAnatomy__image__point" onClick={() => showHandler("tcc")}></div>
                <div className="frameAnatomy__image__point" onClick={() => showHandler("hac")}></div>
                <div className="frameAnatomy__image__point" onClick={() => showHandler("lgp")}></div>
                <div className="frameAnatomy__image__point" onClick={() => showHandler("ftp")}></div>
                <div className="frameAnatomy__image__point" onClick={() => showHandler("trb")}></div>
            </div>
            {
                show.show &&
                <div className="frameAnatomy__overlay">
                    <img src={show.data.image} alt=""/>
                    <h3>{show.data.title}</h3>
                    <p>{show.data.description}</p>
                    <button onClick={() => setShow({show:false, data: {}})}>
                        <svg className="ci i5 i6 cg ch" data-baseweb="icon" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M7.293 7.293a1 1 0 011.414 0L12 10.586l3.293-3.293a1 1 0 111.414 1.414L13.414 12l3.293 3.293a1 1 0 01-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 12 7.293 8.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default FrameAnatomy
