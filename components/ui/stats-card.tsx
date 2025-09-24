import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  value: string
  title: string
  description: string
  gradient?: "primary" | "accent" | "secondary"
  className?: string
}

const gradientClasses = {
  primary: "from-card to-primary/20 from-primary/20 to-primary/10",
  accent: "from-card to-accent/20 from-accent/20 to-accent/10",
  secondary: "from-card to-secondary/20 from-secondary/20 to-secondary/10",
}

export function StatsCard({
  icon: Icon,
  value,
  title,
  description,
  gradient = "primary",
  className = "",
}: StatsCardProps) {
  const [bgGradient, iconGradient] = gradientClasses[gradient].split(" ")

  return (
    <Card
      className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${bgGradient} group ${className}`}
    >
      <CardContent className="p-0">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-8 h-8 ${gradient === "accent" ? "text-accent-foreground" : "text-primary"}`} />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">{value}</div>
        <h3 className="font-semibold text-foreground mb-3 text-lg">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
