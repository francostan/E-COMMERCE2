import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FORM_ID = "payment-form";

export default function Product({ carrito, order }) {
  /* const { id } = useParams(); // id de producto */
  const [preferenceId, setPreferenceId] = useState(null);

  console.log("carrito llega asi ", carrito);
  /*   useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    
  }, []); */

  const handleClick = async () => {
    await axios.post("/api/pay/payment", carrito).then((order) => {
      console.log(order.data);
      setPreferenceId(order.data);
    });
    const orderId = await axios.post("/api/orderdetail/addCheckout", order);
    carrito.forEach(async (elemento) => {
      console.log("esto es orderId", orderId);
      const details = {
        productId: elemento.productId,
        cantidad: elemento.stock,
        orderDetailId: orderId.data.id,
      };
      await axios.post("/api/orderItems/add", details);
    });
    await axios.delete("/api/carts/");
  };

  useEffect(() => {
    if (preferenceId) {
      //https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1235586667-39b84923-93a5-40fb-b3f6-4f1724563329
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId.id);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <div>
      <button onClick={handleClick}>Solicitar pago</button>
      <form id={FORM_ID} method="GET" />
    </div>
  );
}
