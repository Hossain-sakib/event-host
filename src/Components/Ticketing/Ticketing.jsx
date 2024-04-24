const Ticketing = () => {
    return (
        <div className="mt-12 flex flex-col items-center justify-center  bg-gradient-to-t from-purple-200 to-transparent rounded-3xl">
            <div className="space-y-4">
                <h1 className="md:text-5xl text-2xl font-bold">Simplify Ticketing</h1>
                <p className="text-xl text-purple-500">First Ever Unique QR Ticketing Platform For Event Registration & Booking</p>
                <button className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white btn btn-sm md:btn-md">
                    <img src="/public/resources/icon/fi-sr-shield-check.png" alt="" /> Secure Payment With
                </button>
                <div className="flex items-baseline gap-1">
                    <div className="h-72 py-24 pl-12 bg-fuchsia-800 bg-opacity-90 rounded-tl-3xl">
                        <img className="w-48 h-28" src="/public/resources/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo 1.png"  />
                    </div>
                    <div className="py-40 px-12 bg-pink-600 rounded-t-3xl">
                        <img className="w-48 h-28" src="/public/resources/image 9.png"  />
                    </div>
                    <div className="h-72 py-24 pr-12 bg-orange-600  rounded-tr-3xl">
                        <img className="w-48 h-28" src="/public/resources/Group 40.png"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticketing;