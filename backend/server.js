import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/send-email', async (req, res) => {

    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).send('Bütün məlumatları daxil edin.');
    }

    const htmltext = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #ff6600; font-size: 36px; margin: 0;">Texno Chip</h1>
        <p style="font-size: 16px; color: #777;">Yeni mesaj var</p>
      </div>
      <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <p><strong>👤 Ad:</strong> ${name}</p>
        <p><strong>📧 Email:</strong> ${email}</p>
        <p><strong>📱 Telefon:</strong> ${phone}</p>
        <p><strong>📝 Mövzu:</strong> ${subject}</p>
        <p><strong>💬 Mesaj:</strong><br>${message}</p>
      </div>
    </div>
  `;

    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.texnochip.az',
            port: 465,
            secure: true,
            auth: {
                user: 'info@texnochip.az',
                pass: 'Hesen@1992'
            }
        });

        const mailOptions = {
            from: 'Texno Chip <info@texnochip.az>',
            to: 'hesen.h@texnochip.az',
            subject: 'Yeni mesaj - Texno Chip',
            html: htmltext,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("mesage sent: " + info.messageId);
        res.send('E-posta gönderildi.');
    } catch (error) {
        console.error(error);
        res.status(500).send('E-posta gönderilemedi.');
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});