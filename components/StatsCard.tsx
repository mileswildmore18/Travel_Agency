
import {calculateTrendPercentage, cn} from "../lib/utils";
// destructure the props
const StatsCard = ({
    headerTitle,
    total,
    lastMonthCount,
    currentMonthCount
                   }: StatsCard) => {
    // calculate the trend
    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount)

    // check for equality and change to boolean
    const isDecrement = trend === "decrement";

    // return the component
    return (
        // add the stats cards
        <article className="stats-card">
            <h3 className="text-base font-medium">
                {headerTitle}
            </h3>
            {/* Add the content of the stats cards*/}
            <div className="content">
                <div className="flex flex-col gap-4">
                    {/* Add the total*/}
                    <h2 className="text-4xl font-semibold">{total}</h2>

                    <div className="flex items-center gap-2">
                        {/* Add the trend arrows*/}
                        <figure className="flex items-center gap-1">
                            <img
                            src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`} className="size-5" alt="arrow"
                            />
                            {/* Add the percentage depending on the trend*/}
                            <figcaption className={cn('text-sm font-medium', isDecrement ? "text-red-500" : "text-success-700")}>
                                {Math.round(percentage)}%
                            </figcaption>
                        </figure>
                        {/* Add the last month comparison*/}
                        <p className="text-sm font-medium text-gray-100 truncate">vs last month</p>
                    </div>
                </div>
                {/* Add the trend icon based on the trend and make it responsive on multiple devices*/}
                <img src={`/assets/icons/${isDecrement ? "decrement.svg" : "increment.svg"}`} className="xl:w-32 w-full h-full md:h-32 xl:h-full" alt="trend graph"/>
            </div>
            {/*End of content*/}


        </article>
        /*End of Stats Card*/
    )
}
export default StatsCard
