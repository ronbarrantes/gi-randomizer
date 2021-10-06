import React, { useReducer } from 'react'

interface CharacterInfo {
    id: number;
    name: string;
    isAvailable: boolean;
}

type State = CharacterInfo[]

type Actions =
    | { type: 'TOGGLE_SELECT', id: number }
    | { type: 'TOGGLE_AVAILABLE', id: number }

const initialState = [
    {
        id: 1,
        name: 'Amber',
        isAvailable: true,
    },
    {
        id: 2,
        name: 'Eula',
        isAvailable: true,
    },
    {
        id: 3,
        name: 'Ganyu',
        isAvailable: false,
    },
]

const reducer = (state: State, action: Actions) => {
    switch(action.type){
        case 'TOGGLE_AVAILABLE': {
        //    state.map((item) => item.id === action.id ? !item.isAvailable : item)
            const newState = state.map((item) => item.id === action.id ? !item.isAvailable : item)
            return newState as State
        }
        default:
            return state
    }
}

const [state, dispatch] = useReducer(reducer, initialState)

// THINGS I NEED
/*

the main randomizer
    all the characters
    things to filter the characters by element (and category)
    thing to deselect unavailable characters

the character selector
    lock a character that one likes
    allow to preselect a character

other stuff
    open the character screen in some kind of modal (modals are cool)
    // PORTAL FOR MODALS
*/

const App = () => (
    <div>Hello world</div>
)
export default App