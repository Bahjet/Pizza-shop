<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
=======
import * as React from 'react'

import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
<<<<<<< HEAD
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
=======
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
        )}
        ref={ref}
        {...props}
      />
    )
<<<<<<< HEAD
  }
)
Textarea.displayName = "Textarea"
=======
  },
)
Textarea.displayName = 'Textarea'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

export { Textarea }
