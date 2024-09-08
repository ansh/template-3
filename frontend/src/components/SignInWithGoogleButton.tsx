import React from "react";
import { useAuth } from "../contexts/AuthContext";

const SignInWithGoogleButton: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-6 h-6 mr-2"
      />
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogleButton;
