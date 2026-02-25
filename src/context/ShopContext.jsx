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
  const [edit, setEdit] = useState("")
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState({});
  
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("user"); // default

  //new product
  const [products,setProducts] = useState([]);
  // const[productList, setProductList] = useState("");

  // const deleteProduct =(itemId) => {
  //      setProducts((prev) => ({
  //     ...prev,
  //     [itemId]: prev[itemId] - 1,
  //   }));
  // };

  const deleteProduct = (id) => {
  const updatedProducts = products.filter(
    (product) => product.id !== id
  );

  setProducts(updatedProducts);
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  setCartItems(getDefaultCart(updatedProducts));
};

const editProduct = (updatedProduct) => {
  setProducts((prevProducts) =>
    prevProducts.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    )
  );
};

  


useEffect(() => {
  const savedProducts = JSON.parse(localStorage.getItem("products"));

  if (savedProducts) {
    setProducts(savedProducts);
    setCartItems(getDefaultCart(savedProducts));
  } else {
    setProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
    setCartItems(getDefaultCart(products));
  }
}, []);


const addProduct = (productData) => {
  const newProduct = {
    ...productData,
    id: Math.floor(Math.random() * 1000000),
  };

  const updatedProducts = [...products, newProduct];
  setProducts(updatedProducts);
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  setCartItems(getDefaultCart(updatedProducts));
};
 
//   const updatedProducts = [...products, productData];
//   setProducts(updatedProducts);
//   localStorage.setItem("products", JSON.stringify(updatedProducts));
//   debugger;
// };

//end new product

const login = (name, email, selectedRole) => {
  const userData = {
    name,
    email,
    role: selectedRole
  };

  // Get existing users
  // const existingUsers =
  //   JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  // existingUsers.push(userData);

  // Save updated users list
  // localStorage.setItem("users", JSON.stringify(existingUsers));

  // Save current logged in user
  localStorage.setItem("currentUser", JSON.stringify(userData));
  localStorage.setItem("isLoggedIn", "true");

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



const logout = () => {
  debugger
  localStorage.removeItem("currentUser");
  localStorage.removeItem("isLoggedIn")
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

  // const clearCart = () => {
  //   setCartItems(getDefaultCart());
  // };
  const clearCart = () => {
  setCartItems(getDefaultCart(products));
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
    // all_product,
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
    setProducts,
deleteProduct,
editProduct,
edit,
setEdit
  

  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}
export default ShopContextProvider;
