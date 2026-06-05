import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const orderWhatsApp = () => {
    const message = encodeURIComponent('Hola, quiero hacer un pedido en Cosa Nostra Sandwichería.');
    window.open(`https://wa.me/56984539988?text=${message}`, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&h=1080&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 animate-fade-in tracking-tight">
          Cosa Nostra Sandwichería
        </h1>
        <p className="text-xl md:text-2xl font-sans text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
          Los mejores sandwiches, completos y hamburguesas de Talca.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMenu}
            className="bg-mustard hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Ver Menú
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={orderWhatsApp}
            className="bg-redDark hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Pedir por WhatsApp
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
