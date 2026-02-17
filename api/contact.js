import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 1. Obtenemos el cuerpo de la petición
  const formData = req.body;

  if (!formData || Object.keys(formData).length === 0) {
    return res.status(400).json({ message: 'El formulario está vacío' });
  }

  // 2. Convertimos el objeto a un string único y legible
  const formattedMessage = Object.entries(formData)
    .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
    .join('\n'); // Salto de línea para que sea una lista

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'carlosdelacuerda@gmail.com',
      pass: 'odjazgfjpryadzsf', // Asegúrate que esta sea una "Contraseña de Aplicación" de Google
    },
  });

  try {
    await transporter.sendMail({
      from: `"Form Diani Dance" <carlosdelacuerda@gmail.com>`,
      to: 'carlosdelacuerda@gmail.com',
      subject: 'Nuevo mensaje de formulario',
      // 3. Usamos el string formateado aquí
      text: formattedMessage,
    });

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    // Esto imprimirá el error real en los logs de Vercel/Node para que sepas qué falló
    console.error('Detalle del error de Nodemailer:', error);
    res.status(500).json({ message: 'Error al enviar el email', detail: error.message });
  }
}
