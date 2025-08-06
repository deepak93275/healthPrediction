import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Shield, User, Calendar, MapPin, Heart, TrendingUp } from 'lucide-react';

const InsuranceCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    location: '',
    income: '',
    healthConditions: '',
    smokingStatus: '',
    exerciseFrequency: '',
    familySize: ''
  });

  const [quote, setQuote] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateInsurance = async () => {
    setIsCalculating(true);
    
    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const baseRate = 200;
    let multiplier = 1;
    
    // Age factor
    const age = parseInt(formData.age);
    if (age > 50) multiplier += 0.5;
    else if (age > 30) multiplier += 0.2;
    
    // Health conditions
    if (formData.healthConditions === 'chronic') multiplier += 0.8;
    else if (formData.healthConditions === 'minor') multiplier += 0.3;
    
    // Smoking
    if (formData.smokingStatus === 'yes') multiplier += 0.6;
    
    // Exercise
    if (formData.exerciseFrequency === 'never') multiplier += 0.3;
    else if (formData.exerciseFrequency === 'regular') multiplier -= 0.1;
    
    // Family size
    const familySize = parseInt(formData.familySize);
    if (familySize > 4) multiplier += 0.2;
    
    const monthlyPremium = Math.round(baseRate * multiplier);
    const annualPremium = monthlyPremium * 12;
    
    const result = {
      monthlyPremium,
      annualPremium,
      coverage: Math.round(annualPremium * 50),
      deductible: Math.round(monthlyPremium * 2),
      plans: [
        {
          name: 'Basic Plan',
          monthly: Math.round(monthlyPremium * 0.7),
          coverage: Math.round(annualPremium * 30),
          features: ['Basic medical coverage', 'Emergency care', 'Prescription drugs']
        },
        {
          name: 'Standard Plan',
          monthly: monthlyPremium,
          coverage: Math.round(annualPremium * 50),
          features: ['Comprehensive coverage', 'Specialist visits', 'Preventive care', 'Mental health']
        },
        {
          name: 'Premium Plan',
          monthly: Math.round(monthlyPremium * 1.4),
          coverage: Math.round(annualPremium * 80),
          features: ['Full coverage', 'Dental & Vision', 'Alternative medicine', 'International coverage']
        }
      ]
    };
    
    setQuote(result);
    setIsCalculating(false);
  };

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
              <Calculator className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Health Insurance Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized health insurance quotes based on your profile. 
              Compare plans and find the best coverage for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Information
                </h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your age"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      <option value="urban">Urban</option>
                      <option value="suburban">Suburban</option>
                      <option value="rural">Rural</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Income
                    </label>
                    <select
                      name="income"
                      value={formData.income}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select income range</option>
                      <option value="low">Under $30,000</option>
                      <option value="medium">$30,000 - $75,000</option>
                      <option value="high">$75,000 - $150,000</option>
                      <option value="very-high">Over $150,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Health Conditions
                    </label>
                    <select
                      name="healthConditions"
                      value={formData.healthConditions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select health status</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="minor">Minor conditions</option>
                      <option value="chronic">Chronic conditions</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Smoking Status
                      </label>
                      <select
                        name="smokingStatus"
                        value={formData.smokingStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select status</option>
                        <option value="no">Non-smoker</option>
                        <option value="yes">Smoker</option>
                        <option value="former">Former smoker</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Exercise Frequency
                      </label>
                      <select
                        name="exerciseFrequency"
                        value={formData.exerciseFrequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select frequency</option>
                        <option value="regular">Regular (3+ times/week)</option>
                        <option value="occasional">Occasional</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Family Size
                    </label>
                    <input
                      type="number"
                      name="familySize"
                      value={formData.familySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Number of family members"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateInsurance}
                  disabled={isCalculating || !formData.age || !formData.gender}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Calculating Quote...
                    </div>
                  ) : (
                    'Calculate Insurance Quote'
                  )}
                </button>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {quote ? (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Your Quote Summary
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">${quote.monthlyPremium}</div>
                        <div className="text-sm text-gray-600">Monthly Premium</div>
                      </div>
                      
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">${quote.coverage.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Coverage Amount</div>
                      </div>
                    </div>
                  </div>

                  {/* Plans */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Available Plans</h3>
                    
                    <div className="space-y-4">
                      {quote.plans.map((plan: any, index: number) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                              <p className="text-sm text-gray-600">Coverage up to ${plan.coverage.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">${plan.monthly}</div>
                              <div className="text-sm text-gray-600">per month</div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {plan.features.map((feature: string, featureIndex: number) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Select Plan
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form and click "Calculate Insurance Quote" to get your personalized rates.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Our Calculator?
            </h2>
            <p className="text-xl text-gray-600">
              Accurate, fast, and personalized insurance quotes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'Accurate Quotes', description: 'Based on real market data' },
              { icon: Shield, title: 'Secure & Private', description: 'Your data is protected' },
              { icon: DollarSign, title: 'Compare Plans', description: 'Multiple options available' },
              { icon: Heart, title: 'Health Focused', description: 'Tailored to your health needs' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceCalculator;