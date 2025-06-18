import { useState } from "react";

export default function Display(){
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    function handleShow(){
        event.preventDefault();
        console.log(`UserName ${userName}`)
        console.log(`UserEmail ${email}`)
        setUserName("")
        setEmail("")
    }
    
    return(
        <>
        <form  onSubmit={handleShow}>
            <label htmlFor="username">UserName</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)}  name="username" value={userName} className="form-control" placeholder="Enter user name" />
             <label htmlFor="email">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" value={email} className="form-control" placeholder="Enter user email" />
            <button type="submit" className="md-primary">Submit</button>
        </form>
        </>
    )
}