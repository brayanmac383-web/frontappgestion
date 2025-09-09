import Header from '@/components/Header'
import Table from '@/components/Table'

const clientes = [
  ['CLI-001', 'Juan Pérez', 'juan@email.com', '+123456789', 'Activo'],
  ['CLI-002', 'María García', 'maria@email.com', '+987654321', 'Activo'],
  ['CLI-003', 'Carlos López', 'carlos@email.com', '+555555555', 'Inactivo'],
  ['CLI-004', 'Ana Martínez', 'ana@email.com', '+111111111', 'Activo'],
  ['CLI-005', 'Pedro Sánchez', 'pedro@email.com', '+999999999', 'Activo']
]

export default function Clientes() {
  return (
    <div>
      <Header title="Gestión de Clientes" />
      
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Buscar clientes..." 
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option>Todos los estados</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Buscar
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            + Nuevo Cliente
          </button>
        </div>
      </div>

      <Table
        headers={['ID', 'Nombre', 'Email', 'Teléfono', 'Estado']}
        data={clientes.map(cliente => [
          cliente[0],
          cliente[1],
          cliente[2],
          cliente[3],
          <span key={cliente[0]} className={`px-3 py-1 rounded-full text-xs font-medium ${
            cliente[4] === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {cliente[4]}
          </span>
        ])}
      />
    </div>
  )
}