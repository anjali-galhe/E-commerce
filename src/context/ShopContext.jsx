import React, { createContext, useContext, useState ,useEffect} from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);



const getDefaultCart = (productList) => {
  let cart = {};
  productList.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};


export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState({});
  
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("user"); // default

  //new product
  const [products,setProducts] = useState([]);
  


useEffect(() => {
  const savedProducts = JSON.parse(localStorage.getItem("products"));

  if (savedProducts) {
    setProducts(savedProducts);
    setCartItems(getDefaultCart(savedProducts));
  } else {
    setProducts(all_product);
    localStorage.setItem("products", JSON.stringify(all_product));
    setCartItems(getDefaultCart(all_product));
  }
}, []);


const addProduct = (productData) => {
  const updatedProducts = [...products, productData];
  setProducts(updatedProducts);
  localStorage.setItem("products", JSON.stringify(updatedProducts));
};

//end new product

const login = (name, email, selectedRole) => {
  const userData = {
    name,
    email,
    role: selectedRole
  };

  // Get existing users
  const existingUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  existingUsers.push(userData);

  // Save updated users list
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Save current logged in user
  localStorage.setItem("currentUser", JSON.stringify(userData));

  setUser(userData);
  setRole(selectedRole);
};


useEffect(() => {
  const savedUser = JSON.parse(localStorage.getItem("currentUser"));

  if (savedUser) {
    setRole(savedUser.role);
    setUser(savedUser);
  }
}, []);


// const logout = () => {
//   setUser({email});
//   setRole("selectedRole");
// };
const logout = () => {
  localStorage.removeItem("currentUser");
  setUser(null);
  setRole("user");
};


  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // const itemInfo = all_product.find(
        //   (product) => product.id === Number(item)
        // );
        const itemInfo = products.find(
  (product) => product.id === Number(item)
);

        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    search,
    setSearch,
    user,
    role,
    login,
    logout,
    products,
    addProduct,
    setProducts


  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
