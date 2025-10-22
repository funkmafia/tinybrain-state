# @tinybrain/state-core

The framework-agnostic brain: the tiny, typed store with get/set/subscribe/select/middleware.

## Why packages/state-core?

This is the framework-agnostic brain: the tiny, typed store with get/set/subscribe/select/middleware.

Keeping it UI-agnostic means:
- You can use it in React, Next.js, Fastify, CLI scripts—anything
- It stays small, testable, and tree-shakeable
- Clean separation of domain logic from UI hooks

In short: **state-core = your plug-and-play state engine.**

## Usage

```ts
import { createStore } from '@tinybrain/state-core'

const store = createStore({ count: 0, name: 'World' })

// Get state
const state = store.get()

// Set state
store.set({ count: 1 })

// Subscribe to changes
const unsubscribe = store.subscribe((newState, prevState) => {
  console.log('State changed:', newState)
})
```

## API

- `createStore(initialState)` - Creates a new store
- `store.get()` - Gets current state
- `store.set(newState)` - Updates state
- `store.subscribe(callback)` - Subscribes to state changes
