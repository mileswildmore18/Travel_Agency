// Import the components
import {Link, useLocation} from "react-router";
import {ChipDirective, ChipListComponent, ChipsDirective} from "@syncfusion/ej2-react-buttons";
import {cn, getFirstWord} from "../lib/utils";
// Trip card with destructuring
const TripCard = ({id, name, location, imageUrl, tags, price}: TripCardProps) => {
    // Destructure the location and path
    const path = useLocation();

    return (
        // Stylize the trip card and link to locations based on id
        <Link to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`}
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
            {/*End of location*/}

            {/* Add the tags from syncfusion for each location selected*/}
            <div className="mt-5 pl-[18px] pr-3.5 pb-5">
                <ChipListComponent id="travel-chip">
                    <ChipsDirective>
                        {tags.map((tag, index) => (
                            // Add the tags for each location
                            <ChipDirective
                                key={index}
                                text={getFirstWord(tag)}
                                /* Add the css class for tags*/
                                cssClass={cn(index === 1
                                    ? '!bg-pink-50 !text-pink-500'
                                    : '!bg-success-50 !text-success-700')}
                            />
                        ))}
                    </ChipsDirective>
                </ChipListComponent>
            </div>
            {/*End of tags*/}

            <article className="tripCard-pill">{price}</article>
        </Link>
    )
}
export default TripCard
