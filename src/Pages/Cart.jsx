import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/useCartStore";
import { useCartFavorite } from "../Store/useCartStore";
import { AnimatePresence, motion } from "framer-motion";

function FavoriteCart({ itemfavorite, setProducts, style = "icon" }) {
  const addFavorite = useCartFavorite((state) => state.addFavorite);
  const favorites = useCartFavorite((state) => state.favorite);

  const isFavorited = favorites.some((item) => item.id === itemfavorite.id);

  const clickchange = () => {
    addFavorite(itemfavorite);

    if (typeof setProducts === "function") {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === itemfavorite.id
            ? { ...product, favorite: !isFavorited }
            : product,
        ),
      );
    }
  };

  if (style === "button") {
    return (
      <button
        onClick={clickchange}
        type="button"
        className={`flex items-center gap-2 btn-slide w-fit border cursor-pointer border-gold hover:shadow-xl py-2 px-5 rounded-[8px] tracking-wider font-medium font-serif ${
          isFavorited ? "bg-gold text-amber-50" : "bg-white text-dark"
        }`}
      >
        <span>{isFavorited ? "Favorited" : "Add to Favorite"}</span>
      </button>
    );
  } else {
    return (
      <i
        onClick={clickchange}
        className={`${
          isFavorited ? "bg-gold text-amber-50" : "bg-white text-dark"
        } hover:cursor-pointer hover:bg-gold hover:text-amber-50 border transition-all duration-200 border-gold pt-1 px-2 rounded-[8px] ri-heart-line`}
      ></i>
    );
  }
}

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const remove = useCartStore((state) => state.remove);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const clear = useCartStore((state) => state.clear);
  const totalPrice = useCartStore((state) =>
    state.cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
  );

  const action = useNavigate();

  const [itemView, setItemView] = useState(null);
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push("full");
      } else if (rating >= i - 0.5) {
        stars.push("half");
      } else {
        stars.push("empty");
      }
    }
    return stars;
  };

  const cart_service = [
    {
      id: 1,
      icon: <i className="ri-archive-line"></i>,
      title: "Complimentary Shipping",
      desc: "We offer complimentary shipping and returns on all orders over $130.",
    },
    {
      id: 2,
      icon: <i className="ri-customer-service-2-line"></i>,
      title: "Olight At Your Service",
      desc: "Our client care experts are always here to help.",
    },
    {
      id: 3,
      icon: <i className="ri-calendar-check-line"></i>,
      title: "Book an Appointment",
      desc: "We’re happy to help with in-store or virtual appointments.",
    },
    {
      id: 4,
      icon: <i className="ri-gift-2-line"></i>,
      title: "The Iconic Blue Box",
      desc: "Your Olight purchase comes wrapped in our Blue Box packaging.",
    },
  ];

  const beauty = {
    title: "The beauty of the world at your fingertips.",
    description: "Refresh your collection with our latest arrivals.",
    image: "/assets/Hero/bearty_1.jpg",
    path: "page#",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <div className="relative w-[98%] xl:w-[80%] items-start mx-auto font-serif flex flex-col  ">
      <div  className="relative w-full flex items-center justify-center h-[200px] md:h-[300px] overflow-hidden bg-black rounded-[12px] shadow-2xl">
        <motion.img variants={cardVariants}
          className="absolute object-cover w-full h-full opacity-70"
          src="/assets/Hero/revslider_2.jpg"
          alt="Cart Hero"
        />
        <motion.h2 variants={cardVariants} className="text-3xl text-shadow-2xl font-bold tracking-wider z-11 text-white xl:pb-8">
          Cart
        </motion.h2>
      </div>

      <div className="w-full flex flex-col lg:flex-row  gap-18 lg:gap-8 items-start justify-center my-18">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.01}}   className="w-full lg:w-[60%] flex flex-col">

          <motion.div variants={cardVariants} className="w-full flex items-center justify-between mb-5 px-4 ">
            <h2 className="text-2xl font-bold tracking-wide ">
              List Products:{" "}
            </h2>

            <button
              onClick={clear}
              className="text-[14px] hover:cursor-pointer  hover:bg-red-500 transition-all duration-300 hover:scale-90 text-light bg-dark py-3 px-5 rounded-[8px] tracking-wide font-medium font-serif"
            >
              <span>Reset cart</span>
            </button>
          </motion.div>

          <div variants={cardVariants} className="w-full flex flex-col items-center justify-center ">
            {cart.map((item) => (
              <motion.div variants={cardVariants}
                key={item.id}
                className="w-full flex items-start px-4 py-2 justify-center gap-1 border-t border-[#4b4a4a4a]"
              >
                <img onClick={() => setItemView(item)} className="cursor-pointer w-[110px]" src={item.image} alt={item.name} />
                <div className="flex flex-col items-start w-full">
                  <div className="flex w-full items-start gap-2 justify-between">
                    <h2
                      onClick={() => setItemView(item)}
                      className="text-[18px] hover:cursor-pointer text-dark text-wrap font-semibold tracking-wide leading-5"
                    >
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
                    <div className="flex  hover:cursor-pointer items-center py-1 px-3 justify-between text-[14px] bg-gray-200 rounded hover:bg-gray-300">
                      <button
                        onClick={() => increase(item.id)}
                        className="hover:cursor-pointer"
                      >
                        +
                      </button>
                      <span className="mx-8">{item.quantity}</span>
                      <button
                        onClick={() => decrease(item.id)}
                        className="hover:cursor-pointer"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}   className="w-[80%] mx-auto md:w-[50%] lg:w-[40%] p-8 gap-4 flex flex-col items-start justify-center mt-12   border-8 rounded-2xl shadow-xl border-[#eaeae9]">
          <motion.h2 variants={cardVariants} className="text-[28px] font-bold tracking-wider">Total</motion.h2>
          <motion.div variants={cardVariants} className="flex w-full  items-center justify-between">
            <h2 className="text-[16px] font-bold text-dark tracking-wider">
              Total Price:
            </h2>
            <span className="text-[18px] font-bold tracking-wider">
              {totalPrice} $
            </span>
          </motion.div>
          <button  onClick={() => action("/Checkout")} className=" w-full text-[14px] hover:cursor-pointer hover:scale-95 hover:bg-dark transition-all duration-300 hover:shadow-xl text-white bg-gold py-3 border rounded-[8px] tracking-wide font-medium font-serif">
            <motion.span variants={cardVariants}>Checkout</motion.span>
          </button>
        </motion.div>
      </div>

      {/* view details product*/}
      {itemView ? (
        <div className="w-full h-full bg-[#22201db5] flex justify-center items-center fixed left-0 top-0 z-30 bg-opacity-70">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}   className="bg-white rounded-xl shadow-2xl p-6 flex flex-col md:flex-row w-[97%] md:w-[95%] gap-6 max-w-3xl mx-auto relative">
            <motion.button variants={cardVariants}
              className="absolute overflow-hidden top-4 cursor-pointer right-4 text-dark hover:text-red-600 text-2xl z-10"
              onClick={() => setItemView("")}
              aria-label="Close"
            >
              &times;
            </motion.button>
            <motion.img variants={cardVariants}
              className="w-60 h-60 hover:scale-110 transition-all rounded-lg object-contain bg-gray-50"
              src={itemView.image}
              alt={itemView.name}
            />
            <div className="flex flex-col gap-3 justify-center">
              <motion.h1 variants={cardVariants} className="text-xl font-bold text-gold tracking-wider uppercase">
                {itemView.name}
              </motion.h1>
              <motion.div variants={cardVariants} className="flex flex-wrap items-center gap-1 text-[20px]">
                {getStars(itemView.rating).map((star, i) => (
                  <span key={i} className="text-amber-500 text-xl">
                    {star === "full" && "★"}
                    {star === "half" && "⯨"}
                    {star === "empty" && "☆"}
                  </span>
                ))}
                <span className="ml-2 text-nmenu text-base font-medium">
                  ({itemView.reviews} Reviews)
                </span>
              </motion.div>
              <motion.h2 variants={cardVariants} className="text-lg font-semibold tracking-wider text-dark">
                {itemView.price} $
              </motion.h2>
              <motion.p variants={cardVariants} className="border-b pb-4 border-nmenu tracking-wider text-[16px] text-gray-700">
                {itemView.description}
              </motion.p>
              <motion.div variants={cardVariants} className="flex flex-row flex-wrap justify-start gap-4 mt-6 whitespace-nowrap">
                <FavoriteCart itemfavorite={itemView} style="button" />
              </motion.div>
              <motion.div variants={cardVariants}>
                <p className="font-normal text-nmenu text-[15px] tracking-wide">
                  SKU:
                  <span className="text-dark tracking-wider">
                    {" "}
                    {itemView.SKU}{" "}
                  </span>
                </p>
                <p className="font-normal text-nmenu text-[15px] tracking-wide">
                  Category:
                  <span className="text-dark tracking-wider">
                    {" "}
                    {itemView.category}{" "}
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ) : null}

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}    className="flex flex-col">
        <div className="relative w-full rounded-2xl h-[380px] md:h-[440px] xl:h-[350px] overflow-hidden flex flex-col justify-center font-serif md:mt-12 group">
          <motion.img variants={cardVariants}
            className="absolute w-full h-full inset-0  object-cover object-center group-hover:scale-110 hover:scale-115 transition-all duration-700"
            src={beauty.image}
          />
          <div className="relative flex flex-col  gap-3 md:gap-5 items-start justify-center pl-6 md:pl-20 xl:gap-4 min-h-[640px] w-full hover:bg-[#0000004a] transition-all duration-700 hover-stagger-pad ">
            <motion.h2 variants={cardVariants} className="text-white tracking-wide   lg:w-[50%] xl:w-[42%] text-[36px]  xl:text-[36px] font-medium leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
              {beauty.title}
            </motion.h2>
            <motion.p variants={cardVariants} className="text-[16px]  tracking-wider w-[80%] lg:w-[42%] font-normal text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.20)]">
              {beauty.description}
            </motion.p>
            <motion.div variants={cardVariants}>
              <button className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif">
                <span>Discover More</span>
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}  
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center my-10  lg:text-start gap-5`}
        >
          {cart_service.map((item) => (
            <motion.div  variants={cardVariants}
              key={item.id}
              className="flex cursor-pointer hover:scale-110 transition-all duration-400 flex-col lg:flex-row lg:gap-2 lg:items-start items-center w-[90%] mx-auto"
            >
              <i className="text-[55px] lg:text-[35px]">{item.icon}</i>
              <div className="lg:mt-3">
                <h2 className="text-[18px] lg:text-[16px] tracking-wide mb-1 font-semibold text-dark">
                  {item.title}
                </h2>
                <p className="text-[16px] lg:text-[14px] text-sub">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cart;
