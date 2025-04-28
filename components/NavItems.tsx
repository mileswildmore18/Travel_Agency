import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";

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
                            <div className={}>
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
