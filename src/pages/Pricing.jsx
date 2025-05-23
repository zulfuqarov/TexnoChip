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
      price: '50',
      features: [
        'diagnosis',
        'software',
        'cleaning',
        'support'
      ]
    },
    {
      name: 'standard',
      price: '100',
      features: [
        'diagnosis',
        'software',
        'cleaning',
        'support',
        'parts',
        'warranty'
      ],
      popular: true
    },
    {
      name: 'premium',
      price: '150',
      features: [
        'diagnosis',
        'software',
        'cleaning',
        'support',
        'parts',
        'warranty',
        'priority',
        'backup'
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
                      ${plan.price}
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
                    {t('pricing.cta')}
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
    </div>
  );
};

export default Pricing; 