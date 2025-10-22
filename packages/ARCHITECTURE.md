# Architecture Notes

## Why does each package have a package.json?

Each package is a real Node package managed by npm workspaces. `package.json` tells tools:

- **Name** (`@tinybrain/state-core`, `@tinybrain/react`) → how you import it
- **Entry points** (`main`, `types`, optional exports) → where code/types live  
- **Build/dev scripts** → how to compile/watch
- **Peer deps** (for React bindings) → ensure the host app provides React

## Package Structure

```
packages/
├── state-core/          # Framework-agnostic state engine
│   ├── package.json     # Defines @tinybrain/state-core
│   ├── src/            # Core store implementation
│   └── README.md       # Package documentation
└── react-bindings/     # React-specific hooks
    ├── package.json    # Defines @tinybrain/react
    ├── src/           # React hooks implementation  
    └── README.md      # Package documentation
```

## Benefits

- **Independent versioning**: Each package can be versioned separately
- **Tree shaking**: Import only what you need
- **Framework flexibility**: Use state-core without React
- **Clean dependencies**: React is peer dependency, not bundled
- **Local development**: Instant updates without publishing
