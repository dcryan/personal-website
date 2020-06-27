---
path: "/blog/react-hooks-redux"
date: "2019-08-09"
title: "React Hooks for Replacing Redux"
description: "Redux is a state container for JS apps. Can we do the same thing now that React Hooks are released?"
---

[Slides from presentation](https://docs.google.com/presentation/d/13UeoCwjvOpdTXezWQr0YuOoe8qiI6ID-a6_nTsheiqg/edit?usp=sharing)

## Background
I'm assuming you guys know about React Hooks, and Redux. If not, here's a brief summary of both.

[React Hooks](https://reactjs.org/docs/hooks-intro.html)
> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

[Redux](https://redux.js.org/)
> A predictable state container for JavaScript Apps


I was playing around with hooks and was doing some experimenting. I stumbled upon a pattern that allowed **redux-like** behavior. It uses two React Hooks in tandem.

### First part: Context
> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Hooks exposed context, and made it really easy to access. Context is the store of the **redux-like** behavior.

You define it as such:

context.js
```
import { createContext } from 'react';

const initialState = {};
export const = createContext(initialState);
```

App.js
```
import { context as AppContext } from './store';

<AppContext.Provider value={someObject}>
</AppContext.Provider>
```

other.js
```
import { context as AppContext } from './store';

const someObject = useContext(AppContext);
```



### Second part: Reducers
> Specify how the application's state changes.

Reducers Are defined as such:
```
const [state, dispatch] = useReducer(reducerFunction, initialState);
```

### Combining the Two
App.js
```
import { context as AppContext } from './store';

const initialState = useContext(AppContext);
const [state, dispatch] = useReducer(reducerFunction, initialState);

<AppContext.Provider value={{ state, dispatch }}>
</AppContext.Provider>
```

other.js
```
import { context as AppContext } from './store';

const { state, dispatch } = useContext(AppContext);
```

## Examples

This repository is an example of a todo list with simple authentication. The login information and the todos are stored as two reducers under a single combined reducer. I have separated out stages in the following.

### Stage 1
**Checkout branch `stage-1`**
This stage is just the Login Reducer.

### Stage 2
**Checkout branch `stage-2`**
This stage is the Todos Reducer.

### Stage 3
**Checkout branch `stage-3`**
This stage is the CombineReducers version.