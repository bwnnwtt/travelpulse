import Landing from './_components/Landing'
import Image from 'next/image'
import ArrowRight from '../assets/icon-arrow-right.svg'
import Logo from '../assets/travelpulse-logo.png'
import SearchIcon from '../assets/icon-search.svg'

export default function Home() {
  return (
    <Landing>
      <div className='flex w-full h-screen relative'>
        <div className='absolute flex justify-between top-7 z-10 w-full px-[104px]'>
          <div className='w-[340px]'>
            <Image
              alt='logo'
              src={Logo}
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
                src={SearchIcon}
                width='28'
                height='28'
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
        <div className={`w-1/3 bg-black bg-opacity-50 bg-[url('../assets/cover-img-1.png')] bg-cover bg-blend-multiply relative`}>
          <div className='flex flex-row justify-between px-11 text-[42px] absolute bottom-11'>
            <p className='leading-snug font-semibold break-word'>Why you should reconsider the Inca Trail, Peru Trip</p>
            <Image
              alt='arrow-right'
              src={ArrowRight}
            ></Image>
          </div>
        </div>
        <div className={`w-1/3 bg-black bg-opacity-50 bg-[url('../assets/cover-img-2.png')] bg-cover bg-blend-multiply relative`}>
        <div className='flex flex-row justify-between px-11 text-[42px] absolute bottom-11'>
          <p className='leading-snug font-semibold break-word'>The Hidden Powers of The Northern Lights, Iceland</p>
            <Image
              alt='arrow-right'
              src={ArrowRight}
            ></Image>
          </div>
        </div>
        <div className={`w-1/3 bg-black bg-opacity-50 bg-[url('../assets/cover-img-3.png')] bg-cover bg-blend-multiply relative`}>
        <div className='flex flex-row justify-between px-11 text-[42px]  absolute bottom-11'>
          <p className='leading-snug font-semibold break-word'>10 Facts you didn’t know about The Blue Hole, Belize</p>
            <Image
              alt='arrow-right'
              src={ArrowRight}
            ></Image>
          </div>
        </div>
      </div>
    </Landing>
  )
}
