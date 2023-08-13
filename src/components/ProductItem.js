
import "../css/Productitem.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../productSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  // console.log("props", props);
  const { product } = props;

  const dispatch = useDispatch();

  const removeHandler = (Id) => { 
    console.log("remove", Id);
    dispatch(removeProduct(Id));
    toast.success("Remove Product ");
  };
  // console.log(product)
  return (
    <div className="product-container">
      {product.map(
        (item) => (
          (
          
            <div className="cart-container" key={item.id}>
              <div>
                <div className="cart-heading">
                  <h5> {item.title}</h5>
                </div>
                <div className="cart-img">
                  <img src={item.image} alt="Imge" />
                </div>
                <div className="description-container">
                  <p>{item.description}</p>
                </div>
                <div className="cart-value">
                  <p> price ₹ : {item.price}</p>
                  {/* <p>Qty :{item.qty}</p> */}
                </div>
                <div className="remove-btn">
                  <button className="delete" onClick={() => removeHandler(item.id)}>
                  <img src="../icon/delete.png" alt="" />
                  </button>
                  <Link to={`/edit/${item.id}`}>
                    <button className="edit">
                    <img src="../icon/edit.png" alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )
      )}
      <Toaster />
    </div>
  );
};
export default ProductItem;
