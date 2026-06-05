const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1574858569304-8c3b7b5f7f6e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&h=400&fit=crop',
  ];

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Galería
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Descubre nuestros deliciosos platos y el ambiente de nuestro local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
