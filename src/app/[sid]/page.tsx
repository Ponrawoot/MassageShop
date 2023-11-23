import getShop from "@/libs/getShop";
import BookForm from "@/components/BookForm";

export default async function ShopDetail({
    params,
  }: {
    params: { sid: string };
  }) {
    const shopDetail = await getShop(params.sid);
    return(
        <div className="pt-12 px-5">
            {shopDetail.data.name}
            <BookForm/>
        </div>
        
    )
}