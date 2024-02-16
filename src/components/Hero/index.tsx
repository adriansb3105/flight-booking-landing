const Hero = () => {
  return <div className="hero z-[1] w-full h-[100vh] grid place-items-center bg-[#141b2b] relative">
    <div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28">
        <div className="flex flex-col gap-3 left-animation w-full">
            <span className="text-blue-400 text-[28px] font-medium">
                Welcome To Our Website!
            </span>
            <span className="text-white font-medium md:text-[60px] text-[45px]">
                Luxury Experience <br /> With Our Services
            </span>

            {
                //13:40min
                //https://www.youtube.com/watch?v=-3iVVFaiD88&t=257s
            }

        </div>
    </div>
  </div>
}

export default Hero