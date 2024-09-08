import React from "react";
import { useAuth } from "../contexts/AuthContext";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

const Auth: React.FC = () => {
  const { user, signOutUser } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button
            onClick={signOutUser}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <SignInWithGoogleButton />
      )}
    </div>
  );
};

export default Auth;
