const Banner = () => {
    return (
        <div className="mt-12 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-25"></div>
            <div className="w-full h-full" style={{ backgroundImage: 'url(https://i.ibb.co/W3rdQp5/Rectangle-8.png)', backgroundSize: 'cover' }}>
                <div className="text-white text-left p-8 md:p-24 flex flex-col items-start justify-start space-y-4">
                    <h1 className="md:text-5xl text-2xl font-bold">CMA Fest</h1>
                    <p className="text-sm md:text-lg">Make memories that will last a lifetime. See your favorite <br /> artists live at CMA Fest!</p>
                    <div className="flex gap-4">
                        <button className="btn btn-xs md:btn-sm border-none text-white font-semibold bg-indigo-600"> <img src="/src/assets/resources/icon/Vector.png" alt="" /> Get Ticket</button>
                        <button className="btn btn-xs md:btn-sm btn-outline text-white font-semibold">Explore All Events</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
