import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import axios, { AxiosError, AxiosHeaders } from 'axios';
import toast from 'react-hot-toast';
import subhapdf from '../../public/subha.pdf'; 

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_xndyeiy";
    const templateId = "template_ykddb3l";
    const PublicKey = 'wEtqmE0iAFAnkTbEx' ;

    // creat an object with emailjs service id, template id, PublicKey, and templateParams

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: PublicKey,
      template_params: {
        from_name: name,
        from_email:email,
        to_name:"Subhankar maji ",
        massage:massage,
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      toast.success("your massage has been sent")
      setName('');
      setEmail('');
      setMassage('');
    } catch (error) {
      console.log(error);
      toast.error('somthing went wrong')
    }
   };

  return (
    <div name='Contact' className='py-16 pt-20 mx-20'>
              <div className='flex flex-col items-center mb-12'>
                <h1 className='mt-8 mb-2 text-center text-[30px] font-[500]'>Contact Me</h1>
                <div className='h-1 w-28 bg-green-500'></div>
              </div>
      <div className='md:flex ' >
      <div className='basis-[45%]'>
        <p className='flex flex-row items-center my-2'><MdEmail size={20} className='mr-2' /> mrsubhankar25@gmail.com </p>
        <span className='flex flex-row items-center my-2'> <FiPhone size={20} className='mr-2' />8116991430</span>
        <p className='flex flex-row items-center'> <CiLocationOn size={20} className='mr-2' />brindabanck, panskura, <br /> purba Medinipur, west-bangle, 781641</p>
      <div className='flex mt-10  '>
        <span><a href="https://www.facebook.com/subhankar.maji.7330?mibextid=ZbWKwL" target='blank'><FaFacebook size={24} className='hover:bg-green-500 ml-4 translate-y-[-5px] transition-[0.5s]'/></a></span>
        <span><a href="https://github.com/25subha" target='blank'><FaGithub size={24} className='hover:bg-green-500 ml-4 translate-y-[-5px] transition-[0.5s]' /> </a></span>
        <span><a href="https://www.linkedin.com/in/subhankar-maji-656120305" target='blank'></a><IoLogoLinkedin size={24} className='hover:bg-green-500 ml-4 translate-y-[-5px] transition-[0.5s] cursor-pointer'/></span>
      </div >
        <div className='my-6 p-4'>
        <a className=' p-1 rounded-md bg-gradient-to-r from-green-900 to-green-500' href={subhapdf} download>Downlod Cv</a>
        </div>
      </div>

      <div className='basis-[50%]'>
      <form className='w-full' onSubmit={handleSubmit} >
          <input type="text" name='your name' placeholder=' your name' required  className='w-full border-0 rounded-[6px] outline-none bg-[#262626] p-[14px] my-4 text-[#fff]'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          <input type="email" name='your email' placeholder=' your email' required className='w-full border-0 rounded-[6px] outline-none bg-[#262626] p-[14px] my-4 text-[#fff]' 
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="your Massage" id="your massage" rows="6"  placeholder='your Massage' className='w-full border-0 rounded-[6px] outline-none bg-[#262626] p-[14px] my-4 text-[#fff]'
           value={massage}
           onChange={(e) => setMassage(e.target.value)}
           ></textarea>
          <button type='submit' className='bg-green-500 p-[5px] rounded-[6px] translate-y-[-5px] hover:bg-green-700 transition-[5s]                                                   xt-white hoberbg-green-800 '>submit</button>
        </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;