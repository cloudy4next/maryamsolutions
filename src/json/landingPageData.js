/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: '80966119-3ce1-44a7-803b-c01e9762755f',
    title: 'Recruiting App',
    imageUrl: Recruiting,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    description:
      'The Recruiting App is a mobile solution designed to simplify the hiring process for both recruiters and candidates. It features an intuitive interface where job seekers can create detailed profiles, upload resumes, and apply for jobs with a single tap. On the recruiter side, the app enables posting job listings, filtering applicants, scheduling interviews, and tracking candidate progress in real time. We focused on crafting a user-centric UI/UX to minimize friction and enhance the application flow. Our team developed the app using cross-platform mobile technology to ensure a consistent experience across iOS and Android. Every element of the app was built to improve communication, reduce hiring time, and support HR teams in sourcing top talent efficiently. This app is not just a job board—it’s a full-fledged recruiting assistant designed with scalability and performance in mind.',
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: '625c2d88-90e3-4787-beb7-4a0259aea1a3',
    title: 'Stream+',
    imageUrl: Stream,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    description:
      'Stream+ is a sleek mobile streaming app designed for users who crave smooth video experiences on the go. With a visually engaging UI and highly responsive interface, users can effortlessly browse, stream, and manage their content libraries. Our development team implemented adaptive bitrate streaming to ensure high performance even on low-bandwidth connections. The app includes smart content recommendations, watch history, favorite playlists, and cross-device syncing to enhance personalization. UI/UX efforts focused on bold typography, seamless navigation, and minimalistic layouts, making the interface intuitive for all age groups. The backend was engineered for scalability and real-time performance to support thousands of concurrent users. From mobile development to final polish, our team handled every detail, resulting in a media experience that is fast, beautiful, and engaging. Stream+ aims to rival top streaming platforms with its refined functionality and premium user flow.',
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: '82de8b96-4caf-4ff5-9b7c-133bffde8bae',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    description:
      'Freelance is a mobile platform that bridges the gap between talented freelancers and clients looking for quality work. The app allows freelancers to build profiles, showcase portfolios, bid on projects, and communicate with clients directly. Clients, on the other hand, can post jobs, view freelancer stats, and manage ongoing contracts. Our UI/UX design prioritizes clarity and ease of use, especially in managing bids, proposals, and financial transactions. The development team integrated a secure payment gateway and notification system for real-time updates. We focused on mobile responsiveness, efficient data handling, and performance optimization to ensure that the app runs smoothly under heavy usage. Freelance empowers remote workers and entrepreneurs by giving them a powerful tool to manage their careers on-the-go. It’s not just a marketplace—it’s a comprehensive freelance career management tool with a user-friendly interface and robust backend systems.',
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: '4ff583c1-af6d-4670-ad61-b0cb66dc80e7',
    title: 'Aura',
    imageUrl: Aura,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    description:
      'Aura is a stunning, modern website designed to promote a premium brand experience through elegant design and seamless user interaction. The site’s aesthetic combines minimalistic design with sophisticated typography and animations, resulting in a refined digital presence. We developed the site using modern web technologies like React and SCSS, ensuring responsiveness, speed, and maintainability. The main goal was to communicate the brand’s vision clearly while offering visitors a visually captivating journey. From product showcases to customer engagement features, the Aura website reflects attention to detail in every aspect. Our team collaborated closely with the brand to understand its identity and transformed it into a digital form that speaks quality and class. The backend was built with performance and security in mind, while the frontend is optimized for all screen sizes and browsers. Aura stands as a perfect blend of design, development, and storytelling.',
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: '3613c1ac-249d-420e-a1ab-71ece2198793',
    title: 'Surtido Rico',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    description:
      'Surtido Rico is a vibrant eCommerce website created to bring Latin American flavors to online shoppers in an engaging and delightful way. The goal was to develop a fully responsive web platform where customers could browse, search, and buy from a curated selection of goods effortlessly. We designed an intuitive interface that emphasizes large product images, dynamic filtering, and smooth cart/checkout workflows. The color palette and typography were chosen to reflect cultural authenticity while maintaining modern usability standards. From inventory management integration to customer account handling, we built a reliable backend with flexibility and future scalability in mind. Security, performance, and SEO were also key focus areas. Our collaboration with the brand team ensured that the final product was not only functional but also deeply aligned with their identity and mission. Surtido Rico delivers a smooth, flavorful online shopping experience for everyone.',
    credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  },
  {
    id: 'bc25d204-359f-450b-911a-d30f41a2cb61',
    title: 'Courses Management',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    description:
      'The Courses Management web app is an educational platform tailored for institutions and instructors to manage, promote, and track academic courses efficiently. It offers features such as course creation, scheduling, student enrollment, progress tracking, and assessment tools—all within a single dashboard. We prioritized usability in our UI/UX design to make the experience straightforward for users of all technical levels, from students to administrators. The application was developed using a modular architecture, which supports both frontend performance and backend scalability. We integrated role-based access control, real-time notifications, and analytics to provide actionable insights for educators. The website is fully responsive and built with accessibility in mind to ensure that learning remains inclusive. Our team crafted this solution to empower digital education by streamlining course management while providing an elegant and intuitive user interface. It’s more than just a CMS—it’s a future-proof academic management tool.',
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

export const Advantages = [
  [
    {
      title: 'Communicative',
      description:
        'We maintain clear, open communication throughout every stage to keep clients informed, aligned, and confident in the progress of their project.',
      imageUrl: Communicative,
    },
    {
      title: 'Management',
      description:
        'Our team ensures smooth, efficient project execution by combining agile practices with focused coordination and deadline-driven delivery.',
      imageUrl: Management,
    },
  ],
  [
    {
      title: 'Collaborative',
      description:
        'We foster a culture of teamwork and mutual respect to build stronger solutions through collective creativity and shared goals.',
      imageUrl: Collaborative,
    },
    {
      title: 'Favorite',
      description:
        'Our clients consistently return thanks to our quality, reliability, and dedication—earning us a reputation as a trusted favorite.',
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni:
      'Maryam Solutions exceeded our expectations, delivering high‑quality results on time while maintaining transparent, proactive communication. Their technical expertise and client‑centric approach made the entire engagement seamless and highly valuable for our organization.',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni:
      'Collaborating with Maryam Solutions has been outstanding. The team demonstrated exceptional professionalism, responsiveness, and a deep understanding of our sector, enabling us to move key initiatives forward efficiently and with confidence.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni:
      'Maryam Solutions impressed us with strategic insight, agile execution, and meticulous attention to detail. Their solutions have delivered measurable value to our operations, and we look forward to continuing our partnership.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Hawkins Jim',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Monica Lovegood',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
