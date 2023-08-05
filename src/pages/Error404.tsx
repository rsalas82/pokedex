import { useLocation } from "wouter"

const Error404 = () => {
    const [location] = useLocation()
    return (
        <div>
            <h2>Error 404</h2>
            <p>{`Sorry the page ${location} does not exist!`}</p>
        </div>
    )
    
}

export default Error404