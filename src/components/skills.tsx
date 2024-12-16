import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-out-left">
                <h2 className='text-4xl md:text-5xl' >Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                I am skilled in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. I create attractive and responsive websites that are well-organized and easy to use. My knowledge of JavaScript and TypeScript helps me build interactive and reliable web applications. With these skills, I can deliver smooth user experiences and high-quality web solutions, enhanced with Tailwind CSS for efficient and custom design.
                </p>
            </div>
             <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-out-left">Typescript</h2>
                    <h2 data-aos="zoom-out-left">Javascript</h2>
                    <h2 data-aos="zoom-out-left">Next.js</h2>
                </div>

                <div className='space-y-2'>
                    <h2 data-aos="zoom-out-left">HTML</h2>
                    <h2 data-aos="zoom-out-left">CSS</h2>
                    <h2 data-aos="zoom-out-left">Tailwind CSS</h2>
                </div> 
             </div>
        </div>
    </div>
  )
}

export default skills