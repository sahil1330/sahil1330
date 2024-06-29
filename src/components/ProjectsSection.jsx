import React from 'react'

const ProjectsSection = () => {
  return (
    <>
      <section className="projects w-full h-[100vh] max-lg:h-[220vh]">
        <h1 className='text-white text-center text-4xl font-bold'>Projects</h1>
        <div className="cards grid lg:grid-cols-3 mx-auto w-11/12">
          <div className="card ">
            <img className='rounded-xl' src="imgs/blogapp.png" alt="" />
            <p className='text-white py-2'>Made a blog website using React and appwrite backend with adding, updating and deleting post. </p>
          </div>
          <div className="card">
            <img className='rounded-xl' src="imgs/spotifyclone.png" alt="" />
            <p className='text-white py-2'>Made a spotify clone to get rid out of ads and listen to songs without any problem. </p>

          </div>
          <div className="card">
            <img className='rounded-xl' src="imgs/password.png" alt="" />
            <p className='text-white py-2'>Made my personal password manager with React and Express Backend with MongoDB to store the passwords.</p>
          </div>
        </div>
        <div className="cards grid lg:grid-cols-3 mx-auto w-11/12">
          <div className="card">
            <img className='rounded-xl' src="imgs/geminiApp.png" alt="" />
            <p className='text-white py-2'>Made a Gemini App using Gemini Api which can chat and have the functionality of image, pdf and invoice uploading and give the response according to the question. </p>
          </div>
          <div className="card">
            <img className='rounded-xl' src="imgs/atm.png" alt="" />
            <p className='text-white py-2'>Made an ATM management system with Java using Swing with functionalities of deposit, withdrawal, mini-statement, etc.</p>
          </div>
          <div className="card">
            <img className='rounded-xl' src="imgs/vigyanmela.png" alt="" />
            <p className='text-white py-2'>Made a website for our college fest Vigyan Mela 2023 with functionalities for login and register for ticket and even see it in their account.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
