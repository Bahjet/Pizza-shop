<<<<<<< HEAD
import { cn } from "@/lib/utils"
=======
import { cn } from '@/lib/utils'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
<<<<<<< HEAD
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
      className={cn('animate-pulse rounded-md bg-muted', className)}
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
      {...props}
    />
  )
}

export { Skeleton }
