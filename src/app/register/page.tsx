"use client";
import { useState } from "react";
import userRegister from "@/libs/userRegister";
import Link from "next/link";
// import { useRouter } from "next/router";

function RegistrationForm() {
  // const router = useRouter();
  
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelephoneNumber, setUserTelephoneNumber] = useState("");
  const [userRole, setUserRole] = useState("user");
  const [userPassword, setUserPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const registrationResult = await userRegister(
        userName,
        userEmail,
        userTelephoneNumber,
        userRole,
        userPassword
      );
      // Handle successful registration, e.g., show a success message
      console.log("User registered successfully:", registrationResult);
    } catch (error) {
      // Handle registration error, e.g., show an error message
      console.error("Failed to register user:", error.message);
    }
  };

  return (
    <main className="pt-12 px-5">
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
        <label className="block mb-2 text-gray-600">Name:</label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label className="block mt-4 mb-2 text-gray-600">Email:</label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label className="block mt-4 mb-2 text-gray-600">
          Telephone Number:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={userTelephoneNumber}
          onChange={(e) => setUserTelephoneNumber(e.target.value)}
        />

        <label className="block mt-4 mb-2 text-gray-600">Role:</label>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>

        <label className="block mt-4 mb-2 text-gray-600">Password:</label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
<Link href="/" className="no-underline">
        <button
          className="mt-6 w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleRegistration}
        >
          Register
        </button>
        </Link>
      </div>
    </main>
  );
}

export default RegistrationForm;
