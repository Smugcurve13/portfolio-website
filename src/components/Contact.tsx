import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use your Google Form's submit URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeg_C9BqiLLJKkaRNTbdmY8xYB7LgJxwbEHpb6dejMYSlKXWA/formResponse';

      // Create FormData for Google Forms submission
      const formDataToSubmit = new FormData();

      // Use these entry IDs for your fields:
      formDataToSubmit.append('entry.26508840', formData.name);      // Name field
      formDataToSubmit.append('entry.2042462182', formData.email);   // Email field  
      formDataToSubmit.append('entry.1820202441', formData.subject); // Subject field
      formDataToSubmit.append('entry.293136452', formData.message);  // Message field

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formDataToSubmit
      });

      // Since we use no-cors, we can't check the response, so we assume success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Me</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Feel free to reach out if you have any questions or would like to
            collaborate on a project. I'm always open to new opportunities and
            connections!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 text-sm">Failed to send message. Please try again or email me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:sambhavsoni14@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      sambhavsoni14@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Github className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Smugcurve13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      github.com/Smugcurve13
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Linkedin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/sambhavsoni14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      linkedin.com/in/sambhavsoni14
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;