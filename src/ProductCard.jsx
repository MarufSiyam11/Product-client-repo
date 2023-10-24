
const ProductCard = ({ product }) => {
  const { _id, name, brand, category, price, description, photo, reating } = product;

  const handleDelete =_id =>{
    console.log(_id)
  }
  return (

    <div className="card  w-96 bg-base-100 pt-10 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand Name :{brand}</h2>
        <p>reating :{reating}</p>
        <div className="card-actions">
          <div className="btn-group btn-group-vertical space-x-4 lg:btn-group-horizontal">
            <button className="btn bg-indigo-400">View</button>
            <button className="btn bg-sky-300">Edit</button>
            <button className="btn bg-red-400"
            onClick={()=> handleDelete(_id)}
            >Delete</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;