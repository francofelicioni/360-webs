import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">360</span>
            </div>
            <span className="font-bold text-xl text-gray-900">WEBS</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/portfolio" className="text-blue-600 font-medium">
              Portfolio
            </a>
            <a href="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="/contact-us" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            Let's Talk
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how we've transformed businesses across different industries with our innovative web solutions
          </p>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Showcasing excellence in digital craftsmanship
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* Lexzen Project */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Legal Services
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Lexzen</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  A comprehensive legal services platform designed for startups and new residents in Europe. We created
                  a professional, trustworthy website that clearly communicates complex legal services through clean
                  design and intuitive user experience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Professional service presentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Clear pricing structure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Multi-language support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Responsive design</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Case Study
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="overflow-hidden shadow-lg">
                  <img src="/lexzen-portfolio-preview.jpg" alt="Lexzen website preview" className="w-full h-auto" />
                </Card>
              </div>
            </div>

            {/* Norte al Sur Project */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="overflow-hidden shadow-lg">
                  <img
                    src="/nortealsur-portfolio-preview.jpg"
                    alt="Norte al Sur website preview"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Logistics & Shipping
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Norte al Sur</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  A dynamic logistics company website serving Argentina with comprehensive shipping and storage
                  solutions. We developed a vibrant, user-friendly platform that reflects their commitment to moving
                  businesses forward across the country.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Interactive service mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Real-time tracking integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Mobile-first design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Quote request system</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            </div>

            {/* New Car Export Project */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    Automotive Export
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">New Car Export</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  A specialized automotive export platform connecting European car dealers with international markets.
                  We built a secure, feature-rich website that streamlines the complex process of international vehicle
                  trading and export documentation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Advanced vehicle catalog</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Export documentation system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Multi-currency support</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Case Study
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="overflow-hidden shadow-lg">
                  <img
                    src="/newcarexport-portfolio-preview.jpg"
                    alt="New Car Export website preview"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portfolio <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-gray-600 text-lg">Results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Transform your digital presence with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">360</span>
                </div>
                <span className="font-bold text-xl">WEBS</span>
              </div>
              <p className="text-gray-400">We elevate your digital presence</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-8">
              <a href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 360 Webs 2024 - All rights reserved | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
