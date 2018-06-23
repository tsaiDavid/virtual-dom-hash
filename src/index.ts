import { v, r } from "./vnode";
import diff from "./diff";

const tree1 = v("div", { id: "container" }, [
  v("h1", null, null),
  v("ul", { id: "somelist" }, [
    v("li", { key: "1" }, null),
    v("li", { key: "2" }, null)
  ])
]);


const tree2 = v("div", { id: "container" }, [
  v("h1", null, null),
  v("ul", { id: "somelist" }, [
    v("li", { key: "1" }, null),
    v("li", { key: "3" }, null)
  ])
]);

window.tree1 = tree1
window.tree2 = tree2

// Calling diff on these trees results in a patch object
const getPatch = diff(tree1, tree2)

document.addEventListener("DOMContentLoaded", function(event) {});
