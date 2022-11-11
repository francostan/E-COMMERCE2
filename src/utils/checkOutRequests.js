import axios from "axios";

export const getTickets = async (userId) => {
  const { data } = await axios.get(`/api/orderDetail/${userId}`);
  return data;
};

export const getItems = async (orderId) => {
  const { data } = await axios.get(`/api/orderItems/${orderId}`);
  return data;
};
