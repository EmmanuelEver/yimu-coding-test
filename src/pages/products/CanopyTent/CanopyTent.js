import React from 'react'
import Features from '../../../components/page/Features'
import FrameAnatomy from '../../../components/page/FrameAnatomy'
import Product from '../../../components/page/Product'

const CanopyTent = () => {
    return (
        <div className="canopyTent-wrapper">
            <Product />
            <FrameAnatomy />
            <Features />
        </div>
    )
}

export default CanopyTent
