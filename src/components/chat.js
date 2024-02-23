import { useEffect, useState } from "react"
import {addDoc, collection, serverTimestamp ,onSnapshot,query,where} from 'firebase/firestore'
import { auth, db } from "../firebase-config"
export const Chat =(props) =>{
    const {room}=props;
    const [newmessage, setNewmessage] = useState("")
    const messageRef =collection(db,"messages")
    const [messages, setMessages] = useState([])
         useEffect(()=>{
            const queryMessages=query(messageRef,where("room","==",room))
            onSnapshot(queryMessages,(Snapshot)=>{
                let messages=[];
                Snapshot.forEach((doc)=>{
                messages.push({...doc.data(),id:doc.id})
                })
                setMessages(messages)

            console.log("New Message")
            })
         },[])

    const handleSubmit =async(e) =>{
        e.preventDefault()
        // console.log(newmessage);
        if(newmessage==="") return;
        await addDoc(messageRef,{
            text:newmessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            room,
        });
        setNewmessage("")
    }
    return (<div className="chat-app"> 
    <form onSubmit={handleSubmit} className="new-message-form">
    <div> {messages.map((message)=> <h1>{message.text}</h1> )}</div>
        <input className="new-message-input" placeholder="Type Your Message Here..."
        onChange={(e)=>
setNewmessage(e.target.value)}
value={newmessage}
        />
<button className="send-btn" type="submit" >Send</button>
    </form>
    </div>
    )
}