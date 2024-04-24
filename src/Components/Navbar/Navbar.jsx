const Navbar = () => {
    const navLinks = <>
        <li><a className="font-semibold text-base overflow-hidden transition-all hover:scale-105 py-2 hover:shadow-2xl text-white">Home</a></li>
        <li><a className="font-semibold text-base overflow-hidden transition-all hover:scale-105 py-2 hover:shadow-2xl text-white">Events</a></li>
        <li><a className="font-semibold text-base overflow-hidden transition-all hover:scale-105 py-2 hover:shadow-2xl text-white">About us</a></li>
        <li><a className="font-semibold text-base overflow-hidden transition-all hover:scale-105 py-2 hover:shadow-2xl text-white">Contacts</a></li>
    </>
    return (
        <div className="md:px-8 navbar rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-indigo-600 to-purple-400 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="h-4" src="/src/assets/resources/icon/EventHost.png" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="btn-sm btn-circle">
                        <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>

                <div className="bg-transparent">
                    <img src="/src/assets/resources/icon/Group 7.png" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;