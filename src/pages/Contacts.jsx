import React from 'react'
import { Form } from 'react-router-dom'

export const contactData =async ({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error)
  }
}
export const Contacts = () => {

  return (
    <section className="container mx-auto py-12">
    <h2 className="text-center text-3xl font-bold mb-4">Contact Us</h2>
    <p className="text-center text-gray-600 mb-8">
      Get in touch with us. We are always here to help you.
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Form method="POST" action="/contacts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                placeholder="Enter full name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="abc@thapa.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="We are always here to help you."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
  
          <div className="mt-4">
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </div>
        </Form>
      </div>
  
      <div className="flex items-center justify-center">
        <figure>
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="rounded-lg shadow-lg w-full h-auto max-w-md"
          />
        </figure>
      </div>
    </div>
  </section>
  
  )
}
