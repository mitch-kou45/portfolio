
export const Navbar = () => {
    return ( 
    <nav className="fixed top-0 w-full z-40 bg-[rbga(10,10,10, 0.8)] backdrop-blur-lg border-b border-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className ="flex justify-between items-center h-16">
                <a href = "#home" className="font-mono text-xl font-bold"> 
                    {" "}
                    Mitch<span className="text-purple-500">.Kou</span>{" "}
                    </a>
            </div>

        </div>
    </nav>
    );
};