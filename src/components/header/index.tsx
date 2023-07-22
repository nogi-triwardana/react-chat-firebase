import React, { useState, useRef } from 'react';
import { auth, db } from '../../config/firebase';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Header() {
  const { displayName, photoURL } = auth.currentUser;
  const [hiddenDropdown, setHiddenDropdown] = useState(false);

  const onLogout = () => {
    auth.signOut();
  }

  return (
    <div className="flex flex-col items-end justify-center bg-blue-500 h-[96px] w-full p-4">
      <img src={photoURL} onClick={() => setHiddenDropdown(prevState => !prevState)} className="w-8 h-8 cursor-pointer rounded-full" />
      <div className="relative">
        <div 
          className={`bg-white ${hiddenDropdown ? `` : `hidden`} w-[150px] absolute text-left text-slate-700 font-semibold -translate-x-full rounded-md py-2`}
        >
          <div className="px-2">{displayName}</div>
          <hr className="border-1 border-slate-300 my-1" />
          <div className="transition ease-in-out delay-500 hover:bg-slate-200 px-2">
            <button onClick={onLogout} className="flex"><HiOutlineLogout className="mr-2 text-xl self-center" /> Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}