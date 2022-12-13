import React from "react";
import Todo from "./todo";
const TodoList = (props) => {
    return (
        <div className=" Todo_list">
            <h2 className="text-center ">TodoList</h2>
            <div className="btns d-flex ">
                <button className="btn btn-primary btn1 ">All ({props.total})</button>
                {/* <button className="btn btn-primary w-50 bnt2"> Completed</button> */}
            </div>
            <div className="list">
                {
                 props.arr1.map((data,index)=>
                 {
                    return(
                        <Todo  count={index+1} note={ data} delete={()=>
                        {
                            props.delete_btn(index)
                        }}popup={()=>
                        {
                          props.pop(data,index)   
                        }}/>
                    )
                 })
                }
            </div>
            <div className="w-100 d-flex">
            <button className="w-100 btn btn-danger" onClick={props.Delete_All}>Delete All ({props.total})</button>
            </div>
        </div>
    )
};
export default TodoList;