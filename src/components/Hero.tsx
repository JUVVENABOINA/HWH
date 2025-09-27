import { ArrowRight, Target, Clock, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Space Station
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"> Safety AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced object detection system for astronaut safety monitoring using cutting-edge YOLOv8 architecture. 
              Protecting space missions through intelligent visual recognition.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-400" />
                  <span className="text-2xl font-bold text-white">89.3%</span>
                </div>
                <p className="text-sm text-gray-300">mAP@0.5 Accuracy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-2xl font-bold text-white">23.4ms</span>
                </div>
                <p className="text-sm text-gray-300">Inference Time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-400" />
                  <span className="text-2xl font-bold text-white">7</span>
                </div>
                <p className="text-sm text-gray-300">Object Classes</p>
              </div>
            </div>

            <button 
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Try Live Demo</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg"
                alt="Space Station Interior"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600">Hackathon Project</div>
                <div className="text-lg font-bold text-gray-900">Duality AI Challenge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;