import { Promotion } from '../types';

const Promotions = () => {
  const promotions: Promotion[] = [
    {
      id: '1',
      title: 'Promo Churrasco',
      description: '2 Churrascos + Papas + Bebidas',
      price: 14990,
      originalPrice: 17990,
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&h=400&fit=crop',
      badge: '-17%',
    },
    {
      id: '2',
      title: 'Promo Completo',
      description: '2 Completos Italianos + Bebidas',
      price: 8990,
      originalPrice: 10990,
      image: 'https://i0.wp.com/chocale.cl/wp-content/uploads/2023/05/dia-del-completo-domino-fuente-de-soda.jpg?resize=800%2C500&ssl=1',
      badge: '-18%',
    },
    {
      id: '3',
      title: 'Promo Hamburguesa',
      description: 'Hamburguesa Doble + Papas + Bebida',
      price: 9990,
      originalPrice: 12990,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop',
      badge: '-23%',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  };

  return (
    <section id="promociones" className="py-20 bg-grayDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Promociones
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Aprovecha nuestras ofertas especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              {promo.badge && (
                <div className="absolute top-4 left-4 bg-redDark text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {promo.badge}
                </div>
              )}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{promo.title}</h3>
                <p className="text-gray-400 mb-4 font-sans">{promo.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-mustard">
                    {formatPrice(promo.price)}
                  </span>
                  {promo.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(promo.originalPrice)}
                    </span>
                  )}
                </div>
                <button className="w-full bg-mustard hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors duration-200">
                  Solicitar Promo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
