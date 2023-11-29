export const generateCouponCode = (title = "", expiryDate = "") => {
  //Format the title to upercase and remove spaces
  const formattedTitle = title.toUpperCase().replace(/ /g, "");
  //Format the expiry date to "DDMMYYYY"
  const formattedExpiryDate = expiryDate.split("-").reverse().join("");
  //combine the formatted title and expiry date to create the coupon code
  const couponCode = `${formattedTitle}${formattedExpiryDate}`;
  return couponCode;
};
