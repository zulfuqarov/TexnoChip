import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const plans = [
    {
      name: 'basic',
      price: 299,
      popular: false,
      features: [
        'security_basic',
        'network_basic',
        'access_control_basic',
        'computer_basic',
        'mobile_basic',
        'data_basic',
        'support_basic'
      ]
    },
    {
      name: 'professional',
      price: 599,
      popular: true,
      features: [
        'security_pro',
        'network_pro',
        'access_control_pro',
        'computer_pro',
        'mobile_pro',
        'data_pro',
        'support_pro'
      ]
    },
    {
      name: 'enterprise',
      price: 999,
      popular: false,
      features: [
        'security_enterprise',
        'network_enterprise',
        'access_control_enterprise',
        'computer_enterprise',
        'mobile_enterprise',
        'data_enterprise',
        'support_enterprise'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-[url('/pricing-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    {t('pricing.popular')}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(`pricing.plans.${plan.name}.title`)}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ₼{plan.price}
                    </span>
                    <span className="text-gray-600">/ {t('pricing.month')}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {t(`pricing.features.${feature}`)}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {t('pricing.planButton')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.faq.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricing.faq.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`pricing.faq.questions.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`pricing.faq.questions.${index}.answer`)}
                </p>
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
              {t('pricing.cta.title')}
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {t('pricing.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Individual Services Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.individual.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricing.individual.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔒',
                title: 'security',
                price: 199,
                features: ['security_feature1', 'security_feature2', 'security_feature3']
              },
              {
                icon: '🌐',
                title: 'network',
                price: 299,
                features: ['network_feature1', 'network_feature2', 'network_feature3']
              },
              {
                icon: '🚧',
                title: 'access_control',
                price: 249,
                features: ['access_feature1', 'access_feature2', 'access_feature3']
              },
              {
                icon: '💻',
                title: 'computer',
                price: 149,
                features: ['computer_feature1', 'computer_feature2', 'computer_feature3']
              },
              {
                icon: '📱',
                title: 'mobile',
                price: 129,
                features: ['mobile_feature1', 'mobile_feature2', 'mobile_feature3']
              },
              {
                icon: '💾',
                title: 'data',
                price: 179,
                features: ['data_feature1', 'data_feature2', 'data_feature3']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`pricing.individual.services.${service.title}.title`)}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ₼{service.price}
                  </span>
                  <span className="text-gray-600">/ {t('pricing.individual.period')}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {t(`pricing.individual.services.${service.title}.features.${feature}`)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 px-6 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  {t('pricing.individual.contactButton')}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 