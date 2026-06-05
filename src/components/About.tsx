import { Award, Users, Leaf, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Excelente Atención',
      description: 'Nuestro equipo está comprometido con brindarte el mejor servicio',
    },
    {
      icon: Users,
      title: 'Porciones Abundantes',
      description: 'Raciones generosas para satisfacer tu apetito',
    },
    {
      icon: Leaf,
      title: 'Ingredientes Frescos',
      description: 'Utilizamos productos de la más alta calidad',
    },
    {
      icon: Heart,
      title: 'Ambiente Agradable',
      description: 'Un espacio cómodo para disfrutar con familia y amigos',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-gray-400 text-lg mb-6 font-sans">
              Cosa Nostra Sandwichería es uno de los locales más reconocidos de Talca para
              disfrutar sandwiches, completos y comida rápida de calidad.
            </p>
            <p className="text-gray-400 text-lg mb-8 font-sans">
              Nos destacamos por nuestra excelente atención, porciones abundantes,
              ingredientes frescos, ambiente agradable y una buena relación precio-calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-mustard p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm font-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&h=600&fit=crop"
              alt="Cosa Nostra Sandwichería"
              className="rounded-xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-mustard p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-heading font-bold text-black mb-1">+5</div>
              <div className="text-black font-heading font-semibold">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
