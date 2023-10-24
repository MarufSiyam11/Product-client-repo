import apple from "../assets/apple-products.jpg"
import oneplud from "../assets/oneplus-11.jpg"
import samsung from "../assets/Samsung-products.png"
import sony from "../assets/sony-product1.jpg"
import google from "../assets/google-products.webp"
const ProductsList = () => {
    return (
        <div>
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