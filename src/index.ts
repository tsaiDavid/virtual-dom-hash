import { v, r } from "./vnode";
import diff from "./diff";

const tree1 = v("div", { id: "container" }, [
  v("h1", null, ["Simple Virtual DOM"]),
  v("ul", { id: "somelist" }, [
    v("li", { key: "1" }, ["First Item"]),
    v("li", { key: "2" }, ["Second Item"])
  ])
]);

const tree2 = v("div", { id: "container" }, [
  v("h1", null, ["Simple Virtual DOM"]),
  v("ul", { id: "somelist" }, [
    v("li", { key: "1" }, ["First Item"]),
    v("li", { key: "2" }, ["Second Item"])
  ])
]);

console.log(diff(tree1, tree2))

document.addEventListener("DOMContentLoaded", function(event) {});
