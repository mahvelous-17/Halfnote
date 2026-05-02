import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import HoudiniTxt from '../components/HoudiniTxt';
import PrimaryButton from '../components/PrimaryButton';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else alert("Check your email for the confirmation link!");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      else navigate('/profile');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ 
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/Halfnote/profile'
      }
    });
    if (error) alert(error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto pt-24 px-6 bg-[#0c0c0c]">
      <div 
        className="w-full max-w-md p-8 flex flex-col"
        style={{ 
          backgroundColor: '#ffffff05', 
          outline: 'none', 
          boxShadow: 'none', 
          border: 'none',
          borderRadius: '10px'
        }}
      >
        <HoudiniTxt>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2 text-center">
            {isSignUp ? "Create Account" : "Join the Collective"}
          </h2>
        </HoudiniTxt>
        <p className="text-white/50 mb-10 text-sm text-center">
          {isSignUp ? "Start your music therapy journey" : "Access your personalized music therapy"}
        </p>
        
        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-transparent text-white text-lg placeholder-white/10 text-center py-3"
            style={{ outline: 'none', border: 'none' }}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-transparent text-white text-lg placeholder-white/10 text-center py-3"
            style={{ outline: 'none', border: 'none' }}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          
          <div className="mt-6 flex flex-col gap-3">
            <PrimaryButton type="submit" className="w-full">
              {isSignUp ? "Create Account" : "Sign In"}
            </PrimaryButton>

            <PrimaryButton 
              onClick={() => setIsSignUp(!isSignUp)} 
              className="w-full !py-2 !text-[10px] !bg-white/5 !border-none opacity-60 hover:opacity-100"
            >
              {isSignUp ? "Already have an account?" : "Need an account?"}
            </PrimaryButton>
          </div>
        </form>

        <div className="my-8 flex items-center justify-center gap-4">
          <div className="h-[1px] bg-white/5 flex-1"></div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">OR</div>
          <div className="h-[1px] bg-white/5 flex-1"></div>
        </div>

        <div className="flex justify-center">
          <PrimaryButton onClick={handleGoogleLogin} className="w-full gap-3">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" alt="Google" />
            Continue with Google
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}