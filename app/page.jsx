'use client';

import Navbar from './components/Navbar'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {


  function scrollFunction1() {
    const e = document.getElementById("about");
    if(e) {
        e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
    }
  }

  async function handleEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_hcq4hqs', 'template_vf6cn47', e.target, 'Enas8m_VzQ6lSDkH9')
      .then((result) => {
          console.log(result.text);
          toast('Email Sent', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  return (
    <div className='w-full h-full mb-24 font-Bacasime Antique'>
      <div className='absolute flex top-[6rem] place-self-center w-full h-full bg-indigo-500 z-[-10] mix-blend-multiply filter blur-xl opacity-50'></div>
      <Navbar />
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <section className='w-full h-screen flex sm:mt-24 gap-2 flex-col items-center p-12'>
          <div className='flex flex-col sm:flex-row justify-center w-full gap-8 mb-2'>
            <a className="hover:animate-pulse hover:scale-[1.1]" href='https://github.com/nickpritchyk'>
              <GitHubIcon style={{ fontSize: '36px'}} />
            </a>
            <a className="hover:animate-pulse hover:scale-[1.1]" href='https://www.linkedin.com/in/nick-pritchyk-843677197/'>
              <LinkedInIcon style={{ fontSize: '36px'}} />
            </a>
            <p className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150 text-sm sm:invisible visible"> 352-445-0562 </p>
            <p className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150 text-sm sm:invisible visible"> nickpritchyk20@gmail.com </p>
          </div>
          <h1 className='select-none text-4xl mb-8 sm:w-[30rem] border-t-4 border-white pt-6'> Hi, I'm Nicholas Pritchyk, </h1>
          <h2 className='select-none text-2xl border-b-4 sm:w-[30rem] border-white pb-6 font-extralight tracking-wider'> a software developer based in Denver, Colorado, with a desire to create and build seamless experiences on the web. P.S. I love coding and cooking. {'{'} <LocalDiningIcon /> {'}'} </h2>
          <a onClick={scrollFunction1}>
            <ArrowDownwardIcon className='mt-24 text-[36px]' />
          </a>
        </section>
        <section id='about' className="sm:w-[30rem] p-4 flex justify-center mt-12 flex-col">
          <h1 className='select-none text-3xl mb-8 w-fit border-b-4 border-indigo-500 pb-2 mt-12'> About </h1>
          <h2 className='text-2xl font-bold w-fit mb-6 border-b-[1px] border-indigo-500'> Education </h2>
          <div className='gap-4 flex flex-col text-2xl bg-indigo-500 bg-opacity-20 p-4 rounded-md'>
            <p className='font-semibold'> University of Colorado, Boulder, CO </p>
            <p className='text-[20px]'> B.A. Computer Science, Minor in Business </p>
            <p className='text-[20px]'> August 2019 - April 2023 </p>
            <p className='text-[20px]'> 3.7 GPA </p>
          </div>

          <h2 className='text-2xl mt-24 font-bold border-b-[1px] border-indigo-500 w-fit mb-6'> Professional Experience </h2>
          <div className='gap-4 flex flex-col text-2xl bg-indigo-500 bg-opacity-20 p-4 rounded-md'>
            <p className='text-[20px]'> April 2023 - Present </p>
            <div className='flex gap-2'>
              <p className='w-fit'> Front-End Developer Intern </p>
              <p className='text-indigo-500 font-bold'> @ </p>
            </div>
            <div className="w-[15rem] rounded-md h-[4rem] bg-cover bg-[url('./img/lflogo.png')]"></div>
            <p className='text-[18px]'> Intern at LastFarewells, an online site for writing and storing your last wishes! I have worked on the front-end
              building the UI and functionality across the whole application. This opportunity provided me with valuable experience building production level
              code in NextJS and Laravel PHP.
             </p>
          </div>

          <h2 className='text-2xl border-b-2 border-indigo-500 w-fit mb-6 mt-24'> Skills </h2>
          <div className='border-[0.5px] border-indigo-500 rounded-md hover:shadow-md hover:scale-[1.01] delay-150 transition-all duration-300 shadow-[#2d59a1]'>
            <h1 className='mt-12 ml-9 mb-6 text-2xl border-b-2 w-fit border-indigo-500'> Front-End </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 p-4 gap-6'>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> Vanilla JS </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> CSS </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> HTML </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> React </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> Next </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> Tailwind </label>
                <img className='scale-[1.8] hover:scale-[1.9] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
              </div>
            </div>
            <h1 className='mt-12 ml-9 mb-6 text-2xl border-b-2 w-fit border-indigo-500'> Back-End </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8'>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> MySQL </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> MongoDB </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> Node.js </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              </div>
              <div className='text-center flex justify-center items-center flex-col'>
                <label> Python </label>
                <img className='hover:scale-[1.05] delay-50 transition-all duration-300' height='70px' width='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              </div>
            </div>
          </div>
        </section>

        <h1 className='select-none text-3xl mb-8 w-fit border-b-4 border-indigo-500 pb-2 mt-12'> Projects </h1>
        <section className='flex flex-col lg:grid-cols-2 lg:grid justify-center mt-12 gap-8'>
          <div className='hover:scale-[1.02] transition-all duration-200 delay-75 w-full flex flex-col items-center sm:shadow-lg'>
            <div className="w-[350px] h-[250px] sm:w-[400px] border-[1px] border-[#db8e4f] text-center sm:shadow-md rounded-t-md p-4 justify-evenly flex flex-col bg-cover bg-[url('./img/chefsbg.png')]">
              <label className='text-3xl text-white'> Chefs Choice </label>
              <p className='text-[#db8e4f] p-1 border-[0.5px] border-[#db8e4f] bg-white w-fit rounded-md self-center text-xl font-extrabold'> An online recipe explore and post site </p>
              <ul className='flex justify-center gap-4 select-none'> 
                <li className='p-2 bg-[#db8e4f] w-fit rounded-md text-white'> NextJS 13</li>
                <li className='p-2 bg-[#db8e4f] w-fit rounded-md text-white'> Tailwind CSS </li>
                <li className='p-2 bg-[#db8e4f] w-fit rounded-md text-white'> MySQL & Prisma </li>
              </ul>
            </div>
            <div className='bg-white rounded-b-md shadow-md w-[350px] sm:w-[400px] h-[75px] flex justify-center p-4 gap-8 border-[#db8e4f] border-[1px]'>
                <a href='https://github.com/nickpritchyk/ChefsChoice'>  
                  <GitHubIcon style={{fontSize: '36px'}} />
                </a>
                <a href='https://chefschoice.vercel.app/' className='p-2 bg-[#ef9e5b] rounded-md text-white cursor-pointer'>
                  Visit Live!
                </a>
              </div>
            </div>

            <div className='hover:scale-[1.02] transition-all duration-200 delay-75 w-full flex flex-col items-center sm:shadow-lg'>
              <div className="w-[350px] sm:w-[400px] h-[250px] border-[1px] border-[#2d59a1] text-center sm:shadow-md rounded-t-md p-4 justify-evenly flex flex-col bg-cover bg-[url('./img/knowlo.png')]">
                <label className='text-3xl text-white'> KnowLo </label>
                <p className='text-[#2d59a1] p-1 border-[0.5px] border-[#2d59a1] bg-white w-fit rounded-md self-center text-xl font-extrabold'> A travel guide and local news api </p>
                <ul className='flex justify-center gap-4 select-none'> 
                  <li className='p-2 bg-[#75adfc] w-fit rounded-md text-white'> HTML/EJS </li>
                  <li className='p-2 bg-[#75adfc] w-fit rounded-md text-white'> Bootstrap </li>
                  <li className='p-2 bg-[#75adfc] w-fit rounded-md text-white'> PostgreSQL </li>
                </ul>
              </div>
              <div className='bg-white rounded-b-md shadow-md w-[350px] sm:w-[400px] h-[75px] flex justify-center p-4 gap-8 border-[#2d59a1] border-[1px]'>
                <a href='https://github.com/nickpritchyk/KnowLo'>  
                  <GitHubIcon style={{fontSize: '36px'}} />
                </a>
              </div>
            </div>

            <div className='hover:scale-[1.02] transition-all duration-200 delay-75 w-full flex flex-col items-center sm:shadow-lg'>
              <div className="w-[350px] sm:w-[400px] h-[250px] border-[1px] border-[#e44c4c] text-center sm:shadow-md rounded-t-md p-4 justify-evenly flex flex-col bg-cover bg-[url('./img/reciperepo.png')]">
                <label className='text-3xl text-white'> RecipeRepo </label>
                <p  className='text-[#e44c4c] p-1 border-[0.5px] border-[#e44c4c] bg-white w-fit rounded-md self-center text-xl font-extrabold'> A food query site </p>
                <ul className='flex justify-center gap-4 select-none'> 
                  <li className='p-2 bg-[#e44c4c] w-fit rounded-md text-white'> ReactJS </li>
                  <li className='p-2 bg-[#e44c4c] w-fit rounded-md text-white'> CSS3 </li>
                  <li className='p-2 bg-[#e44c4c] w-fit rounded-md text-white'> MySQL </li>
                </ul>
              </div>
              <div className='bg-white rounded-b-md shadow-md w-[350px] sm:w-[400px] h-[75px] flex justify-center p-4 gap-8 border-[#e44c4c] border-[1px]'>
                <a href='https://github.com/nickpritchyk/RecipeRepository_Updated'>  
                  <GitHubIcon style={{fontSize: '36px'}} />
                </a>
              </div>
            </div>

            <div className='transition-all duration-200 delay-75 z-10 relative w-full flex flex-col items-center sm:shadow-lg'>
              <div className="opacity-30 w-[350px] sm:w-[400px] h-[250px] border-[1px] border-[#744ce4] text-center rounded-t-md p-4 justify-evenly flex flex-col bg-cover bg-[url('./img/tunifyimg.jpeg')]">
                <label className='text-3xl text-white'> Tunify </label>
                <p  className='text-[#744ce4] p-1 border-[0.5px] border-[#744ce4] bg-white w-fit rounded-md self-center text-xl font-extrabold'> A personalized Spotify music helper </p>
                <ul className='flex justify-center gap-4 select-none'> 
                  <li className='p-2 bg-[#744ce4] w-fit rounded-md text-white'> ReactJS </li>
                  <li className='p-2 bg-[#744ce4] w-fit rounded-md text-white'> TailwindCSS </li>
                  <li className='p-2 bg-[#744ce4] w-fit rounded-md text-white'> MongoDB </li>
                </ul>
              </div>
              <div className='opacity-100 bg-white rounded-b-md shadow-md w-[350px] sm:w-[400px] h-[75px] flex justify-center p-4 gap-8 border-[#744ce4] border-[1px]'>
                <a className='text-[#744ce4]'>  
                  WIP - Coming Soon
                </a>
              </div>
            </div>
        </section>

        <h1 className='select-none text-3xl mb-8 w-fit border-b-4 border-indigo-500 pb-2 mt-20'> Contact Me </h1>
        
        <form onSubmit={handleEmail} className='flex mt-8 mb-24 h-full gap-6 w-[350px] sm:w-fit p-12 shadow-md shadow-indigo-400 rounded-md justify-center bg-indigo-500 bg-opacity-60'>
          <div className='relative flex flex-col gap-6 items-start w-full h-full mb-12'>
            <label className='text-xl text-white font-semibold'> Name </label>
            <input name='name' className='w-full sm:w-[27rem] border-[1px] border-black rounded-md p-1' placeholder='Name'></input>
            <label className='text-xl text-white font-semibold'> Message </label>
            <textarea name='message' className='w-full sm:w-[27rem] border-[1px] min-h-[10rem] border-black rounded-md p-1' placeholder='Enter your message here'></textarea>
            <button className='bg-white absolute bottom-[-4rem] p-2 rounded-md self-center text-indigo-500 font-semibold hover:scale-[1.03] hover:shadow-lg hover:border-[1px] hover:border-black'> Send Email </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}
