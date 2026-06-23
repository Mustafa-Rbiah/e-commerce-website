import { useState} from "react";
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
        setMsg("Product already in cart ✨");
      } else {
        setMsg("Product added to cart ✅");
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
  };
  
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
  };

function Shop (){
    const products = useCartStore((state) => state.allProdducts);
    const [itemView, setItemView] = useState(null);
    const [search, setSearch] = useState("");
    const [insearch, setIserch] = useState("")
    const [status, setStatus] = useState(false);


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
    
    const chageStat = () => {
      setStatus(!status)
    }

    const buttonSearch = () =>{
      setIserch(search);
      
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
    
    
     
    const filteredProducts = products
      .filter((item) => item.category.toLowerCase().includes(insearch.toLowerCase()) || item.name.toLowerCase().includes(insearch.toLowerCase()))
      .sort((a, b) => {
        if (status) {
          return a.price - b.price; 
        }
        return  b.price - a.price;
      });
    
    



    return(
        <div  className="relative w-[98%] xl:w-[80%] items-start mx-auto font-serif flex flex-col ">
           {/* presentation */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full flex items-center justify-center h-[200px] md:h-[300px] overflow-hidden bg-black rounded-[12px] shadow-2xl">
             <motion.img variants={cardVariants}
               className="absolute object-cover w-full h-full opacity-70"
               src="/assets/Hero/revslider_3.jpg"
               alt="Cart Hero"
             />
             <motion.h2 variants={cardVariants} className="text-3xl text-shadow-2xl font-bold tracking-wider z-11 text-white xl:pb-8">
             Shop
             </motion.h2>
          </motion.div>
            {/* Search Input and Button */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="w-full flex flex-col gap-3 md:flex-row md:items-center md:justify-between mt-28 mb-2">
              <motion.div variants={cardVariants} className="flex flex-wrap w-full  md:w-auto items-center gap-2">
                
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-fit ml-6 md:ml-0  md:w-64 px-4 py-2 border border-gray-300 focus:border-gold rounded-lg shadow-sm focus:outline-none bg-white text-gray-800 placeholder:text-gray-400 transition"
                />
                <button
                  onClick={buttonSearch}
                  className="px-4 py-2    bg-gold text-white tracking-wider font-semibold rounded-lg hover:bg-yellow-600 transition-colors shadow-sm active:scale-95"
                >
                  Search
                </button>
                <button
                  onClick={() => {
                    setIserch("");
                    setSearch("");
                  }}
                  className="px-4 py-2  ml-6 md:ml-0 bg-dark text-white tracking-wider font-semibold rounded-lg hover:bg-yellow-600 transition-colors shadow-sm active:scale-95"
                >
                  Reset Search
                </button>
           
              </motion.div>
              
              {/* Price Sort Button */}
              <motion.button variants={cardVariants}  onClick={chageStat}
                className="mt-2  ml-6 md:ml-0 md:mt-0 flex items-center w-fit text-nowrap  gap-1 px-4 py-2 border border-gold bg-white rounded-lg shadow-sm font-medium text-gold hover:bg-gold hover:text-white transition-colors">
                <span className="hidden md:inline tracking-wide">Sort by</span>
                <span>Price:</span>
                <span className="font-semibold"> {status ? 'High to Low' : 'Low to High'} </span>
                <i
                  className={`ml-1 ri-arrow-${status ? 'down' : 'up'}-s-line text-gold group-hover:text-white text-lg transition`}
                ></i>
              </motion.button>
            </motion.div>

      
            {/*  cart product */}
            
            <motion.div
              variants={containerVariants}
              key={JSON.stringify(filteredProducts.map(item => item.id))}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-[30px] mt-5"
            >
       
             {filteredProducts.map((item) => (
            <div variants={cardVariants}
              key={item.id}
              className="ProPrent flex flex-col items-center gap-3"
            >
              <motion.div variants={cardVariants} className="relative max-h-[250px] border border-gold rounded-2xl hover:shadow-2xl transition-all duration-350 max-w-[250px] overflow-hidden flex items-center justify-center">
                <img
                  className="w-full hover:scale-85 transition-all duration-350 scale-70 max-w-[250px]"
                  src={item.image}
                  alt={item.name}
                />

                {/* icon favorite and view */}
                <div className="favoChild transition-all duration-350  absolute  flex flex-col gap-3 text-[20px] top-[5%] right-[-50px] ">
                  <FavoriteCart itemfavorite={item} style="icon" />
                  <i
                    onClick={() => setItemView(item)}
                    className="hover:bg-gold hover:cursor-pointer hover:text-amber-50 border transition-all border-gold py-1 px-2 rounded-[8px] ri-eye-line"
                  ></i>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="relative overflow-hidden pb-10 flex flex-col items-center justify-center">
                <h2 className="text-nmenu uppercase font-semibold tracking-widest text-[16px]">
                  {item.category}
                </h2>
                <p className="text-[16px] text-center tracking-wider font-semibold">
                  {item.name}
                </p>

                <div className=" flex flex-wrap  items-center justify-center text[14px]">
                  {getStars(item.rating).map((star, i) => (
                    <span key={i} className="text-amber-500 text-xl">
                      {star === "full" && "★"}
                      {star === "half" && "⯨"}
                      {star === "empty" && "☆"}
                    </span>
                  ))}
                  <span className="ml-2"> ({item.reviews} Reviews)</span>
                </div>
                <p className="text-[16px] text-dark font-extrabold tracking-wide">
                  {item.price} $
                </p>
                <div className="absolute transition-all duration-350 pordButton  bottom-[-80px]">
                  <ProductCard product={item} pres="button" />
                </div>
              </motion.div>
            </div>
              ))}
            </motion.div>
            

           {/*  view details product */}
            {itemView ? (
          <div className="w-full h-full bg-[#22201db5] flex justify-center items-center fixed left-0 top-0 z-30 bg-opacity-70">
            <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col md:flex-row w-[97%] md:w-[95%] gap-6 max-w-3xl mx-auto relative">
              <button
                className="absolute overflow-hidden top-4 cursor-pointer right-4 text-dark hover:text-red-600 text-2xl z-10"
                onClick={() => setItemView("")}
                aria-label="Close"
              >
                {" "}
                &times;
              </button>
              <img
                className="w-60 h-60 hover:scale-110 transition-all rounded-lg object-contain bg-gray-50"
                src={itemView.image}
                alt={itemView.name}
              />
              <div className="flex flex-col gap-3 justify-center">
                <h1 className="text-xl font-bold text-gold tracking-wider uppercase">
                  {itemView.name}
                </h1>
                <div className="flex flex-wrap items-center gap-1 text-[20px]">
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
                </div>
                <h2 className="text-lg font-semibold tracking-wider text-dark">
                  {itemView.price} $
                </h2>
                <p className=" border-b pb-4 border-nmenu tracking-wider text-[16px] text-gray-700">
                  {itemView.description}
                </p>
                <div className="flex flex-row flex-wrap justify-start gap-4 mt-6 whitespace-nowrap">
                  
                  <ProductCard product={itemView} amount={itemView.quantity} />
                  <FavoriteCart itemfavorite={itemView} style="button" />
                </div>
                <div>
                  <p
                    className={`font-normal text-nmenu text-[15px] tracking-wide `}
                  >
                    SKU:{" "}
                    <span className="text-dark tracking-wider">
                      {" "}
                      {itemView.SKU}{" "}
                    </span>
                  </p>
                  <p
                    className={`font-normal text-nmenu text-[15px] tracking-wide `}
                  >
                    Category:{" "}
                    <span className="text-dark tracking-wider">
                      {" "}
                      {itemView.category}{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
              ) : null}

        </div>
    )

}

export default Shop;