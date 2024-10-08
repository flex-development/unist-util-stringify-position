# unist-util-stringify-position

[![github release](https://img.shields.io/github/v/release/flex-development/unist-util-stringify-position.svg?include_prereleases&sort=semver)](https://github.com/flex-development/unist-util-stringify-position/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/unist-util-stringify-position.svg)](https://npmjs.com/package/@flex-development/unist-util-stringify-position)
[![codecov](https://codecov.io/gh/flex-development/unist-util-stringify-position/graph/badge.svg?token=oB6Ip38ZJt)](https://codecov.io/gh/flex-development/unist-util-stringify-position)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/unist-util-stringify-position.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[unist][unist] utility to serialize the positional info of a node, point, position, or range

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`stringifyPosition([info][, options])`](#stringifypositioninfo-options)
- [Types](#types)
  - [`Info`](#info)
  - [`LiteralLike`](#literallike)
  - [`NodeLike`](#nodelike)
  - [`Options`](#options)
  - [`ParentLike`](#parentlike)
  - [`PointLike`](#pointlike)
  - [`PositionLike`](#positionlike)
  - [`Range`](#range)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This is a tiny, but useful, package that takes any [unist][unist] node, point, position, or range and serializes its
positional info.

## When should I use this?

Use this package when you want a standard format for serialized positional info, such as when inspecting trees, or
throwing errors.

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/unist-util-stringify-position
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { stringifyPosition } from 'https://esm.sh/@flex-development/unist-util-stringify-position'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { stringifyPosition } from 'https://esm.sh/@flex-development/unist-util-stringify-position'
</script>
```

## Use

```ts
import { u } from '@flex-development/unist-util-builder'
import {
  stringifyPosition,
  type LiteralLike,
  type PointLike,
  type PositionLike,
  type Range
} from '@flex-development/unist-util-stringify-position'

const node: LiteralLike = u('text', {
  position: {
    end: { column: 13, line: 1, offset: 12 },
    start: { column: 1, line: 1, offset: 0 }
  },
  value: 'hello world!'
})

const point: PointLike = { column: 9, line: 6 }

const position: PositionLike = { end: { line: 8 }, start: { line: 7 } }

const range: Range = [{ column: 2, line: 3 }, { column: 2, line: 5 }]

console.log('node:', stringifyPosition(node, { offsets: true }))
console.log('point:', stringifyPosition(point))
console.log('position:', stringifyPosition(position))
console.log('range:', stringifyPosition(range))
```

...yields

```sh
node: 1:1-1:13, 0-12
point: 6:9
position: 7:1-8:1
range: 3:2-5:2
```

## API

This package exports the identifier [`stringifyPosition`](#stringifypositioninfo-options).

There is no default export.

### `stringifyPosition([info][, options])`

Serialize the positional info of a node, point, position, or range.

The serialized info is returned in one the following formats:

- `ls:cs-le:ce, os-oe` (node, position, range)
- `ls:cs-le:ce` (node, position, range)
- `l:c` (point)

where `l` stands for line, `c` for column, `o` for offset, `s` for `start`, and `e` for end.

An empty string (`''`) is returned if the given info is neither node, point, position, nor range.

#### Parameters

- `info` ([`Info`](#info) | `null` | `undefined`) &mdash; node, point, position, or range
- `options` ([`Options`](#options) | `null` | `undefined`) &mdash; configuration options
  - `options.offsets` (`boolean | null | undefined`) &mdash; serialize offsets if `info` is a node, position, or range

#### Returns

(`string`) Pretty printed positional info.

## Types

This package is fully typed with [TypeScript][typescript].

### `Info`

Union of positional info objects (TypeScript type).

```ts
type Info =
  | Literal
  | LiteralLike
  | Node
  | NodeLike
  | Parent
  | ParentLike
  | Point
  | PointLike
  | Position
  | PositionLike
  | Range
```

### `LiteralLike`

Loose [literal][literal] (TypeScript type).

### `NodeLike`

Loose [node][node] (TypeScript type).

### `Options`

Configuration options (TypeScript type).

```ts
type Options = {
  offsets?: boolean | null | undefined
}
```

#### Fields

- `offsets` (`boolean | null | undefined`) &mdash; serialize offsets if positional info is a node, position, or range

### `ParentLike`

Loose [parent][parent] (TypeScript type).

### `PointLike`

Loose [point][point] (TypeScript type).

### `PositionLike`

Loose [position][position] (TypeScript type).

### `Range`

List, where the first value is the place of the first character in a source region, and the last is the place of the
last character in the region. (TypeScript type).

```ts
type Range = [
  start?: Point | PointLike | null | undefined,
  end?: Point | PointLike | null | undefined
]
```

## Related

- [`unist-util-generated`][unist-util-generated] &mdash; check if a node is generated
- [`unist-util-position`][unist-util-position] &mdash; get positional info of nodes
- [`unist-util-remove-position`][unist-util-remove-position] &mdash; remove positional info from trees
- [`unist-util-source`][unist-util-source] &mdash; get the source of a value (node or position) in a file
- [`unist-util-types`][unist-util-types] &mdash; utility types

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[esmsh]: https://esm.sh/
[literal]: https://github.com/syntax-tree/unist#literal
[node]: https://github.com/syntax-tree/unist#node
[parent]: https://github.com/syntax-tree/unist#parent
[point]: https://github.com/syntax-tree/unist#point
[position]: https://github.com/syntax-tree/unist#position
[typescript]: https://www.typescriptlang.org
[unist-util-generated]: https://github.com/syntax-tree/unist-util-generated
[unist-util-position]: https://github.com/syntax-tree/unist-util-position
[unist-util-remove-position]: https://github.com/syntax-tree/unist-util-remove-position
[unist-util-source]: https://github.com/syntax-tree/unist-util-source
[unist-util-types]: https://github.com/flex-development/unist-util-types
[unist]: https://github.com/syntax-tree/unist
[yarn]: https://yarnpkg.com
