import { v, r } from "./vnode";

document.addEventListener("DOMContentLoaded", function(event) {
  const tree1 = (
    v("div", { id: "container" }, [
      v("h1", null, ["Simple Virtual DOM"]),
      v("ul", { id: "somelist" }, [
        v("li", { key: '1' }, ["First Item"]),
        v("li", { key: '2' }, ["Second Item"])
      ])
    ]) 
  )

  console.dir(tree1)


  debugger  
  // document.getElementById("app").appendChild(r(node1))
});
