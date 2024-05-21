import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div
      className='
    bg-base-100 text-base-content top-0 z-30 flex h-16 w-full justify-center bg-opacity-0 transition-all duration-100
    '
    >
      <div className='navbar ml-6 md:px-16'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link href='#upease-section-2'>Products</Link>
                <ul className='p-2'>
                  <li>
                    <Link href='#upease-section-3'>Student App</Link>
                  </li>
                  <li>
                    <Link href='#upease-section-5'>Console</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='#upease-section-2'>Company</Link>
                <ul className='p-2'>
                  <li>
                    <Link href='#upease-section-3'>About Us</Link>
                  </li>
                  <li>
                    <Link href='#upease-section-5'>Blogs</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='#upease-section-7'>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* <Link
            href='#'
            className='btn btn-ghost text-4xl normal-case text-[var(--color-primary-600)]'
          >
            UpEase
          </Link> */}
          <Image
            src='/images/UpEase.svg'
            alt='Description of Image'
            width={130}
            height={150}
            className=' mt-4'

            // objectFit='contain' // Ensures image scales correctly and doesn't overflow
          />
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal gap-6 px-1 text-xl font-medium'>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className='p-2'>
                  <li>
                    <Link href='#upease-section-3'>Student App</Link>
                  </li>
                  <li>
                    <Link href='#upease-section-5'>Upease Console</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Company</summary>
                <ul className='p-2'>
                  <li>
                    <Link href='#upease-section-3'>About</Link>
                  </li>
                  <li>
                    <Link href='#upease-section-5'>Blogs</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className='navbar-end hidden md:flex '>
          <Link
            href='#'
            className=' flex h-12 w-48 items-center justify-center rounded-full bg-[var(--color-primary-600)] text-center text-lg text-white'
          >
            Request Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
