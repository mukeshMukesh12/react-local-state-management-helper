# react-local-state-management-helper

`React Local State Management Helper` is a lightweight npm package for React that simplifies state management using the useReducer hook. It saves developers time by providing a convenient way to define reducers for multiple states without repetitive code. Additionally, it  eliminates the need to repeatedly define const [state, setState] = useState("initial value"); for multiple state variables. With `React Local State Management Helper`, you can enhance your productivity and focus on building your application's logic rather than repetitive setup tasks.

## Usage

To use the package, follow these steps:

1. Install the package via npm:

```shell
npm react-local-state-management-helper
```

## Documentation

```shell
import React, {useReducer} from 'react';
import {initialData, baseReducer } from 'react-local-state-management-helper'

//Define or import Initial state object e.g

const initialState = {
    isOpen: false,
		name: '',
		.....
		.....
		.....
}

const ComponentName = () => {
    const State = initialData(initialState);
    const Reducer = baseReducer(initialState);
		 const [state, dispatch] = useReducer(Reducer, State);
    return (
        <div>
        <button onClick={() => dispatch({ type: "SET_ISOPEN", payload: !state.isOpen })}>
        	button
      	</button>

        </div>
    );
}

export default ComponentName;

```

### Please Note in reducer's dispatch({ type: "SET_ISOPEN", payload: !state.isOpen })}
## if state  is "isOpen" then type value is "SET_ISOPEN" , "SET_" is prefix and State in Uppercase
## if state is "is-open"