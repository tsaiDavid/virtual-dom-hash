import v from './vnode'

document.addEventListener("DOMContentLoaded", function(event) { 
  window.alert("suh")
  console.log("hi")
  console.log(v(
    'div',
    { id: "foo" },
    "Hello!"
  ))

});