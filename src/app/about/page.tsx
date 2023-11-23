import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function About() {
    

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return (<div className="pt-12 px-5 text-2xl font-bold">
    <p className="m-20">Please access the role by logging in.</p>
  </div>)

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    return(
        <div className="my-20 bg-amber-800 text-white rounded-lg p-4 m-20 ">
  <p className="text-xl">Name: {profile.data.name}</p>
  <p className="text-xl">Role: {profile.data.role}</p>
  <p className="text-xl">Email: {profile.data.email}</p>
  <p className="text-xl">Tel. {profile.data.tel}</p>
</div>
    )
}