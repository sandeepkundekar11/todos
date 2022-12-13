import React from "react";
import { useState } from "react";
import { useRef } from "react";
const Popup = (prop) => {
    const [data, setdata] = useState("")
    const btn = useRef(null)
    return (
        <div className="popup_box" ref={btn}>
            <div className="pop_lable">
                <h5 className="pop1 text-center">Edit Popup</h5>
                <button onClick={() => {
                    btn.current.style.display = "none"
                    prop.set(data)
                }} className="pop2">X</button>
            </div>
            <input onChange={(e) => {
                setdata(e.target.value)
                prop.alldata(data)

            }} className=" pop_input mt-3" placeholder="Edit Todo" type="text" />
            <button className="btn btn-danger popup_btn" onClick={() => {
                prop.edit(data)
            }}>Replace</button>
        </div>
    )
};
export default Popup;