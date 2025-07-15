import React from 'react';

const Contact = () => {
  return (
    <section className="p-8">
      <h3 className="text-3xl mb-4">Contact Us</h3>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;
