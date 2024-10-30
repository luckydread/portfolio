"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast} from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    
  const toastId = toast.loading('Sending your message, please wait...');

    emailjs
     .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000,
        }
      })
      .then(
        () => {
          toast.success('I have received your message and will get back to you soon!', {id: toastId});
        },
        (error) => {
          toast.error('There was an error when you message was being sent, please try again.', {id: toastId});
        },
      ); 
  };
  const onSubmit = data => {
    const templateParams = {
      from_name: data.name,
      to_name: 'mohamed',
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  }

  
  return (
    <>
    <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' type="text" placeholder="name" {...register("name", {required: 'This field is required!', minLength: {
        value: 3,
        message: 'This field required at least 3 characters long'
      }})} />{errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}
      <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' type="email" placeholder="email" {...register("email",  {required: 'This field is required!', minLength: {
        value: 3,
        message: 'This field must be a valid email'
      }})}/>{errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}
      <textarea placeholder='message' className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' {...register("message", {required:'This field is required!', minLength: {
        value: 50,
        message: 'This field required at least 50 characters long'
      }})} />{errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}

      <input value={"Cast your meassage"} className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none ocus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </form>
    </>
  );
}