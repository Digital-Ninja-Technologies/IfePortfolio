import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export const handler = async (event: any) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body) as EmailRequest;

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "onifade@resend.dev", // You'll need to configure this in Resend
      to: "ifeoluwa.designs@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: result.data?.id }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
