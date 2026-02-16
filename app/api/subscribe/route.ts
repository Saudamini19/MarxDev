import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Marx.Dev" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Welcome to Marx.Dev!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #004750;">Thanks for subscribing!</h2>
          <p>Hi there,</p>
          <p>
            Thank you for joining the Marx.Dev community. We're excited to have you on board!
          </p>
          <p>
            You'll be the first to hear about our latest projects, updates, and insights
            on intelligent digital products and AI solutions.
          </p>
          <p>Stay tuned!</p>
          <p style="color: #666; margin-top: 32px;">
            — The Marx.Dev Team<br/>
            Chemnitz, Germany
          </p>
        </div>
      `,
    })

    return NextResponse.json({ message: "Subscription successful!" })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
