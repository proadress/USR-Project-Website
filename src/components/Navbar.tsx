import Link from "next/link"

const Navber = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-regal-blue">
                <div className="flex items-center justify-between p-1">
                    <Link href="/" className="flex flex-row items-center space-x-4">
                        <img src="logo.png" className="w-24" alt="Logo" />
                        <div className=" font-bold text-xl text-white">海大USR計畫</div>
                    </Link>
                    <div className="ml-auto flex space-x-4 p-4 items-center">
                        <Link className="border-b-4 border-stone-700 btn btn-ghost text-white" href="/">
                            主頁
                        </Link>
                        <Link className="border-b-4 border-stone-700 btn btn-ghost text-white" href="/login">
                            登入
                        </Link>
                        <div className="form-control">
                            <input type="text" placeholder="搜尋" className="input input-bordered w-24 h-8 md:w-auto bg-gray-300 placeholder:text-gray-500" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navber;
