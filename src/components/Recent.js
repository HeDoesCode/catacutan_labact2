import RecentItem from "./RecentItem";
import recentData from "../recentData";

function Recent() {
  const data = recentData();
  return (
    <div className="container recent">
      <div className="row text-center">
        {data.map((data) => (
          <RecentItem link={data.link} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default Recent;
