import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, reason } = await request.json();

    // Validate input
    if (!name || !email || !reason) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email to Koushal
    const emailToKoushal = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🤝 New Connection Request from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Connection Request!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Someone wants to connect with you through your portfolio website!
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #667eea; margin-top: 0; font-size: 18px;">Contact Details:</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <h2 style="color: #92400e; margin-top: 0; font-size: 18px;">Reason for Connecting:</h2>
              <p style="color: #78350f; line-height: 1.6; margin: 0;">${reason}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                💡 <strong>Quick Actions:</strong>
              </p>
              <ul style="color: #6b7280; font-size: 14px; line-height: 1.8;">
                <li>Reply directly to their email: <a href="mailto:${email}" style="color: #667eea;">${email}</a></li>
                <li>Check your portfolio analytics for more context</li>
                <li>Respond within 24-48 hours for best engagement</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p>This message was sent from your portfolio website's AI assistant.</p>
          </div>
        </div>
      `,
    };

    // Email to the visitor
    const emailToVisitor = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for reaching out to Koushal Sharma!`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Connecting! 🙏</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you within 24-48 hours.
            </p>
            
            <div style="background: #e0e7ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <p style="color: #4338ca; margin: 0; font-size: 15px;">
                <strong>Your Message:</strong><br/>
                "${reason}"
              </p>
            </div>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #667eea; margin-top: 0; font-size: 18px;">📬 My Contact Information:</h2>
              <ul style="list-style: none; padding: 0; margin: 10px 0;">
                <li style="margin: 8px 0;">📧 Email: <a href="mailto:koushalshrma@gmail.com" style="color: #667eea; text-decoration: none;">koushalshrma@gmail.com</a></li>
                <li style="margin: 8px 0;">💼 LinkedIn: <a href="https://linkedin.com/in/koushalshrma" style="color: #667eea; text-decoration: none;">linkedin.com/in/koushalshrma</a></li>
                <li style="margin: 8px 0;">🐙 GitHub: <a href="https://github.com/KoushalShrma" style="color: #667eea; text-decoration: none;">github.com/KoushalShrma</a></li>
                <li style="margin: 8px 0;">📱 Instagram: <a href="https://instagram.com/koushalshrma" style="color: #667eea; text-decoration: none;">@koushalshrma</a></li>
                <li style="margin: 8px 0;">🐦 Twitter: <a href="https://twitter.com/KOSLSHARMA" style="color: #667eea; text-decoration: none;">@KOSLSHARMA</a></li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #92400e; margin-top: 0; font-size: 18px;">🚀 Meanwhile, check out:</h2>
              <ul style="color: #78350f; line-height: 1.8;">
                <li><strong>My Projects:</strong> Learn Now (Learning Platform) & Find-A-Spot (Parking System)</li>
                <li><strong>Skills:</strong> Java, Spring Boot, React.js, MySQL, Hibernate, JWT</li>
                <li><strong>Experience:</strong> Full Stack Java Developer with hands-on project expertise</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Looking forward to connecting with you!
            </p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Best regards,<br/>
              <strong style="color: #667eea; font-size: 18px;">Koushal Sharma</strong><br/>
              <span style="color: #6b7280; font-size: 14px;">Full Stack Java Developer</span>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p>This is an automated response. Koushal will personally respond to your message soon.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(emailToKoushal);
    await transporter.sendMail(emailToVisitor);

    return NextResponse.json({
      message: `Thank you, ${name}! 🎉 I've sent your message to Koushal. You'll receive a confirmation email shortly, and he'll get back to you within 24-48 hours. Feel free to connect on LinkedIn or GitHub in the meantime!`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again or contact directly.',
      },
      { status: 500 }
    );
  }
}
