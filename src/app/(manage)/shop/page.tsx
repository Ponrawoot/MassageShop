import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import BookForm from "@/components/BookForm";
import DeleteShopForm from "@/components/DeleteShop";

export default async function ManageShop() {
    const session = await getServerSession(authOptions)

    
    
    if (!session || !session.user.token) return (
        <div className="pt-12 px-5 text-2xl font-bold">
          <p className="m-20">Please access the admin role by logging in.</p>
        </div>
      );

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    const isAdmin = profile.data.role === 'admin';

  if (!isAdmin) {
    return (
      <div className="pt-12 px-5">
        <p className="m-20 text-2xl font-bold">You don't have permission to do this.</p>
      </div>
    );
  }
    return(
        <div className="pt-12 px-5">
            <DeleteShopForm></DeleteShopForm>
        </div>
    )
}