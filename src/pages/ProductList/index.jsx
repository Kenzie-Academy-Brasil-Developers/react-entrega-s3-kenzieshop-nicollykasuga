import NavBar from "../../components/NavBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { AddButton, Card, Content, Img } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/Cart/thunk";
import { useSelector } from "react-redux";

function ProductList() {
  const history = useHistory();

  const dispatch = useDispatch();

  const products = useSelector(store => store.product);
  const cart = useSelector(store => store.cart);

  return (
    <>
      <NavBar>
        <h1>Kenzieshop</h1>
        <div>
          {cart.length > 0 && <div className="count_cart">{cart.length}</div>}
          <button onClick={() => history.push("/cart")}>
            <AiOutlineShoppingCart className="icon" />
            Carrinho
          </button>
          <button>
            {" "}
            <FiLogIn className="icon" />
            Entrar
          </button>
        </div>
      </NavBar>
      <Content>
        <Card>
          {products.map((item, index) => (
            <div key={index}>
              <Img src={item.img} alt={item.name}></Img>
              <li className="Name_product">{item.name}</li>
              <li className="Price_product">R$ {item.price.toFixed(2)}</li>
              <AddButton onClick={() => dispatch(addToCartThunk(item))}>
                Adicionar ao carrinho
              </AddButton>
            </div>
          ))}
        </Card>
      </Content>
    </>
  );
}

export default ProductList;
