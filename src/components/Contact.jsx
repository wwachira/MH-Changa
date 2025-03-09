import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend-url.com/send-email', formData);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-4 border rounded"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;