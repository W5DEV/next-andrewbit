'use client';

import {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header className='relative bg-transparent z-40'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex sm:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden sm:flex sm:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-white'
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as='div' className='sm:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
            <div className='flex items-center justify-between'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-400'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/25'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    );
}
