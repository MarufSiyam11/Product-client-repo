import apple from "../assets/apple-products.jpg"
import oneplud from "../assets/oneplus-11.jpg"
import samsung from "../assets/Samsung-products.png"
import sony from "../assets/sony-product1.jpg"
const ProductsList = () => {
    return (
        <div className="pt-10 pb-10">
            
            <h1 className="text-center text-5xl font-bold p-10">Our New Products</h1>
            <div className="grid grid-cols-4  w-full ">
                <div className="p-2">
                    <img className="h-full w-full" src={apple} alt="" />
                </div>
                <div className="p-2">
                    <img className="h-96 w-96" src={oneplud} alt="" />
                </div>
                <div className="p-2">
                    <img className="h-96 w-96" src={samsung} alt="" />
                </div>
                <div className="p-2">
                    <img className="h-96 w-96" src={sony} alt="" />
                </div>
              
           
               
            </div>
        </div>
    );
};

export default ProductsList;