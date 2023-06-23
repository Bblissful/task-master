import React from "react";

const Landing = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          {/* Logo and Navigation */}
          <div className="flex justify-center items-center">
            <nav className="space-x-4">
            
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Tasks
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Duties
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Deadlines
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Opportunities
              </a>
            </nav>
         
          </div>
          {/* Hero Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              The Easiest Task Management App
            </h2>
            <p className="mt-4 text-gray-600">
              Transform your marketing and grow your business with HubSpot's
              powerful suite of tools.
            </p>
            <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Marketing Automation</h3>
              <p className="text-gray-600">
                Automate your marketing efforts and drive more leads with
                targeted campaigns.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Sales CRM</h3>
              <p className="text-gray-600">
                Manage your contacts, track deals, and close more sales with our
                intuitive CRM.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Content Management</h3>
              <p className="text-gray-600">
                Create and optimize your website content with our easy-to-use
                content management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Start Growing with HubSpot Today
          </h2>
          <p className="text-white text-center mb-8">
            Join thousands of businesses that use HubSpot to reach their goals.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="text-gray-400">Address, City, State, Zip Code</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
