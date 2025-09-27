import { Github, ExternalLink, Mail, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Space Detection AI</h3>
            <p className="text-gray-400 mb-4">
              Advanced object detection system for space station safety monitoring using YOLOv8 architecture.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Award className="h-4 w-4" />
              <span>Duality AI Hackathon 2025</span>
            </div>
          </div>

          {/* Technical Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technical Stack</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Model:</span>
                <span className="text-white">YOLOv8-medium</span>
              </div>
              <div className="flex justify-between">
                <span>Framework:</span>
                <span className="text-white">PyTorch</span>
              </div>
              <div className="flex justify-between">
                <span>mAP@0.5:</span>
                <span className="text-green-400">89.3%</span>
              </div>
              <div className="flex justify-between">
                <span>Inference:</span>
                <span className="text-blue-400">23.4ms</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Project Links</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
                <span>View Source Code</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Award className="h-4 w-4" />
                <span>Hackathon Submission</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>Contact Team</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2025 Space Detection AI Project. Built for Duality AI Hackathon with ❤️ for space safety.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;