import { v, r } from "./vnode";

document.addEventListener("DOMContentLoaded", function(event) {
  const node1 = v("div", { id: "foo" }, "Hello!");
  
  document.getElementById("app").appendChild(r(node1))
});
