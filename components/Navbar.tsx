import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between pt-3 pb-3 bg-black">
            <div className="flex items-center space-x-8 ml-8">
                <h1 className="text-gray-300 text-2xl font-semibold">StockEx</h1>
                <input type="text" placeholder="Search" className="rounded-2xl pl-2 py-1"/>
            </div>
            <div className="text-white">
                <ul className="flex space-x-8">
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
            </div>
            <div className="mr-8">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}