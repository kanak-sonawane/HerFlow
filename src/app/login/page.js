'use client';
import AuthForm from '../auth/AuthForm'; // one level up from login, into auth

export default function LoginPage() {
  return <AuthForm initialMode="login" />;
}
