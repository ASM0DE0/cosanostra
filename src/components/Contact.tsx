import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado. Te contactaremos pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-grayDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Estamos aquí para atenderte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-mustard p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold mb-1">Dirección</h3>
                <p className="text-gray-400 font-sans">Av. 5 Poniente 1630</p>
                <p className="text-gray-400 font-sans">Talca, Región del Maule</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-mustard p-3 rounded-lg">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold mb-1">Teléfono</h3>
                <p className="text-gray-400 font-sans">+56 9 8453 9988</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-mustard p-3 rounded-lg">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold mb-1">Horario</h3>
                <p className="text-gray-400 font-sans">Lunes a Domingo</p>
                <p className="text-gray-400 font-sans">11:00 AM - 12:00 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-mustard p-3 rounded-lg">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold mb-1">Email</h3>
                <p className="text-gray-400 font-sans">contacto@cosanostra.cl</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-71.654321!3d-35.426789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzM2LjQiUyA3McKwMzknMTkuNiJX!5e0!3m2!1ses!2scl!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Cosa Nostra Sandwichería"
              />
            </div>
          </div>

          <div className="bg-black rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 font-sans">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mustard transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mustard transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 font-sans">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mustard transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-mustard hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
