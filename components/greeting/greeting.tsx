import Image from "next/image"

export function Greeting() {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      {/* Context Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/assets/logos/context.svg"
          alt="Context"
          width={20}
          height={32}
          className="w-[20px] h-[32px] flex-shrink-0"
          style={{ aspectRatio: '5/8' }}
        />
      </div>
      
      {/* Greeting Text */}
      <h1 
        className="text-center"
        style={{
          color: 'rgba(20, 20, 20, 0.88)',
          fontFamily: '"Test Signifier", serif',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '125%',
          letterSpacing: '-0.4px'
        }}
      >
        Good afternoon, Roy
      </h1>
    </div>
  )
} 