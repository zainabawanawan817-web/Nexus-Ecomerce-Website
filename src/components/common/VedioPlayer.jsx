import React from 'react'

const VedioPlayer = ({src}) => {
  return (
    <>
    <div className="max-w-[1200px] md:mx-auto mx-2  md:m-5 m-2 overflow-hidden">
      <video className='rounded-3xl border border-gray-600' src={src} autoPlay muted loop playsInline/>
    </div>
    </>
  )
}

export default VedioPlayer