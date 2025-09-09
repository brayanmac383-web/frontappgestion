import Header from '@/components/Header'
import Table from '@/components/Table'

const pedidos = [
  ['#001', 'Juan Pérez', '$120.00', 'Completado', '2024-01-15'],
  ['#002', 'María García', '$89.50', 'Pendiente', '2024-01-15'],
  ['#003', 'Carlos López', '$256.75', 'Procesando', '2024-01-14'],
  ['#004', 'Ana Martínez', '$45.99', 'Completado', '2024-01-14'],
  ['#005', 'Pedro Sánchez', '$178.30', 'Pendiente', '2024-01-13']
]

export default function Pedidos() {
  return (
    <div>
      <Header title="Gestión de Pedidos" />
      
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Buscar por cliente o ID..." 
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option>Todos los estados</option>
            <option>Pendiente</option>
            <option>Procesando</option>
            <option>Completado</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Buscar
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            + Nuevo Pedido
          </button>
        </div>
      </div>

      <Table
        headers={['ID', 'Cliente', 'Total', 'Estado', 'Fecha']}
        data={pedidos.map(pedido => [
          pedido[0],
          pedido[1],
          pedido[2],
          <span key={pedido[0]} className={`px-3 py-1 rounded-full text-xs font-medium ${
            pedido[3] === 'Completado' ? 'bg-green-100 text-green-800' :
            pedido[3] === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {pedido[3]}
          </span>,
          pedido[4]
        ])}
      />
    </div>
  )
}