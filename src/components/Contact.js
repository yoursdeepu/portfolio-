import React from 'react';
import { contact } from '../data';


const Contact = () => {
    return (
        <section className='section bg-primary' id='contact'>
            <div className='container mx-auto'>
                {/* section title */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-contact relative before:absolute
                      before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                        Contact me
                    </h2>
                    <p className='subtitle'>Are you in need of a frontend developer who can transform your web ideas into stunning, user-friendly realities? Look no further! I'm an experienced frontend developer skilled in HTML, CSS, JavaScript, and modern frameworks. With a sharp eye for design and a commitment to clean, efficient code, I'm ready to bring your web projects to life. Let's collaborate and create exceptional web experiences.</p>
                </div>
                <div className="flex flex-col lg:gap-8 lg:flex-row">
                    <div className='flex flex-1 flex-col items-center space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return (
                                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='text-accent font-normal'>{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
