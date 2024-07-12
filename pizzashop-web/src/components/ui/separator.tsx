<<<<<<< HEAD
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"
=======
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as React from 'react'

import { cn } from '@/lib/utils'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
<<<<<<< HEAD
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
=======
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
<<<<<<< HEAD
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
=======
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
