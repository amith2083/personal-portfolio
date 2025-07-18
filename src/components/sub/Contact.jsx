'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.promise(
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).then(res => res.json()),
      {
        loading: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Try again later.',
      }
    ).then(data => {
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    });
  };

  return (
    <div id="contact" className="min-h-screen py-10 px-4 sm:px-6 lg:px-20 flex flex-col items-center ml-[100px] ">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 mb-6">Get in Touch</h1>
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
        <motion.div 
          initial={{opacity:0, y:150}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.5}} 
          viewport={{once:true}}
          className="w-full max-w-xs sm:max-w-sm"
        >
         <Image 
  src="/contact.gif" 
  alt="Contact Image" 
  width={300} 
  height={300} 
  className="w-full max-w-xs sm:max-w-sm object-contain"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity:0, x:150}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5}} 
          viewport={{once:true}}
          className="w-full max-w-lg flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px] max-h-[200px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write me"
            required
          />
          <input
            type="submit"
            className="w-full border border-yellow-500 bg-yellow-600 rounded-md px-4 py-2 text-sm font-light tracking-wider text-white hover:bg-yellow-500 transition-colors cursor-pointer"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;