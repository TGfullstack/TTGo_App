'use client';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    primary_email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token (optional - can be stored in cookies/localStorage/session)
      localStorage.setItem('token', data.token);

      // Redirect on success
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-2xl mt-12">
      <h1 className="text-3xl font-bold mb-4 text-black">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          isRequired
          type="email"
          label="Email"
          name="primary_email"
          size="lg"
          value={formData.primary_email}
          onChange={handleChange}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          name="password"
          size="lg"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Button type="submit" size="lg" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  );
}
