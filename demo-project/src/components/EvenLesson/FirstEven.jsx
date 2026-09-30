import "./style.css";
import { useState } from "react";
const FirstEven = () => {
    const [open, setOpen] = useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <main className={`d-flex justify-content-center align-items-center
                flex-column body-bg-modal ${open ? "active" : ""}`}
                style={{ height: "100vh" , width: "100%" }}
            >
                <div className={`modal-container bg-success p-5 Open_Modal 
                    ${open == true ? "active" : ""}`} style={{ borderRadius: "10px" }}>

                    <div className="d-flex justify-content-center mb-2">
                        <span className="text-white fs-5 fw-bold font-monospace">Open Modal</span>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-danger" onClick={handleCancel}>cancel</button>
                        <button className="btn btn-primary">save</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className={`btn btn-primary Open_Modal_btn ${open == true ? "active" : ""}`} onClick={handleOpenModal}>Open Modal</button>
                </div>
            </main>
        </>
    )
}

export default FirstEven