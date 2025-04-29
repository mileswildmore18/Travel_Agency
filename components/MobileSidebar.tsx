// @ts-nocheck

import {Link} from "react-router";
import {Sidebar, SidebarComponent} from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

// Stylize the mobile sidebar on small screen devices
const MobileSidebar = () => {
    // Import from Syncfusion for sidebar
    let sidebar: SidebarComponent

    // Add the toggle function on hamburger icon for Sidebar
    const toggleSidebar = () => {
        sidebar.toggle()
    }

    return (
        // Mobile sidebar
        <div className="mobile-sidebar wrapper">
            <header>
                {/* Link logo to the home page*/}
                <Link to="/">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="Logo"
                        className="size-[30px]"
                    />
                    {/* Add the name of the app*/}
                    <h1>Tourvisto</h1>
                </Link>

                {/*Trigger the sidebar to open*/}
                <button onClick={toggleSidebar}>
                    {/* Add the menu icon along with adding the toggle function*/}
                    <img src="/assets/icons/menu.svg" alt="menu" className="size-7"/>
                </button>
            </header>

            {/* Add the sidebar component from syncfusion*/}
            <SidebarComponent
                width={270}
                ref={(Sidebar) => sidebar = Sidebar}
                /* Add the toggle function to hide sidebar*/
                created={() => sidebar.hide()}
                /* Automatically close sidebar*/
                closeOnDocumentClick={true}
                /*Show backdrop*/
                showBackdrop={true}
                type="over"
            >
                {/* Add the nav items in mobile devices*/}
                <NavItems handleClick={toggleSidebar}/>

            </SidebarComponent>
        </div>
        // End of mobile sidebar
    )
}
export default MobileSidebar
