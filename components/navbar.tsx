"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"
import { LinkCustom } from "./ui/link-custom"
import { Menu } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Formula Themes</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link href="#">About</Link>
          <Link href="#">Products</Link>
          <Link href="#">Contact</Link>
          <LinkCustom href="#" variant='outlineLinkButton' size='default'>Login</LinkCustom>
          <LinkCustom href="#" variant='defaultLinkButton' size='default'>Sign Up</LinkCustom>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden p-0"
            >
              <Menu className="size-4" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <DialogTitle className="sr-only">Mobile Menu</DialogTitle>
            <div className="flex flex-col space-y-3 mt-4">
              <MobileLink href="#" onOpenChange={setIsOpen}>
                About
              </MobileLink>
              <MobileLink href="#" onOpenChange={setIsOpen}>
                Products
              </MobileLink>
              <MobileLink href="#" onOpenChange={setIsOpen}>
                Contact
              </MobileLink>
              <LinkCustom href="#" variant='outlineLinkButton' size='default'>Login</LinkCustom>
              <LinkCustom href="#" variant='defaultLinkButton' size='default'>Sign Up</LinkCustom>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href="#"
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

