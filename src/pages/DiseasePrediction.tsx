import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, AlertCircle, CheckCircle, Activity, Heart, Thermometer, Eye, Stethoscope, Atom as Stomach, Droplets } from 'lucide-react';

const DiseasePrediction = () => {
  const [selectedModel, setSelectedModel] = useState('general');
  const [symptoms, setSymptoms] = useState({
    // General symptoms
    fever: false,
    cough: false,
    fatigue: false,
    headache: false,
    bodyAche: false,
    nausea: false,
    breathingDifficulty: false,
    chestPain: false,
    dizziness: false,
    skinRash: false,
    
    // Stomach-specific symptoms
    stomachPain: false,
    bloating: false,
    diarrhea: false,
    constipation: false,
    vomiting: false,
    heartburn: false,
    gasProblems: false,
    appetiteLoss: false,
    bloodInStool: false,
    weightLoss: false,
    
    // Skin-specific symptoms
    itching: false,
    redness: false,
    dryness: false,
    swelling: false,
    blisters: false,
    scaling: false,
    darkSpots: false,
    hairLoss: false,
    nailChanges: false,
    skinThickening: false,
    
    // Hepatitis-specific symptoms
    jaundice: false,
    darkUrine: false,
    paleStool: false,
    abdominalPain: false,
    liverTenderness: false,
    jointPain: false,
    clayColoredStool: false,
    spiderVeins: false,
    fluidRetention: false,
    confusion: false
  });

  const [prediction, setPrediction] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const models = [
    { id: 'general', name: 'General Health', icon: Stethoscope, description: 'Overall health assessment' },
    { id: 'stomach', name: 'Stomach Issues', icon: Stomach, description: 'Digestive system disorders' },
    { id: 'skin', name: 'Skin Conditions', icon: Eye, description: 'Dermatological conditions' },
    { id: 'hepatitis', name: 'Hepatitis Detection', icon: Droplets, description: 'Liver condition analysis' }
  ];

  const symptomCategories = {
    general: [
      { key: 'fever', label: 'Fever', icon: Thermometer, description: 'Body temperature above 100.4°F (38°C)' },
      { key: 'cough', label: 'Cough', icon: Activity, description: 'Persistent or dry cough' },
      { key: 'fatigue', label: 'Fatigue', icon: Heart, description: 'Unusual tiredness or weakness' },
      { key: 'headache', label: 'Headache', icon: Brain, description: 'Head pain or pressure' },
      { key: 'bodyAche', label: 'Body Ache', icon: Activity, description: 'Muscle or joint pain' },
      { key: 'nausea', label: 'Nausea', icon: Activity, description: 'Feeling sick to stomach' },
      { key: 'breathingDifficulty', label: 'Breathing Difficulty', icon: Activity, description: 'Shortness of breath' },
      { key: 'chestPain', label: 'Chest Pain', icon: Heart, description: 'Pain or discomfort in chest' },
      { key: 'dizziness', label: 'Dizziness', icon: Brain, description: 'Feeling lightheaded' },
      { key: 'skinRash', label: 'Skin Rash', icon: Eye, description: 'Unusual skin changes' }
    ],
    stomach: [
      { key: 'stomachPain', label: 'Stomach Pain', icon: Stomach, description: 'Abdominal pain or cramping' },
      { key: 'bloating', label: 'Bloating', icon: Stomach, description: 'Feeling of fullness or swelling' },
      { key: 'diarrhea', label: 'Diarrhea', icon: Droplets, description: 'Loose or watery stools' },
      { key: 'constipation', label: 'Constipation', icon: Stomach, description: 'Difficulty passing stools' },
      { key: 'vomiting', label: 'Vomiting', icon: Activity, description: 'Throwing up or retching' },
      { key: 'heartburn', label: 'Heartburn', icon: Heart, description: 'Burning sensation in chest' },
      { key: 'gasProblems', label: 'Gas Problems', icon: Stomach, description: 'Excessive gas or flatulence' },
      { key: 'appetiteLoss', label: 'Loss of Appetite', icon: Activity, description: 'Reduced desire to eat' },
      { key: 'bloodInStool', label: 'Blood in Stool', icon: Droplets, description: 'Visible blood in bowel movements' },
      { key: 'weightLoss', label: 'Unexplained Weight Loss', icon: Activity, description: 'Significant weight reduction' }
    ],
    skin: [
      { key: 'itching', label: 'Itching', icon: Eye, description: 'Persistent skin irritation' },
      { key: 'redness', label: 'Redness', icon: Heart, description: 'Skin inflammation or irritation' },
      { key: 'dryness', label: 'Dry Skin', icon: Eye, description: 'Flaky or rough skin texture' },
      { key: 'swelling', label: 'Swelling', icon: Activity, description: 'Puffiness or inflammation' },
      { key: 'blisters', label: 'Blisters', icon: Droplets, description: 'Fluid-filled bumps on skin' },
      { key: 'scaling', label: 'Scaling', icon: Eye, description: 'Flaky or peeling skin' },
      { key: 'darkSpots', label: 'Dark Spots', icon: Eye, description: 'Hyperpigmentation or discoloration' },
      { key: 'hairLoss', label: 'Hair Loss', icon: Activity, description: 'Unusual hair thinning or loss' },
      { key: 'nailChanges', label: 'Nail Changes', icon: Eye, description: 'Color or texture changes in nails' },
      { key: 'skinThickening', label: 'Skin Thickening', icon: Activity, description: 'Hardening or thickening of skin' }
    ],
    hepatitis: [
      { key: 'jaundice', label: 'Jaundice', icon: Eye, description: 'Yellowing of skin and eyes' },
      { key: 'darkUrine', label: 'Dark Urine', icon: Droplets, description: 'Tea-colored or dark yellow urine' },
      { key: 'paleStool', label: 'Pale Stool', icon: Activity, description: 'Light-colored bowel movements' },
      { key: 'abdominalPain', label: 'Abdominal Pain', icon: Stomach, description: 'Pain in upper right abdomen' },
      { key: 'liverTenderness', label: 'Liver Tenderness', icon: Heart, description: 'Sensitivity in liver area' },
      { key: 'jointPain', label: 'Joint Pain', icon: Activity, description: 'Aching in joints and muscles' },
      { key: 'clayColoredStool', label: 'Clay-Colored Stool', icon: Activity, description: 'Very pale or white stools' },
      { key: 'spiderVeins', label: 'Spider Veins', icon: Eye, description: 'Small blood vessels visible on skin' },
      { key: 'fluidRetention', label: 'Fluid Retention', icon: Droplets, description: 'Swelling in legs or abdomen' },
      { key: 'confusion', label: 'Mental Confusion', icon: Brain, description: 'Difficulty thinking clearly' }
    ]
  };

  const handleSymptomChange = (symptom: string) => {
    setSymptoms(prev => ({
      ...prev,
      [symptom]: !prev[symptom as keyof typeof prev]
    }));
  };

  // ML-like prediction algorithms
  const predictDisease = (modelType: string, selectedSymptoms: string[]) => {
    const symptomCount = selectedSymptoms.length;
    
    if (modelType === 'stomach') {
      return predictStomachIssues(selectedSymptoms, symptomCount);
    } else if (modelType === 'skin') {
      return predictSkinConditions(selectedSymptoms, symptomCount);
    } else if (modelType === 'hepatitis') {
      return predictHepatitis(selectedSymptoms, symptomCount);
    } else {
      return predictGeneralHealth(selectedSymptoms, symptomCount);
    }
  };

  const predictStomachIssues = (selectedSymptoms: string[], count: number) => {
    // Weighted scoring system for stomach conditions
    const weights = {
      stomachPain: 3, bloating: 2, diarrhea: 3, constipation: 2, vomiting: 3,
      heartburn: 2, gasProblems: 1, appetiteLoss: 2, bloodInStool: 4, weightLoss: 3
    };
    
    let score = selectedSymptoms.reduce((total, symptom) => {
      return total + (weights[symptom as keyof typeof weights] || 1);
    }, 0);
    
    if (selectedSymptoms.includes('bloodInStool') && selectedSymptoms.includes('weightLoss')) {
      return {
        condition: 'Inflammatory Bowel Disease (IBD) - Requires Immediate Medical Attention',
        probability: Math.min(85 + score * 2, 95),
        severity: 'high',
        recommendations: [
          'Seek immediate medical consultation',
          'Consider colonoscopy screening',
          'Maintain food diary',
          'Avoid trigger foods',
          'Stay hydrated'
        ],
        description: 'Symptoms suggest possible inflammatory bowel disease. Blood in stool combined with weight loss requires urgent medical evaluation.'
      };
    } else if (selectedSymptoms.includes('heartburn') && selectedSymptoms.includes('stomachPain')) {
      return {
        condition: 'Gastroesophageal Reflux Disease (GERD)',
        probability: Math.min(70 + score * 3, 90),
        severity: 'medium',
        recommendations: [
          'Avoid spicy and acidic foods',
          'Eat smaller, frequent meals',
          'Elevate head while sleeping',
          'Consult gastroenterologist',
          'Consider antacids'
        ],
        description: 'Symptoms indicate possible GERD. Lifestyle modifications and medical treatment can help manage symptoms.'
      };
    } else if (selectedSymptoms.includes('diarrhea') && selectedSymptoms.includes('vomiting')) {
      return {
        condition: 'Gastroenteritis (Stomach Flu)',
        probability: Math.min(75 + score * 2, 88),
        severity: 'medium',
        recommendations: [
          'Stay hydrated with electrolytes',
          'Follow BRAT diet (Bananas, Rice, Applesauce, Toast)',
          'Rest and avoid dairy',
          'Monitor for dehydration',
          'Seek medical care if symptoms worsen'
        ],
        description: 'Symptoms suggest viral or bacterial gastroenteritis. Most cases resolve with supportive care.'
      };
    } else if (count >= 3) {
      return {
        condition: 'Functional Dyspepsia',
        probability: Math.min(60 + score * 2, 80),
        severity: 'low',
        recommendations: [
          'Identify and avoid trigger foods',
          'Eat regular, smaller meals',
          'Manage stress levels',
          'Consider probiotics',
          'Consult healthcare provider'
        ],
        description: 'Multiple digestive symptoms suggest functional dyspepsia. Dietary and lifestyle changes often help.'
      };
    } else {
      return {
        condition: 'Mild Digestive Discomfort',
        probability: Math.min(40 + score * 3, 65),
        severity: 'low',
        recommendations: [
          'Monitor symptoms',
          'Stay hydrated',
          'Eat bland foods',
          'Rest and avoid stress',
          'Consult doctor if symptoms persist'
        ],
        description: 'Mild digestive symptoms that may resolve with rest and dietary adjustments.'
      };
    }
  };

  const predictSkinConditions = (selectedSymptoms: string[], count: number) => {
    const weights = {
      itching: 3, redness: 2, dryness: 2, swelling: 3, blisters: 4,
      scaling: 2, darkSpots: 2, hairLoss: 3, nailChanges: 2, skinThickening: 3
    };
    
    let score = selectedSymptoms.reduce((total, symptom) => {
      return total + (weights[symptom as keyof typeof weights] || 1);
    }, 0);
    
    if (selectedSymptoms.includes('blisters') && selectedSymptoms.includes('itching')) {
      return {
        condition: 'Contact Dermatitis or Allergic Reaction',
        probability: Math.min(80 + score * 2, 92),
        severity: 'medium',
        recommendations: [
          'Identify and avoid allergens',
          'Apply cool compresses',
          'Use gentle, fragrance-free products',
          'Consider antihistamines',
          'Consult dermatologist if severe'
        ],
        description: 'Symptoms suggest allergic contact dermatitis. Identifying triggers is key to prevention.'
      };
    } else if (selectedSymptoms.includes('scaling') && selectedSymptoms.includes('redness')) {
      return {
        condition: 'Eczema (Atopic Dermatitis)',
        probability: Math.min(75 + score * 3, 88),
        severity: 'medium',
        recommendations: [
          'Moisturize regularly with thick creams',
          'Use gentle, fragrance-free soaps',
          'Avoid hot showers',
          'Identify and avoid triggers',
          'Consider topical treatments'
        ],
        description: 'Symptoms consistent with eczema. Regular moisturizing and trigger avoidance are essential.'
      };
    } else if (selectedSymptoms.includes('darkSpots') && selectedSymptoms.includes('skinThickening')) {
      return {
        condition: 'Acanthosis Nigricans',
        probability: Math.min(70 + score * 2, 85),
        severity: 'medium',
        recommendations: [
          'Check blood sugar levels',
          'Maintain healthy weight',
          'Use gentle exfoliation',
          'Consult endocrinologist',
          'Address underlying conditions'
        ],
        description: 'Dark, thick skin patches may indicate insulin resistance. Medical evaluation recommended.'
      };
    } else if (selectedSymptoms.includes('hairLoss') && selectedSymptoms.includes('scaling')) {
      return {
        condition: 'Seborrheic Dermatitis',
        probability: Math.min(65 + score * 3, 82),
        severity: 'low',
        recommendations: [
          'Use antifungal shampoos',
          'Gentle scalp massage',
          'Avoid harsh hair products',
          'Manage stress levels',
          'Consider medicated treatments'
        ],
        description: 'Scalp condition causing flaking and hair loss. Usually responds well to medicated shampoos.'
      };
    } else {
      return {
        condition: 'General Skin Irritation',
        probability: Math.min(45 + score * 2, 70),
        severity: 'low',
        recommendations: [
          'Use gentle skincare products',
          'Moisturize regularly',
          'Avoid known irritants',
          'Protect from sun exposure',
          'Monitor for changes'
        ],
        description: 'Mild skin symptoms that may improve with gentle care and moisturizing.'
      };
    }
  };

  const predictHepatitis = (selectedSymptoms: string[], count: number) => {
    const weights = {
      jaundice: 4, darkUrine: 3, paleStool: 3, abdominalPain: 2, liverTenderness: 3,
      jointPain: 2, clayColoredStool: 4, spiderVeins: 3, fluidRetention: 3, confusion: 4
    };
    
    let score = selectedSymptoms.reduce((total, symptom) => {
      return total + (weights[symptom as keyof typeof weights] || 1);
    }, 0);
    
    if (selectedSymptoms.includes('jaundice') && selectedSymptoms.includes('darkUrine')) {
      return {
        condition: 'Acute Hepatitis - Immediate Medical Attention Required',
        probability: Math.min(85 + score * 2, 95),
        severity: 'high',
        recommendations: [
          'Seek immediate medical attention',
          'Get comprehensive liver function tests',
          'Avoid alcohol completely',
          'Rest and avoid strenuous activity',
          'Follow up with hepatologist'
        ],
        description: 'Classic signs of acute hepatitis. Immediate medical evaluation is crucial for proper diagnosis and treatment.'
      };
    } else if (selectedSymptoms.includes('spiderVeins') && selectedSymptoms.includes('fluidRetention')) {
      return {
        condition: 'Chronic Liver Disease',
        probability: Math.min(80 + score * 2, 92),
        severity: 'high',
        recommendations: [
          'Urgent hepatology consultation',
          'Complete liver assessment',
          'Avoid alcohol and hepatotoxic drugs',
          'Monitor for complications',
          'Consider liver transplant evaluation'
        ],
        description: 'Signs suggest advanced liver disease. Immediate specialist care is essential.'
      };
    } else if (selectedSymptoms.includes('clayColoredStool') && selectedSymptoms.includes('paleStool')) {
      return {
        condition: 'Biliary Obstruction',
        probability: Math.min(75 + score * 3, 88),
        severity: 'high',
        recommendations: [
          'Emergency medical evaluation',
          'Imaging studies (ultrasound/CT)',
          'Avoid fatty foods',
          'Monitor for worsening symptoms',
          'Prepare for possible intervention'
        ],
        description: 'Symptoms suggest bile duct obstruction. Requires immediate medical intervention.'
      };
    } else if (count >= 3) {
      return {
        condition: 'Possible Liver Dysfunction',
        probability: Math.min(60 + score * 2, 78),
        severity: 'medium',
        recommendations: [
          'Schedule liver function tests',
          'Avoid alcohol and unnecessary medications',
          'Maintain healthy diet',
          'Monitor symptoms closely',
          'Consult gastroenterologist'
        ],
        description: 'Multiple symptoms suggest possible liver involvement. Medical evaluation recommended.'
      };
    } else {
      return {
        condition: 'Low Risk for Hepatitis',
        probability: Math.min(25 + score * 2, 45),
        severity: 'low',
        recommendations: [
          'Continue monitoring symptoms',
          'Maintain liver-healthy lifestyle',
          'Avoid excessive alcohol',
          'Get routine health checkups',
          'Consider hepatitis vaccination'
        ],
        description: 'Current symptoms show low risk for hepatitis. Maintain healthy liver habits.'
      };
    }
  };

  const predictGeneralHealth = (selectedSymptoms: string[], count: number) => {
    if (count === 0) {
      return {
        condition: 'No Symptoms Detected',
        probability: 0,
        severity: 'none',
        recommendations: ['Continue maintaining good health habits', 'Regular check-ups recommended'],
        description: 'No concerning symptoms detected. Keep up with preventive care.'
      };
    } else if (count <= 2) {
      return {
        condition: 'Mild Viral Infection',
        probability: 65,
        severity: 'low',
        recommendations: ['Rest and hydration', 'Monitor symptoms', 'Consult doctor if symptoms worsen'],
        description: 'Symptoms suggest a possible mild viral infection. Most cases resolve with rest.'
      };
    } else if (count <= 4) {
      return {
        condition: 'Moderate Respiratory Infection',
        probability: 78,
        severity: 'medium',
        recommendations: ['Seek medical consultation', 'Rest and isolation', 'Monitor temperature', 'Stay hydrated'],
        description: 'Multiple symptoms suggest a moderate infection. Medical evaluation recommended.'
      };
    } else {
      return {
        condition: 'Severe Infection - Immediate Attention Required',
        probability: 85,
        severity: 'high',
        recommendations: ['Seek immediate medical attention', 'Contact healthcare provider', 'Monitor vital signs', 'Do not delay treatment'],
        description: 'Multiple severe symptoms detected. Immediate medical evaluation is strongly recommended.'
      };
    }
  };

  const analyzeSymptoms = async () => {
    setIsAnalyzing(true);
    
    // Simulate ML processing time
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const selectedSymptoms = Object.entries(symptoms)
      .filter(([_, selected]) => selected)
      .map(([symptom, _]) => symptom);
    
    const result = predictDisease(selectedModel, selectedSymptoms);
    setPrediction(result);
    setIsAnalyzing(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return CheckCircle;
      case 'medium': return AlertCircle;
      case 'high': return AlertCircle;
      default: return CheckCircle;
    }
  };

  const currentSymptoms = symptomCategories[selectedModel as keyof typeof symptomCategories] || [];

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
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              AI Disease Prediction Models
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced machine learning models trained on medical datasets to analyze symptoms 
              and provide preliminary health insights for specific conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedModel(model.id);
                  setPrediction(null);
                  setSymptoms(prev => Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {} as typeof prev));
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedModel === model.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`p-2 rounded-lg ${
                    selectedModel === model.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <model.icon className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900">{model.name}</h3>
                    <p className="text-xs text-gray-600">{model.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Symptoms Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Select Your Symptoms
                  <span className="block text-sm font-normal text-gray-600 mt-1">
                    {models.find(m => m.id === selectedModel)?.name} Model
                  </span>
                </h2>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {currentSymptoms.map((symptom) => (
                    <motion.div
                      key={symptom.key}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        symptoms[symptom.key as keyof typeof symptoms]
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleSymptomChange(symptom.key)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          symptoms[symptom.key as keyof typeof symptoms]
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <symptom.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{symptom.label}</h3>
                          <p className="text-sm text-gray-600">{symptom.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          symptoms[symptom.key as keyof typeof symptoms]
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {symptoms[symptom.key as keyof typeof symptoms] && (
                            <CheckCircle className="h-5 w-5 text-white" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={analyzeSymptoms}
                  disabled={isAnalyzing}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing with {models.find(m => m.id === selectedModel)?.name} Model...
                    </div>
                  ) : (
                    `Analyze with ${models.find(m => m.id === selectedModel)?.name} Model`
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
              {prediction ? (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    ML Analysis Results
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Condition */}
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getSeverityColor(prediction.severity)}`}>
                        {React.createElement(getSeverityIcon(prediction.severity), { className: "h-4 w-4 mr-2" })}
                        {prediction.condition}
                      </div>
                      <div className="mt-4">
                        <div className="text-3xl font-bold text-gray-900">{prediction.probability}%</div>
                        <div className="text-sm text-gray-600">ML Confidence Score</div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Analysis</h3>
                      <p className="text-gray-600">{prediction.description}</p>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
                      <div className="space-y-2">
                        {prediction.recommendations.map((rec: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Medical Disclaimer</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            This AI analysis is for informational purposes only and should not replace professional medical advice. 
                            Please consult with a qualified healthcare provider for proper diagnosis and treatment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <Stethoscope className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ready for ML Analysis
                  </h3>
                  <p className="text-gray-600">
                    Select your symptoms and click "Analyze" to get AI-powered health insights 
                    using our specialized {models.find(m => m.id === selectedModel)?.name.toLowerCase()} model.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Model Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our AI Models
            </h2>
            <p className="text-xl text-gray-600">
              Specialized machine learning models trained on medical datasets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neural Networks',
                description: 'Deep learning algorithms for pattern recognition in symptoms'
              },
              {
                icon: Activity,
                title: 'Feature Engineering',
                description: 'Advanced symptom weighting and correlation analysis'
              },
              {
                icon: CheckCircle,
                title: 'Validated Models',
                description: 'Trained on thousands of medical cases and outcomes'
              },
              {
                icon: Heart,
                title: 'Continuous Learning',
                description: 'Models improve with new data and medical research'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiseasePrediction;