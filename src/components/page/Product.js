import React, { useReducer, useState } from 'react'
import {Link} from 'react-router-dom';
import Modal from '../ui/Modal';
import productOptions from "../../data/productOptions"
import useClickOutside from '../../hooks/useClickOutside';
import ProductWall from './ProductWall';
import ProductFrames from './ProductFrames';
import SizeGuide from './SizeGuide';

const reducer = (state, {type, payload}) => {
    console.log({type, payload})
    switch (type) {
        case "SET_COLOR":
            return {...state, color: payload.color}
            
        case "SET_FRAME":
            return {...state, frame: payload.frame, sizes: payload.sizes, size: "10X20", baseUrl: payload.baseUrl}

        case "SET_SIZE":
            return {...state, size: payload.size}

        default:
            return state;
    }
}
const initialState = {
    sizes: productOptions.sizes.y7,
    size: productOptions.sizes.y7[0].code,
    color: "WH",
    frame: "Y7",
    baseUrl: "https://westshade.com/images/product/y7-heavy-duty-canopy-tent/frame"
}

const Product = () => {
    const [imageState, dispatch] = useReducer(reducer, initialState)
    const [addWall, setAddWall] = useState(false);
    const [mediaType, setMediaType] = useState("PHOTO");
    const [compareFrames, setCompareFrames] = useState(false);
    const [sizeGuide, setsizeGuide] = useState(false);
    const frameModalRef = useClickOutside(() => setCompareFrames(false));
    const sizeGuideModalRef = useClickOutside(() => setsizeGuide(false));


    return (
        <div className="product">
            <div className="product__image">
                <div className="product__image__container">
                    {
                        mediaType === "PHOTO" && <img src={`${imageState.baseUrl}/${imageState.frame}-${imageState.size}-${imageState.color}.png`} alt="tent" />
                    }
                    {
                        mediaType === "VIDEO" && <> </>
                    }
                    {
                        mediaType === "3D" && <> </>
                    }
                </div>
                <div className="product__image__type">
                    <button onClick={() => setMediaType("PHOTO")} className={mediaType === "PHOTO"? "active": ""}>Photo</button>
                    <button onClick={() => setMediaType("VIDEO")} className={mediaType === "VIDEO"? "active": ""}>Video</button>
                    <button onClick={() => setMediaType("3D")} className={mediaType === "3D"? "active": ""}>3D</button>
                </div>
            </div>
            <div className="product__options">
                <h1>Canopy Tent</h1>
                <div className="product__options__spec">
                    <Link to="/spec">
                        Spec
                    </Link>
                </div>

                <div className="product__options__type">
                    <button onClick={() => setAddWall(false)}>
                        Basic
                    </button>
                    <button onClick={() => setAddWall(true)}>
                        +Wall
                    </button>
                    <div style={{left: `${addWall ? "75%" : "25%"}`}}>

                    </div>
                </div>
                {
                    !addWall ? 
                    <>
                        <div className="product__options__sizes">
                            <h4>Size</h4>

                            <ul>
                                {
                                    imageState.sizes.map((size) => (
                                        <li key={size.label} onClick={() => dispatch({type:"SET_SIZE", payload: {size: size.code}})} className={`${imageState.size === size.code? "active": ""}`}>
                                            {size.label}
                                        </li>
                                    ))
                                }
                            </ul>
                            <button onClick={() => setsizeGuide(true)}>
                                Size Guide
                            </button>

                            {
                                sizeGuide && 
                                <Modal ref={sizeGuideModalRef} closeHandler={() => setsizeGuide(false)}>
                                    <SizeGuide/>
                                </Modal>
                            }
                        </div>
                        <div className="product__options__frames">
                            <h4>Frame</h4>
                            <ul>
                                {
                                    productOptions.frames.map((frame) => (
                                        <li key={frame.label} onClick={() => dispatch({type:"SET_FRAME", payload: {frame: frame.code, baseUrl: frame.baseUrl, sizes: productOptions.sizes[frame.code.toLowerCase()]}})} className={`${imageState.frame === frame.code? "active": ""}`}>
                                            {frame.label}
                                        </li>
                                    ))
                                }
                            </ul>
                            <button onClick={() => setCompareFrames(true)}>
                                Compare Frames
                            </button>
                            {
                                compareFrames &&
                                <Modal ref={frameModalRef} closeHandler={() => setCompareFrames(false)}>
                                    <ProductFrames/>
                                </Modal>
                            }
                        </div>
                        <div className="product__options__colors">
                            <h4>Color</h4>
                            <ul>
                                {
                                    productOptions.colors.map((color) => (
                                        <li key={color.label} onClick={() => dispatch({type:"SET_COLOR", payload: {color: color.code}})} style={{background: color.label}} className={`${imageState.color === color.code? "active": ""}`}>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> 
                    </>
                    :
                    <ProductWall imageUrl={imageState.baseUrl} color={imageState.color} size={imageState.size} frame={imageState.frame}/>
                }
            </div>
        </div>
    )
}

export default Product
