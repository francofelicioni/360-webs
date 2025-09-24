import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Monitor, Shield, Palette, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5"
          aria-labelledby="services-hero"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 id="services-hero" className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Our Full Approach to <span className="text-blue-600">Digital Success</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  At 360 Webs, our approach is centered around understanding your business goals and delivering
                  solutions that drive success.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Get Started</Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    Watch Us
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img src="/digital-success-illustration.jpg" alt="Digital Success" className="w-full h-auto" />
              </div>
            </div>

            {/* Service Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <Card className="p-6 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Strategic Design and Development</h3>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Optimized and responsive websites</h3>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Branding and Identity for your brand</h3>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Ongoing Support and Maintenance</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20" aria-labelledby="our-services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="our-services" className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 text-lg">Solutions Designed to Grow Your Brand Online</p>
            </div>

            {/* Custom Website Development */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <img src="/website-development-illustration.jpg" alt="Website Development" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Website Development</h3>
                <p className="text-gray-600 text-lg mb-6">Tailored Solutions for Your Unique Business</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Responsive design across all devices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">SEO-optimized structure and content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Fast loading and performance optimization</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  We create stunning, high-performance websites built on a deep understanding of your brand and
                  objectives. Our marketing experts ensure that your site is strategically designed to attract, engage,
                  and convert visitors, helping your business achieve measurable success online.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Learn More About Us</Button>
              </div>
            </div>

            {/* Website Hosting, Maintenance & Security */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Website Hosting, Maintenance & Security</h3>
                <p className="text-gray-600 text-lg mb-6">Reliable Hosting and Ongoing Website Care</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Regular security updates and backups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">24/7 monitoring and support</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Enjoy fast, secure, and dependable hosting tailored to your needs. We provide regular maintenance,
                  updates, backups, and email services to keep your website operating smoothly with enhanced security.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Get Started</Button>
              </div>
              <div className="relative">
                <img src="/hosting-security-illustration.jpg" alt="Hosting & Security" className="w-full h-auto" />
              </div>
            </div>

            {/* Logo & Brand Illustration Design */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <img src="/brand-design-illustration.jpg" alt="Brand Design" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Logo & Brand Illustration Design</h3>
                <p className="text-gray-600 text-lg mb-6">Memorable Visuals That Represent Your Brand</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Custom logo design and branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Brand guidelines and style guides</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Multiple format deliverables</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Your logo is the face of your brand. Our design experts craft professional logos and custom
                  illustrations that reflect your company's identity, values, and uniqueness, leaving a lasting
                  impression.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Learn More About Us</Button>
              </div>
            </div>

            {/* SEO Optimization Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">SEO Optimization Services</h3>
                <p className="text-gray-600 text-lg mb-6">Rank Higher, Reach More</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Keyword research and optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Technical SEO and site structure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Monthly reporting and analytics</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Boost your visibility on search engines and attract organic traffic with our expert SEO services. We
                  optimize your website's content, structure, and performance to ensure it ranks for the keywords that
                  matter most.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Learn More About Us</Button>
              </div>
              <div className="relative">
                <img src="/seo-optimization-illustration.jpg" alt="SEO Optimization" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
