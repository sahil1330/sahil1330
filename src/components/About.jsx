import React from 'react'
import './About.css'
import phpSvg from '../svgs/php.svg'
import htmlSvg from '../svgs/html.svg'
import cssSvg from '../svgs/css.svg'
import jsSvg from '../svgs/javascript.svg'
import mysqlSvg from '../svgs/mysql.svg'
import mongodbSvg from '../svgs/mongodb.svg'
import expressSvg from '../svgs/express.svg'
import reactSvg from '../svgs/react.svg'
import nodeSvg from '../svgs/node.svg'
import nextSvg from '../svgs/next.svg'
import gitSvg from '../svgs/git.svg'
import pythonSvg from '../svgs/python.svg'

const About = () => {
    return (
        <>
            <section id='AboutSection' className='secondSection h-[180vh] max-lg:h-[290vh] p-[20px] max-lg:p-4'>
                <div className="container mx-auto w-full lg:w-5/6">
                    <h1 className='text-4xl text-white font-bold'>About me</h1>
                    <div className='flex gap-4'>
                        <div className='w-[6%] bg-[blueviolet] h-[2px] my-7'>
                        </div>
                        <div className="myinfo w-[80%] text-white text-lg my-4">
                            <p>Passionate Web Developer proficient in HTML, CSS, JavaScript, and PHP, seasoned in crafting dynamic and interactive web experiences. Well-versed in Node.js, React.js, Express.js, and Next.js, with an insatiable curiosity driving continuous learning and innovation. Thrives on solving complex challenges and dedicated to staying at the forefront of emerging technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="skills p-[60px] max-lg:p-0">
                    <div className="container mx-auto w-5/6 max-lg:w-full">
                        <h1 className='text-4xl text-white text-center font-bold'>My Skills</h1>
                        <div className='flex max-lg:flex-col gap-[20px]'>
                            <div className="boxes flex  gap-[20px] justify-center my-10">
                                <div className="box ">
                                    <img src={phpSvg} height="60px" width={250} alt="" className='my-4' />
                                    <p className='text-white text-xl'>PHP</p>
                                </div>
                                <div className="box  ">
                                    <div className='flex gap-4'>
                                        <img src={htmlSvg} height="40px" width={90} alt="" className='my-4' />

                                    </div>
                                    <p className='text-white text-xl'>HTML & CSS</p>
                                </div>
                            </div>
                            <div className="boxes flex  gap-[20px] justify-center my-10">
                                <div className="box gap-3">
                                    <img src={jsSvg} height="40px" width={120} alt="" className='my-1' />
                                    <p className='text-white text-xl'>JavaScript</p>
                                </div>
                                <div className="box ">
                                    <img src={mysqlSvg} height="60px" width={120} alt="" className='my-2' />
                                    <p className='text-white text-xl'>MySQL</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex  max-lg:flex-col gap-[20px]'>
                            <div className="boxes flex  gap-[20px] justify-center my-10">
                                <div className="box  ">
                                    <div className='flex gap-4'>
                                        <img src={mongodbSvg} height="60px" width={130} alt="" className='my-1' />
                                    </div>
                                    <p className='text-white text-xl'>MongoDB</p>
                                </div>
                                <div className="box gap-3">
                                    <img src={expressSvg} height="40px" width={130} alt="" className='my-1' />
                                    <p className='text-white text-xl'>Express.js</p>
                                </div>
                            </div>
                            <div className="boxes flex  gap-[20px] justify-center my-10">
                                <div className="box ">
                                    <img src={reactSvg} height="40px" width={150} alt="" className='' />
                                    <p className='text-white text-xl'>React</p>
                                </div>
                                <div className="box ">
                                    <img src={nodeSvg} height="60px" width={130} alt="" className='my-1' />
                                    <p className='text-white text-xl'>Node.js</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex  max-lg:flex-col gap-[20px] justify-center'>
                            <div className="boxes flex gap-[20px] justify-center my-10">
                                <div className="box ">
                                    <div className='flex gap-4'>
                                        <img src={nextSvg} height="60px" width={130} alt="" className='my-1' />
                                    </div>
                                    <p className='text-white text-xl'>Next.js</p>
                                </div>
                                <div className="box gap-3">
                                    <img src={gitSvg} height="40px" width={130} alt="" className='my-2' />
                                    <p className='text-white text-xl'>Git Source Control</p>
                                </div>
                            </div>
                            <div className="boxes flex gap-[20px] justify-center my-10">
                                <div className="box ">
                                    <img src={pythonSvg} height="40px" width={140} alt="" className='' />
                                    <p className='text-white text-xl'>Python</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default About
