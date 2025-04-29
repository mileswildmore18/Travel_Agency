import Header from "../../../components/Header";

const Dashboard = () => {
    // Add the name of the user
    const user = { name: 'Miles'};
    return (
        // Stylize the dashboard with who is logged in
        <main className="dashboard wrapper">
        <Header
            title={`Welcome ${user?.name ?? 'Guest'} 👋`}
            description="Track acitvity, trends and popular destinations in real time"
        />

            Dashboard Page Contents
        </main>
    )
}
export default Dashboard
