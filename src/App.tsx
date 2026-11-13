import { SignInButton, SignUpButton, UserButton } from '@clerk/react';
import heroImage from './Ko‘k fonda zamonaviy ish joyi.png';
import { FaInstagram, FaTwitter, FaDiscord, FaBalanceScale } from 'react-icons/fa'; 

export default function Home() {
  return (
    <div>{/* Sizning original Header kodingiz (hech narsa o'zgartirilmadi) */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-100">

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">
            My App
          </span>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Kirish
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Ro'yxatdan o'tish
            </button>
          </SignUpButton>

          <UserButton />
        </div>

      

      </header>

     
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
       
        <img
          src={heroImage}
          alt="Zamonaviy IT ish joyi"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        
        <div className="absolute inset-0 bg-black/50 z-10" />

        
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Biz haqimizda
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Biz zamonaviy texnologiyalar va innovatsion yechimlar orqali qulay hamda samarali ish muhitini yaratamiz.
          </p>
        </div>
        <div>
        
        </div>
      </section>




      <div className='mt-200 flex gap-50'>
          <div className="relative bottom-120 left-10 flex h-[220px] w-[300px] flex-col items-center justify-center gap-[13px] overflow-hidden rounded-lg bg-white p-[20px_30px] shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
      <svg
        xmlSpace="preserve"
        viewBox="0 0 122.88 122.25"
        y="0px"
        x="0px"
        id="cookieSvg"
        version="1.1"
        className="w-[50px] fill-[#615151]"
      >
        <g>
          <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z" />
        </g>
      </svg>
      <p className="text-[1.2em] font-extrabold text-[#1a1a1a]">
        We use cookies.
      </p>
      <p className="text-center text-[0.7em] font-semibold text-[#636363]">
        We use cookies to ensure that we give you the best experience on our website.{' '}
        <br />
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .
      </p>
      <div className="flex flex-row gap-[20px]">
        <button className="h-[30px] w-[80px] cursor-pointer rounded-[20px] border-none bg-[#7b57ff] font-semibold text-[#f1f1f1] shadow-[0_4px_6px_-1px_#977ef3,0_2px_4px_-1px_#977ef3] transition-all duration-200 ease-in-out hover:bg-[#9173ff] hover:shadow-[0_10px_15px_-3px_#977ef3,0_4px_6px_-2px_#977ef3]">
          Allow
        </button>
        <button className="h-[30px] w-[80px] cursor-not-allowed rounded-[20px] border-none bg-[#dadada] font-semibold text-[#2e2e2e] shadow-[0_4px_6px_-1px_#bebdbd,0_2px_4px_-1px_#bebdbd] transition-all duration-200 ease-in-out hover:bg-[#ebebeb] hover:shadow-[0_10px_15px_-3px_#bebdbd,0_4px_6px_-2px_#bebdbd]">
          Decline
        </button>
      </div>
    </div>

        <div className="relative bottom-120 left-10 flex h-[220px] w-[300px] flex-col items-center justify-center gap-[13px] overflow-hidden rounded-lg bg-white p-[20px_30px] shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
      <svg
        xmlSpace="preserve"
        viewBox="0 0 122.88 122.25"
        y="0px"
        x="0px"
        id="cookieSvg"
        version="1.1"
        className="w-[50px] fill-[#615151]"
      >
        <g>
          <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z" />
        </g>
      </svg>
      <p className="text-[1.2em] font-extrabold text-[#1a1a1a]">
        We use cookies.
      </p>
      <p className="text-center text-[0.7em] font-semibold text-[#636363]">
        We use cookies to ensure that we give you the best experience on our website.{' '}
        <br />
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .
      </p>
      <div className="flex flex-row gap-[20px]">
        <button className="h-[30px] w-[80px] cursor-pointer rounded-[20px] border-none bg-[#7b57ff] font-semibold text-[#f1f1f1] shadow-[0_4px_6px_-1px_#977ef3,0_2px_4px_-1px_#977ef3] transition-all duration-200 ease-in-out hover:bg-[#9173ff] hover:shadow-[0_10px_15px_-3px_#977ef3,0_4px_6px_-2px_#977ef3]">
          Allow
        </button>
        <button className="h-[30px] w-[80px] cursor-not-allowed rounded-[20px] border-none bg-[#dadada] font-semibold text-[#2e2e2e] shadow-[0_4px_6px_-1px_#bebdbd,0_2px_4px_-1px_#bebdbd] transition-all duration-200 ease-in-out hover:bg-[#ebebeb] hover:shadow-[0_10px_15px_-3px_#bebdbd,0_4px_6px_-2px_#bebdbd]">
          Decline
        </button>
      </div>
    </div>

        <div className="relative bottom-120 left-10 flex h-[220px] w-[300px] flex-col items-center justify-center gap-[13px] overflow-hidden rounded-lg bg-white p-[20px_30px] shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
      <svg
        xmlSpace="preserve"
        viewBox="0 0 122.88 122.25"
        y="0px"
        x="0px"
        id="cookieSvg"
        version="1.1"
        className="w-[50px] fill-[#615151]"
      >
        <g>
          <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z" />
        </g>
      </svg>
      <p className="text-[1.2em] font-extrabold text-[#1a1a1a]">
        We use cookies.
      </p>
      <p className="text-center text-[0.7em] font-semibold text-[#636363]">
        We use cookies to ensure that we give you the best experience on our website.{' '}
        <br />
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .
      </p>
      <div className="flex flex-row gap-[20px]">
        <button className="h-[30px] w-[80px] cursor-pointer rounded-[20px] border-none bg-[#7b57ff] font-semibold text-[#f1f1f1] shadow-[0_4px_6px_-1px_#977ef3,0_2px_4px_-1px_#977ef3] transition-all duration-200 ease-in-out hover:bg-[#9173ff] hover:shadow-[0_10px_15px_-3px_#977ef3,0_4px_6px_-2px_#977ef3]">
          Allow
        </button>
        <button className="h-[30px] w-[80px] cursor-not-allowed rounded-[20px] border-none bg-[#dadada] font-semibold text-[#2e2e2e] shadow-[0_4px_6px_-1px_#bebdbd,0_2px_4px_-1px_#bebdbd] transition-all duration-200 ease-in-out hover:bg-[#ebebeb] hover:shadow-[0_10px_15px_-3px_#bebdbd,0_4px_6px_-2px_#bebdbd]">
          Decline
        </button>
      </div>
    </div>

        <div className="relative bottom-120 left-10 flex h-[220px] w-[300px] flex-col items-center justify-center gap-[13px] overflow-hidden rounded-lg bg-white p-[20px_30px] shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
      <svg
        xmlSpace="preserve"
        viewBox="0 0 122.88 122.25"
        y="0px"
        x="0px"
        id="cookieSvg"
        version="1.1"
        className="w-[50px] fill-[#615151]"
      >
        <g>
          <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z" />
        </g>
      </svg>
      <p className="text-[1.2em] font-extrabold text-[#1a1a1a]">
        We use cookies.
      </p>
      <p className="text-center text-[0.7em] font-semibold text-[#636363]">
        We use cookies to ensure that we give you the best experience on our website.{' '}
        <br />
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .
      </p>
      <div className="flex flex-row gap-[20px]">
        <button className="h-[30px] w-[80px] cursor-pointer rounded-[20px] border-none bg-[#7b57ff] font-semibold text-[#f1f1f1] shadow-[0_4px_6px_-1px_#977ef3,0_2px_4px_-1px_#977ef3] transition-all duration-200 ease-in-out hover:bg-[#9173ff] hover:shadow-[0_10px_15px_-3px_#977ef3,0_4px_6px_-2px_#977ef3]">
          Allow
        </button>
        <button className="h-[30px] w-[80px] cursor-not-allowed rounded-[20px] border-none bg-[#dadada] font-semibold text-[#2e2e2e] shadow-[0_4px_6px_-1px_#bebdbd,0_2px_4px_-1px_#bebdbd] transition-all duration-200 ease-in-out hover:bg-[#ebebeb] hover:shadow-[0_10px_15px_-3px_#bebdbd,0_4px_6px_-2px_#bebdbd]">
          Decline
        </button>
      </div>
    </div>
      </div>

    <footer className="bg-[#0b0b0b] text-[#9e9e9e] px-6 py-12 md:px-16 text-sm font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        
        <div className="flex flex-col gap-4">
          <a href="#" className="text-2xl font-bold text-white flex items-center">
            <span className="text-[#8b5cf6]">u</span>iverse
          </a>
          <p className="text-[#888888]">Uiverse | The universe of UI</p>
          
          <div className="flex items-center gap-2 text-white font-semibold">
            <FaBalanceScale className="text-base" /> MIT License
          </div>
          <p className="text-[#888888] leading-relaxed">
            All content (UI elements) on this site are published under the{' '}
            <a href="#" className="text-[#b0b0b0] underline hover:text-white transition-colors">
              MIT License
            </a>.
          </p>

          <div className="flex gap-4 mt-2">
            <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#b0b0b0] hover:text-white text-[#ffffff] text-lg transition-colors">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Column 1: Tools */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base">Tools</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="text-[#888888] hover:text-white transition-colors">
                SuperSample.dev
              </a>
            </li>
          </ul>
        </div>

       
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base">Resources</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Design Systems</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Cssbuttons.io</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Neumorphism.io</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Browsergames.gg</a></li>
          </ul>
        </div>

       
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base">Information</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Post Guidelines</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Give feedback</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Report bug</a></li>
          </ul>
        </div>

       =
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base">Legal</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Terms and Conditions</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Privacy policy</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Cookie policy</a></li>
            <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Disclaimer</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 text-[#666666] text-xs">
        2026 Pixel Galaxies. All rights reserved. - Uiverse.io
      </div>
    </footer>
    </div>
  );
}