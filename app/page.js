'use client';

import React, { useState } from 'react';
import { Camera, Download, CreditCard } from 'lucide-react';

export default function StudentIDGenerator() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    department: '',
    year: '',
    bloodGroup: '',
    dateOfBirth: '',
    validUntil: '',
    photoUrl: ''
  });
  
  const [showCard, setShowCard] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          photoUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    if (!formData.studentName) return alert('Please enter student name');
    if (!formData.studentId) return alert('Please enter student ID');
    if (!formData.department) return alert('Please enter department');
    if (!formData.year) return alert('Please select year');
    if (!formData.dateOfBirth) return alert('Please select date of birth');
    if (!formData.validUntil) return alert('Please select valid until date');
    if (!formData.photoUrl) return alert('Please upload a photo');
    setShowCard(true);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      studentId: '',
      department: '',
      year: '',
      bloodGroup: '',
      dateOfBirth: '',
      validUntil: '',
      photoUrl: ''
    });
    setShowCard(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CreditCard className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-indigo-900">
              Student ID Card Generator
            </h1>
          </div>
          <p className="text-gray-600">Create professional student identification cards instantly</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Enter Student Details
            </h2>
            <div className="space-y-5">
              {/* Inputs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="studentName" value={formData.studentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="e.g., John Doe" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student ID Number <span className="text-red-500">*</span>
                </label>
                <input type="text" name="studentId" value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="e.g., STU2024001" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department / Course <span className="text-red-500">*</span>
                </label>
                <input type="text" name="department" value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="e.g., Computer Science" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year <span className="text-red-500">*</span>
                  </label>
                  <select name="year" value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white">
                    <option value="">Select Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select name="bloodGroup" value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white">
                    <option value="">Select</option>
                    <option>A+</option><option>A-</option>
                    <option>B+</option><option>B-</option>
                    <option>O+</option><option>O-</option>
                    <option>AB+</option><option>AB-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Valid Until <span className="text-red-500">*</span>
                  </label>
                  <input type="date" name="validUntil" value={formData.validUntil}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Photo <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer">
                    <div className="w-full px-4 py-3 border-2 border-dashed border-indigo-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 bg-indigo-25">
                      <Camera className="w-5 h-5 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">
                        {formData.photoUrl ? 'Change Photo' : 'Click to Upload'}
                      </span>
                    </div>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  </label>
                  {formData.photoUrl && (
                    <div className="flex-shrink-0">
                      <img src={formData.photoUrl} alt="Preview" className="w-20 h-20 object-cover rounded-lg border-2 border-indigo-300 shadow-sm" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={handleGenerate}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Generate ID Card
                </button>
                {showCard && (
                  <button onClick={handleReset}
                    className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-lg transition-all">
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Card Preview */}
          <div className="flex flex-col items-center justify-center">
            {showCard ? (
              <div className="space-y-6 w-full max-w-md">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">✓</span>
                    ID Card Generated
                  </h2>
                  <p className="text-gray-600 text-sm">Your student ID card is ready!</p>
                </div>

                <div id="id-card" className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform">
                  <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 p-5 text-white relative overflow-hidden">
                    <h3 className="text-center text-2xl font-bold tracking-wide">UNIVERSITY NAME</h3>
                    <p className="text-center text-xs opacity-90 mt-1 font-medium">Student Identification Card</p>
                  </div>

                  <div className="
