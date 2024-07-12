<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as React from 'react'

import { cn } from '@/lib/utils'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
<<<<<<< HEAD
      className={cn("w-full caption-bottom text-sm", className)}
=======
      className={cn('w-full caption-bottom text-sm', className)}
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
      {...props}
    />
  </div>
))
<<<<<<< HEAD
Table.displayName = "Table"
=======
Table.displayName = 'Table'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"
=======
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
<<<<<<< HEAD
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"
=======
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
=======
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableFooter.displayName = "TableFooter"
=======
TableFooter.displayName = 'TableFooter'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
=======
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableRow.displayName = "TableRow"
=======
TableRow.displayName = 'TableRow'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
=======
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableHead.displayName = "TableHead"
=======
TableHead.displayName = 'TableHead'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
<<<<<<< HEAD
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"
=======
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
<<<<<<< HEAD
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"
=======
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
