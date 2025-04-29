// Import the components
import {Link, useLocation} from "react-router";
// Trip card with destructuring
const TripCard = ({id, name, location, imageUrl, tags, price}: TripCardProps) => {
    // Destructure the location and path
    const path = useLocation();

    return (
        // Stylize the trip card and link to locations based on id
        <Link to={path.pathname === "/" || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`}
              className="trip-card">
            {/* Add the image*/}
            <img src={imageUrl} alt={name}/>

            {/* Add the location*/}
            <article>
                {/* Add the location name*/}
                <h2>{name}</h2>
                {/*Add the location mark picture*/}
                <figure>
                    <img
                        src="/assets/icons/location-mark.svg"
                        alt="location"
                        className="size-4"/>
                    {/* Add the country for the location*/}
                    <figcaption>{location}</figcaption>
                </figure>
            </article>
        </Link>
    )
}
export default TripCard
