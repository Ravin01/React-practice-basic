import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <div>
            <h2>Profile</h2>
            <div>
                <p>
                    <Link to={"name"}>Name</Link>
                </p>
                
                <p>
                    <Link to={"id"}>Id</Link>
                </p>
            </div>
        </div>
    )
}

export default Profile