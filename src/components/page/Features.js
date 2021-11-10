import React from 'react';
import features from '../../data/features'
import Feature from './Feature';

const Features = () => {
    return (
        <div className="features">
            {
                features.map(({title, items}) => (
                    <Feature key={title} title={title} items={items}/>
                ))
            }
        </div>
    )
}

export default Features
