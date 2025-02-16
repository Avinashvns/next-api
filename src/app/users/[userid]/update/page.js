
'use client'

import { useEffect, useState } from "react"

export default function UpdateUserDetails({ params }) {
    const inputStyle = {
        display: "block",
        margin: "10px",
        height: "40px",
        width: "300px"
    };
    const btn = {
        backgroundColor: "skyblue",
        color: "white",
        width: "300px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    }
    let id = params.userid
    console.log(id)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails = async()=>{
        let data = await fetch(`http://localhost:3000/api/users/`+id)
        data = await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateUserDetails = async ()=>{
        let result = await fetch("http://localhost:3000/api/users/" + id , {
            method : "PUT",
            body : JSON.stringify({name, age, email})
        })
        result= await result.json()
        console.log("Result Updated : " , result)
        if(result.success){
            alert("User details Update")
        }else{
            alert("Plz try with valid details")
        }
    }

    return (
        <>
            <h1>Update User Details</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" style={inputStyle} />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" style={inputStyle} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" style={inputStyle} />
            <button style={btn} onClick={updateUserDetails}>Add User</button>
        </>
    )
}