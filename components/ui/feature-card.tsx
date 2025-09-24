import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient?: "primary" | "accent" | "secondary"
  className?: string
}

const gradientClasses = {
  primary: "from-primary/20 to-primary/10 text-primary",
  accent: "from-accent/20 to-accent/10 text-accent-foreground",
  secondary: "from-secondary/20 to-secondary/10 text-secondary-foreground",
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "primary",
  className = "",
}: FeatureCardProps) {
  const gradientClass = gradientClasses[gradient]

  return (
    <Card
      className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm group ${className}`}
    >
      <CardContent className="p-0 flex items-start space-x-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${gradientClass.split(" ")[0]} ${gradientClass.split(" ")[1]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-6 h-6 ${gradientClass.split(" ")[2]}`} />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2 text-lg">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
