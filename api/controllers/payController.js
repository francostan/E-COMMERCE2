const axios = require("axios");
const mercadopago = require("mercadopago");



class payController {

  static async createPayment(req, res) {
     //aca nos llegarian los productos del carrito
     const prod = req.body;


 /*    // Configurar credenciales
    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    })
   */
     //le pegamos a la url de preferencias de mercadopago
    const url = "https://api.mercadopago.com/checkout/preferences"; 

    //le pasamos el body con los datos de la compra, serian las preferencias
    const body = {
      purpose: "wallet_purchase",
      items: [],
      payer: {
        //aqui deberiamos agregarle el user que tengamos en redux
        //PENDING
        email: "test_user_65355693@testuser.com",
        phone: {
          area_code: "11",
          number: 4444-4444,
        },
        address: {
          street_name: "Calle falsa",
          street_number: 123,
          zip_code: "1111",
        },
        //------------------------------
      },
      back_urls: {
        success: "http://www.localhost:3000/home",
        failure: "http://www.failure.com",
        pending: "http://www.pending.com",
      },
      auto_return: "approved",
    };

    //AGREGAMOS PRODUCTOS AL BODY
    //-----------------------------------------------------
    let error = false;
    prod.forEach((product) => {
      /* if (product.stock < product.quantity) {
        error = true;
        res.status(400).json({ message: "No hay stock suficiente" });
      } else { */
        //aca le pasamos los datos de la compra al body
        body.items.push({
          id: product.id,
          title: product.name,
          currency_id: "ARS",
          picture_url: product.image,
          description: product.description,
          category_id: "art",
          quantity: product.quantity,
          unit_price: product.price,
        });
      });
    /* }); */

    //si no hay error, le pasamos el body a la url de mercadopago
    //-----------------------------------------------------

   /*  if (!error) {
      //llamamos a la api de mercadopago y mandamos la preferencia
      const response = await mercadopago.preferences.create(body);
      const preferenceId = response.body.id;
      //le pasamos la respuesta a la vista
      res.status(200).json( {preferenceId} );
    } */

    //le pasamos el header con el access token
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }); 

    //le pasamos la respuesta de la api de mercadopago

    res.status(200).json(payment.data); 
  }
}

module.exports = payController;