interface SectionHeaderProps {
  title: string
  highlightedText?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  highlightedText,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
        {title}
        {highlightedText && (
          <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
            {" "}
            {highlightedText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-xl text-muted-foreground text-pretty ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
