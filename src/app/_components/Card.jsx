import Image from "next/image"

export default function Card({ location, img }) {
  return (
    <div className='flex-1 max-w-[490px]'>
      <Image 
        alt={`${location}-img`}
        src={img}
        width='490'
        height='452'
        className='pb-7 rounded-[32px] flex-initial'
      />
      <p className='text-[36px] font-bold'>{location}</p>
    </div>
  )
}