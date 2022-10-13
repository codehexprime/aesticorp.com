import React from 'react'
import { useState } from 'react'
import { Emailstyle } from '../styles/Container.styled';


export default function Emailbox() {
  const [email, setEmail] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()

    console.log(email)

  }; 
  return (
    <div>
      <Emailstyle />
      <form onSubmit=
      {sendEmail}>
       <input type="email" placeholder="your@email.com" 
       value={email} onChange={(e) => setEmail
        (e.target.value)} />
         <button typeof="submit" 
         >surrender thy email</button>
        </form>
      </div> 
  );
  }