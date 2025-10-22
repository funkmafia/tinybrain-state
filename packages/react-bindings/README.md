# @tinybrain/react

React doesn't need to be in your core library. Instead, we give React a thin, idiomatic wrapper.

## Why packages/react-bindings?

React doesn't need to be in your core library. Instead, we give React a thin, idiomatic wrapper:
- A `useStore` hook built on `useSyncExternalStore` (React's official external store API)
- Typed selectors and equality checks
- Keeps React as a peerDependency so state-core stays UI-free

In short: **react-bindings = ergonomic React hook layer for the core store.**

## Usage

```tsx
import { createStore } from '@tinybrain/state-core'
import { useStore } from '@tinybrain/react'

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

## API

- `useStore(store)` - Hook to access store state
- `useStore(store, selector)` - Hook with custom selector
- `useStore(store, selector, equalityFn)` - Hook with custom equality check
