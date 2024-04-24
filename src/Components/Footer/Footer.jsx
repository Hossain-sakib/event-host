import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="space-y-4 p-10 text-white mt-12 bg-gradient-to-r from-indigo-600 to-purple-400">
            <footer className="footer ">

                <div className="text-left">
                    <p className="text-3xl">
                        Event<span className="">Host</span></p>
                    <br />
                    <p>IDEA Project, ICT Tower (0th Floor),<br /> Plot: E-14X, Agargaon, Dhaka - 1207 <br />
                        02222-222222, 01111111111</p>
                </div>

                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <a className="link link-hover">Event Dashboard</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy 7 Refund Policy</a>
                </nav>
                <div>
                    <p>Follow Us</p>
                    <div className="flex items-center gap-4 text-2xl">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaYoutube></FaYoutube>
                    </div>
                </div>
            </footer>
            <footer className="footer py-4 border-t-4 border-white border-opacity-40">
               <div className="flex gap-2 items-center justify-center">
                <p>Pay With</p>
                <img className="w-8 h-6" src="/src/assets/resources/image 9.png" alt="" />
                <img className="w-8 h-6" src="/src/assets/resources/Group 40.png" alt="" />
                <img className="w-8 h-6" src="/src/assets/resources/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo 1.png" alt="" />
               </div>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                       <p>©2024 TickHost & UVTR. All right reserved</p>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;