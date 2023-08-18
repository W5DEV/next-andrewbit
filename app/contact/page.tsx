import Contact from '@/components/contact';
import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='bg-gray-900 h-full overflow-hidden'>
        <nav className='h-auto w-full relative z-50 flex justify-center items-center'>
          <div className='w-full md:w-3/4 flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-10 xl:gap-0 p-8'>
            <a
              href={'tel:+16019273282'}
              className='w-1/4 flex flex-row justify-center sm:justify-start items-center gap-2'
            >
              <div className='w-full flex flex-row justify-center sm:justify-start items-center gap-4 text-white'>
                <div className='text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='text-base hover:underline text-white'>601.927.3282</span>
              </div>
            </a>
            <a
              href={'mailto:support@andrewb.it'}
              className='w-1/4 flex flex-row justify-center sm:justify-end items-center gap-2'
            >
              <div className='w-full flex flex-row justify-center sm:justify-end items-center gap-4 text-white'>
                <div className='text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                    <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                  </svg>
                </div>
                <span className='text-base hover:underline text-white'>support@andrewb.it</span>
              </div>
            </a>
          </div>
        </nav>
        <div className='relative isolate pt-8'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='pt-0 sm:pb-12'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mt-10 flex'>
                <Link
                  href='/'
                  className='text-sm font-semibold leading-6 text-indigo-400 hover:underline'
                >
                  <span aria-hidden='true'>&larr;</span>
                  &nbsp; Return Home
                </Link>
              </div>
              <Header />
              <Contact />
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <footer className='text-gray-600 text-xs h-auto p-2 bg-gray-900 z-50 w-full flex flex-row justify-center items-center'>
        <span>&copy; 2023 Great Idea Media | All Rights Reserved.</span>
      </footer>
    </>
  );
}