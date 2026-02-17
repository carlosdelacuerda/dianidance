import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const message = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Faltan campos' });
  }

  // Configura tu correo
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // tu servidor SMTP
    port: 465, // normalmente 465 o 587
    secure: true,
    auth: {
      user: 'carlosdelacuerda@gmail.com', // tu email
      pass: 'odjazgfjpryadzsf', // contraseña del email
    },
  });

  try {
    await transporter.sendMail({
      from: `"Form Diani Dance" <carlosdelacuerda@gmail.com>`, // sigue siendo tu correo del dominio
      to: 'carlosdelacuerda@gmail.com', // aquí recibes el email
      subject: 'Nuevo mensaje de formulario',
      text: `${JSON.stringify(formValue)}`,
    });

    res.status(200).json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el email' });
  }
}
