import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Calculator, BookOpen, ArrowRight, Star, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Disease Prediction',
      description: 'Advanced machine learning algorithms analyze your symptoms and health data to predict potential health conditions with high accuracy.',
      features: ['Symptom analysis', 'Risk assessment', 'Early detection', 'Personalized recommendations'],
      rating: 4.9,
      users: '8.5K',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg',
      link: '/disease-prediction'
    },
    {
      icon: Calculator,
      title: 'Insurance Calculator',
      description: 'Get accurate medical insurance estimates based on your health profile, age, lifestyle, and medical history.',
      features: ['Instant quotes', 'Multiple providers', 'Coverage comparison', 'Cost optimization'],
      rating: 4.8,
      users: '12K',
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      link: '/insurance-calculator'
    },
    {
      icon: BookOpen,
      title: 'Health Blog & Resources',
      description: 'Access evidence-based health articles, expert insights, and community discussions on various health topics.',
      features: ['Expert articles', 'Community forums', 'Health tips', 'Latest research'],
      rating: 4.7,
      users: '15K',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      link: '/health-blog'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The disease prediction feature helped me catch a condition early. The accuracy is impressive!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Healthcare Professional',
      content: 'I recommend HealthWell to my patients. The insights are valuable for preventive care.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Insurance Advisor',
      content: 'The insurance calculator is incredibly accurate and saves time for both me and my clients.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health solutions powered by AI and backed by medical expertise. 
              Discover how we can help you take control of your health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-gray-600">rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="font-semibold">{service.users}</span>
                      <span className="text-gray-600">users</span>
                    </div>
                  </div>

                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    <Link to={service.link} className="flex items-center">
                      Try Now
                    </Link>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating stats card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.rating}</div>
                      <div className="flex items-center justify-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">User Rating</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real people who trust HealthWell
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of satisfied users and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;