// Import the components
import {Outlet} from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {MobileSidebar, NavItems} from "../../../components";
// Stylize the layout
const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            {/* Add sidebar components on small devices*/}
            <MobileSidebar />

            {/* Add sidebar components on large devices*/}
            <aside className='w-full max-w-[270px] hidden lg:block'>
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems />
                </SidebarComponent>
            </aside>
            {/* Add the content of the page*/}
            <aside className='children'>
                <Outlet />
            </aside>
        </div>
    )
}
export default AdminLayout
