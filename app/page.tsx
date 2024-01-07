import Cta from '@/components/cta';
import Services from '@/components/services';
import Header from '@/components/header';
import {
    BugAntIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'
import Navigation from "@/app/components/Navigation";

export default function Home() {
  return (
      <>
      <div className="bg-gray-900 h-full overflow-hidden">
          <Navigation />
        <div className="relative isolate pt-8">
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
              <Header />
              <Services />
              <Cta />
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
