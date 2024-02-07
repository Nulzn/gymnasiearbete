import { IoTrashBin } from "react-icons/io5"

interface StockDetails {
    country: string,
    companyName: string,
    price: number,
    removable?: boolean
}

const countries: any = {
    "Sweden": "🇸🇪",
    "USA": "🇺🇸",
    "Switzerland": "🇨🇭",
    "Denmark": "🇩🇰",
    "Finland": "🇫🇮",
    "Norway": "🇳🇴",
    "France": "🇫🇷",
    "Spain": "🇪🇸",
    "England": "🇬🇧",
    "Germany": "🇩🇪",
    "Canada": "🇨🇦",
    "Portugal": "🇵🇹",
    "Brazil": "🇧🇷",
    "Ireland": "🇬🇧",
    "HongKong": "🇭🇰"
}

export default function Stock({country, companyName, price, removable}: StockDetails) {
    async function RemoveElement(event: any) {
        await event.currentTarget.parentElement.remove();
    }

    return (
        <div className="flex flex-row items-center space-x-10 px-2 mx-2">
            <a href={"/stock/"+companyName.toLowerCase()} className="flex flex-row items-center hover:cursor-pointer hover:bg-gray-100 hover:bg-opacity-30 rounded-md space-x-6">
                {countries[country] ? <p className="text-xl">{countries[country]}</p> : <p>...</p>}
                <p className="text-sm">{companyName}</p>
                <p className="text-sm">${price}</p>
            </a>
            {removable ? <button className="text-red-500 underline text-sm hover:opacity-80 inline aspect-square px-1 py-1 rounded-2xl bg-red-500" onClick={RemoveElement}><IoTrashBin className="text-white"/></button> : null}
        </div>
    )
}