import {useContext, useEffect, useState} from "react"
import IconBtn from "../components/IconBtn"
import TrashSvg from "../../media/svg/TrashSvg"
import TimerActions from "../../context/timer/TimerActions"
import toastManager from "../../helpers/toastManager"
import {INFO_TOAST} from "../../constant/toastTypes"
import {TimerContext} from "../../context/timer/TimerReducer"

function HomeTimerItem({timer: {_id, name, created_date, duration_day}})
{
    const {dispatch} = useContext(TimerContext)
    const [removeLoading, setRemoveLoading] = useState(false)
    const [remain, setRemain] = useState({})
    const {day, hour, minute} = remain

    useEffect(() =>
    {
        function setData()
        {
            const diff = Math.floor(((new Date(created_date).getTime() + duration_day * 24 * 60 * 60 * 1000) - new Date().getTime()) / 1000)
            const minute = Math.floor(diff / 60 % 60)
            const hour = Math.floor(diff / 60 / 60 % 24)
            const day = Math.floor(diff / 60 / 60 / 24)
            setRemain({
                day: day > 0 ? day : 0,
                hour: hour > 0 ? hour : 0,
                minute: minute > 0 ? minute : 0,
            })
        }

        setData()

        const timer = setInterval(setData, 20000)

        return () => clearInterval(timer)
        // eslint-disable-next-line
    }, [])

    function remove()
    {
        if (!removeLoading)
        {
            setRemoveLoading(true)
            TimerActions.deleteTimer({dispatch, timerId: _id})
                .then(message => toastManager.addToast({message, type: INFO_TOAST}))
                .catch(() => setRemoveLoading(false))
        }
    }

    return (
        <div className="home-detail-content">
            <div className="timer-title">
                <div>{name}</div>
                <div className="timer-title-date">
                    {new Date(created_date).toLocaleTimeString("fa-ir")}
                    <span> ،</span>
                    {new Date(created_date).toLocaleDateString("fa-ir")}
                </div>
            </div>
            <div className="timer-remaining">
                <div className="timer-remaining-item minute">{minute}</div>
                <div className="timer-remaining-item-separator">:</div>
                <div className="timer-remaining-item">{hour}</div>
                <div className="timer-remaining-item-separator">:</div>
                <div className="timer-remaining-item day">{day}</div>
            </div>
            <div className="timer-remaining">
                <div className="timer-remaining-desc minute">دقیقه</div>
                <div className="timer-remaining-desc">ساعت</div>
                <div className="timer-remaining-desc day">روز</div>
            </div>
            <div className="timer-remaining-delete">
                <IconBtn className="timer-remaining-delete-btn" variable="--toast-fail-text" title="حذف تایمر" Icon={TrashSvg} onClick={remove}/>
            </div>
        </div>
    )
}

export default HomeTimerItem