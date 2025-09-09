import Header from '@/components/Header'
import Table from '@/components/Table'

const productos = [
  ['PROD-001', 'Laptop HP', '$899.99', '45', 'Tecnología'],
  ['PROD-002', 'Mouse Inalámbrico', '$25.99', '120', 'Accesorios'],
  ['PROD-003', 'Teclado Mecánico', '$79.99', '30', 'Accesorios'],
  ['PROD-004', 'Monitor 24"', '$199.99', '15', 'Tecnología'],
  ['PROD-005', 'Auriculares Bluetooth', '$49.99', '80', 'Audio']
]

export default function Productos() {
  return (
    <div>
      <Header title="Gestión de Productos" />
      
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option>Todas las categorías</option>
            <option>Tecnología</option>
            <option>Accesorios</option>
            <option>Audio</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Buscar
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            + Nuevo Producto
          </button>
        </div>
      </div>

      <Table
        headers={['ID', 'Nombre', 'Precio', 'Stock', 'Categoría']}
        data={productos.map(producto => [
          producto[0],
          producto[1],
          producto[2],
          <span key={producto[0]} className={`px-3 py-1 rounded-full text-xs font-medium ${
            parseInt(producto[3]) < 20 ? 'bg-red-100 text-red-800' :
            parseInt(producto[3]) < 50 ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {producto[3]} unidades
          </span>,
          producto[4]
        ])}
      />
    </div>
  )
}