import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function About() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    return(
        <div className="my-11">
            { profile.data.role }
            { profile.data.name }
            { profile.data.email }
            { profile.data.tel }
        </div>
    )
}