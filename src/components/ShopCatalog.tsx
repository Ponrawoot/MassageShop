import Link from "next/link"
import { ShopItem,ShopJson } from "../../interfaces"
import ShopCard from "./ShopCard"
export default async function ShopCatalog({shopJson} : {shopJson:ShopJson}) {
    const shopJsonReady = await shopJson
    return (
        <>
        There are  {shopJsonReady.count} shop
        <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {shopJsonReady.data.map((shopItem:ShopItem) => (
        <Link href={`/shop/${shopItem.id}`} 
        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
        p-2 sm:p-4 md:p-4 lg:p-8">
        <ShopCard
          shopName={shopItem.name}
          imgSrc={shopItem.picture}
        />
        </Link>
        ))}
      </div>
        </>
    )
}