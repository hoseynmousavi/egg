import request from "../../request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import {ADD_TIMER, GET_TIMERS, REMOVE_TIMER} from "./TimerTypes"

function getTimers({dispatch, cancel})
{
    request.get({url: apiUrlsConstant.timer, cancel})
        .then(({data}) =>
        {
            dispatch({
                type: GET_TIMERS,
                payload: {data},
            })
        })
}

function addTimer({dispatch, data})
{
    return request.post({url: apiUrlsConstant.timer, data})
        .then(res =>
        {
            const {data, message} = res
            dispatch({
                type: ADD_TIMER,
                payload: {data},
            })
            return message
        })
}

function deleteTimer({dispatch, timerId})
{
    return request.del({url: apiUrlsConstant.timer, data: {timer_id: timerId}})
        .then(res =>
        {
            const {message} = res
            dispatch({
                type: REMOVE_TIMER,
                payload: {timerId},
            })
            return message
        })
}

const TimerActions = {
    getTimers,
    addTimer,
    deleteTimer,
}

export default TimerActions