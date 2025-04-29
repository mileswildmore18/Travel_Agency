// Import the components
import {Link, useLocation} from "react-router";
// Tripcard with destructuring
const TripCard = ({ id, name, location, imageUrl, tags, price }:TripCardProps) => {
    // Destructure the location and path
    const path = useLocation();

    return (
        // Stylize the trip card and link to locations based on id
        <Link to={path.pathname === "/" || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`}>
            {/* Add the image*/}
            <img src={imageUrl} alt={name}/>
        </Link>
    )
}
export default TripCard
