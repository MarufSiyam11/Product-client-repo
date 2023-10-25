import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {
    const data =useLoaderData();
    // console.log(data)
    return (
        <div className="">
            <h1>this is home</h1>
            <div className="grid md:grid-cols-3 ">
                {
                    data.map(card =><HomeCard
                   key={card.id}
                   data={card} 
                    ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;