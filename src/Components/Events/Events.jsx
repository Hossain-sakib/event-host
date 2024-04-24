import { FaLocationDot } from "react-icons/fa6";

const Events = () => {
    return (
   
            <div className="flex flex-col items-center justify-center mt-12 space-y-4">
                <h1 className="md:text-5xl text-2xl font-bold">Events</h1>
                <ul className="flex items-center justify-center gap-2">
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>All</a></li>
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>For You</a></li>
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>This Day</a></li>
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>This Week</a></li>
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>Music</a></li>
                    <li className="hover:bg-indigo-500 hover:text-white px-3 rounded-md"><a>Union</a></li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                    <div className="card p-4 w-96 shadow-xl bg-indigo-600 bg-opacity-10 space-y-4 relative">
                        <img className="relative" src="/public/resources/Rectangle 16.png" />
                        <div className="absolute z-10 top-4 left-4 right-4 flex items-center justify-between px-4 pointer-events-none">
                            <a className="bg-indigo-500 text-white px-3 rounded-md pointer-events-auto">Online</a>
                            <a className="bg-indigo-500 text-white px-3 rounded-md flex items-center gap-2 pointer-events-auto"><img src="/public/resources/icon/Heart.png" alt="" />Favorite</a>
                        </div>
                        <p className="text-indigo-500 font-medium">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                        <div className="flex items-start">
                            <div className="text-left space-y-4">
                                <a className="bg-indigo-500 text-white pb-1 px-3 rounded-md">Music</a>
                                <p className="flex items-center gap-2 text-lg font-semibold"><span className="text-indigo-500"><FaLocationDot /></span> Celebrity Convention Hall</p>
                                <p className="text-2xl font-bold">ROUFIAN’S HSC-24 RAG DAy</p>
                                <div className="card-actions">
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-indigo-500 hover:bg-indigo-300"><img src="/public/resources/icon/Vector.png" alt="" />See Ticket</div>
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-white "><span className="text-2xl text-indigo-500">20</span><span className="text-black">Seat <br /> left</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-10 md:space-y-12">
                                <div className="rounded-md flex flex-col px-4 py-2 border-none text-white font-semibold bg-white "><span className="text-black">Apr</span><span className="text-3xl text-indigo-500">20</span><span className="text-black">10:00 PM</span>
                                </div>
                                <div className="text-lg text-indigo-500 font-semibold hover:font-bold">
                                    See more
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 w-96 shadow-xl bg-indigo-600 bg-opacity-10 space-y-4 relative">
                        <img className="relative" src="/public/resources/Rectangle 16-1.png" />
                        <div className="absolute z-10 top-4 left-4 right-4 flex items-center justify-between px-4 pointer-events-none">
                            <a className="bg-indigo-500 text-white px-3 rounded-md pointer-events-auto">Online</a>
                            <a className="bg-indigo-500 text-white px-3 rounded-md flex items-center gap-2 pointer-events-auto"><img src="/public/resources/icon/Heart.png" alt="" />Favorite</a>
                        </div>
                        <p className="text-indigo-500 font-medium">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                        <div className="flex items-start">
                            <div className="text-left space-y-4">
                                <a className="bg-indigo-500 text-white pb-1 px-3 rounded-md">Music</a>
                                <p className="flex items-center gap-2 text-lg font-semibold"><span className="text-indigo-500"><FaLocationDot /></span> Celebrity Convention Hall</p>
                                <p className="text-2xl font-bold">ROUFIAN’S HSC-24 RAG DAy</p>
                                <div className="card-actions">
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-indigo-500 hover:bg-indigo-300"><img src="/public/resources/icon/Vector.png" alt="" />See Ticket</div>
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-white "><span className="text-2xl text-indigo-500">20</span><span className="text-black">Seat <br /> left</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-10 md:space-y-12">
                                <div className="rounded-md flex flex-col px-4 py-2 border-none text-white font-semibold bg-white "><span className="text-black">Apr</span><span className="text-3xl text-indigo-500">20</span><span className="text-black">10:00 PM</span>
                                </div>
                                <div className="text-lg text-indigo-500 font-semibold hover:font-bold">
                                    See more
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 w-96 shadow-xl bg-indigo-600 bg-opacity-10 space-y-4 relative">
                        <img className="relative" src="/public/resources/Rectangle 16-2.png" />
                        <div className="absolute z-10 top-4 left-4 right-4 flex items-center justify-between px-4 pointer-events-none">
                            <a className="bg-indigo-500 text-white px-3 rounded-md pointer-events-auto">Online</a>
                            <a className="bg-indigo-500 text-white px-3 rounded-md flex items-center gap-2 pointer-events-auto"><img src="/public/resources/icon/Heart.png" alt="" />Favorite</a>
                        </div>
                        <p className="text-indigo-500 font-medium">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                        <div className="flex items-start">
                            <div className="text-left space-y-4">
                                <a className="bg-indigo-500 text-white pb-1 px-3 rounded-md">Music</a>
                                <p className="flex items-center gap-2 text-lg font-semibold"><span className="text-indigo-500"><FaLocationDot /></span> Celebrity Convention Hall</p>
                                <p className="text-2xl font-bold">ROUFIAN’S HSC-24 RAG DAy</p>
                                <div className="card-actions">
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-indigo-500 hover:bg-indigo-300"><img src="/public/resources/icon/Vector.png" alt="" />See Ticket</div>
                                    <div className="btn btn-sm md:btn-md border-none text-white font-semibold bg-white "><span className="text-2xl text-indigo-500">20</span><span className="text-black">Seat <br /> left</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-10 md:space-y-12">
                                <div className="rounded-md flex flex-col px-4 py-2 border-none text-white font-semibold bg-white "><span className="text-black">Apr</span><span className="text-3xl text-indigo-500">20</span><span className="text-black">10:00 PM</span>
                                </div>
                                <div className="text-lg text-indigo-500 font-semibold hover:font-bold">
                                    See more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   

    );
};

export default Events;
