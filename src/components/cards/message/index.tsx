import React, { useContext } from 'react';
import { LayoutContext } from '../../../utilites/context';

export default function MessageChat({ item }: any) {
  const { user } = useContext(LayoutContext);

  return (
    <div className={`flex gap-2 w-max max-w-[50%] ${item?.uid === user?.uid ? `flex-row-reverse self-end`: `flex-row self-start`}`}>
      <img
        src={item?.avatar}
        className="w-6 h-6 rounded-full"
      />    
      <div className={`bg-white rounded-md p-2 font-medium text-paletteText-primary`}>
        {item?.text}
      </div>
    </div>
  );
}