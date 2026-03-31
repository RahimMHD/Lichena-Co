import Locationsinfo from "./locationsinfo"


function LocationsCof() {

    return (
        <div className="h-[200vh]">

            <div className="w-full h-[100vh] mt-48 flex flex-col items-center">
                <div className="bg-white w-60 h-15 p-4 flex justify-center items-center rounded-md relative overflow-hidden mb-44">
                    <span className="absolute -top-1 -left-10 w-16 h-8 bg-[#007545] rounded-full"></span>
                    <span className="absolute top-6 -left-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                    <h3 className="text-[#007545] text-2xl font-extrabold">MOCHA BREW</h3>
                    <span className="absolute -top-1 -right-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                    <span className="absolute top-6 -right-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                </div>

                <div className="w-10/12 grid grid-cols-3 gap-x-4 justify-items-center">
                    <div className="w-72 h-72 rounded-full bg-[#007545] text-center flex flex-col justify-items-center relative hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <img 
                            src="../../public/cups coffee/pngwing.com (13).png" 
                            alt="" 
                            className="w-64 absolute -top-28 left-1/2 transform -translate-x-1/2"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <div className="bg-white w-60 h-15 p-4 flex justify-items-center rounded-md relative overflow-hidden px-8 py-2 rounded-full -bottom-6 left-1/2 transform -translate-x-1/2 text-lg font-bold">
                                <span className="absolute -top-1 -left-10 w-16 h-8 bg-[#007545] rounded-full"></span>
                                <span className="absolute top-6 -left-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                                <h3 className="text-[#007545] text-2xl font-extrabold">MOCHA BREW</h3>
                                <span className="absolute -top-1 -right-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                                <span className="absolute top-6 -right-10 w-16 h-10 bg-[#007545] rounded-full"></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-72 rounded-4xl bg-white text-center flex flex-col justify-center relative hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <img 
                            src="../../public/cups coffee/pngwing.com (13).png" 
                            alt="" 
                            className="w-52 absolute -top-20 left-1/2 transform -translate-x-1/2"
                        />
                        <div className="w-full p-2 bg-[#007545] absolute top-52 left-0">
                            <p className="text-2xl font-extrabold">VANILLA LITE</p>
                        </div>
                        <div className="bg-[#007545] px-8 py-2 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-lg font-bold">
                            POPULAR
                        </div>
                    </div>
                    <div className="w-72 h-72 rounded-4xl bg-white text-center flex flex-col justify-center relative hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <img 
                            src="../../public/cups coffee/pngwing.com (13).png" 
                            alt="" 
                            className="w-52 absolute -top-20 left-1/2 transform -translate-x-1/2"
                        />
                        <div className="w-full p-2 bg-[#007545] absolute top-52 left-0">
                            <p className="text-2xl font-extrabold">VANILLA LITE</p>
                        </div>
                        <div className="bg-[#007545] px-8 py-2 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-lg font-bold">
                            POPULAR
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <Locationsinfo />
            </div>
        </div>
    )
}

export default LocationsCof