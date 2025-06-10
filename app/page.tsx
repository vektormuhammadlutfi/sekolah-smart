"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  ClipboardList,
  MessageSquare,
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Profil Sekolah",
    description: "Company profile lengkap dengan visi misi, jurusan, dan fasilitas sekolah"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Presensi Online",
    description: "Sistem absensi siswa dan pegawai dengan QR code dan notifikasi WhatsApp"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "PPDB",
    description: "Pendaftaran Peserta Didik Baru dengan alur yang terintegrasi"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Pembayaran SPP",
    description: "Sistem pembayaran SPP dan tagihan dengan multiple metode"
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Roster Pelajaran",
    description: "Manajemen jadwal guru dan time table yang terintegrasi"
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: "LMS",
    description: "Learning Management System untuk tugas dan asesmen digital"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Poin Pelanggaran",
    description: "Sistem penilaian sikap dan karakter siswa"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Pengaduan Siswa",
    description: "Layanan pengaduan anonim untuk keamanan sekolah"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Keuangan Sekolah",
    description: "Laporan keuangan dan rekap pemasukan-pengeluaran"
  }
];

const userRoles = [
  "Admin (Tata Usaha)", "Kepala Sekolah", "Guru Piket", "Guru BK", 
  "Guru Mapel", "Wali Kelas", "Siswa", "Panitia PPDB", "Koperasi", "Kantin"
];

const benefits = [
  "Efisiensi Operasional",
  "Integrasi Data Terpusat", 
  "Aksesibilitas 24/7",
  "Transparansi Penuh",
  "Peningkatan Kinerja",
  "Keamanan Data Terjamin"
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sekolah Smart</h1>
                <p className="text-xs text-gray-600">School Information Management</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Fitur</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Manfaat</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                Demo Gratis
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-700">Fitur</a>
              <a href="#benefits" className="block text-gray-700">Manfaat</a>
              <a href="#contact" className="block text-gray-700">Kontak</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white">
                Demo Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🚀 Solusi Digital Terdepan untuk Sekolah Modern
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sistem Informasi
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}Management Sekolah
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sekolah Smart adalah solusi inovatif untuk mengelola semua aspek operasional sekolah. 
            Menyederhanakan tata kelola data dan proses birokrasi menjadi pengalaman yang 
            efisien, efektif, dan terpadu secara digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Lihat Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Unggulan Sekolah Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan manajemen sekolah modern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader>
                <div className="text-blue-600 group-hover:text-green-600 transition-colors mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* User Roles Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hak Akses Multi-Role
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Sistem yang mendukung berbagai peran dengan akses yang disesuaikan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {userRoles.map((role, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-white font-medium text-sm">
                  {role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Sekolah Wajib Menggunakan Sekolah Smart?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manfaat nyata yang akan dirasakan sekolah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-900">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Siap Transformasi Digital?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bergabunglah dengan ribuan sekolah yang telah merasakan manfaat 
                digitalisasi dengan Sekolah Smart. Tingkatkan efisiensi, transparansi, 
                dan kualitas pendidikan di sekolah Anda.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                </div>
                <p className="italic mb-4">
                  "Sekolah Smart telah mengubah cara kami mengelola sekolah. Semua proses 
                  menjadi lebih efisien dan transparan. Orang tua siswa juga merasa 
                  lebih terlibat dengan adanya notifikasi real-time."
                </p>
                <div className="font-semibold">
                  - Kepala Sekolah SMA Negeri 1 Jakarta
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sekolah Smart</h3>
                  <p className="text-sm text-gray-400">School Information Management System</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Solusi inovatif untuk mengelola semua aspek operasional sekolah 
                dengan teknologi terdepan dan pengalaman pengguna yang optimal.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Fitur Utama</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Presensi Online</li>
                <li>Pembayaran SPP</li>
                <li>LMS Terintegrasi</li>
                <li>Manajemen Data</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@sekolahsmart.edu</p>
                <p>Telp: (021) 1234-5678</p>
                <p>WhatsApp: +62 812-3456-7890</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sekolah Smart - School Information Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}