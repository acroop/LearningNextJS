
'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";



function Profile() {

    const router = useRouter()
    const [data, setData] = useState("nothing")


    const getUserDetails = async () => {
        try {
            const res = await axios.post("/api/users/me")
            console.log(res.data);
            setData(res.data.data._id)
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const logout = async () => {
        try {
            await axios.get('api/users/logout')
            toast.success("Logout success")
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return ( 
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>
                    Profile
                </h1>
                <hr />

                <h2>
                    {data === "nothing" ? "nothing" : <Link href={`/profile/${data}`}>
                    {data}
                    </Link> }
                </h2>
                <button
                onClick={logout}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                >
                    Logout
                </button>
                <button
                onClick={getUserDetails}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                >
                    Get user details
                </button>
            </div>
        </>
     );
}

export default Profile;