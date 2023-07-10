'use client'
import Image from 'next/image'
import { useState } from 'react'

function Avatar({ src }) {
  const [hasLoaded, setHasLoaded] = useState(false)
  return (
    <div
      className={`${
        hasLoaded ? '' : 'animate-pulse'
      } rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 bg-slate-700 w-full h-full`}
    >
      <Image
        src={src}
        alt="Developer Avatar"
        width={window && window.innerWidth > 640 ? 186 : 80}
        height={window && window.innerWidth > 640 ? 186 : 80}
        quality={60}
        onLoad={() => setHasLoaded(true)}
        className="rounded-full w-full h-full overflow-hidden"
      />
    </div>
  )
}

export default Avatar
