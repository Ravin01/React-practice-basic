import { useState } from "react";
import { createApi } from "../../crud";


const Contact = () => {
    const [data, setData] = useState({
        "name": " ",
        "email": " ",
        "age": " ",
        "designation": " ",
        "package": " "
    });
    const handleChange = (element) => {
        const { name, value } = element.target;
        console.log(name, value)
        setData({
            ...data, [name]: value
        })
    }
    const handleSubmit = async (element) => {
        element.preventDefault();
        await createApi(data);
        setData({
            "name": " ",
            "email": " ",
            "age": " ",
            "designation": " ",
            "package": " "
        })
    }
    return (
        <div>
            <h2>Create data</h2>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
                <br />
                <br />
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" onChange={handleChange} value={data.email} />
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" onChange={handleChange} value={data.age} />
                <br />
                <br />
                <label htmlFor="name">Designation</label>
                <input type="text" name="designation" id="designation" onChange={handleChange} value={data.designation} />
                <br />
                <br />
                <label htmlFor="name">package</label>
                <input type="text" name="package" id="package" onChange={handleChange} value={data.package} />
                <br />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Contact;