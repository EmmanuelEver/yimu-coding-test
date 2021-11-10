import React from 'react'

const Modal = React.forwardRef(({children, closeHandler},ref) => {
    return (
        <>
            <div ref={ref} className="modal-overlay">
            </div>
            <div className="modal-wrapper">
            <div className="modal">
                <button onClick={closeHandler}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    stroke="currentcolor"
                    viewBox="0 0 10 10"
                    >
                    <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M9 1L5 5M1 9l4-4m0 0L1 1m4 4l4 4"
                    ></path>
                    </svg>
                </button>
                <div className="modal__content">
                    {children}
                </div>
            </div>
            </div>
        </>
    )
})

export default Modal
