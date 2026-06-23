import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../Store/useCartStore";
import { useCartFavorite } from "../Store/useCartStore";


function ProductCard({ product, amount = 1 }) {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [mesg, setMsg] = useState("");

  const handleAdded = () => {
    const isAdded = cart.find((item) => item.id === product.id);
    if (isAdded) {
      setMsg("Quantity updated✨");
    } else {
      setMsg("Product added ✅");
    }

    addToCart(product, amount);

    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  return (
    <div className="relative ">
      <AnimatePresence>
        {mesg && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute tracking-wide -top-9 left-1/2 -translate-x-1/2 w-max bg-white px-1 py-2 ring-1 shadow-2xl ring-green-700 text-xs font-bold text-green-700 rounded  whitespace-nowrap z-20"
          >
            {mesg}
          </motion.p>
        )}
      </AnimatePresence>
      <button
        onClick={handleAdded}
        type="button"
        className="btn-slide w-fit  border cursor-pointer border-gold hover:shadow-xl bg-light text-black py-2 px-5 rounded-[8px] tracking-wider font-medium font-serif"
      >
        <span>Add to cart</span>
      </button>
    </div>
  );
}

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact", path: "/Contact" },
  ];

  const shop = [
    { name: "Bracelet", path: "/Shop" },
    { name: "Rings", path: "/Rings" },
    { name: "Chain", path: "/Chain" },
    { name: "Chocker", path: "/Chocker" },
    { name: "Cufflinks", path: "/Cufflinks" },
    { name: "Earrings", path: "/Earrings" },
    { name: "Gemstone", path: "/Gemstone" },
    { name: "Gift Set", path: "/Gift_Set" },
    { name: "Sales", path: "/Sales" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const action = useNavigate();
  const favorite = useCartFavorite((state) => state.favorite);
  const removefavo = useCartFavorite((state) => state.remove);
  const cart = useCartStore((state) => state.cart);
  const high = useCartFavorite((state) => state.increase);
  const low = useCartFavorite((state) => state.decrease);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const remove = useCartStore((state) => state.remove);
  const totalPrice = useCartStore(
    (state) =>
      state.cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );
  const [show, setShow] = useState(false);
  const [fav, setFav] = useState(false);
  
    


  const changeFav = () => {
    setFav(!fav);
  }

  const change = () => {
    setIsOpen(!isOpen);
  };

  const changeShow = () => {
    setShow(!show);
  };
  const showCart = () => {
    action("/cart")
    setShow(false);
  };

  const goCart = () => {
    action("/cart");
    setShow(!show);
  } 
  const gopay = () => {
    action("/Checkout")
    setShow(!show);
  } 

  return (
    <div className="relative w-full z-50">
      {/* header */}
      <header className=" bg-dark">
        <div
          className={`flex flex-col md:flex-row w-[80%] md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto py-4 gap-1 items-center justify-between text-[15px] font-serif`}
        >
          <div
            className={`  flex items-center justify-center gap-16 md:gap-4 font-semibold text-white tracking-widest lg:tracking-normal xl:tracking-wider text-nowrap`}
          >
            <NavLink to="/order">Track Order</NavLink>
            <NavLink to="/about_us">About Us</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
          </div>
          <p
            className={`hidden lg:block text-center  uppercase font-semibold text-white text-[13px] xl:text-[15px] tracking-wider`}
          >
            Register to enjoy <span className="text-gold"> 10% off*</span> your
            first online order
          </p>
          <div className={`flex items-center justify-center gap-4`}>
            <div
              className={`hidden md:flex items-center justify-center gap-4 lg:gap-1 text-[14px] text-white font-light  `}
            >
              <a href="#">
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i class="ri-twitter-x-line"></i>
              </a>
              <a href="#">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i class="ri-tiktok-line"></i>
              </a>
            </div>
            <div
              className={`flex items-center tracking-widest lg:tracking-normal xl:tracking-wider justify-center gap-1 text-nowrap`}
            >
              <p className={`text-white text-[15px]  `}>Contact us 24/7</p>
              <a href="#" className={`text-gold`}>
                (+212) 612 56 3470
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav>
        {/* nav bar desctop */}
        <div
          className={`hidden xl:flex items-center justify-between py-8 uppercase mx-auto xl:w-[80%]  font-serif font-semibold text-[15px]`}
        >
          <div className={`flex items-center justify-center gap-3`}>
            <img
              onClick={() => action("/")}
              src="/assets/logo.webp" width={130}
              alt="image"
              className="mt-[-22px]"
            />
            <a href="#" className={`tracking-wider text-[15px] `}>
              <i className={`text-[15px] mr-2 ri-menu-2-line`}></i>Shop by
              categories
            </a>
          </div>
          <div className={`flex gap-8 tracking-wider`}>
            {navLinks.map((item) => (
              <NavLink key={item.name} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div
            className={`flex items-center justify-center gap-5 text-[23px] font-light`}
          >
            <a href="#">
              <i className="ri-search-line"></i>
            </a>
            <div className="relative cursor-pointer"  onClick={changeShow}>
              <i className="ri-shopping-bag-line"></i>  
              {cart.length > 0 && (
                <div className="absolute -top-3 -right-2 bg-gold py-[3px] px-[11px] rounded-full w-[18px] ">
                  <span className=" flex items-center justify-center  text-white font-semibold text-xs">
                    {cart.length}
                  </span>
                </div>
              )}
            </div>
            <div className="relative" onClick={changeFav}>
              <i className="ri-heart-line"></i>
              {favorite.length > 0 && (
                <div className="absolute -top-3 -right-2 bg-gold py-[3px] px-[11px] rounded-full w-[18px]">
                  <span className="flex items-center justify-center  text-white font-semibold text-xs">
                    {favorite.length}
                  </span>
                </div>
              )}
            </div>
            <a href="#">
              <i class="ri-account-circle-line"></i>
            </a>
          </div>
        </div>
        {/* nav bar Phone */}
        <div
          className={` flex items-center justify-between xl:hidden py-4 px-4 md:py-5 md:px-7`}
        >
          <a href="#" onClick={change} className=" md:w-36">
            <i className={`text-[30px] ri-menu-unfold-line `}></i>
          </a>
          <img
            onClick={() => action("/")}
            src="/assets/logo.webp" width={130}
              alt="image"
              className="mt-[-10px]"
          />
          <div className={`flex items-center gap-5`}>
            <div className={`text-[25px] hidden md:flex items-center gap-5 `}>
              <a href="#">
                <i className=" ri-search-line"></i>
              </a>
              <div className="relative" onClick={changeShow}>
                <i className="ri-shopping-bag-line"></i>
                {cart.length > 0 && (
                  <div className="absolute -top-3 -right-2 bg-gold py-[3px] px-[11px] rounded-full w-[18px] ">
                    <span className=" flex items-center justify-center  text-white font-semibold text-xs">
                      {cart.length}
                    </span>
                  </div>
                )}
              </div>
              <div onClick={changeFav} className="relative" href="#">
                <i className="ri-heart-line"></i>
                {favorite.length > 0 && (
                  <div className="absolute -top-3 -right-2 bg-gold py-[3px] px-[11px] rounded-full w-[18px]">
                    <span className="flex items-center justify-center  text-white font-semibold text-xs">
                      {favorite.length}
                    </span>
                  </div>
                )}
              </div>
              <a href="#">
                <i className=" ri-account-circle-line"></i>
              </a>
            </div>
            <div className={`text-[25px] md:hidden flex items-center gap-5 `}>
              <div className="relative" onClick={changeShow}>
                <i className="ri-shopping-bag-line"></i>
                {cart.length > 0 && (
                  <div className="absolute -top-3 -right-2 bg-gold py-[3px] px-[11px] rounded-full w-[18px] ">
                    <span className=" flex items-center justify-center  text-white font-semibold text-xs">
                      {cart.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*menu Phone */}
      <div
        className={`fixed transition-all z-999 duration-300 top-0 left-0  w-full xl:hidden bg-[#00000073] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-[80%] md:w-[45%] relative flex flex-col items-start pl-6 pt-10 gap-1 min-h-screen bg-light">
          <img className=""   src="/assets/logo.webp" width={100}
              alt="image"></img>
          <i
            onClick={change}
            className="absolute right-7 top-3 text-4xl ri-close-fill cursor-pointer"
          ></i>

          <div
            className={`text-[16px] mt-4  font-serif font-semibold tracking-wide  flex text-start font-stretch-50% w-[90%] text-nowrap gap-8`}
          >
            <button
              onClick={() => setIsActive(false)}
              className={`relative pb-1 transition-all duration-300
                      ${isActive ? "text-nmenu" : "text-black"}`}
            >
              {" "}
              Main Menu{" "}
              {!isActive && (
                <span className="absolute left-0 bottom-0 h-[2px] bg-menu animate-borderSlide"></span>
              )}
            </button>

            <button
              onClick={() => setIsActive(true)}
              className={`relative pb-1 transition-all duration-300
                ${isActive ? "text-black" : "text-nmenu"}`}
            >
              {" "}
              Shop by Categories{" "}
              {isActive && (
                <span className="absolute left-0 bottom-0 h-[2px] bg-menu animate-borderSlide"></span>
              )}
            </button>
          </div>

          {isActive ? (
            <div
              className={`flex transition-all duration-300  flex-col mt-5 text-[15px] gap-3 uppercase tracking-wide font-serif font-semibold`}
            >
              {shop.map((item, index) => (
                <NavLink
                  key={item.name}
                  onClick={change}
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive ? "text-menu font-bold" : "hover:text-gold"} opacity-0 animate-fadeSlide`
                  }
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {item.name}
                </NavLink>
              ))}{" "}
            </div>
          ) : (
            <div
              className={`flex flex-col mt-5 transition-all duration-300  text-[15px] gap-3 uppercase tracking-wide font-serif font-semibold`}
            >
              {navLinks.map((item, index) => (
                <NavLink
                  key={item.name}
                  onClick={change}
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive ? "text-menu font-bold" : "hover:text-gold"} opacity-0 animate-fadeSlide`
                  }
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {item.name}
                </NavLink>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
        {/*cart products */}
      <div
        className={`fixed transition-all font-serif z-9 duration-600 top-0 right-0 w-full  bg-[#00000073]  ${show ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full flex flex-col items-end">

          <div className="w-[80%] md:w-[45%] xl:w-[35%] 2xl:w-[23%] pt-2 relative flex flex-col items-center  gap-1 min-h-screen bg-light">
          
               <div className="w-full px-6 pb-1 flex items-center justify-between">
              <h2 className="text-[18px] text-dark font-semibold tracking-wide ">
                shopping cart
              </h2>
              <i
                onClick={changeShow}
                className="text-4xl ri-close-fill cursor-pointer"
              ></i>
               </div>
               <div className="flex flex-col items-center justify-between w-full h-screen">
              
                  <div className=" overflow-y-auto w-full pr-2 flex flex-col gap-2 ">
                 <AnimatePresence mode="popLayout"> 
                {cart.map((item) => (
                  <motion.div
                    key={item.id} layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex items-start justify-center gap-2 border-t border-[#4b4a4a4a]"
                  >
                    <img
                      className="w-[110px]"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col items-start my-2 w-full">
                      <div className="flex w-full items-start gap-2 justify-between">
                        <h2 className="text-[15px] text-dark text-wrap tracking-wide">
                          {item.name}
                        </h2>
                        <i
                          onClick={() => remove(item.id)}
                          className="text-[20px] text-sub ri-close-fill cursor-pointer"
                        ></i>
                      </div>
                      <div className="flex flex-col items-start justify-center text-[14px]">
                        <p className="flex items-center justify-center text-[14px] tracking-wide gap-1 text-sub">
                          {item.quantity} x{" "}
                          <span className="text-[15px] text-black font-medium tracking-wider">
                            {item.price} ${" "}
                          </span>
                        </p>
                        <div className="flex items-center py-1 px-3 justify-between text-[14px] bg-gray-200 rounded hover:bg-gray-300">
                          <button onClick={() => increase(item.id)}>+</button>
                          <span className="mx-8">{item.quantity}</span>
                          <button onClick={() => decrease(item.id)}>-</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                  </AnimatePresence> 
                 </div>
            
              
                 <div className="w-full flex flex-col items-center gap-4 pb-36 md:pb-18 ">
                    <div className="w-full flex items-center justify-between px-4 pt-3 tracking-wider border-t border-[#4b4a4a4a]  ">
                 <h2 className="text-[16px] pt-4 font-medium">Subtotal: </h2><span className="text-[20px] font-semibold">{totalPrice} $</span>
                    </div>
                    <div className=" flex flex-col gap-4 w-[80%] ">
                  <button onClick={goCart}
             
                  className="btn-slide text-[14px] hover:cursor-pointer  text-light bg-dark py-3 px-5 rounded-[8px] tracking-wide font-medium font-serif"
                
                >
                  <span>View Cart</span>
                </button>
                <button onClick={gopay}
           
                  className="btn-slide  text-[14px] hover:cursor-pointer  text-dark py-3 border rounded-[8px] tracking-wide font-medium font-serif"
                
                >
                  <span>Checkout</span>
                </button>
                    </div>
                 </div>
            
               </div>
            
          </div>
        </div>
      </div>

        {/*cart favorite */}
        <div
        className={`fixed transition-all font-serif z-9 duration-500 top-0 right-0 w-full  bg-[#00000073]  ${fav ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full flex flex-col items-end">
          <div className="w-[85%] md:w-[55%] xl:w-[35%] 2xl:w-[30%] pt-2 relative flex flex-col items-center pb-12  gap-1 h-screen bg-light">
            <div className="w-full px-6 pb-1 flex items-center justify-between ">
              <h2 className="text-[18px] text-dark font-semibold tracking-wide ">
                Favorite cart
              </h2>
              <i
                onClick={changeFav}
                className="text-4xl ri-close-fill cursor-pointer"
              ></i>
            </div>

            <div className="flex flex-col items-center justify-between w-full h-full">
              {/* Add scroll to favorites list */}
              <div className="overflow-y-auto w-full h-screen pr-2 flex flex-col gap-2">
              <AnimatePresence mode="popLayout">
                {favorite.map((item) => (
                  <motion.div
                  layout
                   initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="w-full flex items-start justify-center gap-2 border-t border-[#4b4a4a4a]"
                  >
                    <img
                      className="w-[110px]"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col items-start my-2 w-full">
                      <div className="flex w-full items-start gap-2 justify-between">
                        <h2 className="text-[15px] text-dark text-wrap tracking-wide">
                          {item.name}
                        </h2>
                        <i
                          onClick={() => removefavo(item.id)}
                     
                          className="text-[20px] text-sub ri-close-fill cursor-pointer"
                        ></i>
                      </div>
                      <div className="flex flex-col items-start justify-center text-[14px]">
                        <p className="flex items-center justify-center text-[14px] tracking-wide gap-1 text-sub">
                          {item.quantity} x{" "}
                          <span className="text-[15px] text-black font-medium tracking-wider">
                            {item.price} ${" "}
                          </span>
                        </p>
                        <div className="w-full flex items-center justify-center text-nowrap gap-2 md:gap-4">
                          <div className="flex items-center  justify-between text-[14px] bg-gray-200 rounded hover:bg-gray-300">
                          <button onClick={() => high(item.id)} className="py-2 px-2 md:px-3">+</button>
                          <span className="mx-4 md:mx-6">{item.quantity}</span>
                          <button onClick={() => low(item.id)} className="py-2 px-3">-</button>

                        </div>
                        <ProductCard product={item} amount={item.quantity} />
                        </div>
                        
                      </div>
                    </div>
                  </motion.div>
                ))}
                </AnimatePresence>
              </div>
            </div>
      
          </div>
        </div>
      </div>


     {/*  navbar bottom */}
     {/* Mobile bottom navigation bar */}
     <nav className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-2xl border-t border-gray-200 md:hidden">
       <div className="flex justify-between items-center px-1 py-2">
         <button
           className="flex flex-col flex-1 items-center justify-center text-sm text-gray-700 hover:text-gold transition"
           onClick={() => action("/")}
         >
           <i className="ri-home-5-line text-xl mb-0.5" />
           <span>Home</span>
         </button>
         <button
           className="flex flex-col flex-1 items-center justify-center text-sm text-gray-700 hover:text-gold transition relative"
           onClick={changeFav}
         >
           <i className="ri-heart-line text-xl mb-0.5" />
           <span>Favorite</span>
           {favorite.length > 0 && (
             <span className="absolute top-1 left-5 bg-gold text-white text-xs font-semibold rounded-full px-1">
               {favorite.length}
             </span>
           )}
         </button>
         <button
           className="flex flex-col flex-1 items-center justify-center text-sm text-gray-700 hover:text-gold transition relative"
           onClick={showCart}
         >
           <i className="ri-shopping-bag-line text-xl mb-0.5" />
           <span>Cart</span>
           {cart.length > 0 && (
             <span className="absolute top-1 left-5 bg-gold text-white text-xs font-semibold rounded-full px-1">
               {cart.length}
             </span>
           )}
         </button>
         <button
           className="flex flex-col flex-1 items-center justify-center text-sm text-gray-700 hover:text-gold transition"
           onClick={() => action("/profile")}
         >
           <i className="ri-user-line text-xl mb-0.5" />
           <span>Profile</span>
         </button>
       </div>
     </nav>
 
      

      

     </div>

  );
}

export default Navbar;
