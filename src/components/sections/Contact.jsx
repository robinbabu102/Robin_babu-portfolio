import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        message:"",

    })

    const handleSubmit =(e)=>{
        e.preventDefault()

        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY)
        .then((result)=>{
            alert("Message Sent")
            setformdata({name:"",email:"",message:""})
        })
        .catch(()=>alert("Oops! Something went wrong.Please try again."))
    }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
          text-transparent text-center"
          >
            Get in Touch
          </h2>
          <form className="form-y-6" onSubmit={handleSubmit}>
            <div className="relative mb-2">
              <input
                type="text"
                id="name"
                name="name"
                value={formdata.name}
                required
                className="w-full bg-white/5 border 
                        border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
                onChange={(e)=>setformdata({...formdata,name: e.target.value})}
              />
            </div>
            <div className="relative mb-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                required
                className="w-full bg-white/5 border 
                        border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e)=>setformdata({...formdata,email: e.target.value})}

              />
            </div>
            <div className="relative mb-2">
              <textarea
                id="message"
                name="message"
                value={formdata.message}
                required
                rows={5}
                className="w-full bg-white/5 border 
                        border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e)=>setformdata({...formdata,message: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition
             relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4">Send Message</button>
          </form>
          <div className="mt-6 flex justify-center space-x-8 text-3xl">
            <a href="https://github.com/robinbabu102" target="_blank" rel="noopener noreferrer" className="text-blue-400  hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/1-robin-babu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:robinbabu2000@gmail.com" className="text-blue-400 hover:text-blue-500 transition">
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-6 ml-20 text-gray-400">
            Open for new opportunities and technical challenges
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
