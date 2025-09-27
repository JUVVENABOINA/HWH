import { useState, useRef } from 'react';
import { Upload, Play, RotateCcw, Download } from 'lucide-react';

const Demo = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.5);
  const [processingTime, setProcessingTime] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleImages = [
    {
      id: 'space-tools',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'Space Tools & Equipment',
      detections: [
        { class: 'Safety Helmet', confidence: 0.94, bbox: [120, 80, 200, 160] },
        { class: 'Tool Kit', confidence: 0.89, bbox: [300, 120, 380, 200] },
        { class: 'Emergency Equipment', confidence: 0.76, bbox: [50, 200, 150, 280] }
      ]
    },
    {
      id: 'station-interior',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'Space Station Interior',
      detections: [
        { class: 'Fire Extinguisher', confidence: 0.92, bbox: [180, 100, 260, 220] },
        { class: 'Oxygen Tank', confidence: 0.87, bbox: [350, 150, 420, 250] },
        { class: 'Communication Device', confidence: 0.83, bbox: [80, 180, 160, 240] }
      ]
    },
    {
      id: 'eva-operations',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'EVA Operations',
      detections: [
        { class: 'Safety Helmet', confidence: 0.96, bbox: [200, 60, 320, 180] },
        { class: 'Tool Kit', confidence: 0.91, bbox: [100, 200, 200, 300] },
        { class: 'Communication Device', confidence: 0.85, bbox: [340, 120, 420, 200] }
      ]
    },
    {
      id: 'scientific-equipment',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'Scientific Equipment',
      detections: [
        { class: 'Emergency Equipment', confidence: 0.88, bbox: [150, 100, 250, 200] },
        { class: 'Tool Kit', confidence: 0.84, bbox: [300, 150, 400, 250] },
        { class: 'Warning Sign', confidence: 0.79, bbox: [50, 50, 130, 130] }
      ]
    },
    {
      id: 'control-panel',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'Control Panel',
      detections: [
        { class: 'Warning Sign', confidence: 0.93, bbox: [120, 80, 200, 160] },
        { class: 'Communication Device', confidence: 0.86, bbox: [250, 120, 330, 200] },
        { class: 'Emergency Equipment', confidence: 0.81, bbox: [80, 200, 180, 280] }
      ]
    },
    {
      id: 'maintenance-bay',
      src: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
      name: 'Maintenance Bay',
      detections: [
        { class: 'Tool Kit', confidence: 0.95, bbox: [180, 100, 280, 200] },
        { class: 'Safety Helmet', confidence: 0.90, bbox: [320, 80, 400, 160] },
        { class: 'Fire Extinguisher', confidence: 0.87, bbox: [60, 180, 140, 280] }
      ]
    }
  ];

  const handleImageSelect = (imageSrc: string, imageId: string) => {
    setSelectedImage(imageSrc);
    setUploadedFile(null);
    setResults([]);
    
    // Set predefined results for sample images
    const sampleImage = sampleImages.find(img => img.id === imageId);
    if (sampleImage) {
      setResults(sampleImage.detections);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedFile(file);
      setSelectedImage(URL.createObjectURL(file));
      setResults([]);
      
      // Generate random results for uploaded images
      const randomResults = generateRandomDetections();
      setResults(randomResults);
    }
  };

  const generateRandomDetections = () => {
    const classes = ['Safety Helmet', 'Fire Extinguisher', 'Tool Kit', 'Emergency Equipment', 'Oxygen Tank', 'Communication Device', 'Warning Sign'];
    const numDetections = Math.floor(Math.random() * 4) + 2; // 2-5 detections
    const detections = [];
    
    for (let i = 0; i < numDetections; i++) {
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      const confidence = Math.random() * 0.28 + 0.7; // 0.70-0.98
      const x = Math.random() * 300 + 50;
      const y = Math.random() * 200 + 50;
      const width = Math.random() * 120 + 80;
      const height = Math.random() * 120 + 80;
      
      detections.push({
        class: randomClass,
        confidence: parseFloat(confidence.toFixed(3)),
        bbox: [x, y, x + width, y + height]
      });
    }
    
    return detections;
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsProcessing(true);
    const startTime = Date.now();
    
    // Simulate processing time
    const processingDuration = Math.random() * 1200 + 2000; // 2.0-3.2 seconds
    
    setTimeout(() => {
      const endTime = Date.now();
      setProcessingTime((endTime - startTime) / 1000);
      setIsProcessing(false);
    }, processingDuration);
  };

  const handleClear = () => {
    setSelectedImage('');
    setUploadedFile(null);
    setResults([]);
    setProcessingTime(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const filteredResults = results.filter(result => result.confidence >= confidenceThreshold);

  const getObjectColor = (className: string) => {
    const colors = {
      'Safety Helmet': '#10b981', // green
      'Fire Extinguisher': '#f59e0b', // amber
      'Tool Kit': '#3b82f6', // blue
      'Emergency Equipment': '#ef4444', // red
      'Oxygen Tank': '#8b5cf6', // violet
      'Communication Device': '#06b6d4', // cyan
      'Warning Sign': '#f97316' // orange
    };
    return colors[className as keyof typeof colors] || '#6b7280';
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test our space station object detection system with sample images or upload your own
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Panel - Image Selection */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Select Image</h3>
            
            {/* File Upload */}
            <div className="mb-6">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-600 hover:border-blue-500 rounded-xl p-8 text-center cursor-pointer transition-colors duration-300 bg-slate-800/30"
              >
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">
                  {uploadedFile ? uploadedFile.name : 'Click to browse files or drag and drop'}
                </p>
                <p className="text-sm text-gray-500">Supports JPG, PNG, JPEG up to 10MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Sample Images */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Or choose a sample:</h4>
              <div className="grid grid-cols-2 gap-4">
                {sampleImages.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => handleImageSelect(image.src, image.id)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === image.src
                        ? 'border-blue-500 shadow-lg shadow-blue-500/25'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                      <p className="text-white text-xs font-medium">{image.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confidence Threshold: {confidenceThreshold.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={confidenceThreshold}
                  onChange={(e) => setConfidenceThreshold(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAnalyze}
                  disabled={!selectedImage || isProcessing}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Analyze Image</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleClear}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>Clear</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Detection Results</h3>
              {processingTime > 0 && (
                <span className="text-sm text-gray-400">
                  Processed in {processingTime.toFixed(2)}s
                </span>
              )}
            </div>

            {/* Image Display */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
              {selectedImage ? (
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Selected for analysis"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  
                  {/* Bounding Boxes Overlay */}
                  {filteredResults.map((result, index) => (
                    <div
                      key={index}
                      className="absolute border-2 rounded"
                      style={{
                        left: `${(result.bbox[0] / 500) * 100}%`,
                        top: `${(result.bbox[1] / 320) * 100}%`,
                        width: `${((result.bbox[2] - result.bbox[0]) / 500) * 100}%`,
                        height: `${((result.bbox[3] - result.bbox[1]) / 320) * 100}%`,
                        borderColor: getObjectColor(result.class)
                      }}
                    >
                      <div 
                        className="absolute -top-6 left-0 px-2 py-1 rounded text-xs font-semibold text-white"
                        style={{ backgroundColor: getObjectColor(result.class) }}
                      >
                        {result.class} ({(result.confidence * 100).toFixed(1)}%)
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-80 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Select an image to start detection</p>
                </div>
              )}
            </div>

            {/* Detection Details */}
            {filteredResults.length > 0 && (
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    Detected Objects ({filteredResults.length})
                  </h4>
                  <button className="text-gray-400 hover:text-white">
                    <Download className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {filteredResults
                    .sort((a, b) => b.confidence - a.confidence)
                    .map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: getObjectColor(result.class) }}
                        ></div>
                        <span className="text-white font-medium">{result.class}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-slate-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${result.confidence * 100}%`,
                              backgroundColor: getObjectColor(result.class)
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-300 w-12">
                          {(result.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;