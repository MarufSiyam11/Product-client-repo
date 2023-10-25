import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const {category, image} = data;
    return (
        <div className="card w-96 bg-base-100  p-5 shadow-xl image-full">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-5xl text-white font-bold text-center">{category}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <Link to='/app'><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default HomeCard;