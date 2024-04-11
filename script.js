let value = dis.value;
console.log(value);

function calculator() {
  dis.value = eval(dis.value);
}

function clr() {
  dis.value = "";
}

function setValue(obj) {
  dis.value = dis.value + obj.value;
}
function del() {
  var s = dis.value;
  dis.value = s.substring(0, s.length - 1);
}
