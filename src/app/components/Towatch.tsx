'use client';

import { useRouter } from 'next/navigation';
import Pointwarpper  from "./Pointwarpper"
export default function MyButton() {
  const router = useRouter();

  return (
    <button className='border-s-slate-100 border-2 rounded-2xl p-4 font-thin'
    onClick={() => {
        router.push("/wait")
    }}>
      <Pointwarpper/>
    </button>
  );
}
