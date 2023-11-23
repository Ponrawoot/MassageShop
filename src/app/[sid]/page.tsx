import getShop from "@/libs/getShop";
import BookForm from "@/components/BookForm";
import Image from "next/image";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ShopDetail({
  params,
}: {
  params: { sid: string };
}) {
  const shopDetail = await getShop(params.sid);

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token)
    return (
      <div className="pt-12 px-5 text-2xl font-bold">
        <p className="m-20">Please access the booking by logging in.</p>
      </div>
    );

  const profile = await getUserProfile(session.user.token);

  return (
    <div className="pt-12 px-5 m-20">

      <div className="flex flex-row"> {/* Added a flex container */}
        <Image
          src={shopDetail.data.picture}
          alt="Shop Picture"
          height={800}
          width={800}
          className="object-cover rounded-lg"
        />
        <div className="ml-10">
          <p className="text-2xl font-bold">{shopDetail.data.name}</p>
          <p className="text-xl">Address: {shopDetail.data.address}</p>
          <p className="text-xl">Price Level: {shopDetail.data.priceLevel}</p>
          <p className="text-xl">Province: {shopDetail.data.province}</p>
          <p className="text-xl">Postalcode: {shopDetail.data.postalcode}</p>
          <p className="text-xl">Tel.: {shopDetail.data.tel}</p>
          <BookForm shopId={shopDetail.data.id} token={session.user.token}/>
          </div> 
      </div>
    </div>
  );
}
