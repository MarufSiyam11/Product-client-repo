import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import ProductsList from "./ProductsList";

const Home = () => {
    const data =useLoaderData();
    // console.log(data)
    return (
        <div className="">
            <h1 className="text-center text-5xl font-bold p-8">Search for Products to Buy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    data.map(card =><HomeCard
                   key={card.id}
                   data={card} 
                    ></HomeCard>)
                }
            </div>
            <ProductsList></ProductsList>
        </div>
    );
};

export default Home;