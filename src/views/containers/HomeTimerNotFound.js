import AddChildSvg from "../../media/svg/AddChildSvg"
import textConstant from "../../constant/textConstant"
import {useState} from "react"
import AddTimerModal from "./AddTimerModal"
import Material from "../components/Material"

function HomeTimerNotFound()
{
    const [showAdd, setShowAdd] = useState(false)

    function toggleShow()
    {
        setShowAdd(showAdd => !showAdd)
    }

    return (
        <>
            <Material className="home-detail-content" onClick={toggleShow}>
                <AddChildSvg className="home-detail-profile-add"/>
                <div className="home-detail-profile-add-title">{textConstant.addTimer}</div>
                <div className="home-detail-profile-add-desc">
                    {textConstant.addTimerDesc}
                </div>
            </Material>
            {
                showAdd &&
                <AddTimerModal close={toggleShow}/>
            }
        </>
    )
}

export default HomeTimerNotFound