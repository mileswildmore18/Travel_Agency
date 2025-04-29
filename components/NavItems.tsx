// Import the components
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

const NavItems = () => {
    const user = {
        name: 'Miles',
        email: 'mileswildmore18@gmail.com',
        imageUrl: '/assets/images/david.webp'
    }

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
                {/* Add the footer*/}
                <footer className="nav-footer">
                    {/* Add the user image*/}
                    <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'David'}/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>

                    {/* Add the logout button and make it clickable*/}
                    <button
                    onClick={() => {
                        console.log('logout')
                    }}
                    className="cursor-pointer"
                    >
                        {/*Add the logout icon*/}
                        <img
                        src="/assets/icons/logout.svg"
                        alt="logout"
                        className="size-6"
                        />
                    </button>
                </footer>

            </div>
        </section>
    )
}
export default NavItems
