import React from 'react';

import { cn } from '@/lib/utils';

export default function Contact() {
  return (
    <div className='flex flex-col lg:min-h-screen'>
      <div className='layout flex flex-1 flex-col justify-between lg:flex-row'>
        <div>
          <h1 className='mt-32 text-5xl sm:mt-64 '>
            Let's{' '}
            <span className='text-[var(--color-primary-600)]'>Connect</span>
          </h1>
        </div>

        <div className='card -bottom-16 my-6 w-full max-w-md flex-shrink-0 border border-slate-800 bg-white '>
          <div className='card-body gap-6'>
            <h2 className='my-6'>Contact Us</h2>
            <div className='form-control'>
              <input
                type='text'
                placeholder='First name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Last name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Bussiness email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Your institution'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary group bg-[#0A49D6]'>
                Submit
                <svg
                  viewBox='0 0 16 16'
                  height='1em'
                  width='1em'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={cn(
                    'relative',
                    'transition-transform duration-200',
                    'motion-safe:-translate-x-1',
                    'group-hover:translate-x-0'
                  )}
                >
                  <path
                    fill='currentColor'
                    d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                  />
                  <path
                    stroke='currentColor'
                    d='M1.75 8H11'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    className={cn(
                      'origin-left transition-all duration-200',
                      'opacity-0 motion-safe:-translate-x-1',
                      'group-hover:translate-x-0 group-hover:opacity-100'
                    )}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className=' max-w-xs:text-w flex min-h-[228px] gap-12 bg-[#0A49D6] p-14 text-white'>
        <div className='font-semibold'>
          {/* <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-current'
          >
            <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
          </svg> */}
          <p>UpEase.biz</p>
          <p>Innovation Center, MIT Manipal </p>
          <p>+91 9741354623</p>
        </div>
        <nav>
          <header className='footer-title'>Social</header>
          <div className='grid grid-flow-col gap-4'>
            <a
              className='cursor-pointer duration-500 hover:scale-110'
              href='https://www.linkedin.com/company/upease/'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 448 512'
                className='h-6 fill-current'
              >
                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
