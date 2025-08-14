// components/sub/Contact.js
'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import Heading from "./Heading";

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
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-20 flex flex-col items-center md:ml-[100px] bg-white dark:bg-gray-800 rounded-t-3xl shadow-inner">
      <Heading text="Get in Touch" />
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{opacity:0, scale:0.8}} 
          whileInView={{opacity:1, scale:1}} 
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="relative w-full max-w-md"
        >
          <Image 
            src="/contact.gif" 
            alt="Contact Image" 
            width={500} 
            height={500} 
            className="rounded-3xl shadow-2xl hover:rotate-3 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity:0, x:100}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.8}} 
          viewport={{once:true}}
          className="w-full max-w-lg flex flex-col gap-6 bg-gradient-to-br from-yellow-100 to-red-100 dark:from-gray-700 dark:to-gray-900 p-8 rounded-3xl shadow-2xl"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-yellow-400 dark:border-yellow-300 rounded-xl bg-transparent px-6 py-3 text-gray-800 dark:text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-yellow-400 dark:border-yellow-300 rounded-xl bg-transparent px-6 py-3 text-gray-800 dark:text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[150px] border border-yellow-400 dark:border-yellow-300 rounded-xl bg-transparent px-6 py-3 text-gray-800 dark:text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;