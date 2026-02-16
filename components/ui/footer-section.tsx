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
import { Facebook, Instagram, Linkedin, Loader2, Moon, Send, Sun, Twitter, X } from "lucide-react"

function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = React.useState("")

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error || "Something went wrong.")
        return
      }

      setStatus("success")
      setMessage("You're subscribed! Check your inbox.")
      setEmail("")
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <footer className="relative border-t bg-black text-white transition-colors duration-300 font-light tracking-tight overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-extralight tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-white/75 font-light">
              Building intelligent digital products and AI solutions that empower innovation and efficiency.
            </p>
            <form className="relative" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pr-12 backdrop-blur-sm text-black"
              />
              <Button
                type="submit"
                size="icon"
                disabled={status === "loading"}
                className="absolute right-1 top-1 h-8 w-8 rounded-full text-white transition-transform hover:scale-105"
                style={{ backgroundColor: '#004750' }}
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            {message && (
              <p className={`mt-2 text-sm ${status === "error" ? "text-red-400" : ""}`} style={status === "success" ? { color: "#003F46" } : undefined}>
                {message}
              </p>
            )}
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
              <a href="/impressum" className="block transition-colors hover:text-gray-400">
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
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </button>
          </nav>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="relative mx-4 max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 text-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 transition-colors hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            <h2 className="mb-1 text-2xl font-semibold">Privacy Policy</h2>
            <p className="mb-6 text-sm text-gray-500">Last Updated: February 2026</p>

            <section className="mb-5">
              <h3 className="mb-2 text-lg font-medium">Data Collection &amp; Use</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                We only collect information that you voluntarily provide to us. Currently, this is limited to your email address when you opt-in to our newsletter or request updates.
              </p>
            </section>

            <section className="mb-5">
              <h3 className="mb-2 text-lg font-medium">How We Use Your Data</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
                <li>To send you the news, updates, and information you requested.</li>
                <li>To respond to your direct inquiries.</li>
              </ul>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                We never sell, rent, or trade your email address with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-lg font-medium">Data Storage</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Your email is stored securely with our email service provider and is kept only for as long as you remain a subscriber. You can click &quot;Unsubscribe&quot; at any time to have your data permanently deleted from our mailing list.
              </p>
            </section>
          </div>
        </div>
      )}
    </footer>
  )
}

export { Footerdemo }