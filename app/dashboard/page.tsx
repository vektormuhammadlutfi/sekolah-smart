"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  BookOpen, 
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Bell,
  Settings,
  LogOut,
  Menu,
  GraduationCap,
  BarChart3,
  FileText,
  CreditCard
} from 'lucide-react';

const dashboardStats = [
  {
    title: "Total Siswa",
    value: "1,247",
    change: "+12",
    changeType: "positive",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Kehadiran Hari Ini",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive", 
    icon: <UserCheck className="h-5 w-5" />
  },
  {
    title: "SPP Terbayar",
    value: "Rp 245M",
    change: "+15%",
    changeType: "positive",
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    title: "Tugas Aktif",
    value: "23",
    change: "-3",
    changeType: "neutral",
    icon: <BookOpen className="h-5 w-5" />
  }
];

const recentActivities = [
  {
    user: "Ahmad Rizki (XII IPA 1)",
    action: "Mengumpulkan tugas Matematika",
    time: "5 menit yang lalu",
    type: "success"
  },
  {
    user: "Siti Nurhaliza (XI IPS 2)", 
    action: "Melakukan pembayaran SPP",
    time: "15 menit yang lalu",
    type: "info"
  },
  {
    user: "Budi Santoso (X TKJ 1)",
    action: "Mendapat poin pelanggaran - Terlambat",
    time: "1 jam yang lalu", 
    type: "warning"
  },
  {
    user: "Guru Matematika",
    action: "Membuat tugas baru untuk kelas XII",
    time: "2 jam yang lalu",
    type: "info"
  }
];

const upcomingEvents = [
  {
    title: "Ujian Tengah Semester",
    date: "15-20 Oktober 2024",
    type: "exam"
  },
  {
    title: "Rapat Wali Murid", 
    date: "25 Oktober 2024",
    type: "meeting"
  },
  {
    title: "Pembayaran SPP Deadline",
    date: "30 Oktober 2024", 
    type: "payment"
  }
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">Sekolah Smart</h1>
              <p className="text-xs opacity-90">Dashboard Admin</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
              <BarChart3 className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Users className="h-5 w-5" />
              <span>Data Siswa</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <UserCheck className="h-5 w-5" />
              <span>Presensi</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <CreditCard className="h-5 w-5" />
              <span>Pembayaran</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>LMS</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <FileText className="h-5 w-5" />
              <span>Laporan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="h-5 w-5" />
              <span>Pengaturan</span>
            </a>
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full justify-start" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Keluar
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Selamat datang kembali, Admin</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs font-medium ${
                          stat.changeType === 'positive' ? 'text-green-600' : 
                          stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-xs text-gray-600 ml-1">dari bulan lalu</span>
                      </div>
                    </div>
                    <div className="text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Attendance Chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Statistik Kehadiran Mingguan</CardTitle>
                  <CardDescription>Persentase kehadiran siswa dan guru</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Siswa</span>
                        <span>94.2%</span>
                      </div>
                      <Progress value={94.2} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Guru</span>
                        <span>98.5%</span>
                      </div>
                      <Progress value={98.5} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Staff</span>
                        <span>96.8%</span>
                      </div>
                      <Progress value={96.8} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Aksi Cepat</CardTitle>
                <CardDescription>Akses fitur yang sering digunakan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Tambah Siswa Baru
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Buat Jadwal Pelajaran
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Laporan
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Kirim Pengumuman
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
                <CardDescription>Aktivitas sistem dalam 24 jam terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full ${
                        activity.type === 'success' ? 'bg-green-100' :
                        activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        {activity.type === 'success' ? 
                          <CheckCircle className="h-4 w-4 text-green-600" /> :
                          activity.type === 'warning' ?
                          <AlertTriangle className="h-4 w-4 text-yellow-600" /> :
                          <Clock className="h-4 w-4 text-blue-600" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Agenda Mendatang</CardTitle>
                <CardDescription>Jadwal dan deadline penting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        event.type === 'exam' ? 'bg-red-100 text-red-600' :
                        event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {event.type === 'exam' ? 
                          <BookOpen className="h-4 w-4" /> :
                          event.type === 'meeting' ?
                          <Users className="h-4 w-4" /> :
                          <CreditCard className="h-4 w-4" />
                        }
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <p className="text-xs text-gray-600">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}