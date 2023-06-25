import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import 'tailwindcss/tailwind.css';



const Landing = () => {
  return (
    <><Navigation /><div className="big-gray-100 font-font1">
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          {/* Logo and Navigation */}
          <div className="flex justify-center items-center">
            <nav className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#0504AA]">
                Tasks
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0504AA]">
                Duties
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0504AA]">
                Deadlines
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0504AA]">
                Opportunities
              </a>
            </nav>
          </div>
          <div className="mt-8 bg-blue-200 justify-center text-center rounded shadow md:m-6 m-1">
            <h2 className="text-2xl font-bold text-gray-800">
              Start Using Task Master
            </h2>
            <p className="mt-4 text-gray-600">
              Cut down on daily schedule by listing, knowing and tracking them,
              take charge and curtail beating deadlines.
            </p>
            <button className="mt-6 text-white py-3 px-6 rounded">
              <Link
                to="/signup"
                className=" bg-[#0504AA] text-white py-2 px-2 rounded">
                Start Now
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Due dates</h3>
              <p className="text-gray-600">
                Ability to add due date and time to tasks and prioritize tasks
                and prioritize them according to their due dates and time to
                effectively manage them.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Track progress</h3>
              <p className="text-gray-600">
                Manage your tasks, track progress, and complete completed ons.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Edit and delete</h3>
              <p className="text-gray-600">
                Edit and delete tasks after adding them. You can also extend
                deadlines as much as possible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Have a happy and easy day today with Task Master
          </h2>
          <p className="text-white text-center mb-8">
            Join thousands of individuals and take advantage of this.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold">
              <Link to="/signup" className=" py-2 px-2 rounded">
                GET STARTED
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Task Master</h3>
              <p className="text-gray-400">Enugu, Nigeria</p>
              <p className="text-gray-400">Phone: +000000000</p>
              <p className="text-gray-400">Email: blessingedeh@gmail.com</p>
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
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div></>
  );
};

export default Landing;
