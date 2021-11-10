import React from 'react'
import frames from "../../../data/productFrames"

const ProductFrames = () => {
    return (
        <div className="productFrames">
            <div className="productFrames__name">
                {
                    frames.map((frame) => (
                        <div key={frame.title} className="productFrames__name__item">
                            <h3>{frame.title}</h3>
                            <button>Learn more</button>
                        </div>
                    ))
                }
            </div>
            <div className="productFrames__specs">
                {
                    frames.map((frame, index) => (
                        <div key={index} className="productFrames__specs__item">
                            <strong>{frame.frame}</strong>
                            <label>Frame</label>
                            <strong>{frame.thickness}</strong>
                            <label>Pole thickness</label>
                            <strong>{frame.diameter}</strong>
                            <label>Pole diameter</label>
                            <strong>{frame.warranty}</strong>
                            <label>Frame warranty</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductFrames
