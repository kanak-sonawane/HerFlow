"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabaseClient"; // your Supabase init

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    getUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome to HerFlow, {user?.email}</h1>
    </div>
  );
}
