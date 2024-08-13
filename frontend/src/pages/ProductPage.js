import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ProductPage.css';

// Import product images
import VegetablesImage from '../assets/Images/vegetables.jpeg';
import FruitsImage from '../assets/Images/fruits.jpeg';
import MilkImage from '../assets/Images/milk.jpeg';
import MeatImage from '../assets/Images/meat.jpeg';
import IceCreamImage from '../assets/Images/ice cream.jpeg';
import ChocoImage from '../assets/Images/choco.jpeg';
import JuiceImage from '../assets/Images/juice.jpeg';
import WineImage from '../assets/Images/wine.jpeg';
import SnackImage from '../assets/Images/snacks.jpeg';
import ToysImage from '../assets/Images/toys.jpeg';
import ShampooImage from '../assets/Images/shampoo.jpeg';
import SoapImage from '../assets/Images/soap.jpeg';
import ToothPasteImage from '../assets/Images/toothpaste.jpeg';
import WatchesImage from '../assets/Images/watch.jpeg';
import ShoesImage from '../assets/Images/shoes.jpeg';

// Array of products with imported images
const products = [
  {
    id: 1,
    title: 'Vegetables',
    image: VegetablesImage,
    price: 99.00,
  },
  {
    id: 2,
    title: 'Fruits',
    image: FruitsImage,
    price: 149.00,
  },
  {
    id: 3,
    title: 'Milk',
    image: MilkImage,
    price: 33.00,
  },
  {
    id: 4,
    title: 'Meat',
    image: MeatImage,
    price: 499.00,
  },
  {
    id: 5,
    title: 'Ice Cream',
    image: IceCreamImage,
    price: 35.00,
  },
  {
    id: 6,
    title: 'Chocolates',
    image: ChocoImage,
    price: 20.00,
  },
  {
    id: 7,
    title: 'Juice',
    image: JuiceImage,
    price: 49.00,
  },
  {
    id: 8,
    title: 'Wine',
    image: WineImage,
    price: 199.00,
  },
  {
    id: 9,
    title: 'Snacks',
    image: SnackImage,
    price: 99.00,
  },
  {
    id: 10,
    title: 'Toothpaste',
    image: ToothPasteImage,
    price: 30.00,
  },
  {
    id: 11,
    title: 'Toys',
    image: ToysImage,
    price: 999.00,
  },
  {
    id: 12,
    title: 'Shampoo',
    image: ShampooImage,
    price: 49.00,
  },
  {
    id: 13,
    title: 'Soap',
    image: SoapImage,
    price: 49.00,
  },
  {
    id: 14,
    title: 'Watches',
    image: WatchesImage,
    price: 2499.00,
  },
  {
    id: 15,
    title: 'Shoes',
    image: ShoesImage,
    price: 1499.00,
  },
];

const ProductPage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const getCartQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              />
              
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            {getCartQuantity(product.id) > 0 && (
              <p className="cart-quantity">In Cart: {getCartQuantity(product.id)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
