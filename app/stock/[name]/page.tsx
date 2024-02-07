"use client"

import { Navbar } from "@/components/Navbar"
import { AreaChart } from "@mantine/charts"

export default function Page({ params }: { params: { name: string } }) {

    const data = [
        {date: "Mar 20", Price: 12},
        {date: "Mar 22", Price: 14},
        {date: "Mar 28", Price: 9},
        {date: "Apr 2", Price: 11},
        {date: "Apr 10", Price: 12},
        {date: "May 5", Price: 15},
        {date: "May 10", Price: 18},
        {date: "May 12", Price: 24},
        {date: "May 20", Price: 20},
    ]

    return (
        <div className="">
            <Navbar/>
            <div className="flex flex-col items-center justify-center mt-24 ">
                <div className="h-full shadow-xl px-8 py-4 rounded-xl bg-stone-900">
                    <h1 className="bg-black text-white inline px-2 py-1 rounded-md">{params.name.replace(params.name[0], params.name[0].toUpperCase())}</h1>
                    <AreaChart
                        h={400}
                        w={800}
                        data={data}
                        dataKey="date"
                        series={[
                            { name: "Price", color: "teal.6"}
                        ]}
                        curveType="linear"
                    />
                </div>
                <div className="flex flex-row justify-between mt-4">
                    <div className="flex flex-row items-center bg-stone-900 px-2 py-2 space-x-2 rounded border-2 border-stone-700">
                        <p className="text-xl font-bold">P/E-tal:</p>
                        <p className="text-lg font-semibold">20.4</p>
                    </div>
                    <div>
                        <p>Dagar till rapport</p>
                    </div>
                </div>
            </div>
        </div>
    )
}