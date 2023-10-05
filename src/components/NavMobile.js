import React, { useState } from 'react';

// import navigation data: 
import { navigation } from '../data';
// import icons:
import { Xicon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { RxCross2 } from 'react-icons/rx'
// import components:
import Socials from './Socials';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // framer motion variants:
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 100,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      {/* menu icon */}
      <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
        <MenuAlt3Icon className='w-8 h-8' />
      </div>
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      >
      </motion.div>

      {/* menu */}
      <motion.ul variants={ulVariants} inherit='hidden'
        animate={isOpen ? 'visible' : ''} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden `}>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='absolute cursor-pointer top-8 right-8'>
          <RxCross2 className="w-8 h-8" />
        </div>
        {
          navigation.map((item, index) => {
            return (
              <li key={index} className='mb-8 cursor-pointer'>
                <Link to={item.href} smooth={true}
                  duration={500} offset={-70}
                >{item.name}
                </Link>
              </li>
            );
          })}
      </motion.ul>
    </nav>
  )
}

export default NavMobile;
