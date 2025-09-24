"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Search, TrendingUp, Palette, Zap, Star, Globe, Award } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/ui/hero-section"
import { SectionHeader } from "@/components/ui/section-header"
import { StatsCard } from "@/components/ui/stats-card"
import { FeatureCard } from "@/components/ui/feature-card"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection
          badge={{
            icon: <Star className="w-4 h-4 mr-2" />,
            text: "Trusted by 500+ businesses worldwide",
          }}
          title="Crafting"
          highlightedText="Digital"
          subtitle="We transform ambitious ideas into exceptional digital products that captivate audiences and drive meaningful growth."
          primaryCta={{
            text: "Start Your Project",
            onClick: () => (window.location.href = "/contact-us"),
          }}
          secondaryCta={{
            text: "View Our Work",
            onClick: () => (window.location.href = "/portfolio"),
          }}
          testimonial={{
            avatars: 3,
            text: "Join 500+ satisfied clients",
          }}
          image={{
            src: "/modern-team-collaboration-illustration-with-people.jpg",
            alt: "Modern team collaborating on digital innovation projects",
          }}
        />

        <section className="py-24 bg-card" aria-labelledby="why-digital-excellence">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Why Digital Excellence"
              highlightedText="Matters"
              subtitle="In today's digital landscape, your online presence is your competitive advantage"
              className="mb-20"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatsCard
                icon={Palette}
                value="94%"
                title="First Impressions Matter"
                description="of first impressions are based on your website's design and functionality"
                gradient="primary"
              />

              <StatsCard
                icon={Search}
                value="81%"
                title="Research Before Purchase"
                description="of people research businesses online before making a purchase decision"
                gradient="accent"
              />

              <StatsCard
                icon={TrendingUp}
                value="67%"
                title="Responsive Design Impact"
                description="increase in engagement with fully responsive websites"
                gradient="primary"
                className="md:col-span-2 lg:col-span-1"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-background to-secondary/30" aria-labelledby="elevate-presence">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeader
                  title="Elevate Your"
                  highlightedText="Digital Presence"
                  subtitle="Comprehensive solutions designed to transform your vision into digital reality"
                  centered={false}
                  className="mb-12"
                />

                <div className="grid gap-6">
                  <FeatureCard
                    icon={Globe}
                    title="Custom Web Development"
                    description="Bespoke websites that capture your brand essence and deliver exceptional user experiences"
                    gradient="primary"
                  />

                  <FeatureCard
                    icon={Zap}
                    title="Performance Optimization"
                    description="Lightning-fast websites that keep visitors engaged and search engines happy"
                    gradient="accent"
                  />

                  <FeatureCard
                    icon={Award}
                    title="Ongoing Support"
                    description="Dedicated maintenance and support to ensure your digital success continues"
                    gradient="primary"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="/professional-person-working-on-laptop-with-digital.jpg"
                  alt="Professional working on digital solutions and web development"
                  className="relative w-full h-auto rounded-3xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5" aria-labelledby="transform-future">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Ready to Transform Your"
              highlightedText="Digital Future?"
              subtitle="Join hundreds of businesses that have elevated their online presence with our expert team"
              className="mb-16"
            />

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 focus:scale-105"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Schedule a Call
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div
                className="flex justify-center items-center space-x-8 opacity-60"
                role="img"
                aria-label="Trusted company logos"
              >
                <div className="w-24 h-8 bg-muted rounded-lg animate-pulse"></div>
                <div className="w-24 h-8 bg-muted rounded-lg animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-24 h-8 bg-muted rounded-lg animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <div className="w-24 h-8 bg-muted rounded-lg animate-pulse" style={{ animationDelay: "0.6s" }}></div>
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
