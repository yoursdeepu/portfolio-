import React from 'react';
import { services } from "../data";


const Services = () => {
    return (
        <section className='section bg-tertiary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-services relative before:absolute
            before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                        What i do for clients
                    </h2>
                    <p className='subtitle'> Maintained and     updated website functionality
                        in collaboration with web development teams as well as Learned and implemented On-page and technical SEO on live client website.</p>
                </div>
                {/* item grid */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const { icon, name, description } = service;
                        return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                            {/* icons */}
                            <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center'>{icon}</div>
                            <h4 className='text-xl font-medium'>{name}</h4>
                            <p>{description}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
export default Services;