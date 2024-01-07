export default function HomePage() {
    return (
      <div className='flex flex-col justify-start items-center p-4 md:p-12 bg-white min-h-screen'>
        <div className='font-bold text-center text-3xl w-full text-black'>
          <span>Andrew's Homepage</span>
        </div>
        <div className='font-bold w-full pt-12 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl'>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://webk.telegram.org'>
              <img src='/images/logos/tgram.svg' alt='' className='w-48' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://flix.andrewb.it'>
              <img src='/images/logos/plex.png' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://gun.deals/'>
              <img src='/images/logos/gd.png' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://www.slashdot.org/'>
              <img src='/images/logos/slashdot.jpg' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://citizenfreepress.com/'>
              <img src='/images/logos/cfp.jpg' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://dailystormer.in/'>
              <img src='/images/logos/stormer.jpeg' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://gab.com/'>
              <img src='/images/logos/gab.png' alt='' className='w-72' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://www.zerohedge.com/'>
              <img src='/images/logos/zh.svg' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='http://www.msgo.com/'>
              <img src='/images/logos/msgo.svg' alt='' className='w-72' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://twitter.com/'>
              <img src='/images/logos/Twitter-Logo.png' alt='' className='w-40' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://infowars.com/'>
              <img src='/images/logos/infowars.jpg' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://www.unz.com/'>
              <img src='/images/logos/unz.png' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://www.preppingdeals.net/'>
              <img src='/images/logos/prepping.png' alt='' />
            </a>
          </div>
          <div className='p-4 h-48 flex justify-center items-center'>
            <a href='https://www.revolver.news/'>
              <img src='/images/logos/revolver.png' alt='' />
            </a>
          </div>
        </div>
      </div>
    );
}