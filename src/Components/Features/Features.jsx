import { FaCheckCircle } from "react-icons/fa";


const Features = () => {
    return (
        <div className="mt-12">
            <div className="rounded-3xl bg-indigo-500 ">
                <div className="flex pt-4 flex-col md:flex-row md:gap-12 md:pt-36 md:px-12 -mb-16 items-center justify-center space-y-2">
                    <img src="/src/assets/resources/Group 29.png" alt="Movie" />
                    <div className="text-white md:text-left space-y-4">
                        <h1 className="text-4xl font-semibold">Host Your Even Easily & Automatically <br /> With Us</h1>
                        <p className="text-2xl">We Provide The Best Event Ticketing & Management Solutions</p>
                        <div className="px-4 md:px-0">
                            <p className="text-lg flex gap-2 items-center"><FaCheckCircle />Host Your Event With Easy Steps!</p>
                            <p className="text-lg flex gap-2 items-center"><FaCheckCircle />Automated Payment System & Ticket Will Be Sent To Mail.</p>
                            <p className="text-lg flex gap-2 items-center"><FaCheckCircle />Access To Registration And Transaction Reports.</p>
                            <p className="text-lg flex gap-2 items-center"><FaCheckCircle />Send Bulk Personalized Mail With Attachments.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/resources/Group.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;