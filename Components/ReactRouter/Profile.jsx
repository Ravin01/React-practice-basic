import { useEffect, useState } from "react"
import { getSingleUser, updateUser } from "../../crud";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
    const [ params ] = useSearchParams();
    const [data, setData] = useState({
        "name": " ",
        "email": " ",
        "age": " ",
        "designation": " ",
        "package": " "
    });
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setData({
            ...data, [name]: value
        })
    }
    const handleSubmit = async (ele) => {
        ele.preventDefault();
        setData({
            "name": " ",
            "email": " ",
            "age": " ",
            "designation": " ",
            "package": " "
        })
        await updateUser(data, params.get("id"))
    }
    const updateData = async () => {
        const response = await getSingleUser(params.get("id"));
        setData(response)
    }
    useEffect(() => {
        updateData()
    }, [])
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={data.email} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" value={data.age} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="designation">Designation</label>
                <input type="text" name="designation" id="designation" value={data.designation} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="package">Package</label>
                <input type="text" name="package" id="package" value={data.package} onChange={handleChange} />
                <br />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Profile