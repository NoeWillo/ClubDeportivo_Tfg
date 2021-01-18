<template>
    <div>
        <h1>Seleccione metodo de pago</h1>
        <div id="paypal-button"></div>
    </div>
</template>

<script>
export default {
    //PAYPAL
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXVjrUdflX4bob9aEFYTkuKqGUq5XpO0x3nVWu4iwNjEveqCrcdjn9oMXCGqnFdHHsTgrCUxmX498DIS";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  
    methods:{
        //PAYPAL
    setLoaded: function(resp) {
        window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Compra en ClubDeportivoTFG",
                  amount: {
                    currency: "EUR",
                    value: this.$route.query.precio
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions, resp) => {
            const order = await actions.order.capture().
              then(function(details) {
                alert('Transaction completada por ' + details.payer.name.given_name);
              })
            window.location.href="/"
          },
          onError: err => {
            console.log(err);
          }
        })
        .render('#paypal-button');
    },
    }
}
</script>