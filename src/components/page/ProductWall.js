import React, { useReducer } from 'react';
import Modal from '../ui/Modal';
import useClickOutside from '../../hooks/useClickOutside';
import walls from "../../data/wall"

const reducer = (state, {type, payload}) => {
    console.log(type, payload)
    switch (type) {
        case "SET_SIDE":
            return {...state, side: payload.side, show: payload.show}
        case "SET_TYPE":
            return {...state, type: payload.type}
        case "SET_COLOR":
            return {...state, color: payload.color}
        case "SET_SHOW":
            return {...state, show: payload.show}
    }

    return state;
}

const initialState = {
    side: null,
    type: null,
    color: "WH",
    show: false

}

const ProductWall = ({color,size,frame, imageUrl}) => {
    const [wallState, dispatch] = useReducer(reducer, initialState);
    const wallCustomizerRef =  useClickOutside(() => dispatch({type: "SET_SHOW", payload: {show: false}}));

    
    return (
        <>
            <div className="productWall">
                <div className="productWall__actions">
                    <div className="productWall__actions__action">
                        <div>
                            <img src="https://westshade.com/images/icon/icon-wall-left.png" alt=""/>
                            <div>
                                <h6>None</h6>
                                <p>left</p>
                            </div>
                        </div>
                        <button onClick={() => dispatch({type: "SET_SIDE", payload:{show: true, side: "A"}})}>
                            Edit
                        </button>
                    </div>
                    <div className="productWall__actions__action">
                        <div>
                            <img src="https://westshade.com/images/icon/icon-wall-right.png" alt=""/>
                            <div>
                                <h6>None</h6>
                                <p>Right</p>
                            </div>
                        </div>
                        <button onClick={() => dispatch({type: "SET_SIDE", payload:{show: true, side: "C"}})}>
                            Edit
                        </button>
                    </div>
                    <div className="productWall__actions__action">
                        <div>
                            <img src="https://westshade.com/images/icon/icon-wall-front.png" alt=""/>
                            <div>
                                <h6>None</h6>
                                <p>Front</p>
                            </div>
                        </div>
                        <button onClick={() => dispatch({type: "SET_SIDE", payload:{show: true, side: "D"}})}>
                            Edit
                        </button>
                    </div>
                    <div className="productWall__actions__action">
                        <div>
                            <img src="https://westshade.com/images/icon/icon-wall-back.png" alt=""/>
                            <div>
                                <h6>None</h6>
                                <p>Back</p>
                            </div>
                        </div>
                        <button onClick={() => dispatch({type: "SET_SIDE", payload:{show: true, side: "B"}})}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>

            {
                wallState.show && 
                <Modal ref={wallCustomizerRef} closeHandler={() => dispatch({type: "SET_SHOW", payload: {show: false}})}>
                    <div className="wallCustomizer">
                        <div className="wallCustomizer__image">
                            <div className="wallCustomizer__image__wrapper">
                                <img src={`${imageUrl}/${frame}-${size}-${color}.png`}/>
                                <img src={`${imageUrl.replace('frame', "")}wall/${frame}-${wallState.type}${size.split('X')[1]}${wallState.color}-${wallState.side}.png`} alt=""/>
                                {
                                    wallState.type && <> </>
                                }
                            </div>
                        </div>
                        <div className="wallCustomizer__options">
                            
                            <div className="wallCustomizer__options__type">
                                <h3>Wall Type</h3>
                                <div className="wallCustomizer__options__type_cards">
                                    {
                                        walls.types.map((type) => (
                                            <div key={type.code} className={`wallCustomizer__options__type_cards__card ${wallState.type === type.code ? "active" : ""}`} onClick={() => dispatch({type: "SET_TYPE", payload: {type: type.code}})}>
                                                <img src={type.image} alt="" />
                                                <p>{type.label}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="wallCustomizer__options__colors">
                                <h3>Color</h3>
                                <ul>
                                    {
                                        walls.colors.map((color) => (
                                            <li key={color.code} onClick={() => dispatch({type:"SET_COLOR", payload: {color: color.code}})} style={{background: color.label}} className={`${wallState.color === color.code? "active": ""}`}>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}

export default ProductWall
