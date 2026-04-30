import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'uma.techno585@gmail.com',
    pass: process.env.EMAIL_PASS, // App Password for Gmail
  },
});

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  const mailOptions = {
    from: `"Uma Techno Lead" <${process.env.EMAIL_USER || 'uma.techno585@gmail.com'}>`,
    to: 'uma.techno585@gmail.com', // Admin email
    subject: `New Lead: ${data.subject || 'Website Inquiry'} from ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #06B6D4; padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em;">Uma Techno</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">New Lead Received</p>
        </div>
        
        <div style="padding: 40px 30px; background-color: white;">
          <div style="margin-bottom: 30px;">
            <p style="font-size: 14px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Sender Information</p>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 12px;">
              <p style="margin: 0 0 10px 0; font-size: 16px; color: #1e293b;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin: 0 0 10px 0; font-size: 16px; color: #1e293b;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin: 0 0 10px 0; font-size: 16px; color: #1e293b;"><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p style="margin: 0; font-size: 16px; color: #1e293b;"><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
            </div>
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="font-size: 14px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Message Details</p>
            <div style="padding: 20px; border-left: 4px solid #06B6D4; background-color: #f8fafc; font-size: 16px; color: #334155; line-height: 1.6; font-style: italic;">
              "${data.message}"
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 40px;">
            <a href="https://uma-techno.in/admin/leads" style="background-color: #0F172A; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
              View in Admin Dashboard
            </a>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Uma Techno. Automating your business growth.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};
