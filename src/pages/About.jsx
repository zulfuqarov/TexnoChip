import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import AboutImg from '../assets/img/AboutImg.jpg';
const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    {
      number: 10,
      suffix: '+',
      label: t('about.stats.years'),
      duration: 2.5
    },
    {
      number: 5000,
      suffix: '+',
      label: t('about.stats.clients'),
      duration: 2
    },
    {
      number: 10000,
      suffix: '+',
      label: t('about.stats.repairs'),
      duration: 2.5
    },
    {
      number: 98,
      suffix: '%',
      label: t('about.stats.satisfaction'),
      duration: 2
    }
  ];

  const team = [
    {
      name: 'John Doe',
      role: t('about.team.roles.ceo'),
      image: '/team/ceo.jpg'
    },
    {
      name: 'Jane Smith',
      role: t('about.team.roles.technician'),
      image: '/team/technician.jpg'
    },
    {
      name: 'Mike Johnson',
      role: t('about.team.roles.support'),
      image: '/team/support.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.story.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t('about.story.milestones.1.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('about.story.milestones.1.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t('about.story.milestones.2.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('about.story.milestones.2.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t('about.story.milestones.3.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('about.story.milestones.3.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img
                  src={AboutImg}
                  alt="Our Story"
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['quality', 'innovation', 'service'].map((value, index) => (
              <motion.div
                key={value}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {value === 'quality' && '✨'}
                  {value === 'innovation' && '💡'}
                  {value === 'service' && '🤝'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`about.values.${value}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.values.${value}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 