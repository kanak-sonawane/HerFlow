'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';


export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    const { error } = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
    else if (isLogin) router.push('/');
    else alert('Sign-up successful. Please log in.');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10 text-center">
      <div className="w-full max-w-md bg-pink-50 rounded-xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
          {isLogin ? 'Login to HerFlow' : 'Sign Up for HerFlow'}
        </h2>

        <input
          className="w-full border border-pink-300 px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border border-pink-300 px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleAuth}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full mb-3 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-pink-500 underline"
        >
          {isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Login'}
        </button>
      </div>
    </main>
  );
}
