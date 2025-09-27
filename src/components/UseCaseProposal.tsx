import { Rocket, Shield, Clock, Users, CheckCircle, Calendar, Target, TrendingUp } from 'lucide-react';

const UseCaseProposal = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Safety Monitoring",
      description: "65% reduction in safety incidents through continuous visual monitoring of critical equipment and hazardous situations.",
      impact: "Critical"
    },
    {
      icon: Clock,
      title: "Real-time Alert System",
      description: "Immediate detection and alerting for misplaced tools, equipment malfunctions, or safety protocol violations.",
      impact: "High"
    },
    {
      icon: Users,
      title: "Crew Efficiency Optimization",
      description: "40% improvement in task completion time through automated equipment tracking and location assistance.",
      impact: "High"
    },
    {
      icon: Rocket,
      title: "Mission Success Assurance",
      description: "Comprehensive monitoring ensures mission-critical equipment availability and astronaut safety compliance.",
      impact: "Critical"
    }
  ];

  const phases = [
    {
      phase: 1,
      title: "Proof of Concept",
      duration: "3 months",
      description: "Deploy system in simulated space station environment for validation and refinement",
      deliverables: ["System integration", "Performance validation", "Safety protocols"]
    },
    {
      phase: 2,
      title: "ISS Integration",
      duration: "6 months", 
      description: "Implementation aboard International Space Station with continuous monitoring capabilities",
      deliverables: ["Hardware deployment", "Crew training", "Live monitoring dashboard"]
    },
    {
      phase: 3,
      title: "Mission Expansion",
      duration: "12+ months",
      description: "Scale to future lunar and Mars missions with enhanced AI capabilities",
      deliverables: ["Advanced AI models", "Multi-mission support", "Autonomous decision making"]
    }
  ];

  const specifications = [
    { label: "Processing Speed", value: "23.4ms real-time inference" },
    { label: "Accuracy", value: "89.3% mAP@0.5 detection rate" },
    { label: "Coverage", value: "24/7 continuous monitoring" },
    { label: "Object Classes", value: "7 critical safety categories" },
    { label: "Hardware", value: "Edge computing compatible" },
    { label: "Integration", value: "Existing ISS camera systems" }
  ];

  return (
    <section id="usecase" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-World Deployment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive use case proposal for implementing AI-powered safety monitoring across space missions
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Benefits & Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${
                      benefit.impact === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      benefit.impact === 'Critical' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {benefit.impact}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Target className="h-6 w-6 text-blue-400" />
              <span>Technical Specifications</span>
            </h3>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/50 last:border-b-0">
                  <span className="text-gray-300 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <span>Expected Impact Metrics</span>
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Safety Improvement</span>
                  <span className="text-green-400 font-bold">65%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Efficiency Gains</span>
                  <span className="text-blue-400 font-bold">40%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Response Time Reduction</span>
                  <span className="text-orange-400 font-bold">75%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
            <Calendar className="h-6 w-6 text-purple-400" />
            <span>Implementation Roadmap</span>
          </h3>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  {/* Phase Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{phase.phase}</span>
                    </div>
                  </div>
                  
                  {/* Phase Content */}
                  <div className="flex-grow">
                    <div className="bg-slate-900/50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-white">{phase.title}</h4>
                        <span className="text-sm text-blue-400 font-semibold bg-blue-500/20 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      
                      <div>
                        <span className="text-sm font-semibold text-gray-400 mb-2 block">Key Deliverables:</span>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-full">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span className="text-sm text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Space Safety?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI-powered space station monitoring system is ready for deployment. Contact us to discuss implementation for your space mission requirements.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Download Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseProposal;