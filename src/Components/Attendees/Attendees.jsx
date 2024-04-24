

const Attendees = () => {
    return (
        <div className="mt-12 space-y-4">
            <div className="space-y-4">
                <h1 className="md:text-5xl text-2xl font-bold">Automated QR Scanner</h1>
                <p className="text-xl text-purple-500">Scan & Verify The Attendees Directly By Our QR Scanning Solution.</p>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-8">
                <div className="card p-6 w-64   bg-indigo-600 bg-opacity-10 space-y-4 ">
                    <div className="btn btn-circle">
                        <img src="/src/assets/resources/icon/click (1) 1.png" />
                    </div>
                    <h1 className="text-3xl font-bold text-left">One Click</h1>
                    <p className="text-sm text-left font-light">QR Verification System</p>
                </div>
                <div className="card p-6 w-64   bg-indigo-600 bg-opacity-10 space-y-4 ">
                    <div className="btn btn-circle">
                        <img src="/src/assets/resources/icon/click.png" />
                    </div>
                    <h1 className="text-3xl font-bold text-left">One Time</h1>
                    <p className="text-sm text-left font-light">QR code</p>
                </div>
                <div className="card p-6 w-64   bg-indigo-600 bg-opacity-10 space-y-4 ">
                    <div className="btn btn-circle">
                        <img src="/src/assets/resources/icon/check 1.png" />
                    </div>
                    <h1 className="text-3xl font-bold text-left">Easy Access</h1>
                    <p className="text-sm text-left font-light">Lorem Ipsum Access</p>
                </div>
                <div className="card p-6 w-64   bg-indigo-600 bg-opacity-10 space-y-4 ">
                    <div className="btn btn-circle">
                        <img src="/src/assets/resources/icon/Vector-1.png" />
                    </div>
                    <h1 className="text-3xl font-bold text-left">Mail</h1>
                    <p className="text-sm text-left font-light">Send Bulk Personalized Mail With Attachments</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Attendees;