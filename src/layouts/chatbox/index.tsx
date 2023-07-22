import React, { useEffect, useState, useRef } from 'react';
import MessageChat from '../../components/cards/message';
import { auth, db } from '../../config/firebase';
import { 
  addDoc, 
  collection, 
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  limit
} from 'firebase/firestore';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const scroll = useRef(null);

  const sendMessage = async () => {
    const { uid, displayName, photoURL } = auth.currentUser;
    
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid
    })
    setMessage("");
    scroll.current.scrollIntoView({ behaviour: 'smooth' });
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(message !== "" && e.key == "Enter") {
      sendMessage();
    }
  }

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      limit(50)
    );

    const unsubscribe: any = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({...doc.data(), id: doc.id})
      });

      setMessages(fetchedMessages);
    });

    return () => unsubscribe;
  },[]);

  return (
    <div className="mt-16 w-full md:w-2/3 px-4 lg:w-1/2">
      <div className="flex flex-col bg-gray-300 space-y-2 rounded-t-md p-4 h-[400px] overflow-auto">
        {
          messages.map((item) => (
            <MessageChat key={item?.id} item={item} />
          ))
        }
        <span ref={scroll}></span>
      </div>
      <div className="flex w-full">
        <input 
          value={message}
          onChange={({ target: { value } }: any) => setMessage(value)}
          className="w-full focus:outline-none p-2"
          onKeyPress={handleKeyPress}
        />
        <button
          disabled={message === "" ? true : false}
          onClick={sendMessage}
          className={`${message ? `bg-blue-500` : `bg-gray-500`} text-white font-semibold p-2`}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}