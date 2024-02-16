function calcularDescuento(){

    let producto1 =parseFloat(document.getElementById("Producto1").value);
    let producto2 =parseFloat(document.getElementById("Producto2").value);
    let producto3 =parseFloat(document.getElementById("Producto3").value);
    let producto4 =parseFloat(document.getElementById("Producto4").value);
    let producto5 =parseFloat(document.getElementById("Producto5").value);

    let subtotal = producto1 +producto2 + producto3 +producto4 +producto5;
    document.getElementById("subtotal").value = subtotal.toFixed(2);

    let descuento = 0;
    let descuentoText = "Descuento 0%";

    if (subtotal >= 1000 && subtotal < 5000) {
        descuento = 0.10;
        descuentoText = "Descuento 10%";
      } else if (subtotal >= 5000 && subtotal < 9000) {
        descuento = 0.20;
        descuentoText = "Descuento 20%";
      } else if (subtotal >= 9000 && subtotal < 13000) {
        descuento = 0.30;
        descuentoText = "Descuento 30%";
      } else if (subtotal >= 13000) {
        descuento = 0.40;
        descuentoText = "Descuento 40%";
      }
      
      //document.getElementById("descuento").value = (descuento * 100).toFixed(2);
      document.getElementById("descuento").value= descuentoText;
      
      var total = subtotal - (subtotal * descuento);
      document.getElementById("total").value = total.toFixed(2);


}