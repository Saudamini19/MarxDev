"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  return (
    <footer className="relative border-t bg-black text-white transition-colors duration-300 font-light tracking-tight">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-extralight tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-white/75 font-light">
              Building intelligent digital products and AI solutions that empower innovation and efficiency.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-light tracking-tight">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-gray-400">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-gray-400">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-gray-400">
                Impressum
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-light tracking-tight">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Chemnitz</p>
              <p>Saxony, Germany</p>
              <p>Phone: +49 15754846422</p>
              <p>Email: <a href="mailto:marxdev09111@gmail.com" className="transition-colors hover:text-gray-400 underline">marxdev09111@gmail.com</a></p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-light tracking-tight">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://www.instagram.com/marx.dev09111?igsh=dWFqOXo5dmkwMGJo" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" style={{ color: '#004046' }} />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://linkedin.com/company/marx-dev" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" style={{ color: '#004046' }} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-white/60 font-light">
            © 2026 Marx.Dev All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }