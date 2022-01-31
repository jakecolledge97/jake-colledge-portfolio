import React, {useState} from "react";

const Contact = () => {
    const [inputName, setInputName] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputName||!inputMessage){
            console.log("please fill out fields")
        }else{
            console.log('details subbmitted')
        }
    }

    const handleChange = (e) => {
        if(e.target.name === 'message'){
            setInputMessage(e.target.value)
        }else if(e.target.name === 'email'){
            setInputEmail(e.target.value)
        }else{
            setInputName(e.target.value)
        }
    };

    return (  
        <form className="contact" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={inputName} onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={inputEmail} onChange={handleChange}/>
            <label htmlFor="message">Message</label>
            <textarea type="textarea" id="message" name="message" value={inputMessage} onChange={handleChange}/>
            <button className="submit">Submit</button>
        </form>
    );
}
 
export default Contact;