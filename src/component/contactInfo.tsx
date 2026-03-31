import { BiArrowFromLeft } from "react-icons/bi"

function ContactInfo() {
    return (
        <div className="mt-36 relative">
            <div className="-ml-28 mb-28 w-[120%] h-24 bg-[#007545] flex justify-between gap-30 items-center text-4xl font-bold">
                <h3>LECHENA&CO</h3>
                <h3>LECHENA&CO</h3>
                <h3>LECHENA&CO</h3>
                <h3>LECHENA&CO</h3>
                <h3>LECHENA&CO</h3>
            </div>

            <div className="h-[400px] flex gap-20 justify-center px-16">
                <div className="w-[45%] h-full bg-white rounded-4xl p-8 text-[#007545] flex flex-col">
                    <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
                    <label className="font-bold text-2xl" htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" className="border border-green-800 border-4 rounded-md p-2 my-4"/>
                    <label className="font-bold text-2xl" htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" className="border border-green-800 border-4 rounded-md p-2 my-4"/>

                    <input type="button" value="Submit" className="relative bg-[#007545] text-white text-2xl font-bold py-3 px-4 mt-4 cursor-pointer rounded-md hover:bg-green-700"/>
                </div>
                <div className="w-[45%] h-[70%] mt-20 bg-[#007545] rounded-4xl text-white flex flex-col justify-center items-center gap-4 relative">
                    <h2 className="text-3xl font-bold">THANK YOU!</h2>
                    <p className="mb-6">Hang tight! We're coming your way soon!</p>

                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <BiArrowFromLeft className="fas fa-check-circle text-5xl text-[#007545] font-bold"/>
                    </div>
                </div>
            </div>

            <div className="w-[95%] h-[450px] bg-[#007545] grid grid-cols-3 items-start gap-15 mt-20 mx-auto pt-20 p-12 rounded-4xl">
                <div className="w-full h-24 bg-[#007545] rounded-4xl flex flex-col items-center justify-center text-white">
                    <img src="../../public/logo-food-ui.png" className="w-24 h-24 mr-4" alt="" />
                    <p>Indulge in the perfect blend of coffee and ice - the Frappuccino    your cool coffee recape. Elevate your coffee moment.</p>
                </div>
                <div className="w-full h-24 bg-[#007545] rounded-4xl flex flex-col items-center justify-center text-white">
                    <p>Experience the perfect harmony of flavors in every sip.</p>
                    <img src="../../public/logo-food-ui.png" className="bg-[#ffffff90] rounded-full mt-9 w-32 h-32 ml-4" alt="" />
                </div>
                <div className="w-full h-24 bg-[#007545] rounded-4xl flex flex-col items-start justify-center text-white">
                    <h2 className="text-2xl font-bold">SUBSCRIBE</h2>
                    <div className="my-4">
                        <input type="text" placeholder="Enter Your Email" className="bg-white text-[#007545] placeholder:text-[#007545] border border-[#007545] rounded-md p-2"/>
                        <input type="button" value="Submit" className="bg-black text-white text-sm font-bold py-2 px-4 cursor-pointer rounded-md hover:bg-green-500"/>
                    </div>
                    <p>Subscribe to our newsletter for the latest updates and offers.</p>
                </div>
            </div>

                <h2 className="text-[270px] w-full h-[220px] flex justify-center items-center font-bold tracking-wider text-[#ffffff80] p-0 -mt-40">CONTACT</h2>
            {/* <div className="w-full h-[250px] relative flex items-center justify-center -mt-20"> */}
            {/* </div>     */}
        </div>
    )
}

export default ContactInfo