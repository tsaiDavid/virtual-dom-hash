# virtual-dom-hash

## Introduction
> *This experiment is currently a work in progress!*

The *virtual DOM* (VDOM) is a powerful concept first made popular and widespread thanks to [React](https://reactjs.org/docs/faq-internals.html).

While most implementations of the VDOM focus on performant reconciliation, I wanted to explore some more novel ways of diffing two virtual trees - being inspired by hash chains, Merkle trees, etc.

Currently, *diffing* the two virtual trees involves checking their respective hashes, which is the result of hashing a corresponding VNode (and its children).

## Usage
**Requirements**
  - node 8+
  - yarn

**Installation**
```sh
$ yarn
```

**Development**
```sh
$ yarn dev
```
This runs a `parcel` server - with content being served up on `localhost:1234`.

Valid commands to `parcel` may be passed through.
  - *Example:*
    - `yarn dev --open`
    - Runs development server and then opens in browser for you

## Docs
### VNode
```javascript
v(tag, attr, children)
```