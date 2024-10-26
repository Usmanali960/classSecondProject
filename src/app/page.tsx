const page = () => {
    return (
        <div className="bg-backgroundColor text-white h-[200vh] overflow-x-hidden w-screen">
            <div className="nav flex items-center justify-between py-4 px-32">
                <div className="brandLogo">
                    <h1 className="font-bold text-xl tracking-normal">BrandName</h1>
                </div>
                <nav className="flex items-center">
                    <ul className="flex items-center gap-6 text-sm  ml-[-20vw] font-medium">
                        <li className="hover:opacity-50 cursor-pointer">Home</li>
                        <li className="hover:opacity-50 cursor-pointer">Product</li>
                        <li className="hover:opacity-50 cursor-pointer">Pricing</li>
                        <li className="hover:opacity-50 cursor-pointer">Contact</li>
                    </ul>
                </nav>

                <div className="navBtn">
                    <button className="mr-8 hover:opacity-50">Login</button>
                    <button className="bg-mainColor hover:bg-blue-500 text-sm font-medium p-2 rounded uppercase">Join Us</button>
                </div>
            </div>

            <main className="flex flex-col text-center mt-10 items-center justify-center">
                <h1 className="text-blue-500 mb-8 text-sm">Welcome</h1>
                <h1 className="text-4xl font-bold leading-[8vh]">Selling on the <br />internet like a pro</h1>
                <p className="text-sm mt-5 font-medium text-white max-w-80">We know how large objects will act, but things on a
                    small scale just do not act that way.</p>
                <div className="btnGroup flex gap-2 mt-5">
                    <button className="bg-mainColor py-2 rounded text-sm font-medium border-[1px] border-mainColor hover:bg-transparent px-6">Get Quote Now</button>
                    <button className=" py-2 rounded text-sm font-medium border-[1px] border-mainColor px-6 hover:bg-mainColor">Learn More</button>
                </div>
            </main>

            <div className="cards overflow-x-hidden items-center flex-wrap justify-center gap-10 mt-32 flex grid-cols-3">
                <div className="card bg-white h-[310px] p-10 w-[320px]">
                    <div className="cardData">
                        <div className="cardLogo bg-cardLogoFirst h-[70px] rounded-lg w-[70px]"></div>
                    </div>
                    <h1 className="text-black text-sm mt-4 font-semibold">training Courses</h1>
                    <div className="bg-Card h-1 w-12 rounded mt-4"></div>
                    <p className="mt-4 text-[1.1vw] text-gray-600">The gradual accumulation of
                        information about atomic and
                        small-scale behaviour...</p>
                </div>

                <div className="card bg-white h-[310px] p-10 w-[320px]">
                    <div className="cardData">
                        <div className="cardLogo h-[70px] rounded-lg w-[70px] bg-cardLogoSecond"></div>
                    </div>
                    <h1 className="text-black text-sm mt-4 font-semibold">2,769 online courses</h1>
                    <div className="h-1 w-12 rounded mt-4 bg-Card"></div>
                    <p className="mt-4 text-[1.1vw] text-gray-600">The gradual accumulation of
                        information about atomic and
                        small-scale behaviour...</p>
                </div>

                <div className="card bg-mainColor h-[310px]  p-10 w-[320px]">
                    <div className="cardData">
                        <div className="cardLogo h-[70px] rounded-lg w-[70px] bg-white"></div>
                    </div>
                    <h1 className="text-sm mt-4 font-semibold text-white">training Courses</h1>
                    <div className="h-1 w-12 rounded mt-4 bg-white"></div>
                    <p className="mt-4 text-[1.1vw] text-white">The gradual accumulation of
                        information about atomic and
                        small-scale behaviour...</p>
                </div>

            </div>
        </div>
    )
}

export default page

