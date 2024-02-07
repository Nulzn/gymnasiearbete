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
        <div className="flex flex-row justify-between items-center mx-2 hover:cursor-pointer hover:bg-gray-100 hover:bg-opacity-30 px-2 rounded-md">
            {countries[country] ? <p className="text-xl">{countries[country]}</p> : <p>...</p>}
            <p className="text-sm">{companyName}</p>
            <p className="text-sm">${price}</p>
            {removable ? <button className="text-red-500 underline text-sm hover:opacity-80" onClick={RemoveElement}>Remove</button> : null}
        </div>
    )
}