import { Globe, Star, Award } from "lucide-react"

interface FooterLink {
  href: string
  label: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  sections?: FooterSection[]
  socialLinks?: FooterLink[]
  companyName?: string
  description?: string
}

const defaultSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "E-commerce" },
      { href: "/services", label: "Branding" },
      { href: "/services", label: "SEO" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact-us", label: "Contact" },
      { href: "#", label: "Careers" },
    ],
  },
]

const defaultSocialLinks: FooterLink[] = [
  { href: "#", label: "Website" },
  { href: "#", label: "Reviews" },
  { href: "#", label: "Awards" },
]

export function Footer({
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  companyName = "360 Webs",
  description = "Transforming digital visions into exceptional experiences that drive growth and inspire audiences.",
}: FooterProps) {
  const socialIcons = [Globe, Star, Award]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">360</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">{companyName}</span>
            </div>
            <p className="text-background/70 text-lg leading-relaxed mb-6 max-w-md">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = socialIcons[index] || Globe
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2025 {companyName}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
