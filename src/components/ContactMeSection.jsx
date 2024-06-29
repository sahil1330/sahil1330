import React from 'react'
import { useForm } from 'react-hook-form'
import './ContactMe.css'


const ContactMeSection = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <section className="contact p-[20px] max-lg:p-4">
                <div className='container mx-auto flex max-lg:flex-col items-center justify-around h-[80vh]'>
                    <div className='w-2/6 max-lg:w-full max-lg:text-center pl-6'>
                        <h1 className='text-blue-500 text-8xl font-bold contact-heading'>Get In <br />Touch</h1>
                        <p className='text-blue-500 text-3xl font-bold contact-heading py-2'>Currently looking for <br /> an internship or opportunity.</p>
                    </div>
                    <div className="contact-form w-5/6 lg:w-2/6">
                        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("name", { required: "The Name is required!" }, {min: "Required length is 2"} )} placeholder='Name' className='p-2 text-2xl text-blue-500 bg-transparent border-b-2 outline-none contact-heading border-blue-300 focus-within:border-b-2 focus-within:border-blue-500' />
                            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                            <input type="email" {...register("email", { required: "The Email is required!" })} placeholder='Email' className='p-2 text-2xl text-blue-500 bg-transparent border-b-2 outline-none contact-heading border-blue-300 focus-within:border-b-2 focus-within:border-blue-500' />
                            <textarea name="" {...register("message", { required: "The Message is required!" })} id="" cols="30" rows="3" placeholder='How can I Help?' className='p-2 text-2xl text-blue-500 bg-transparent border-b-2 outline-none contact-heading border-blue-300 focus-within:border-b-2 focus-within:border-blue-500'></textarea>
                            <button className='bg-blue-500 text-white p-2 rounded-md font-bold text-xl'>Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactMeSection
