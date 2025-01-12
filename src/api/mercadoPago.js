// src/utils/mercadoPago.js
export async function crearPago(turno) {
  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    
     method: "POST",
     headers: {
        "Authorization": "APP_USR-3687730779340446-010908-14a4e0c513b2ba3bb1b3d7e1084ac3f5-157928366", // Reemplaza con tu access_token
        "Content-Type": "application/json",
     },
     body: JSON.stringify({
      items: [
        {
          title: `Corte con ${turno.peluquero}`,
          quantity: 1,
          unit_price: Number(turno.precio), // Asegúrate de convertirlo a número
        },
      ],
        back_urls: {
          success: "https://peluqueria-react.vercel.app/success",
          failure: "https://peluqueria-react.vercel.app/failure",
          pending: "https://peluqueria-react.vercel.app/pending",
        },
     }),
  });
  const data = await response.json();
  return data.init_point; // Link del checkout
}