import { products } from '../data/products';

const Products = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  };

  return (
    <section id="menu" className="py-20 bg-grayDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Nuestros Productos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Descubre nuestra selección de sandwiches, completos y hamburguesas artesanales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-mustard text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Destacado
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 font-sans">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-mustard">
                    {formatPrice(product.price)}
                  </span>
                  <button className="bg-redDark hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
