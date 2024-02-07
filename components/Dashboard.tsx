"use client"
import { useUser } from "@clerk/nextjs"
import Stock from "./dashboard/Stock"

export const Dashboard = () => {
    const {isSignedIn, user, isLoaded} = useUser()

    if (!isLoaded) {
        return null;
    }
    return (
        <div className="flex flex-col items-center">
            <div className="justify-center mb-20">
                <h1 className="text-5xl font-bold">Hello, {user?.firstName}!</h1>
            </div>
            <div className="justify-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-10 w-[75%] h-full mt-4">
                <div className="rounded-lg shadow-lg pt-2 space-y-4">
                    <div className="flex flex-row justify-between mx-2 items-center">
                        <p className="text-sm font-semibold bg-black inline-block text-white px-1 rounded-sm">NASDAQ</p>
                        <p className="text-sm font-semibold bg-green-500 inline-block text-white px-1 rounded-sm">+1.3%</p>
                    </div>
                    <div>
                        <Stock country="USA" companyName="BlackRock" price={787.98}/>
                        <Stock country="USA" companyName="Lockheed Martin" price={426.95} />
                        <Stock country="USA" companyName="Bank Of America" price={33.02} />
                    </div>
                </div>
                <div className="rounded-lg shadow-lg pt-2 space-y-4">
                    <div className="flex flex-col mx-2">
                        <div className="flex flex-row justify-center">
                            <h1 className="text-xl font-semibold">Watchlist</h1>
                        </div>
                        <div>
                            <Stock country="USA" companyName="Bank Of America" price={33.02} removable/>
                            <Stock country="Germany" companyName="Adidas AG" price={13.92} removable/>
                            <Stock country="Sweden" companyName="African Oil Corps" price={21.32} removable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}