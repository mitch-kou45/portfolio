import { useEffect } from "react";
export const Navbar = ({menuOpen,setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ?  "hidden" : "";
    }, [menuOpen]);

    return ( 
    <nav className="fixed top-0 w-full z-40 bg-[rbga(10,10,10, 0.8)] backdrop-blur-lg border-b border-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className ="flex justify-between items-center h-16">
                <a href = "#home" className="font-mono text-xl font-bold"> 
                    {" "}
                    Mitch<span className="text-purple-500">.Kou</span>{" "}
                    </a>
                    <div className="w-7 h05 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) =>! prev)}
                        >
                        &#9776; {/* Hamburger icon */}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href="#home" 
                        className="text-gray-300 hove:text transition-colors"
                    > 
                    Home
                    </a>
                    <a 
                            href="#about" 
                            className="text-gray-300 hove:text transition-colors"
                        > 
                        About
                    </a>
                    <a 
                            href="#projects" 
                            className="text-gray-300 hove:text transition-colors"
                        > 
                        Projects
                    </a>
                    <a 
                            href="#contact" 
                            className="text-gray-300 hove:text transition-colors"
                        > 
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};