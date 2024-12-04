import React from 'react'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const FooterTwo = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social Section */}
          <div>
            <img src="/src/assets/footerLogo.png" alt="Inovar Digital Labs" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:pl-20 lg:pl-20">
            <h3 className="text-white font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Free eBooks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Development Tutorial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">How to - Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">YouTube Playlist</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-bold mb-4">NEWSLETTER</h3>
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <AiOutlineMail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 pl-10 rounded bg-transparent border border-gray-600"
                />
              </div>
              <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">About us</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
            </div>
            <p className="text-gray-400">© 2023, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterTwo
