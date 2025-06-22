interface LoadingSpinnerProps {
  message?: string
  size?: "sm" | "md" | "lg"
}

export default function LoadingSpinner({ message = "Cargando...", size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-[#002855] ${sizeClasses[size]}`}
      ></div>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </div>
  )
}
