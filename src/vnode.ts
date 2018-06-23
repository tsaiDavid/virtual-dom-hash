// v('div', { id: 'foo' }, 'Hello!')

/**
 * <div id="foo">Hello!</div>
 */

const v = function(tag: string, attr: object, children?: string) {
  return {
    nodeName: tag,
    attributes: attr,
    children: [children]
  }
}

export default v