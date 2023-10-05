import React from 'react'

import Image from "../assets/img/About.jpg"
const About = () => {
    return (
        <section className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:top-[2rem] before:hidden before:lg:block'>
                                Deepesh Singh Tomar
                            </h2>
                            <p className='text-accent mb-8'>
                                Frontend Engineer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                Software engineer with ability to learn and
                                collaborate in rapidly changing environments and
                                compositions. worked through 100+ hours of
                                bootcamp structure, learning JavaScript, React.Js,
                                SQL
                                and
                                Python.
                                Eager
                                to
                                tackle
                                web
                                development/design challenges to achieve lasting
                                impact on user experience
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
                            contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;
