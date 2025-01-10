const functions = require("firebase-functions");
const mercadopago = require("mercadopago");
const cors = require('cors')({ origin: true });

// Configura Mercado Pago
mercadopago.configure({
  access_token: "APP_USR-3687730779340446-010908-14a4e0c513b2ba3bb1b3d7e1084ac3f5-157928366", // Reemplaza con tu token de acceso real
});

// Habilitar CORS
const corsHandler = cors({ origin: true }); // Permite todos los orígenes

// Función HTTP para crear la preferencia
exports.createPreference = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const { nombreCliente, emailCliente, porcentaje, turnoId } = req.body;

    // Validación de parámetros
    if (!nombreCliente || !emailCliente || !porcentaje || !turnoId) {
      return res.status(400).send("Faltan parámetros");
    }

    // Configuración de la preferencia de pago
    const preference = {
      items: [
        {
          title: "Reserva de turno - Peluquería",
          quantity: 1,
          unit_price: porcentaje,  // El precio del servicio (porcentaje o valor a cobrar)
        },
      ],
      payer: {
        name: nombreCliente,
        email: emailCliente,
      },
      back_urls: {
        success: "https://tu-pagina.com/success",  // URL de éxito
        failure: "https://tu-pagina.com/failure",  // URL de error
        pending: "https://tu-pagina.com/pending",  // URL de pendiente
      },
      auto_return: "approved",  // Redirige automáticamente cuando el pago es aprobado
      metadata: {
        turnoId,  // Puedes enviar el ID del turno para asociarlo al pago
      },
    };

    try {
      // Crea la preferencia de pago
      const response = await mercadopago.preferences.create(preference);
      
      // Envía el enlace de pago al cliente
      res.status(200).json({
        init_point: response.body.init_point,  // Devuelve el enlace de pago
      });
    } catch (error) {
      // Manejo de errores
      console.error("Error al crear la preferencia:", error);
      res.status(500).send("Error al crear la preferencia");
    }
  });
});