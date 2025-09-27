import React from 'react';
import { useState } from 'react';
import { Brain, Database, Cog, BarChart3, CheckCircle } from 'lucide-react';

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Database,
      title: "Data Preparation",
      description: "Dataset analysis, augmentation, and preprocessing for optimal training performance",
      details: [
        "Applied rotation, brightness, and contrast augmentations",
        "Implemented Mosaic augmentation for better detection",
        "Normalized images and optimized anchor boxes",
        "Created balanced train/validation splits"
      ]
    },
    {
      icon: Brain,
      title: "Model Architecture",
      description: "YOLOv8 implementation with custom modifications for space environment detection",
      details: [
        "Used YOLOv8-medium as base architecture",
        "Fine-tuned on COCO pretrained weights",
        "Optimized anchor boxes for space objects",
        "Implemented multi-scale training strategy"
      ]
    },
    {
      icon: Cog,
      title: "Training Pipeline",
      description: "Optimized training process with advanced techniques and hyperparameter tuning",
      details: [
        "30 epochs with early stopping",
        "AdamW optimizer with cosine scheduling",
        "Gradient clipping and mixed precision",
        "Real-time validation monitoring"
      ]
    },
    {
      icon: BarChart3,
      title: "Evaluation & Metrics",
      description: "Comprehensive performance analysis using industry-standard evaluation metrics",
      details: [
        "mAP@0.5 and mAP@[0.5:0.95] calculations",
        "Per-class precision and recall analysis",
        "Inference speed benchmarking",
        "Confusion matrix and error analysis"
      ]
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Methodology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach to building state-of-the-art object detection for space environments
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Step Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeStep === index ? 'bg-blue-500' : 'bg-slate-700'
                    }`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Details */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              {React.createElement(steps[activeStep].icon, { 
                className: "h-8 w-8 text-blue-400" 
              })}
              <h3 className="text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">
              {steps[activeStep].description}
            </p>

            <div className="space-y-3">
              {steps[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{detail}</span>
                </div>
              ))}
            </div>

            {/* Architecture Diagram for Model Step */}
            {activeStep === 1 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">YOLOv8 Architecture</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <div className="text-blue-300 font-semibold">Backbone</div>
                    <div className="text-sm text-gray-300">CSPDarknet53</div>
                  </div>
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <div className="text-purple-300 font-semibold">Neck</div>
                    <div className="text-sm text-gray-300">PANet + FPN</div>
                  </div>
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <div className="text-orange-300 font-semibold">Head</div>
                    <div className="text-sm text-gray-300">Decoupled Head</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;