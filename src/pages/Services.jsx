import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const { t } = useTranslation();
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: '💻',
      title: t('services.computer.title'),
      description: t('services.computer.description'),
      features: t('services.computer.features', { returnObjects: true })
    },
    {
      icon: '📱',
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: t('services.mobile.features', { returnObjects: true })
    },
    {
      icon: '🖥️',
      title: t('services.laptop.title'),
      description: t('services.laptop.description'),
      features: t('services.laptop.features', { returnObjects: true })
    },
    {
      icon: '📱',
      title: t('services.tablet.title'),
      description: t('services.tablet.description'),
      features: t('services.tablet.features', { returnObjects: true })
    },
    {
      icon: '🌐',
      title: t('services.network.title'),
      description: t('services.network.description'),
      features: t('services.network.features', { returnObjects: true })
    },
    {
      icon: '💾',
      title: t('services.data.title'),
      description: t('services.data.description'),
      features: t('services.data.features', { returnObjects: true })
    }
  ];

  const testimonials = {
    reviews: [
      {
        text: "Çox professional və sürətli xidmət. Problemlərimi qısa müddətdə həll etdilər. Məsləhət görürəm!",
        name: "Müştəri 1",
        location: "Bakı"
      },
      {
        text: "Əla xidmət və münasib qiymətlər. Komanda çox bilikli və köməkçidir.",
        name: "Müştəri 2",
        location: "Bakı"
      },
      {
        text: "Şəhərdəki ən yaxşı təmir xidməti. Noutbukumu çox tez təmir etdilər. Mütləq yenidən gələcəyəm!",
        name: "Müştəri 3",
        location: "Bakı"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white mb-[50px] p-8 rounded-lg shadow-lg h-[320px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-4">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="ml-4">
                      <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Services; 