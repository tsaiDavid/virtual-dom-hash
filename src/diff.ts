import { VNode } from './vnode'

const diff = (v1: any, v2: any, location?: string[]) => {
  if (!location) {
    location = []
  } else {
    location.push(v2.hash)
  }
  // if the hashes are different, you recurse downwards through children
  if (v1.hash !== v2.hash) {
    let idx = 0;
    let c1 = v1.children
    let c2 = v2.children

    // if new tree's children is null
    if (!c2) {
      return {
        location: location,
        type: 'write',
        data: v1 
      }
    }

    if (c1[idx].hash === c2[idx].hash) {
      idx++
      return diff(c1[idx], c2[idx], location)
    }

    return v2
  } else {
    // if the hashes are the same
    return
  }
}

export default diff