'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-display font-bold text-foreground">Something went wrong!</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset}>
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

