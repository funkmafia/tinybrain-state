# tinybrain-state

> A minimal and intuitive state management library for React applications ... 
Think small, think simple.

## Why tinybrain-state?

State management shouldn't require a PhD and `tinybrain-state` is designed for developers who want powerful state management without the complexity. With a tiny API surface and zero boilerplate, you can focus on building features instead of wrestling with state.

## Features

- 🧠 **Tiny Brain**: Minimal API so you can learn it in 5 minutes
- ⚡ **Zero Boilerplate**: No reducers, actions, or complex setup
- 📦 **Lightweight**: Small bundle size, big impact
- 🔄 **Reactive**: Automatic re-renders when state changes
- 🎯 **TypeScript First**: Full type safety out of the box
- ⚛️ **React Optimised**: Built specifically for React with hooks

## Quick Start

```bash
npm install @tinybrain/state-core @tinybrain/react
```

```tsx
import { createStore } from '@tinybrain/state-core'
import { useStore } from '@tinybrain/react'

// Create a store
const store = createStore({ count: 0, name: 'World' })

function Counter() {
  const { count, name } = useStore(store)
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button onClick={() => store.set({ count: count + 1 })}>
        Increment
      </button>
    </div>
  )
}
```

## Philosophy

Sometimes the best solution is the simplest one. `tinybrain-state` embraces the "tiny brain" approach with less thinking and more doing. Nothing too complex in terms of patterns to memorise and no ceremony to follow; just a simple state that works.

## Packages

Think "Lego bricks." We're building reusable libraries (not just an app). A monorepo with npm workspaces lets you:
- Develop multiple packages together (shared code, single git repo)
- Version/publish independently later if you want (or keep private)
- Import locally with instant updates (no publishing needed)

`packages/` is where those bricks live.

- **`@tinybrain/state-core`** - Core state management logic
- **`@tinybrain/react`** - React hooks and bindings

## AureyaTech 

