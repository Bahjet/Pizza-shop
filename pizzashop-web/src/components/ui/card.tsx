<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as React from 'react'

import { cn } from '@/lib/utils'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
=======
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
    )}
    {...props}
  />
))
<<<<<<< HEAD
Card.displayName = "Card"
=======
Card.displayName = 'Card'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
=======
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "text-2xl font-semibold leading-none tracking-tight",
      className
=======
      'text-2xl font-semibold leading-none tracking-tight',
      className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
    )}
    {...props}
  />
))
<<<<<<< HEAD
CardTitle.displayName = "CardTitle"
=======
CardTitle.displayName = 'CardTitle'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
<<<<<<< HEAD
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
=======
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
=======
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
=======
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
