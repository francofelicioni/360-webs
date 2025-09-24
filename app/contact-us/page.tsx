"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FormField } from "@/components/ui/form-field"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
  gdprConsent: boolean
}

interface FormErrors {
  firstName?: string
  email?: string
  message?: string
  gdprConsent?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    gdprConsent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = "You must agree to the GDPR terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        gdprConsent: false,
      })
      setErrors({})
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Get in Touch <span className="text-primary">with</span>
                  <br />
                  one click
                </h1>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Whether you have a question or want to discuss your next project or want to join 360 webs,
                  <span className="text-primary font-medium"> our team is ready to assist you</span>.
                </p>

                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels, and we'll respond promptly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg flex items-center justify-center transition-all hover:scale-105"
                    onClick={() => (window.location.href = "mailto:hello@360webs.com")}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg flex items-center justify-center transition-all hover:scale-105 bg-transparent"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Message Us
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/contact-hero-illustration.jpg"
                  alt="Professional team ready to help with your project"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30" aria-labelledby="faq-heading">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 id="faq-heading" className="text-4xl font-bold text-foreground mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="relative">
                  <img
                    src="/faq-illustration.jpg"
                    alt="FAQ support illustration"
                    className="w-full h-auto max-w-md rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="services" className="bg-background rounded-lg border shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      What services does 360 Webs offer?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      We offer comprehensive web development services including custom website design, e-commerce
                      solutions, SEO optimization, brand design, hosting, and ongoing maintenance to help your business
                      succeed online.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="timeline" className="bg-background rounded-lg border shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      How long does it take to build a website?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Project timelines vary based on complexity and requirements. A standard business website typically
                      takes 2-4 weeks, while more complex e-commerce or custom applications may take 6-12 weeks. We'll
                      provide a detailed timeline during our initial consultation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support" className="bg-background rounded-lg border shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      Do you offer ongoing support after the website is launched?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Yes! We provide comprehensive ongoing support including regular updates, security monitoring,
                      backup services, and technical assistance. Our support packages are designed to keep your website
                      running smoothly and securely.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="improvement" className="bg-background rounded-lg border shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      Can 360 Webs help with improving my existing website?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      We can audit your current website and provide recommendations for improvements in design,
                      performance, SEO, and user experience. We offer redesign services and can help modernize your
                      existing online presence.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="seo" className="bg-background rounded-lg border shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      How do you ensure my website is optimized for search engines (SEO)?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      We implement SEO best practices from the ground up, including optimized site structure, meta tags,
                      fast loading speeds, mobile responsiveness, and quality content optimization. We also offer
                      ongoing SEO services to help improve your search rankings over time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20" aria-labelledby="contact-form-heading">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 id="contact-form-heading" className="text-4xl font-bold text-foreground mb-8">
                  Send us a message
                </h2>
                <div className="relative">
                  <img
                    src="/contact-form-illustration.jpg"
                    alt="Send message illustration"
                    className="w-full h-auto max-w-md rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitSuccess(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField label="First Name" id="firstName" required error={errors.firstName}>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className={errors.firstName ? "border-destructive focus:ring-destructive" : ""}
                          placeholder="Enter your first name"
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        />
                      </FormField>

                      <FormField label="Last Name" id="lastName">
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </FormField>
                    </div>

                    <FormField label="Email" id="email" required error={errors.email}>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={errors.email ? "border-destructive focus:ring-destructive" : ""}
                        placeholder="Enter your email address"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                    </FormField>

                    <FormField label="Message" id="message" required error={errors.message}>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`min-h-[120px] ${errors.message ? "border-destructive focus:ring-destructive" : ""}`}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                    </FormField>

                    <FormField label="GDPR Agreement" id="gdpr" required error={errors.gdprConsent}>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="gdpr"
                          checked={formData.gdprConsent}
                          onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                          className={errors.gdprConsent ? "border-destructive" : ""}
                          aria-describedby={errors.gdprConsent ? "gdpr-error" : undefined}
                        />
                        <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed">
                          I consent to this website storing my information I submit so they can respond to my request.
                          <span className="text-destructive ml-1">*</span>
                        </label>
                      </div>
                    </FormField>

                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg w-full md:w-auto transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
