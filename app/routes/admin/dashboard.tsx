import Header from "../../../components/Header";
import {StatsCard, TripCard} from "../../../components";

const Dashboard = () => {
    // Add the name of the user
    const user = {name: 'Miles'};

    // Add the dashboard stats
    const dashboardStats = {
        totalUsers: 12450,
        usersJoined: {currentMonth: 218, lastMonth: 176},
        totalTrips: 3210,
        tripsCreated: {currentMonth: 150, lastMonth: 250},
        userRole: {total: 62, currentMonth: 25, lastMonth: 15},
    }
    // Destructure the dashboard stats
    const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats
    return (
        // Stylize the dashboard with who is logged in
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track acitvity, trends and popular destinations in real time"
            />
            {/* Add the stats and trip cards*/}
            <section className="flex flex-col gap-6">
                {/* Add the stats cards depending on devices with more columns if devices are larger*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {/* Add the Stats cards*/}
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>

            <TripCard/>

        </main>
    )
}
export default Dashboard
