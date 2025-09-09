'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/dashboard/pedidos', label: 'Pedidos', icon: '📦' },
  { href: '/dashboard/clientes', label: 'Clientes', icon: '👥' },
  { href: '/dashboard/productos', label: 'Productos', icon: '📦' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">QuickOrder</h1>
        <p className="text-gray-400 text-sm">Sistema de Gestión</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
              pathname === item.href 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}