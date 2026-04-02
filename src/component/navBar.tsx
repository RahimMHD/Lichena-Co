
import { FaShoppingCart, FaUser } from 'react-icons/fa'

function NavBar() {
    return (
        <header className="mx-16 px-1 py-4 flex justify-between items-center">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-2 cursor-pointer">
                <a href="/" className="flex items-center gap-2">
                    <img src="/public/logo-food-ui.png" alt="Logo" className="w-16 h-16 bg-white rounded-full" />
                    <h1 className="text-xl font-bold">Lichena&Co</h1>
                </a>    
            
            </div>

            {/* <!-- Nav Links --> */}
            <nav className="navbar w-[783px] hidden md:flex items-center justify-between gap-8 bg-white text-black px-6 py-2 rounded-full font-semibold">
                <a 
                href="/" 
                id="act-sec" 
                className="navbar-item font-bold hover:bg-[#007545] px-[40px] radius-[30px] py-[5px] transition-all duration-300 ease-in-out">
                    Home
                </a>
                <a 
                href="/Menu" 
                className="navbar-item font-bold hover:bg-[#007545] px-[40px] radius-[30px] py-[5px] transition-all duration-300 ease-in-out">
                    Menu</a>
                <a 
                href="/Rewards" 
                className="navbar-item font-bold hover:bg-[#007545] px-[40px] radius-[30px] py-[5px] transition-all duration-300 ease-in-out">
                    Rewards
                </a>
                <a 
                href="/GiftCards" 
                className="navbar-item font-bold hover:bg-[#007545] px-[40px] radius-[30px] py-[5px] transition-all duration-300 ease-in-out">
                    Gift Cards
                </a>
            </nav>

            {/* <!-- Icons --> */}
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-white text-green-900 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
                    <FaUser className="w-6 h-6 text-black" />
                </button>
                <button className="w-10 h-10 bg-[#007545] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
                    <FaShoppingCart className="text-white w-6 h-6" />
                </button>
            </div>
        </header>
        
    )
}

export default NavBar