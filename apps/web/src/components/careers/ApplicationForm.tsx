// components/careers/ApplicationForm.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Link as LinkIcon,
  UploadCloud,
  FileText,
  Globe,
  GraduationCap,
  Briefcase,
  MessageSquare,
  CheckCircle,
  X,
  Users
} from "lucide-react";
import Link from "next/link";

interface ApplicationFormProps {
  positionId: string | null;
}

export default function ApplicationForm({ positionId }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    coverLetter: "",
    hearAboutUs: "",
    // File uploads
    resume: null as File | null,
    coverLetterFile: null as File | null,
    // Professional info
    currentCompany: "",
    currentRole: "",
    yearsExperience: "",
    highestEducation: "",
    salaryExpectations: "",
    noticePeriod: "",
    startDate: "",
    // References
    references: [{ name: "", email: "", relationship: "", phone: "" }],
    // Diversity (optional)
    gender: "",
    ethnicity: "",
    veteranStatus: "",
    disabilityStatus: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'resume' | 'coverLetterFile') => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          [field]: 'Please upload PDF or DOC/DOCX files only'
        }));
        return;
      }
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          [field]: 'File size must be less than 5MB'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        [field]: file
      }));
      if (errors[field]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    }
  };

  const handleReferenceChange = (index: number, field: string, value: string) => {
    const newReferences = [...formData.references];
    const currentRef = newReferences[index] || { name: "", email: "", relationship: "", phone: "" };
    newReferences[index] = {
      ...currentRef,
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      references: newReferences
    }));
  };

  const addReference = () => {
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, { name: "", email: "", relationship: "", phone: "" }]
    }));
  };

  const removeReference = (index: number) => {
    if (formData.references.length > 1) {
      const newReferences = formData.references.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        references: newReferences
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.currentRole.trim()) newErrors.currentRole = "Current role is required";
    if (!formData.yearsExperience.trim()) newErrors.yearsExperience = "Years of experience is required";
    
    // URL validation (if provided)
    if (formData.portfolioUrl && !/^https?:\/\/.+/.test(formData.portfolioUrl)) {
      newErrors.portfolioUrl = "Please enter a valid URL";
    }
    if (formData.linkedinUrl && !/^https?:\/\/.+/.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = "Please enter a valid LinkedIn URL";
    }
    if (formData.githubUrl && !/^https?:\/\/.+/.test(formData.githubUrl)) {
      newErrors.githubUrl = "Please enter a valid GitHub URL";
    }

    // References validation
    formData.references.forEach((ref, index) => {
      if (!ref.name.trim()) newErrors[`references[${index}].name`] = "Reference name is required";
      if (!ref.email.trim()) {
        newErrors[`references[${index}].email`] = "Reference email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ref.email)) {
        newErrors[`references[${index}].email`] = "Please enter a valid email";
      }
      if (!ref.relationship.trim()) newErrors[`references[${index}].relationship`] = "Relationship is required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would submit to your backend API
      // For now, we'll simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful submission
      console.log('Form submitted:', {
        positionId,
        ...formData,
        resume: formData.resume?.name,
        coverLetterFile: formData.coverLetterFile?.name
      });
      
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        portfolioUrl: "",
        linkedinUrl: "",
        githubUrl: "",
        coverLetter: "",
        hearAboutUs: "",
        resume: null,
        coverLetterFile: null,
        currentCompany: "",
        currentRole: "",
        yearsExperience: "",
        highestEducation: "",
        salaryExpectations: "",
        noticePeriod: "",
        startDate: "",
        references: [{ name: "", email: "", relationship: "", phone: "" }],
        gender: "",
        ethnicity: "",
        veteranStatus: "",
        disabilityStatus: ""
      });
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for applying to Sendexa. We&apos;ll review your application and get back to you within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/careers"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition-all"
          >
            View Other Positions
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:border-gray-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-rose-600">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-rose-600">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.email ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-rose-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.phone ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-rose-600">{errors.phone}</p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.location ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
              placeholder="City, Country"
            />
          </div>
          {errors.location && (
            <p className="mt-1 text-sm text-rose-600">{errors.location}</p>
          )}
        </div>
      </div>

      {/* Professional Links */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <LinkIcon className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Professional Links</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio URL
            </label>
            <input
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.portfolioUrl ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
              placeholder="https://yourportfolio.com"
            />
            {errors.portfolioUrl && (
              <p className="mt-1 text-sm text-rose-600">{errors.portfolioUrl}</p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.linkedinUrl ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                placeholder="https://linkedin.com/in/username"
              />
              {errors.linkedinUrl && (
                <p className="mt-1 text-sm text-rose-600">{errors.linkedinUrl}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GitHub Profile (for technical roles)
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.githubUrl ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                placeholder="https://github.com/username"
              />
              {errors.githubUrl && (
                <p className="mt-1 text-sm text-rose-600">{errors.githubUrl}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Company
            </label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              placeholder="Current company name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Role *
            </label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.currentRole ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
              placeholder="Software Engineer"
            />
            {errors.currentRole && (
              <p className="mt-1 text-sm text-rose-600">{errors.currentRole}</p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience *
            </label>
            <select
              name="yearsExperience"
              value={formData.yearsExperience}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.yearsExperience ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-7">5-7 years</option>
              <option value="7-10">7-10 years</option>
              <option value="10+">10+ years</option>
            </select>
            {errors.yearsExperience && (
              <p className="mt-1 text-sm text-rose-600">{errors.yearsExperience}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highest Education
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                name="highestEducation"
                value={formData.highestEducation}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                <option value="">Select education level</option>
                <option value="high-school">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary Expectations
            </label>
            <input
              type="text"
              name="salaryExpectations"
              value={formData.salaryExpectations}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              placeholder="$XX,XXX - $XX,XXX or market rate"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notice Period
            </label>
            <select
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            >
              <option value="">Select notice period</option>
              <option value="immediate">Immediate</option>
              <option value="1-week">1 week</option>
              <option value="2-weeks">2 weeks</option>
              <option value="1-month">1 month</option>
              <option value="2-months">2 months</option>
              <option value="3-months">3 months</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Earliest Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Documents Upload */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <UploadCloud className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Documents Upload</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume/CV *
              <span className="text-gray-500 text-xs ml-2">(PDF, DOC, DOCX, max 5MB)</span>
            </label>
            <div className={`border-2 ${errors.resume ? 'border-rose-500' : 'border-gray-300'} border-dashed rounded-lg p-6 text-center transition-all hover:border-cyan-500`}>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, 'resume')}
                className="hidden"
              />
              <label htmlFor="resume" className="cursor-pointer">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500">PDF, DOC or DOCX (Max. 5MB)</p>
              </label>
            </div>
            {errors.resume && (
              <p className="mt-1 text-sm text-rose-600">{errors.resume}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter (Optional)
              <span className="text-gray-500 text-xs ml-2">(PDF, DOC, DOCX, max 5MB)</span>
            </label>
            <div className="border-2 border-gray-300 border-dashed rounded-lg p-6 text-center transition-all hover:border-cyan-500">
              <input
                type="file"
                id="coverLetterFile"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, 'coverLetterFile')}
                className="hidden"
              />
              <label htmlFor="coverLetterFile" className="cursor-pointer">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">
                  {formData.coverLetterFile ? formData.coverLetterFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500">PDF, DOC or DOCX (Max. 5MB)</p>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Letter */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Cover Letter</h3>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tell us why you&apos;re interested in this position
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="Share your motivation, relevant experience, and why you'd be a great fit for this role..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How did you hear about us?
          </label>
          <select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          >
            <option value="">Select an option</option>
            <option value="linkedin">LinkedIn</option>
            <option value="github">GitHub Jobs</option>
            <option value="indeed">Indeed</option>
            <option value="referral">Employee Referral</option>
            <option value="event">Career Fair/Event</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Professional References */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-cyan-600" />
            <h3 className="text-lg font-semibold text-gray-900">Professional References</h3>
          </div>
          <button
            type="button"
            onClick={addReference}
            className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
          >
            + Add Another Reference
          </button>
        </div>
        
        <div className="space-y-6">
          {formData.references.map((ref, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Reference #{index + 1}</h4>
                {formData.references.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeReference(index)}
                    className="text-gray-400 hover:text-rose-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={ref.name}
                    onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors[`references[${index}].name`] ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="Reference name"
                  />
                  {errors[`references[${index}].name`] && (
                    <p className="mt-1 text-sm text-rose-600">{errors[`references[${index}].name`]}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship *
                  </label>
                  <input
                    type="text"
                    value={ref.relationship}
                    onChange={(e) => handleReferenceChange(index, 'relationship', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors[`references[${index}].relationship`] ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="Manager, Colleague, Professor"
                  />
                  {errors[`references[${index}].relationship`] && (
                    <p className="mt-1 text-sm text-rose-600">{errors[`references[${index}].relationship`]}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={ref.email}
                    onChange={(e) => handleReferenceChange(index, 'email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors[`references[${index}].email`] ? 'border-rose-500' : 'border-gray-300'} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="reference@example.com"
                  />
                  {errors[`references[${index}].email`] && (
                    <p className="mt-1 text-sm text-rose-600">{errors[`references[${index}].email`]}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={ref.phone}
                    onChange={(e) => handleReferenceChange(index, 'phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diversity Survey (Optional) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Diversity Survey (Optional)</h3>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-sm text-gray-600 mb-6">
            At Sendexa, we value diversity and inclusion. Providing this information is completely optional and will not affect your application. This data helps us track our diversity efforts and ensure fair hiring practices.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender Identity
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ethnicity
              </label>
              <select
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                <option value="">Prefer not to say</option>
                <option value="asian">Asian</option>
                <option value="black">Black or African American</option>
                <option value="hispanic">Hispanic or Latino</option>
                <option value="white">White</option>
                <option value="native">Native American or Alaska Native</option>
                <option value="pacific">Native Hawaiian or Pacific Islander</option>
                <option value="two-or-more">Two or more races</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Veteran Status
              </label>
              <select
                name="veteranStatus"
                value={formData.veteranStatus}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                <option value="">Prefer not to say</option>
                <option value="veteran">I am a veteran</option>
                <option value="not-veteran">I am not a veteran</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disability Status
              </label>
              <select
                name="disabilityStatus"
                value={formData.disabilityStatus}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                <option value="">Prefer not to say</option>
                <option value="yes">Yes, I have a disability</option>
                <option value="no">No, I do not have a disability</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 border-t border-gray-200">
        {errors.submit && (
          <div className="mb-4 p-4 bg-rose-50 border border-rose-200 rounded-lg">
            <p className="text-rose-600 text-sm">{errors.submit}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-gray-500">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="text-cyan-600 hover:text-cyan-700">
              Privacy Policy
            </a>
          </p>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></div>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}