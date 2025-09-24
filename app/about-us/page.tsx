import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">360</span>
              </div>
              <span className="font-bold text-xl text-foreground">Webs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/about-us" className="text-primary font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                About <span className="text-primary">360 Webs</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a team of technology enthusiasts with{" "}
                <span className="text-primary font-medium">over a decade of experience</span> in website design,
                marketing, and brand development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our passion and expertise drive us to deliver exceptional service to every client.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-team-hero-illustration.jpg"
                alt="Team collaboration illustration"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/team-collaboration-illustration.jpg"
                alt="Team working together"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every project we take on is driven by our{" "}
                <span className="text-primary font-medium">dedication to excellence</span>.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We pair our expertise and creativity with effective solutions that not only meet but exceed our clients'
                expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a cutting-edge website design or a comprehensive brand development plan, we're here to{" "}
                <span className="text-primary font-medium">help businesses achieve their goals and grow with us</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why 360 Webs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why <span className="text-primary">360 Webs</span>?
          </h2>
          <p className="text-lg text-primary font-medium mb-8">
            Strong online presence is essential for every business.
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is to empower businesses and entrepreneurs by creating websites that not only look great but
              also <span className="text-primary font-medium">deliver measurable results</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on strategy, design, and ongoing support, we{" "}
              <span className="text-primary font-medium">help our clients achieve their goals</span> and grow their
              digital footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">Be part of us</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Join our team!</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              If you are passionate about making a difference, eager to work in a dynamic and fast-paced environment,
              and ready to contribute to the future of web development, we want to hear from you.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our team and <span className="text-primary font-medium">be part of the exciting transformation</span>{" "}
              happening at 360 Webs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
          <div className="relative max-w-md mx-auto">
            <Image
              src="/join-team-illustration.jpg"
              alt="Join our team illustration"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-red-500 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Proactive Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our proactive team helps create new opportunities, and advanced expertise programs that stay one of
                  employment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide learning and development opportunities, and resources to help you enhance your skills and
                  stay updated with the latest industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Entrepreneurial Spirit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage our team members to think creatively, take ownership of their work, and explore
                  innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">360</span>
                </div>
                <span className="font-bold text-xl">Webs</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">We elevate your digital presence.</p>
            </div>
            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 360 Webs 2024 - All rights reserved | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
