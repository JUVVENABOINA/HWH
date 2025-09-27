import { useState } from 'react';
import { BarChart3, TrendingUp, Award, Clock } from 'lucide-react';

const Results = () => {
  const [activeTab, setActiveTab] = useState('overall');

  const overallMetrics = {
    mAP50: 89.3,
    mAP: 76.8,
    precision: 87.2,
    recall: 84.6,
    f1Score: 85.9,
    inferenceTime: 23.4
  };

  const classMetrics = [
    { name: 'Safety Helmet', precision: 92.1, recall: 88.5, f1: 90.2, ap: 91.3 },
    { name: 'Fire Extinguisher', precision: 89.4, recall: 87.2, f1: 88.3, ap: 89.7 },
    { name: 'Tool Kit', precision: 85.7, recall: 82.3, f1: 83.9, ap: 84.2 },
    { name: 'Emergency Equipment', precision: 88.3, recall: 85.9, f1: 87.1, ap: 87.8 },
    { name: 'Oxygen Tank', precision: 84.2, recall: 81.7, f1: 82.9, ap: 83.5 },
    { name: 'Communication Device', precision: 86.9, recall: 84.1, f1: 85.5, ap: 86.2 },
    { name: 'Warning Sign', precision: 87.6, recall: 85.3, f1: 86.4, ap: 87.1 }
  ];

  return (
    <section id="results" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Performance Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive evaluation metrics demonstrating state-of-the-art performance in space object detection
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center space-x-3 mb-3">
              <Award className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium text-green-300">mAP@0.5</span>
            </div>
            <div className="text-3xl font-bold text-white">{overallMetrics.mAP50}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Precision</span>
            </div>
            <div className="text-3xl font-bold text-white">{overallMetrics.precision}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Recall</span>
            </div>
            <div className="text-3xl font-bold text-white">{overallMetrics.recall}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-6 border border-orange-500/30">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="h-6 w-6 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Inference</span>
            </div>
            <div className="text-3xl font-bold text-white">{overallMetrics.inferenceTime}ms</div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8 border-b border-slate-600">
            <button
              onClick={() => setActiveTab('overall')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'overall'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Overall Performance
            </button>
            <button
              onClick={() => setActiveTab('perclass')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'perclass'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Per-Class Analysis
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overall' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Training Progress</h3>
              
              {/* Training Metrics */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Model Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">mAP@0.5</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: `${overallMetrics.mAP50}%`}}></div>
                        </div>
                        <span className="text-green-400 font-semibold">{overallMetrics.mAP50}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">mAP@[0.5:0.95]</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-slate-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${overallMetrics.mAP}%`}}></div>
                        </div>
                        <span className="text-blue-400 font-semibold">{overallMetrics.mAP}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">F1-Score</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-slate-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: `${overallMetrics.f1Score}%`}}></div>
                        </div>
                        <span className="text-purple-400 font-semibold">{overallMetrics.f1Score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Training Summary</h4>
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Epochs:</span>
                      <span className="text-white">30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Batch Size:</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Learning Rate:</span>
                      <span className="text-white">0.001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Time:</span>
                      <span className="text-white">2.3 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'perclass' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Per-Class Performance Analysis</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 text-gray-300 font-semibold">Class</th>
                      <th className="text-center py-3 text-gray-300 font-semibold">Precision</th>
                      <th className="text-center py-3 text-gray-300 font-semibold">Recall</th>
                      <th className="text-center py-3 text-gray-300 font-semibold">F1-Score</th>
                      <th className="text-center py-3 text-gray-300 font-semibold">AP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classMetrics.map((metric, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="py-4 text-white font-medium">{metric.name}</td>
                        <td className="py-4 text-center">
                          <span className="text-blue-400 font-semibold">{metric.precision}%</span>
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-green-400 font-semibold">{metric.recall}%</span>
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-purple-400 font-semibold">{metric.f1}%</span>
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-orange-400 font-semibold">{metric.ap}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;