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

    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });

    // const data = await res.json();

    // if (data.success) {
    //   toast.success('Message sent successfully!');
    //   setFormData({ name: "", email: "", message: "" });
    // } else {
    //   toast.error('Failed to send message. Try again later.');
    // }
  };

  return (
    <div id="contact" className="h-screen py-20 px-96">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-center gap-x-20 lg:gap-x-0 lg:gap-y-20">
        <motion.div initial={{opacity:0,y:150}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} >
          <Image src="/contact.gif" alt="Contact Image" width={400} height={400} className="w-[400px]" />
        </motion.div>
       
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity:0,x:150}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}} viewport={{once:true}}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3 lg:gap-y-3"
        >
          <div className="w-full flex lg:flex-col gap-3 lg:gap-y-3">
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
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write me"
            required
          />
          <input
            type="submit"
            className="w-full border border-yellow-500 bg-yellow-600 rounded-md px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
