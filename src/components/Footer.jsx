import React, { useState } from 'react';
import { Instagram, Download, Heart, Shield, Zap, Users, Mail, Twitter, Facebook, Github, Star, Sparkles, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-white/20 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-bounce"></div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-1/4 left-1/5 animate-twinkle">
          <Sparkles className="w-6 h-6 text-pink-400" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-twinkle" style={{animationDelay: '1s'}}>
          <Star className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-twinkle" style={{animationDelay: '2s'}}>
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/25">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  InstaDown
                </h3>
                <p className="text-sm font-medium text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">
                  ⚡ Lightning Fast & 100% Free
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              🚀 Download Instagram content in seconds! Photos, videos, stories, and reels - all in highest quality. 
              <span className="text-pink-400 font-medium"> No ads, no limits, no BS.</span>
            </p>
            <div className="flex space-x-3">
              <div className="group bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-3 rounded-xl hover:from-blue-500/40 hover:to-blue-600/40 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-blue-500/25 shadow-lg">
                <Twitter className="w-5 h-5 group-hover:text-blue-300" />
              </div>
              <div className="group bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm p-3 rounded-xl hover:from-blue-600/40 hover:to-indigo-600/40 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-indigo-500/25 shadow-lg">
                <Facebook className="w-5 h-5 group-hover:text-indigo-300" />
              </div>
              <div className="group bg-gradient-to-r from-gray-700/20 to-gray-800/20 backdrop-blur-sm p-3 rounded-xl hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-gray-500/25 shadow-lg">
                <Github className="w-5 h-5 group-hover:text-gray-300" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              Features
            </h4>
            <ul className="space-y-4">
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-white/5">
                <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">HD Photos Download</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-white/5">
                <div className="bg-gradient-to-r from-purple-400 to-violet-400 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">4K Videos Download</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-white/5">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Stories Saver</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-white/5">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Reels Downloader</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
              Why Choose Us
            </h4>
            <ul className="space-y-4">
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-orange-500/10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-lg shadow-lg group-hover:shadow-yellow-400/25 group-hover:scale-110 transition-all">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">Lightning Fast</span>
                  <span className="text-xs text-gray-400">Download in 2-3 seconds</span>
                </div>
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-lg shadow-lg group-hover:shadow-green-400/25 group-hover:scale-110 transition-all">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">100% Secure</span>
                  <span className="text-xs text-gray-400">No data stored</span>
                </div>
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-lg shadow-lg group-hover:shadow-blue-400/25 group-hover:scale-110 transition-all">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">No Registration</span>
                  <span className="text-xs text-gray-400">Start immediately</span>
                </div>
              </li>
              <li className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-pink-500/10">
                <div className="bg-gradient-to-r from-red-400 to-pink-400 p-2 rounded-lg shadow-lg group-hover:shadow-red-400/25 group-hover:scale-110 transition-all">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">Always Free</span>
                  <span className="text-xs text-gray-400">No hidden charges</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              Stay Connected
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              🎉 Get notified about new features, updates, and exclusive tips!
            </p>
            <div className="space-y-4">
              <div className="flex relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-white/20 flex-1 transition-all duration-300 hover:bg-white/15"
                />
                <button 
                  onClick={handleSubscribe}
                  className={`absolute right-1 top-1 bottom-1 px-4 rounded-xl transition-all duration-300 ${
                    isSubscribed 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
                  } hover:scale-105 shadow-lg`}
                >
                  {isSubscribed ? (
                    <span className="text-xs font-semibold">✓ Done!</span>
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>
              </div>
          
            
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-white/10 relative">
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-6 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-300 group-hover:scale-105 border border-pink-500/20">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">10M+</div>
              <div className="text-sm text-gray-400 font-medium">Total Downloads</div>
              <div className="text-xs text-pink-300 mt-1">🚀 And counting!</div>
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm rounded-2xl p-6 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300 group-hover:scale-105 border border-purple-500/20">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-sm text-gray-400 font-medium">Daily Users</div>
              <div className="text-xs text-purple-300 mt-1">👥 Active community</div>
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 group-hover:scale-105 border border-blue-500/20">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-sm text-gray-400 font-medium">Success Rate</div>
              <div className="text-xs text-blue-300 mt-1">⚡ Lightning fast</div>
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300 group-hover:scale-105 border border-green-500/20">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-gray-400 font-medium">Always Online</div>
              <div className="text-xs text-green-300 mt-1">🛡️ Reliable service</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 InstaDown. All rights reserved
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-0 w-1 h-20 bg-gradient-to-b from-pink-400 to-purple-600 rounded-r-full"></div>
      <div className="absolute top-1/3 right-0 w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-600 rounded-l-full"></div>
    </footer>
  );
};

export default Footer;