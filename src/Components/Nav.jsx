import { Link } from "react-scroll";
import {FaTimes} from 'react-icons/fa';
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-15 flex flex-col">
                <Link spy={true} smooth={true} to="App">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Package">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Packages</li>
                </Link>
                <Link spy={true} smooth={true} to="Book">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Book a class</li>
                </Link>
                <Link spy={true} smooth={true} to="App">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">More</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-xl font-bold">Max's Driving School</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex gap-8 mr-6 text-[18px]">
                        <ul className="flex gap-6">
                            <Link spy={true} smooth={true} to="App">
                            <li className="hover:text-fuchsia-600 transtion border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-600 transtion border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Package">
                                <li className="hover:text-fuchsia-600 transtion border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Packages</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Book">
                                <li className="hover:text-fuchsia-600 transtion border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Book a class</li>
                            </Link>
                            <Link spy={true} smooth={true} to="App">
                                <li className="hover:text-fuchsia-600 transtion border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">More</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <BiMenu/>}
                </button>
            </div>
        </nav>
    )
}

export default Nav;
