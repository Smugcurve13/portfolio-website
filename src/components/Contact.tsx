import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // You'll need to replace this
      
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sambhavsoni14@gmail.com'
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Feel free to reach out if you have any questions or would like to
            collaborate on a project. I'm always open to new opportunities and
            connections!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">Failed to send message. Please try again or email me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
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
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:sambhavsoni14@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
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
                    className="text-gray-300 hover:text-white transition-colors"
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    linkedin.com/in/sambhavsoni14
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-900 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Let's Connect!</h4>
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

