import { VNode } from './vnode'

const diff = (v1: VNode, v2: VNode) => {
  return v1.hash === v2.hash ? true : false
}

export default diff