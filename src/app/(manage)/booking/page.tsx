import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"

export default async function ManageBook() {
    const session = await getServerSession(authOptions)


    const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/shops');
        const { data } = response;

        if (data.success) {
          setShops(data.data);
        } else {
          console.error('Error fetching data:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  
    if (!session || !session.user.token) return (
        <div className="pt-12 px-5 text-2xl font-bold">
          <p className="m-20">Please access the role by logging in.</p>
        </div>
      );

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <div className="pt-12 px-5">
            {profile.data.role}
        </div>
    )
}