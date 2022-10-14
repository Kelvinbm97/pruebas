let numero = "20000";

let moneda = "$" + numero.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

console.log(moneda);

//

var input = "41111111111111";
function validCard() {
  var valid;
  var regex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (regex.test(input)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
}

console.log(validCard());

//
var email = "est@xyz.efg";
function correo() {
  var valid;
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(email)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
}

console.log(correo());
//
var numeroCel = 987654321;
function verificacion() {
  var valid;
  if (/^[9][0-9]{8}$/.test(numeroCel)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
}
console.log(verificacion());
