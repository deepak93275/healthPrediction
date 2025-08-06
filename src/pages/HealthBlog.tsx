import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag, Heart, Brain, Activity } from 'lucide-react';

const HealthBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'nutrition', name: 'Nutrition', icon: Heart },
    { id: 'mental-health', name: 'Mental Health', icon: Brain },
    { id: 'fitness', name: 'Fitness', icon: Activity },
    { id: 'prevention', name: 'Prevention', icon: Heart }
  ];

  const articles = [
    {
      id: 1,
      title: '10 Essential Nutrients for Optimal Health',
      excerpt: 'Discover the key nutrients your body needs and the best food sources to get them from.',
      category: 'nutrition',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tags: ['nutrition', 'vitamins', 'healthy eating']
    },
    {
      id: 2,
      title: 'Managing Stress in the Modern World',
      excerpt: 'Learn effective techniques to manage stress and improve your mental well-being.',
      category: 'mental-health',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg',
      tags: ['stress', 'mental health', 'wellness']
    },
    {
      id: 3,
      title: 'The Science of Sleep: Why Rest Matters',
      excerpt: 'Understanding the importance of quality sleep and how to improve your sleep hygiene.',
      category: 'prevention',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
      tags: ['sleep', 'health', 'recovery']
    },
    {
      id: 4,
      title: 'Building a Sustainable Exercise Routine',
      excerpt: 'Tips for creating a workout plan that fits your lifestyle and keeps you motivated.',
      category: 'fitness',
      author: 'Dr. James Wilson',
      date: '2024-01-08',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      tags: ['exercise', 'fitness', 'motivation']
    },
    {
      id: 5,
      title: 'Heart Health: Prevention is Key',
      excerpt: 'Learn about cardiovascular health and simple steps to keep your heart strong.',
      category: 'prevention',
      author: 'Dr. Lisa Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      tags: ['heart health', 'prevention', 'cardiovascular']
    },
    {
      id: 6,
      title: 'Mindful Eating: A Path to Better Health',
      excerpt: 'Discover how mindful eating can transform your relationship with food and improve digestion.',
      category: 'nutrition',
      author: 'Dr. Anna Martinez',
      date: '2024-01-03',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tags: ['mindful eating', 'nutrition', 'wellness']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Health Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Evidence-based health articles, expert insights, and practical tips 
              to help you live your healthiest life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium capitalize">
                      {article.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">
              Stay Updated with Health Insights
            </h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter for the latest health articles and expert tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthBlog;