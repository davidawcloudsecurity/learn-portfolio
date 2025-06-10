// src/App.jsx
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <img src="/headshot.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-4xl font-bold">David | Cloud Security Engineer</h1>
        <p className="text-xl mt-2">Specializing in AWS, Terraform, and Secure CI/CD Pipelines</p>
        <a href="https://github.com/davidawcloudsecurity" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View GitHub</a>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I'm a cloud security enthusiast with expertise in AWS, Terraform, and identity management (SAML/Okta). I build secure, scalable systems and CI/CD pipelines for modern applications.</p>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['AWS', 'Terraform', 'Docker', 'Node.js', 'SAML/Okta', 'CI/CD'].map(skill => (
            <div key={skill} className="p-4 bg-white dark:bg-gray-700 rounded shadow">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <h3 className="text-xl font-semibold">S3 File Upload System</h3>
            <p>A secure file upload system using AWS S3 and ECS, built with Node.js and Terraform.</p>
            <a href="https://github.com/davidawcloudsecurity" className="text-blue-600 hover:underline">View Project</a>
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-4 rounded bg-gray-100 dark:bg-gray-900" />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 rounded bg-gray-100 dark:bg-gray-900" />
          <textarea name="message" placeholder="Message" className="w-full p-2 mb-4 rounded bg-gray-100 dark:bg-gray-900"></textarea>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    </div>
  );
};

export default App;
