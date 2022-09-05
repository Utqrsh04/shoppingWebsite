import React from "react";

const RazorPay = () => {
  function showRazorPay() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);

    var options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "UTQRSH DEV ",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Utqrshhhh",
        email: "utqrshh.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "ABC NAGAR",
      },
      theme: {
        color: "#3399cc",
      },
    };
    // var rzp1 = new Razorpay(options);
  }
  
  return <div>RazorPay</div>;
};

export default RazorPay;
