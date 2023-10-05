//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/BMI.png';
import Project2 from './assets/img/projects/Lenskart.png';
import Project3 from './assets/img/projects/Dpstore.png';
import Project4 from './assets/img/projects/weatherApp.png';
import Project5 from './assets/img/projects/chatapp.png';
import Project6 from './assets/img/projects/Camstore.png';
import Project7 from './assets/img/projects/netflix.png';
import Project8 from './assets/img/projects/zoombus.png';
import Project9 from './assets/img/projects/Calculator.png';
import Project10 from './assets/img/projects/grachiver.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/photoshop.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/mysql.png';
import { Link } from 'react-scroll';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    
    icon: <FiGithub />,
    href: 'https://github.com/yoursdeepu',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '6',
    image: Project1,
    name: 'BMI',
    category: 'Javascript',
  },
  {
    id: '2',
    image: Project2,
    name: 'Lenskart',
    category: 'Web-Development',
  },
  {
    id: '3',
    image: Project3,
    name: 'DpStore',
    category: 'ReactJs',
  },
  {
    id: '4',
    image: Project4,
    name: 'Weather App',
    category: 'ReactJs',
    href: 'https://weather-app-bice-beta.vercel.app/',
  },
  {
    id: '5',
    image: Project5,
    name: 'Chat App',
    category: 'Javascript',
  },
  {
    id: '1',
    image: Project6,
    name: 'Camstore',
    category: 'ReactJs',
  },
  {
    id: '7',
    image: Project9,
    name: 'Calculator',
    category: 'Javascript',
  },
  {
    id: '8',
    image: Project8,
    name: 'Zoombus',
    category: 'Web-Development',
  },
  {
    id: '9',
    image: Project7,
    name: 'Netflix Clone',
    category: 'Web-Development',
  },
  {
    id: '10',
    image: Project10,
    name: 'Grachiver',
    category: 'ReactJs',
  },

];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'ReactJs',
  },
  {
    name: 'Web-Development',
  },
  {
    name: 'Javascript',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      ' Collaborate with designers to convert design mockups into functional React components and ensure that the final product matches the intended user interface and user experience.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Implement state management solutions such as Redux or React Context to manage complex application states effectively.',
  },
  {
    icon: <FiPenTool />,
    name: 'Performance',
    description:
      'Optimize React applications for speed and efficiency, including code splitting, lazy loading, and minimizing unnecessary re-renders.',
  },
  {
    icon: <FiTag />,
    name: 'API Integration',
    description:
      'Connect React applications to backend APIs and databases, enabling data retrieval, storage, and real-time updates.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: `deepesh99tomar@email.com`,
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bhopal, India',
    description: 'Serving client Any time',
  },
];
