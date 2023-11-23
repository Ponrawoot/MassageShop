import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import AddShop from "@/components/AddShop";
import getShops from "@/libs/getShops";
import ShopCard from "@/components/ShopCard";
import Link from "next/link";
import axios from "axios";
import DeleteShopButton from "@/components/deleteShopButton";

export default async function ManageShop() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token)
    return (
      <div className="pt-12 px-5 text-2xl font-bold">
        <p className="m-20">Please access the admin role by logging in.</p>
      </div>
    );

  const profile = await getUserProfile(session.user.token);
  // var createdAt = new Date(profile.data.createdAt)
  const shops = await getShops();
  const isAdmin = profile.data.role === "admin";

  

  if (!isAdmin) {
    return (
      <div className="pt-12 px-5">
        <p className="m-20 text-2xl font-bold">
          You don't have permission to do this.
        </p>
      </div>
    );
  }

 

  return (
    <div className="pt-12 px-5">
      {/* Add Shop */}
      <AddShop token={session.user.token}></AddShop>
      {/* Update Shop */}
      {/* {shops.data.map((shop) => (
        <div>{shop.id}</div>
      ))} */}
      {/* Delete Shop */}
      <h1 className="text-4xl font-bold my-10">Delete Shop</h1>
      <div className="flex flex-row my-10">
        {/* <h1>Click Card To Delete Shop</h1> */}
        {shops.data.map((shop) => (
  <div key={shop.id} className="w-1/4">
    <ShopCard shopName={shop.name} imgSrc={shop.picture} />
    <DeleteShopButton shopId={shop.id} token={session.user.token}/>
  </div>
))}
      </div>
    </div>
  );
}
