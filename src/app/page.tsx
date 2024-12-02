import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-100">
      {/* Navegación */}
      <nav className="bg-brown-800 text-orange-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-black">Adelia Chocolates</div>
          <ul className="flex space-x-4">
            <li><a href="#" className=" text-black hover:text-orange-300 transition duration-300">Inicio</a></li>
            <li><a href="#" className="text-black hover:text-orange-300 transition duration-300">Quiénes Somos</a></li>
            <li><a href="#" className="text-black hover:text-orange-300 transition duration-300">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Sección Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Fondo de chocolate"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-orange-200 text-center px-4">Adelia Chocolates</h1>
          <p className="text-xl md:text-2xl text-orange-100 text-center px-4">Descubre el arte de la chocolatería fina</p>
        </div>
      </div>

      {/* Sección Quiénes Somos */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-brown-900 text-center mb-8">Quiénes Somos</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="https://revista-lagunas.s3.us-east-2.amazonaws.com/2023/09/967-los-mejores-chocolates-del-mundo-de-donde-vienen-165-big.jpg" 
                alt="Chocolatier de Adelia Chocolates" 
                width={500} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-brown-800 mb-4">
                En Adelia Chocolates, nuestra pasión por el chocolate se remonta a tres generaciones de artesanos chocolateros. Fundada en 1950 por la abuela Adelia, nuestra empresa familiar ha mantenido viva la tradición de crear chocolates excepcionales utilizando solo los ingredientes más finos y las técnicas más refinadas.
              </p>
              <p className="text-brown-800 mb-4">
                Nos enorgullecemos de combinar métodos tradicionales con innovaciones modernas, resultando en sabores únicos y texturas incomparables que deleitan a nuestros clientes en cada bocado.
              </p>
              <p className="text-brown-800">
                Nuestro compromiso con la calidad y la sostenibilidad nos lleva a trabajar directamente con productores de cacao, asegurando no solo la excelencia de nuestros productos, sino también prácticas éticas y ecológicas en toda nuestra cadena de producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Productos */}
      <section className="py-16 bg-orange-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-brown-900 text-center mb-12">Nuestros Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <Image src={producto.imagen} alt={producto.nombre} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">{producto.nombre}</h3>
                  <p className="text-brown-600">{producto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-orange-300">
        <div className="container mx-auto max-w-md px-4">
          <h2 className="text-3xl font-serif text-brown-900 text-center mb-8">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-brown-800 mb-1">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="w-full p-2 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-brown-800 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500" required />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-brown-800 mb-1">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} className="w-full p-2 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-700 hover:bg-brown-800 text-white font-bold py-2 px-4 rounded transition duration-300">Enviar</button>
          </form>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-brown-800 text-orange-100 py-8">
        <div className="container mx-auto text-center px-4">
          <p className="mb-4 text-black">&copy; 2024 Adelia Chocolates. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-black hover:text-orange-300 transition duration-300">Facebook</a>
            <a href="#" className="text-black hover:text-orange-300 transition duration-300">Instagram</a>
            <a href="#" className="text-black hover:text-orange-300 transition duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const productos = [
  { 
    nombre: "Barras de Chocolate", 
    imagen: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80", 
    descripcion: "Deliciosas barras de chocolate artesanal en variados sabores intensos." 
  },
  { 
    nombre: "Trufas Gourmet", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CpJiuRgOlX4N20oDs0-MCiuobf_fVa_i9A&s", 
    descripcion: "Exquisitas trufas de chocolate con rellenos únicos y sorprendentes." 
  },
  { 
    nombre: "Tortas de Chocolate", 
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1389&q=80", 
    descripcion: "Irresistibles tortas de chocolate para celebrar momentos especiales." 
  },
  { 
    nombre: "Bombones Artesanales", 
    imagen: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80", 
    descripcion: "Finos bombones de chocolate con diseños elegantes y sabores exclusivos." 
  },
  { 
    nombre: "Chocolate Caliente Premium", 
    imagen: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", 
    descripcion: "Mezcla premium para preparar el chocolate caliente más cremoso y reconfortante." 
  },
  { 
    nombre: "Cajas de Regalo Luxury", 
    imagen: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80", 
    descripcion: "Elegantes cajas surtidas con nuestra selección de chocolates más finos." 
  },
]

