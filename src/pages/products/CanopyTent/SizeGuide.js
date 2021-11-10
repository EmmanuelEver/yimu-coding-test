import React from 'react'
import sizeGuide from "../../../data/sizeGuide"

const SizeGuide = () => {
    console.log(sizeGuide.labels[0].image)
    return (
        <div className="sizeGuide">
            <div className="sizeGuide__header">
                Size Guide
            </div>
            <div className="sizeGuide__labels">
                <div className="sizeGuide__labels__cell empty">

                </div>
                {
                    sizeGuide.labels.map((label) => (
                        <div className="sizeGuide__labels__cell" key={label.text}>
                            <img src={label.image}  alt="tent"/>
                            <label>{label.text}</label>
                        </div>
                    ))
                }
            </div>
            <div className="sizeGuide__datas">
                {
                    sizeGuide.sizes.map((size, index) => (
                        <div className="sizeGuide__datas__row"  key={index}>
                            <div className="sizeGuide__datas__row__cell head">
                                <h3>{size.name}</h3>
                                <p>{size.clearanceHeight}</p>
                                <p>{size.overallheight}</p>
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size1 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size2 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size3 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size4 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size5 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size6 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size7 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                            <div className="sizeGuide__datas__row__cell">
                                {
                                    size.size8 ? 
                                        <img src="https://westshade.com/images/umbrella/related.png"/>
                                        :
                                        <img src="https://westshade.com/images/umbrella/unrelated.png" />
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SizeGuide
