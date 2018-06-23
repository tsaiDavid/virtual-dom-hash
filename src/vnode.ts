import hash from 'object-hash'
// v('div', { id: 'foo' }, 'Hello!')

/**
 * <div id="foo">Hello!</div>
 */

export interface VNode {
  nodeName: string,
  attributes: object | null,
  children: Array<VNode | string>,
  hash?: string,
  // a mapping of the children, making the hash the key
  childMap?: any
}

export const v = function(
  tag: string,
  attr: object | null,
  children: Array<VNode | string>
): VNode {

  const node = {
    nodeName: tag,
    attributes: attr,
    children: children
  }

  if (children && children.length) {
    node["childMap"] = children.reduce((obj, child, idx) => {
      child["index"] = idx
      obj[child["hash"]] = child
      return obj
    }, {})
  }

  // Hash the node object using SHA1 string
  node["hash"] = hash(node)
  return node
}

export const r = (vnode) => {
  let el = document.createElement(vnode.nodeName)

  for (let attr in vnode.attributes) {
    el.setAttribute(attr, vnode.attributes[attr])
  }

  vnode.children.forEach(c => {
    el.appendChild(document.createTextNode(c))
  })

  return el
}
