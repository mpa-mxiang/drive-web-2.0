import { Link } from "react-scroll";

const Nav = () => {
    const content = <>
        <div className="">
            <ul>
                <Link to="App">
                    <li>Home</li>
                </Link>
                <Link to="About">
                    <li>About</li>
                </Link>
                <Link to="Package">
                    <li>Packages</li>
                </Link>
                <Link to="Book">
                    <li>Book a class</li>
                </Link>
                <Link to="App">
                    <li>More</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex gap-8 mr-16 text-[18px]">
                        <ul>
                            <Link to="App">
                            <li>Home</li>
                            </Link>
                            <Link to="About">
                                <li>About</li>
                            </Link>
                            <Link to="Package">
                                <li>Packages</li>
                            </Link>
                            <Link to="Book">
                                <li>Book a class</li>
                            </Link>
                            <Link to="App">
                                <li>More</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
