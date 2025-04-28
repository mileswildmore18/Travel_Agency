// Import the components
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

const NavItems = () => {
    return (
        // Stylize the nav items
        <section className="nav-items">
            {/* Link logo to the home page*/}
            <Link to='/' className="link-logo">
                {/* Add image and stylize the logo*/}
                <img src="/assets/icons/logo.svg" alt="logo" className="size=[30px]"/>
                <h1>Tourvisto</h1>
            </Link>
            {/* Add the nav items on the sidebar*/}
            <div className="container">
                <nav>
                    {/* Add the nav items from TS file to display on sidebar*/}
                    {sidebarItems.map(({ id, href, icon, label }) => (
                        <NavLink to={href} key={id}>
                            {/* Add callback function if link is active*/}
                            {({ isActive}:{isActive: boolean}) => (
                            // Stylize the nav items from the utils ts file
                            <div className={cn('group nav-item', {
                                'bg-primary-100 !text-white': isActive
                            })}>
                                {/* Add image and stylize the icon*/}
                                <img
                                     src={icon}
                                     alt={label}
                                     /* Add callback function if link is active*/
                                     className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}/>
                                {label}
                            </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </section>
    )
}
export default NavItems
