import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/logo.svg" alt="Cosa Nostra Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4 font-sans">
              Los mejores sandwiches, completos y hamburguesas de Talca.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grayDark hover:bg-mustard hover:text-black text-white p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grayDark hover:bg-mustard hover:text-black text-white p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-mustard transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-mustard transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#promociones" className="text-gray-400 hover:text-mustard transition-colors">
                  Promociones
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-mustard transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-mustard transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-mustard transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mustard flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 font-sans">
                  Av. 5 Poniente 1630, Talca, Región del Maule
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mustard" />
                <span className="text-gray-400 font-sans">+56 9 8453 9988</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-mustard" />
                <span className="text-gray-400 font-sans">
                  Lun-Dom: 11:00 AM - 12:00 AM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Horario</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Lunes</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Martes</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Miércoles</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Jueves</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Viernes</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sábado</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Domingo</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Cosa Nostra Sandwichería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
