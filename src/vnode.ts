// v('div', { id: 'foo' }, 'Hello!')

/**
 * <div id="foo">Hello!</div>
 */

export interface VNode {
  nodeName: string,
  attributes: object | null,
  children: Array<VNode | string>
}

export const v = function(
  tag: string,
  attr: object | null,
  children: Array<VNode | string>
): VNode {
  
  return {
    nodeName: tag,
    attributes: attr,
    children: children 
  }
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
