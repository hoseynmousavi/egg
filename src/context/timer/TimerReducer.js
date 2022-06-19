import {createContext, useEffect, useReducer} from "react"
import logoutManager from "../../helpers/logoutManager"
import {LOGOUT} from "../auth/AuthTypes"
import {GET_TIMERS, ADD_TIMER, REMOVE_TIMER} from "./TimerTypes"

export const TimerContext = createContext(null)

const initialState = {
    list: [],
    getDone: false,
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case GET_TIMERS:
        {
            const {data} = action.payload
            return {
                ...state,
                list: data,
                getDone: true,
            }
        }
        case ADD_TIMER:
        {
            const {data} = action.payload
            return {
                ...state,
                list: [...state.list, data],
            }
        }
        case REMOVE_TIMER:
        {
            const {timerId} = action.payload
            const list = [...state.list]
            list.splice(list.findIndex(item => item._id === timerId), 1)
            return {
                ...state,
                list,
            }
        }
        case LOGOUT:
        {
            return init()
        }
        default:
        {
            throw new Error()
        }
    }
}

function TimerProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() => logoutManager.setLogOut({callBack: () => dispatch({type: LOGOUT})}), [])

    return (
        <TimerContext.Provider value={{state, dispatch}}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider