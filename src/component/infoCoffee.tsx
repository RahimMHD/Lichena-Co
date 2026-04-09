function infoCoffee() {

  const lechenaNimationArray = ["LECHENA-&-CO", "LECHENA-&-CO", "LECHENA-&-CO", "LECHENA-&-CO"]

  return (
    <div className='w-full h-[100vh] relative'>
      <div className='absolute top-0 right-[-20px] opacity-50 z-0'>
        <img src="../../public/pngwing.com__16_-removebg-preview.png" alt="" className='w-[175px] rotate-[35deg] blur-xs drop-shadow-xl/80 drop-shadow-[#8B9C41]' />
      </div>
      <div className='relative z-10 flex top-32 justify-center h-full'>
        <h1 className='text-white text-9xl font-bold w-3/4 text-center'>UNMATCHED QUALITY</h1>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full z-20'>
        <img
          src="../../public/cups coffee/pngwing.com (11).png"
          alt="Coffee Cup"
          className='w-[410px] -mt-4 text-center z-3' />
      </div>
      <div className="absolute top-8/12 left-24 w-60">
        <p className="font-extralight text-sm">Indulge in the perfect blend of coffee and ice - the Frappuccino    your cool coffee recape. Elevate your coffee moment.</p>
      </div>
      <div className="absolute top-11/12 right-20 w-60">
        <p className="font-extralight text-sm">Indulge in the perfect blend of coffee and ice - the Frappuccino    your cool coffee recape. Elevate your coffee moment with a creamy. Icy Frappuccino Ought,</p>
      </div>

      {/* ↓ LINE 1: added overflow-hidden wrapper div for rotation */}
      <div className="-rotate-6 overflow-hidden w-[140%] -ml-20 -mt-52 z-26 bg-[#007545]">
        {/* ↓ LINE 2: ul gets w-max and animate-infinite-scroll, removed bg and rotation */}
      <ul className="flex gap-10 px-20 p-2 tracking-wide w-max animate-infinite-scroll z-99">
        {[...lechenaNimationArray, ...lechenaNimationArray].map((_ele, _ind) => (
          <li key={_ind} className="flex-shrink-0 text-[45px] font-extrabold whitespace-nowrap">{_ele}</li>
        ))}
      </ul>
      </div><div className='absolute bottom-[-180px] left-0 opacity-50 z-0'>
          <img src="../../public/pngwing.com__16_-removebg-preview.png" alt="" className='w-[150px] -rotate-[10deg] blur-[3px] drop-shadow-xl/80 drop-shadow-[#8B9C41]' />
      </div>
    </div>
  )
}

export default infoCoffee