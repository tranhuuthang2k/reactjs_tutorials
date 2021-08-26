import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LayoutShopping from "../../components/Layout";
import { Button, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { removetCartAction } from "../../actions";
import { changeQuantityCartAction } from "../../actions";
import NumberFormat from "react-number-format";
import "../home/style.css";
import "../../../shopping/styles/product.css";
import logo_header from "../../img/hinhnenpet.jpg";
import Checkout from "./Checkout";
// s
const CartShopping = () => {
  const productCarts = useSelector((state) => state.reducerCart.shoppingCart);
  const dispatch = useDispatch();
  // const [qty, setNumberQty] = useState([]);

  React.useEffect(() => {
    window.scroll({
      bottom: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const getTotal = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      let result = productCarts.reduce(
        (total, item) =>
          total +
          (item.shoppingCart.price * item.shoppingCart.quantity * 100) / 100,
        0
      );

      return result;
    }
  };

  if (productCarts.length === 0) {
    return (
      <LayoutShopping>
        <img
          src={logo_header}
          alt="Error_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <h5 style={{ textAlign: "center" }}>
          Bạn chưa có sản phẩm trong giỏ hàng
        </h5>
      </LayoutShopping>
    );
  }
  return (
    <LayoutShopping>
      <div className="container_image_header">
        <img
          src={logo_header}
          alt="Error_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <Row>
        <Col sm={24}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sm={12}>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productCarts.map((item, key) => (
                  <TableRow key={key} sm={12}>
                    <TableCell>
                      <img
                        src={item.shoppingCart.image}
                        alt="error"
                        style={{
                          height: 168,
                          objectFit: "cover",
                          borderRadius: "5%",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <h5>{item.shoppingCart.name}</h5>
                    </TableCell>
                    <TableCell>
                      <NumberFormat
                        style={{ fontSize: 20 }}
                        value={item.shoppingCart.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix="₫"
                      />
                    </TableCell>
                    <TableCell>
                      <InputNumber
                        min={1}
                        max={30}
                        value={item.shoppingCart.quantity}
                        onChange={(value) => {
                          dispatch(
                            changeQuantityCartAction(
                              value,
                              item.shoppingCart.id
                            )
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        type="dashed"
                        onClick={() =>
                          dispatch(removetCartAction(item.shoppingCart.id, 1))
                        }
                      >
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {getTotal() > 0 && (
            <h5 style={{ float: "right", margin: 20 }}>
              <NumberFormat
                value={getTotal()}
                displayType={"text"}
                thousandSeparator={true}
                suffix=" ₫"
                prefix="TOTAL COST: "
              />
            </h5>
          )}
        </Col>
      </Row>

      <Checkout />
    </LayoutShopping>
  );
};
export default React.memo(CartShopping);
