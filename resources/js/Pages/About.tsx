import React from 'react'
import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
function About() {
  return (
      <Layout>
          <Head title="About" />
          <div className="bg-white shadow-sm rounded-lg p-6">
              <h1 className="text-2xl font-semibold mb-4">Welcome to About Page</h1>
              <p className="text-gray-600">This is the about page of your application.</p>
          </div>
      </Layout>
  )
}

export default About
