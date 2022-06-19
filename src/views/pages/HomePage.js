import HomeNavbar from "../components/HomeNavbar"
import HomeTimer from "../components/HomeTimer"

function HomePage()
{
    return (
        <div className="home">
            <HomeTimer/>
            <HomeNavbar/>
        </div>
    )
}

export default HomePage