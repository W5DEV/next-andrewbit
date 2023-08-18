export default function Contact() {
  return (
    <div className='w-full flex justify-center items-center py-12'>
      <form className='w-3/4' action='https://api.web3forms.com/submit' method='POST'>
        <input type='hidden' name='access_key' value={process.env.WEB3_FORM_KEY} />
        <div className='space-y-12'>
          <div className='border-b border-white/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium leading-6 text-white'
                >
                  Company Name
                </label>
                <div className='mt-2'>
                  <div className='flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='company'
                      className='flex-1 border-0 bg-transparent py-1.5 pl-4 text-white focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='ABC, Inc.'
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='services-requested'
                  className='block text-sm font-medium leading-6 text-white'
                >
                  Services Requested
                </label>
                <div className='mt-2'>
                  <textarea
                    id='services-requested'
                    name='services-requested'
                    rows={3}
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    defaultValue={''}
                    required
                  />
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-400'>
                  Briefly describe the services which will best serve your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className='border-b border-white/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-white'>Contact Information</h2>
            <p className='mt-1 text-sm leading-6 text-gray-400'>Tell us more about your business</p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label
                  htmlFor='contact-name'
                  className='block text-sm font-medium leading-6 text-white'
                >
                  Contact Name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='contact-name'
                    id='contact-name'
                    autoComplete='contact-name'
                    required
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>
                  Email Address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='phone' className='block text-sm font-medium leading-6 text-white'>
                  Phone Number
                </label>
                <div className='mt-2'>
                  <input
                    id='phone'
                    name='phone'
                    type='text'
                    autoComplete='phone'
                    required
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='street-address'
                  className='block text-sm font-medium leading-6 text-white'
                >
                  Street Address
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='street-address'
                    id='street-address'
                    autoComplete='street-address'
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1'>
                <label htmlFor='city' className='block text-sm font-medium leading-6 text-white'>
                  City
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='state' className='block text-sm font-medium leading-6 text-white'>
                  State
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium leading-6 text-white'
                >
                  ZIP / Postal Code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='postal-code'
                    id='postal-code'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6 w-full'>
          <button
            type='submit'
            className='w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
          >
            Submit
          </button>
        </div>
      </form>
      <script src={'https://web3forms.com/client/script.js'} async defer></script>
    </div>
  );
}
