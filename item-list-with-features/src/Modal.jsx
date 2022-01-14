import React from "react";

const Modal = ({ title, message, onDismiss, onConfirm, show }) => {
    const dismiss = onDismiss
    return <div className={`modal has-text-left ${show ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <button className="modal-close is-large" aria-label="close" onClick={dismiss}></button>
            <section className="modal-card-body">
                <div className="mb-5">
                    <h1 className="is-size-2">{title}</h1>
                    {message}
                </div>
                <div className="is-flex is-justify-content-right">
                    <button className="button is-success mr-2" onClick={onConfirm}>Yes</button>
                    <button className="button" onClick={dismiss}>No</button>
                </div>

            </section>
        </div>
    </div>
}
export default Modal