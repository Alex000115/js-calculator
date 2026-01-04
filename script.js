const d = document.getElementById('display');

function add(v){
  d.value += v;
}
function clr(){
  d.value = '';
}
function calc(){
  try{
    d.value = eval(d.value);
  }catch{
    d.value = 'Error';
  }
}
