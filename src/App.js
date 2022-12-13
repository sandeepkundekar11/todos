import React, { useEffect, useState } from "react";
import TodoInput from "./components/addtodo";
import TodoList from "./components/todolist";
import Popup from "./components/popup";
const App = () => {
  function get_arr()
  {
    const data=localStorage.getItem("arr");
    if(data)
    {
      return JSON.parse(data)
    }
    else
    {
      return []
    }
  }
  const [note, setnote] = useState("")
  const [arr, setarr] = useState(get_arr())
 
  const[edit_data,setedit_data]=useState({
    data:"",
    index:0
  })
  const[pop,setpop]=useState(false)


  useEffect(()=>
  {
   localStorage.setItem("arr",JSON.stringify(arr))
  },[arr])
  function get(e) {
    setnote(e.target.value)  // get function is passed from addtodo component for geting the input value
  }
  function add() {    // adding inpute data in to the array arr hook
    if(note.length >=1)
    {
      setarr([...arr, note])
      setnote("")
    }
    else{
      alert("Todo can't be empty")
    }
    
  }

  function popup_check(data1,index1)
  {
    setedit_data({data:data1,index:index1})
    setpop(!pop)
  }
  function edit_fun(edited_data)
  {
    if(edited_data.length>=1)
    {
      const index=edit_data.index;
      const data=edit_data.data;
      arr.splice(index,1,edited_data);
      setarr([...arr])
      setpop(!pop)
    }
    else
    {
      alert("Fill something")
    }
    
  }
  function Delete_all()
  {
    setarr([])
  }
  console.log(arr)
  return (
    <>
      <TodoInput get={get} add={add} value={note} />
      {/* value is a prop  gote from addtodo component */}

      <TodoList Delete_All={()=>
      {
        Delete_all()
      }} arr1={arr} total={arr.length} delete_btn={(index) => {
        setarr(arr.filter((a, b) => {
          return b !== index;
        })
        )
      }} pop={popup_check} />

      {
        pop ? <Popup set={()=>
        {
          setpop(!pop)
        }} edit={(data)=>
        {
           
          edit_fun(data)
        }}/> : ""
      }
    </>
  )
};
export default App;
