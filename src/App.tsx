import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from './config/firebase.js';
import { LayoutContext, UserType } from './utilites/context';
import _ from 'lodash';
import ChatBox from './layouts/chatbox';
import Header from './components/header';
import { FcGoogle } from 'react-icons/fc';

function App() {
  const reducers = (state: any, action: any) => {
    let newState;
    switch(action.type) {
      case 'increase':
        newState = { counter: state.counter + 1 };
        break;
      case 'decrease':
        newState = { counter: state.counter - 1 };
        break;
      default:
        throw new Error();
    }
    return newState;
  };
  const initialState = {
    counter: 0
  };
  const [user] = useAuthState(auth);
  const [state, dispatch] = useReducer(reducers, initialState);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <div className="flex flex-col items-center bg-gray-500 w-full min-h-screen">
      {_.isEmpty(user) ? (
        <button
          onClick={googleSignIn}
          className="flex items-center self-center justify-center my-auto space-x-2 bg-white rounded-md font-semibold p-2"
        >
          <FcGoogle className="text-xl" />
          <span>Sign In Google</span>
        </button>
      ) : (
        <LayoutContext.Provider value={{ user: user }}>
            <Header />
            <ChatBox />
        </LayoutContext.Provider>
      )}
    </div>
  );
}

export default App;
