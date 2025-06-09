import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: '🛠️',
      title: t('services.equipment_sales.title'),
      description: t('services.equipment_sales.description')
    },
    {
      icon: '🗄️',
      title: t('services.server_room.title'),
      description: t('services.server_room.description')
    },
    {
      icon: '💻',
      title: t('services.computer.title'),
      description: t('services.computer.description')
    },
    {
      icon: '📱',
      title: t('services.mobile.title'),
      description: t('services.mobile.description')
    },
    {
      icon: '💾',
      title: t('services.data.title'),
      description: t('services.data.description')
    },
    {
      icon: '🔒',
      title: t('services.security.title'),
      description: t('services.security.description')
    },
    {
      icon: '🌐',
      title: t('services.network_infrastructure.title'),
      description: t('services.network_infrastructure.description')
    },
    {
      icon: '🚧',
      title: t('services.access_control.title'),
      description: t('services.access_control.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {t('contact.title')}
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {t('contact.subtitle')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 