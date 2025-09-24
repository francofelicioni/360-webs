"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  badge?: {
    icon?: React.ReactNode
    text: string
  }
  title: string
  highlightedText?: string
  subtitle: string
  primaryCta: {
    text: string
    onClick?: () => void
  }
  secondaryCta?: {
    text: string
    onClick?: () => void
  }
  testimonial?: {
    avatars: number
    text: string
  }
  image: {
    src: string
    alt: string
  }
  className?: string
}

export function HeroSection({
  badge,
  title,
  highlightedText,
  subtitle,
  primaryCta,
  secondaryCta,
  testimonial,
  image,
  className = "",
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("hero-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero-section"
      className={`pt-32 pb-24 bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative overflow-hidden ${className}`}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-5" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {badge && (
              <div
                className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent-foreground mb-8 transition-all hover:bg-accent/30"
                role="status"
                aria-label={badge.text}
              >
                {badge.icon || <Star className="w-4 h-4 mr-2" />}
                {badge.text}
              </div>
            )}

            <h1
              id="hero-title"
              className="text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] mb-8 text-balance"
            >
              {title}
              {highlightedText && (
                <>
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    {" "}
                    {highlightedText}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed text-pretty max-w-lg">{subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={primaryCta.onClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {primaryCta.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryCta.onClick}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>

            {testimonial && (
              <div className="flex items-center mt-8 text-sm text-muted-foreground">
                <div className="flex -space-x-2 mr-4" role="img" aria-label={`${testimonial.avatars} customer avatars`}>
                  {Array.from({ length: testimonial.avatars }).map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background transition-transform hover:scale-110"
                      style={{
                        background: `linear-gradient(${45 + i * 30}deg, hsl(var(--primary)), hsl(var(--accent)))`,
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span>{testimonial.text}</span>
              </div>
            )}
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"
              aria-hidden="true"
            ></div>
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="relative w-full h-auto rounded-3xl shadow-2xl transition-transform hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
