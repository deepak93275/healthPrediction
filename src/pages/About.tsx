import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every decision we make is guided by what\'s best for our users\' health and wellbeing.'
    },
    {
      icon: Award,
      title: 'Excellence in Innovation',
      description: 'We continuously push the boundaries of healthcare technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a supportive community where health knowledge and experiences are shared freely.'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Our AI models are trained on vast datasets to ensure the highest accuracy in health predictions.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Leading healthcare innovation with 15+ years of clinical experience.'
    },
    {
      name: 'Alex Chen',
      role: 'Head of AI Development',
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg',
      bio: 'Machine learning expert specializing in healthcare applications.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Director of User Experience',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Passionate about creating intuitive healthcare solutions.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'HealthWell founded with a vision to democratize healthcare' },
    { year: '2021', event: 'Launched AI disease prediction with 90% accuracy' },
    { year: '2022', event: 'Reached 10,000+ active users milestone' },
    { year: '2023', event: 'Introduced insurance calculator and health community' },
    { year: '2024', event: 'Achieved 95% prediction accuracy and 50,000+ users' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">
                  About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">HealthWell</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're on a mission to make quality healthcare accessible to everyone through 
                  innovative technology and evidence-based solutions. Our platform bridges the 
                  gap between traditional healthcare and modern digital wellness.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">AI-powered health insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Evidence-based recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Community-driven support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
                alt="Healthcare team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              "To empower individuals with intelligent health insights and create a world 
              where preventive healthcare is accessible, accurate, and actionable for everyone."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to revolutionizing healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform healthcare
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '95%', label: 'Prediction Accuracy' },
              { number: '1M+', label: 'Health Assessments' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
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
              Join Our Health Revolution
            </h2>
            <p className="text-xl text-blue-100">
              Be part of a community that's transforming healthcare through technology and compassion.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;