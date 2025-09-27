import { AlertTriangle, Database, Target, Users } from 'lucide-react';

const ProblemOverview = () => {
  return (
    <section id="problem" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Problem Statement
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Duality AI Hackathon Challenge: Develop an advanced object detection system for space station safety monitoring
          </p>
        </div>

        {/* Problem Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Challenge Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Safety Critical Detection</h4>
                  <p className="text-gray-300">Identify safety equipment, tools, and potential hazards in space station environments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Multi-Class Detection</h4>
                  <p className="text-gray-300">Accurately classify and locate multiple object types simultaneously</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Real-World Impact</h4>
                  <p className="text-gray-300">Enhance astronaut safety through intelligent monitoring systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-xl p-6 border border-white/20">
            <img 
              src="https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg"
              alt="Space Station Challenge"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-2">Space Station Safety Monitoring</h4>
              <p className="text-gray-300">Detecting critical objects in zero-gravity environments</p>
            </div>
          </div>
        </div>

        {/* Dataset Information */}
        <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-8 w-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Dataset Specifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
              <div className="text-gray-300">Total Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">7</div>
              <div className="text-gray-300">Object Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15,239</div>
              <div className="text-gray-300">Annotations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">70/20/10</div>
              <div className="text-gray-300">Train/Val/Test Split</div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Object Classes</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Safety Helmet', 'Fire Extinguisher', 'Tool Kit', 'Emergency Equipment',
                'Oxygen Tank', 'Communication Device', 'Warning Sign'
              ].map((className, index) => (
                <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  {className}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemOverview;