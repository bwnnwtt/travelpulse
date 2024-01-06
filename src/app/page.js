import Card from './_components/Card'
import Landing from './_components/Landing'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Landing customCSS={'text-white'}>
      <div className='flex w-full h-screen relative'>
        <div className='absolute flex justify-between top-7 z-10 w-full px-[104px]'>
          <div className='w-[340px]'>
            <Image
              alt='logo'
              src={'/assets/travelpulse-logo.png'}
              width='97'
              height='80'
            />
          </div>
          <div className='flex gap-16 text-xl font-extrabold items-center'>
            <button>Destination</button>
            <button>Stories</button>
            <button>Reviews</button>
          </div>
          <div className='flex w-[340px] gap-6 text-xl items-center justify-between'>
            <div className='w-[48px]'>
              <Image
                alt='search'
                src={'/assets/icon-search.svg'}
                width='28'
                height='28'
                className='hover:cursor-pointer'
              />
            </div>
            <button>
              Sign Up
            </button>
            <button className='bg-white text-black w-[168px] h-[60px] rounded-[40px] p-[10px] text-2xl font-bold'>
              Login
            </button>
          </div>
        </div>
        <div className='absolute text-[80px] text-center z-10 w-[1212px] top-[30%] left-[50%] -translate-x-[50%] font-extrabold leading-tight'>
        Discover New Places and Create Unforgettable Memories
        </div>
        <div className={`w-1/3 bg-black bg-opacity-40 bg-[url('/assets/cover-img-1.png')] bg-cover bg-blend-multiply relative`}>
          <div className='flex flex-row justify-between px-11 text-[42px] absolute bottom-11'>
            <p className='leading-snug font-semibold break-word'>Why you should reconsider the Inca Trail, Peru Trip</p>
            <Image
              alt='arrow-right'
              src={'/assets/icon-arrow-right.svg'}
              width={50}
              height={50}
            ></Image>
          </div>
        </div>
        <div className={`w-1/3 bg-black bg-opacity-40 bg-[url('/assets/cover-img-2.png')] bg-cover bg-blend-multiply relative`}>
        <div className='flex flex-row justify-between px-11 text-[42px] absolute bottom-11'>
          <p className='leading-snug font-semibold break-word'>The Hidden Powers of The Northern Lights, Iceland</p>
            <Image
              alt='arrow-right'
              src={'/assets/icon-arrow-right.svg'}
              width={50}
              height={50}
            ></Image>
          </div>
        </div>
        <div className={`w-1/3 bg-black bg-opacity-40 bg-[url('/assets/cover-img-3.png')] bg-cover bg-blend-multiply relative`}>
        <div className='flex flex-row justify-between px-11 text-[42px]  absolute bottom-11'>
          <p className='leading-snug font-semibold break-word'>10 Facts you didn’t know about The Blue Hole, Belize</p>
            <Image
              alt='arrow-right'
              src={'/assets/icon-arrow-right.svg'}
              width={50}
              height={50}
            ></Image>
          </div>
        </div>
      </div>
    </Landing>
    <Landing customCSS='px-20 pt-[6vh] pb-[5vh]'>
      <div className='text-center text-[#404040] text-[32px] font-bold pb-8'>
        ALSO FEATURED IN
      </div>
      <div className='flex flex-row justify-between w-full items-center'>
        <Image 
          alt='featured-1'
          src={'/assets/featured-1.png'}
          width={308}
          height={62}
        />
        <Image 
          alt='featured-2'
          src={'/assets/featured-2.png'}
          width={142}
          height={92}
        />
        <Image 
          alt='featured-3'
          src={'/assets/featured-3.png'}
          width={92}
          height={52}
        />
        <Image 
          alt='featured-4'
          src={'/assets/featured-4.png'}
          width={144}
          height={80}
        />
        <Image 
          alt='featured-5'
          src={'/assets/featured-5.png'}
          width={286}
          height={63}
        />
      </div>
      <div className='flex justify-between pt-[5vh] '>
        <div>
          <p className='text-[48px] text-black font-bold pb-3'>
            Plan your best trip ever
          </p>
          <p className='text-2xl text-[#404040] font-medium'>
            Making the Most of Your Travel Experience in 2023
          </p>
        </div>
        <button className='outline outline-1 outline-[#4169E1] text-2xl text-[#4169E1] font-medium rounded-[60px] px-8 py-5'>
          View All Destination
        </button>
      </div>
      <div className='flex flex-row gap-[25px] justify-between pt-[5vh] overflow-auto'>
        <Card 
          img={'/assets/plan-1.png'}
          location='Croatia'
        />
        <Card 
          img={'/assets/plan-2.png'}
          location='Morocco'
        />
        <Card 
          img={'/assets/plan-3.png'}
          location='Mexico'
        />
      </div>
    </Landing>
    </>
  )
}
