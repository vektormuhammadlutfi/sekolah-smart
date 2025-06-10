"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const userRoles = [
  { value: 'admin', label: 'Admin (Tata Usaha)' },
  { value: 'principal', label: 'Kepala Sekolah' },
  { value: 'duty-teacher', label: 'Guru Piket' },
  { value: 'counselor', label: 'Guru BK' },
  { value: 'subject-teacher', label: 'Guru Mapel' },
  { value: 'homeroom-teacher', label: 'Wali Kelas' },
  { value: 'student', label: 'Siswa' },
  { value: 'ppdb-committee', label: 'Panitia PPDB' },
  { value: 'cooperative', label: 'Koperasi' },
  { value: 'canteen', label: 'Kantin' }
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Kembali ke Beranda
        </Link>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-3 rounded-xl">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Masuk ke Sekolah Smart
            </CardTitle>
            <CardDescription className="text-gray-600">
              Sistem Informasi Management Sekolah
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Pilih Peran Anda</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih peran..." />
                  </SelectTrigger>
                  <SelectContent>
                    {userRoles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Username/Email */}
              <div className="space-y-2">
                <Label htmlFor="username">
                  {selectedRole === 'student' ? 'NIS / NISN' : 
                   selectedRole === 'admin' || selectedRole === 'principal' ? 'NIP / Email' :
                   'Username / Email'}
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder={
                    selectedRole === 'student' ? 'Masukkan NIS atau NISN' : 
                    selectedRole === 'admin' || selectedRole === 'principal' ? 'Masukkan NIP atau Email' :
                    'Masukkan username atau email'
                  }
                  required
                  className="h-11"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password"
                    required
                    className="h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 
                      <EyeOff className="h-4 w-4 text-gray-400" /> : 
                      <Eye className="h-4 w-4 text-gray-400" />
                    }
                  </Button>
                </div>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                disabled={isLoading || !selectedRole}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Memproses...</span>
                  </div>
                ) : (
                  'Masuk'
                )}
              </Button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <Button variant="link" className="text-sm text-gray-600 hover:text-blue-600">
                Lupa password?
              </Button>
            </div>

            {/* Demo Credentials */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Demo Credentials:</h4>
              <div className="space-y-1 text-xs text-blue-700">
                <p><strong>Admin:</strong> admin@sekolahsmart.edu / password123</p>
                <p><strong>Guru:</strong> guru@sekolahsmart.edu / password123</p>
                <p><strong>Siswa:</strong> 12345 / password123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>© 2024 Sekolah Smart - School Information Management System</p>
        </div>
      </div>
    </div>
  );
}