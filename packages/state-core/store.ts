export type Listener<T> = (next: T, prev: T) => void; 

// export = makes this type available to other files 
// type = define a new type alias 
// <T> = generic placeholder (works with any state type) 
// (next: T, prev: T) = function that takes 2 arguments: the new state and the previous state. 
// purpose = to describe subscribers that react to state changes. 

export interface Store<T> {
    get: () => T;
    set: (updater: T | ((prev: T) => T)) => void; 
    subscribe: (listener: Listener<T>) => () => void; 
    replace: (next: T) => void;
    reset: () => void;  
}

// store<T> = generic container for any type of state 
// get = get the current state 
// set = update the state 
// subscribe = register a listener to react to state changes 
// T = for example { name: string; age: number }
// return value = a function that unsubscribes the listener when called. 
// why = lets us update safely with strong typing 

export function createStore<T>(initial: T): Store<T> {
   let state = initial; 
   const listeners = new Set<Listener<T>>(); 
   const get = () => state; // no paras, returns type, t automatic - just hands back the snapshot

   const set = (updater: T | ((prev: T) => T)) => {
    const prev = state; 
    state = typeof updater === "function" ? (updater as (P:T) => T)(prev): updater; 
    if (Object.is(prev, state)) return; 
    listeners.forEach((fn) => fn(state, prev));
   }

   const replace = (next: T) => set(next); 
   const reset = () => replace (initial); 

   const subscribe = (fn: Listener<T>) => {
    listeners.add(fn); 
    return () => listeners.delete(fn); 
   }; 

   return { get, set, subscribe, replace, reset }; 
}

