import { useState } from "react";
import { supabase } from "../supabase";
import PrimaryButton from "./PrimaryButton";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
  };


  return (
    <div className="auth-container p-8 bg-gray-900 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Join the Collective</h2>

      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-black text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-black text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton type="submit" className="bg-cyan-600 hover:bg-cyan-500">
          Sign In
        </PrimaryButton>
      </form>

    </div>
  );
}
