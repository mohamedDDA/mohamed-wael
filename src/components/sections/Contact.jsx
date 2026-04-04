import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_7d4bbul';
  const EMAILJS_TEMPLATE_ID = 'template_kani98j';
  const EMAILJS_PUBLIC_KEY = 'YQP55Kw0tXoUx0Wn6';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Mohamed Wael', // Your name
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully! I\'ll get back to you soon 🚀'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({
            loading: false,
            success: false,
            error: false,
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email me directly.'
      });
    }
  };

  return (
    <div className="contact-section" data-title="CONTACT ME">
      <p className="section-description">
        Got a project in mind? Want to collaborate? Or just want to say hi? 
        Drop me a message and let's create something amazing together!
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            disabled={status.loading}
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            disabled={status.loading}
          />
        </div>
        
        <div className="form-group">
          <textarea 
            name="message"
            placeholder="Your Message" 
            className="form-textarea" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={status.loading}
          ></textarea>
        </div>

        {/* Status Messages */}
        {status.message && (
          <div className={`form-status ${status.success ? 'success' : ''} ${status.error ? 'error' : ''}`}>
            {status.message}
          </div>
        )}

        <button 
          type="submit" 
          className={`btn btn-primary ${status.loading ? 'loading' : ''}`}
          disabled={status.loading}
        >
          {status.loading ? (
            <>
              <span className="loading-spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

    </div>
  );
};

export default Contact;