import Header from '@/components/Header'
import StatsCard from '@/components/Statscard'
import Table from '@/components/Table'

const stats = [
  { title: 'Ventas Totales', value: '$12,458', icon: '💰', color: 'green' },
  { title: 'Pedidos Hoy', value: '15', icon: '📦', color: 'blue' },
  { title: 'Clientes Activos', value: '124', icon: '👥', color: 'purple' },
  { title: 'Productos', value: '89', icon: '📦', color: 'orange' }
]

const orders = [
  ['#001', 'Juan Pérez', '$120.00', 'Completado', '2024-01-15'],
  ['#002', 'María García', '$89.50', 'Pendiente', '2024-01-15'],
  ['#003', 'Carlos López', '$256.75', 'Procesando', '2024-01-14']
]

export default function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Últimos Pedidos</h2>
        <Table
          headers={['ID', 'Cliente', 'Total', 'Estado', 'Fecha']}
          data={orders}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-semibold mb-2">Nuevo Pedido</h3>
          <p className="text-sm text-gray-600">Crear nuevo pedido</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-2">👥</div>
          <h3 className="font-semibold mb-2">Agregar Cliente</h3>
          <p className="text-sm text-gray-600">Registrar nuevo cliente</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-semibold mb-2">Agregar Producto</h3>
          <p className="text-sm text-gray-600">Añadir nuevo producto</p>
        </div>
      </div>
    </div>
  )
}