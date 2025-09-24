import type React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle } from "lucide-react"

interface FormFieldProps {
  label: string
  id: string
  error?: string
  success?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export function FormField({ label, id, error, success, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {children}

        {/* Success/Error Icons */}
        {(error || success) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {error && <AlertCircle className="w-4 h-4 text-destructive" />}
            {success && <CheckCircle className="w-4 h-4 text-green-500" />}
          </div>
        )}
      </div>

      {/* Error/Success Messages */}
      {error && (
        <p className="text-sm text-destructive flex items-center gap-1" role="alert">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-green-600 flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          {success}
        </p>
      )}
    </div>
  )
}
