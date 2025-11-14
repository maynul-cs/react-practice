import React, { useRef, useState } from 'react'

const SubmitForm = () => {
      const nameRef = useRef(null);
      const emailRef = useRef(null);
      const passRef = useRef(null);
      const [error, setError] = useState("");
    
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(passRef.current.value.length < 6){
            setError("Password must be at least 6 characters long.");
        }
        else{
            setError("");

            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passRef.current.value);
        }     
    }
   
  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <input ref={nameRef} type="text" name="text" placeholder='Name' required /> <br />
            <input ref={emailRef} type="email" name="email" placeholder='Email' required /> <br />
            <input ref={passRef} type="password" name="password" placeholder='Password' required /> <br />

            <small> {error} </small> <br />

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SubmitForm;