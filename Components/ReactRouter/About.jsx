import { useParams, useSearchParams } from "react-router-dom";

const About = () => {
    const {id} = useParams();
    const [searchQuery] = useSearchParams();
    console.log(searchQuery)
    return (
        <div>
            <h2>About {id}</h2>
            <h2>{searchQuery.get("data")}</h2>
        </div>
    )
}
export default About;