'use client'
import { useState } from "react";


export default function AddUser(){
    const inputStyle = { 
        display: "block", 
        margin: "10px", 
        height: "40px", 
        width: "300px" 
    };
    const btn = {
        backgroundColor : "skyblue",
        color: "white",
        width: "300px",
        padding: "10px",
        borderRadius : "5px",
        cursor : "pointer"
    }
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")

    const addUserFun=async()=>{
        console.log("Console : " ,name,age,email);
        let responce = await fetch("http://localhost:3000/api/users" ,{
            method : "POST",
            body: JSON.stringify({name,age,email})
        })
        let data = await responce.json()
        console.log("All Data :" , data)
        if(data.success){
            alert("New User Created")
        }else{
            alert("Some Field check")
        }
    }

    return(
        <>
            <h1>Add New user</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" style={inputStyle} />
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter age" style={inputStyle}/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" style={inputStyle} />
            <button style={btn} onClick={addUserFun}>Add User</button>
        </>
    )
}