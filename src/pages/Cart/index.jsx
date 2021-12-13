import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { FiLogIn } from "react-icons/fi";
import { SubButton, Card, Content, Img, Order } from "./styles";
import { useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/Cart/thunk";
import { useDispatch } from "react-redux";

function Cart() {
  const history = useHistory();

  const dispatch = useDispatch();

  const cart = useSelector(store => store.cart);

  const total = cart.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <NavBar>
            <Link to="/" className="Link_to_home">
              Kenzieshop
            </Link>
            <div>
              {cart.length > 0 && (
                <div className="count_cart">{cart.length}</div>
              )}
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
              {cart.map((item, index) => (
                <div key={index}>
                  <Img src={item.img} alt={item.name}></Img>
                  <li className="Name_product">{item.name}</li>
                  <div className="Price-Box">
                    <li className="Price_product">
                      R$ {item.price.toFixed(2)}
                    </li>
                    <SubButton
                      onClick={() => dispatch(removeFromCartThunk(item))}
                    >
                      x
                    </SubButton>
                  </div>
                </div>
              ))}
            </Card>
            <Order>
              <h2>Resumo do pedido</h2>
              <div>
                {cart.length === 1 ? (
                  <p>{cart.length} produto</p>
                ) : (
                  <p>{cart.length} produtos</p>
                )}
                <p>
                  {" "}
                  R$
                  {total}
                </p>
              </div>
              <button>Finalizar o Pedido</button>
            </Order>
          </Content>
        </>
      ) : (
        <>
          <NavBar>
            <Link to="/" className="Link_to_home">
              Kenzieshop
            </Link>
            <div>
              {cart.length > 0 && (
                <div className="count_cart">{cart.length}</div>
              )}
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
          <div>
            <p>Você não adicionou nenhum produto ao seu carrinho :/</p>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
