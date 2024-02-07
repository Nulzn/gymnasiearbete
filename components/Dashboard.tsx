"use client"
import { useUser } from "@clerk/nextjs"
import Stock from "./dashboard/Stock"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import { DonutChart, LineChart } from "@mantine/charts"
import { data } from "./dashboard/Economy"
import { dataYield } from "./dashboard/Yield"

export const Dashboard = () => {
    const {isSignedIn, user, isLoaded} = useUser();
    const [additionalStocks, setAdditionalStocks] = useState<boolean>(false);

    useEffect(() => {
        function RenderAdditionalStocks() {
            const stockExplorerDiv = document.getElementById("show-stocks");
        }
        RenderAdditionalStocks()
    }, [additionalStocks])

    return (
        <div className="flex flex-col items-center">
            <div className="justify-center mb-20">
                <h1 className="text-5xl font-bold">Hello, {user?.firstName}!</h1>
            </div>
            <div className="justify-center">
                <h1 className="text-3xl font-bold underline">Dashboard</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-[75%] h-full mt-4">
                <div className="rounded-lg shadow-xl pt-2 space-y-4 bg-stone-900">
                    <div className="flex flex-row justify-between mx-2 items-center">
                        <p className="text-sm font-semibold bg-black inline-block text-white px-1 rounded-sm cursor-default">NASDAQ</p>
                        
                        <p className="text-sm font-semibold bg-green-500 inline-block text-white px-1 rounded-sm cursor-default">+1.3%</p>
                    </div>
                    <div>
                        <div id="show-stocks">
                            <Stock country="USA" companyName="BlackRock" price={787.98}/>
                            <Stock country="USA" companyName="Lockheed Martin" price={426.95} />
                            <Stock country="USA" companyName="Bank Of America" price={33.02} />
                            <Stock country="Germany" companyName="TRATON" price={787.98}/>
                            <Stock country="Sweden" companyName="Investor" price={426.95} />
                            <Stock country="Canada" companyName="Gold Aqueducts" price={33.02} />
                        </div>
                        {!additionalStocks ? (
                            <button onClick={() => setAdditionalStocks(!additionalStocks)} className="w-full flex flex-row items-center justify-center rounded text-sm mt-2 py-1 font-bold hover:cursor-pointer hover:bg-gray-100 hover:bg-opacity-30">
                                Show More
                                <IoChevronDownOutline/>
                            </button>
                        ) : (
                            <button onClick={() => setAdditionalStocks(!additionalStocks)} className="w-full flex flex-row items-center justify-center rounded text-sm mt-2 py-1 font-bold hover:cursor-pointer hover:bg-gray-100 hover:bg-opacity-30">
                                Show Less
                                <IoChevronUpOutline/>
                            </button>
                        )}
                    </div>
                </div>
                <div className="rounded-lg shadow-xl pt-2 space-y-4 bg-stone-900">
                    <div className="flex flex-col mx-2">
                        <div className="flex flex-row justify-center mb-2 mt-2">
                            <h1 className="text-xl font-semibold cursor-default underline">Watchlist</h1>
                        </div>
                        <div>
                            <Stock country="USA" companyName="Bank Of America" price={33.02} removable/>
                            <Stock country="Germany" companyName="Adidas AG" price={13.92} removable/>
                            <Stock country="Sweden" companyName="African Oil Corps" price={21.32} removable/>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl pt-2 space-y-4 bg-stone-900">
                    <div className="flex flex-col mx-2">
                        <div className="flex flex-row justify-center mb-2 mt-2">
                            <h1 className="text-xl font-semibold cursor-default underline">Economy</h1>
                        </div>
                        <div className="flex flex-row justify-center">
                            <DonutChart paddingAngle={4} data={data} w={200} h={200} />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl pt-2 pb-4 space-y-4 bg-stone-900">
                    <div className="flex flex-col mx-2">
                        <div className="flex flex-row justify-center mb-4 mt-2">
                            <h1 className="text-xl font-semibold cursor-default underline">Account Yield</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center mr-10">
                            <LineChart
                                data={dataYield}
                                dataKey="date"
                                h={200} 
                                w={450}
                                series={[
                                    { name: "Precentage", color: "teal.6"}
                                ]}
                                curveType="linear"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}