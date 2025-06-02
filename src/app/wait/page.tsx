"use client";
import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';
function Page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(apiUrl)
    const router = useRouter();
    const send = async () => {
        const res = await axios.post(`${apiUrl}`)
        if (res.status === 200) {
            router.push("/")
    }
    }
    
    useEffect(()=> {
        send()
    })
  return (
     <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-white ">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-purple-600 font-semibold text-lg">starting server...</p>
      <p className="text-purple-600 font-semibold text-lg">around 60 s</p>
    </div>
  )
}

export default Page