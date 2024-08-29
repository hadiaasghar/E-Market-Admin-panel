import CardBox from "./DashboardCards/CardBox";
import StatusCard from "./DashboardCards/StatusCard";
import StatisticGraph from "./DashboardCards/StatisticGraph";
import RestaurantsSection from "./RestaurantsSection";
import RecentOrder from "./RecentOrder";
import TopOrderCard from "./TopOrderCard";
import RecentPayOut from "./RecentPayOut";
import { cardData, cardData2 } from "../../Utils/data";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="w-full">
      <div className=" ">
        <h1 className="text-2xl bg-gray-50 shadow-sm shadow-primary-200 rounded-t-lg font-semibold p-4">Business Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-2">
          {cardData.map((card, index) => (
            <Link to={card.link} key={index}>
              <CardBox title={card.title} value={card.value} icon={card.icon} />
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5 py-5 ">
          {cardData2.map((card, index) => (
            <Link to="/orders" key={index}>
              <StatusCard
                title={card.title}
                value={card.value}
                icon={card.icon}
              />
            </Link>
          ))}
        </div>
      </div>
      <StatisticGraph />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 overflow-hidden">
        <RestaurantsSection />
        <RecentOrder />
        <TopOrderCard />
        <RecentPayOut />
      </div>
    </div>
  );
};

export default DashBoard;
