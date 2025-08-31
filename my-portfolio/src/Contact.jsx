import React, { useState,useRef } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {
      const formRef = useRef();
    const [form,setForm] = useState({
        name:"",
        email:"",
        message:""
});

function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
};
function handleSubmit(event){
event.preventDefault();
emailjs.sendForm(
    'service_xaofgcj', 
    'template_zedawwi', 
    formRef.current,
    'D3lmKzykfulfYGiHH'
  )
  .then((result) => {
    console.log(result.text);
    alert("Message sent successfully!");
    setForm({name:"",mail:"",message:""})
  }, (error) => {
    console.log(error.text);
    alert("Oops, something went wrong.");
    setForm({name:"",email:"",message:""})
  });
//   event.target.reset()

}
  return (
    <>
    <div className='contact-list'>
    <h1>Contact</h1>
    <form ref={formRef} className='contact-input' onSubmit={handleSubmit}>
    <div className='contact-input'>
        <div className='input-flex'>
        <label htmlFor="name">Name</label>
        <input placeholder='bala' type="text" name='name'
        value={form.name}
        onChange={handleChange}
        
        />
        <label htmlFor="email">Email</label>
        <input placeholder='bala@gmail.com' type="email" name='email' 
           value={form.email}
        onChange={handleChange}
        
        />
        </div>
        <div className='textarea-flex'>
        <label htmlFor="message">Message</label>
        <textarea placeholder='hello,happy to connect with' name="message" id="" 
           value={form.message}
        onChange={handleChange}
        ></textarea>
        </div>
    </div>
    <div className='submit-div'>
    <button className='submit-button'>Submit</button>
    </div>
    </form>
    </div>
    </>
  )
}

export default Contact
