import React from 'react';
import { Instagram, Download, Heart, Shield, Zap, Users, Mail, Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-2xl">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  InstaDown
                </h3>
                <p className="text-sm text-gray-300">Fast & Free</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Download Instagram photos, videos, stories, and reels instantly. Fast, free, and secure - no registration required.
            </p>
            <div className="flex space-x-3">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Download className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Download Photos</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Download className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Download Videos</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Download className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Download Stories</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Download className="w-4 h-4 text-green-400" />
                <span className="text-sm">Download Reels</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Lightning Fast</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm">100% Secure</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm">No Registration</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Always Free</span>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Get updates about new features and improvements.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 flex-1"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 rounded-r-lg transition-all">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">10M+</div>
            <div className="text-sm text-gray-400">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">50K+</div>
            <div className="text-sm text-gray-400">Daily Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 InstaDown. All rights reserved. 
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