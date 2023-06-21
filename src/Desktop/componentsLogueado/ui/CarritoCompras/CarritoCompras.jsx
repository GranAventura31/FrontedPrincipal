import React, { useState } from "react";

export const CarritoCompras = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([0]);

  const addToCart = (item) => {
      const updateCart=([...cartItems, { ...item, quantity: 1 }]);
     setCartItems(updateCart);
    updateTotalPrice(updateCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem === item) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem === item && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  };
  const handleBuy = () => {
    alert(`Total de la compra: $${totalPrice.toFixed(2)}`);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container">

      <ul className="cartList">
        {cartItems.map((item, index) => (
          <li key={index} className="cartItem">
            <img src={item.image} alt="Product" className="productImage" />
            <div className="productInfo">
              <span className="productName">{item.name}</span>
              <span className="productPrice">${item.price.toFixed(2)}</span>
              <span className="productQuantity">Cantidad: {item.quantity}</span>
            </div>
            <div className="quantityControls">
              <button
                className="quantityButton"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="quantityButton"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
            </div>
            <button
              className="deleteButton"
              onClick={() => removeFromCart(item)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

            
      <div className="totalPrice">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
        
       {/* <div className="totalPrice">Total: ${totalPrice.toFixed(2)}</div> */}

      <button className="buyButton" onClick={handleBuy}>Comprar </button>
      <button className="clearButton" onClick={emptyCart}>
        Vaciar carrito
      </button>

      <div className="DivProductos">
      <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682022987/niko/pintucaritas_camabx.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Pintucaritas', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682022987/niko/pintucaritas_camabx.webp', price: 28.700 })}>
              Pintucaritas ($28.700)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src='https://res.cloudinary.com/dlohqvzri/image/upload/v1683224453/niko/camisas_neon_lk9cb1.jpg' alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Camisetas Neón', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224453/niko/camisas_neon_lk9cb1.jpg', price: 60.900 })}>
              Camisetas Neón ($60.900)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682367695/niko/camisasuperheroe_fyujnq.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Camisetas Super Heroes', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682367695/niko/camisasuperheroe_fyujnq.webp', price: 50.000 })}>
              Camisetas Super Heroes ($50.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368483/niko/espuma_y3z0jg.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Espumas', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368483/niko/espuma_y3z0jg.webp', price: 25.000 })}>
              Espumas ($25.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683224534/niko/barras_neon_hvawbo.jpg" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Barritas Led', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224534/niko/barras_neon_hvawbo.jpg', price: 15.000 })}>
              Barritas Led ($15.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368613/niko/collar_akm7wh.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Collar Hawaiano', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368613/niko/collar_akm7wh.webp', price: 10.000 })}>
              Collar Hawaiano ($10.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683224456/niko/tula_led_p6znua.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Tula Gran Aventura', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224456/niko/tula_led_p6znua.webp', price: 20.000 })}>
              Tula Gran Aventura ($20.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368267/niko/gorras_baandn.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Gorras Gran Aventura', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368267/niko/gorras_baandn.webp', price: 35.000 })}>
              Gorras Gran Aventura ($35.000)
            </button>
          </section>
        </div>

      </div>
    </div>
  );
};