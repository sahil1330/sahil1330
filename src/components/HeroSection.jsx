import React from 'react'
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

const HeroSection = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["<i>Web</i> Developer.",
                "Android App Developer.",
                "Programmer.",
                "Freelancer.",],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section id='HeroSection' className="firstSection flex lg:flex-row flex-col-reverse max-lg:gap-10 justify-around my-20 lg:my-[0px] text-[#fff] h-[90vh] items-center shadow-xl">
                <div className="leftSection text-[2.5rem] text-center px-10">
                    Hii My name is <span className="text-[#10B4D6]">Sahil</span>
                    <div>and I am a passionate</div>
                    {/* <div>Web Developer</div> */}
                    <span ref={el} className='text-[#10B4D6]' />
                </div>
                
                <div className="rightSection ">
                    <div className='max-lg:w-[300px] max-lg:h-[300px] w-[500px] h-[500px] border-8 border-[#10B4D6] rounded-full overflow-hidden mt-[50px] bg-[#131B2F] '>
                    <img src="imgs/myphoto2.jpg" className='max-lg:w-[300px] max-lg:h-[300px] w-[500px] h-[500px] ' alt=""  />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
