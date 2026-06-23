import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCartStore } from "../Store/useCartStore";
import { useCartFavorite } from "../Store/useCartStore";


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
}

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

const catChose = [
  {
    id: 1,
    category: "Rings",
    image: "/assets/Hero/About/cat_1.jpg",
    path: "#",
  },
  {
    id: 2,
    category: "Bracelets",
    image: "/assets/Hero/About/cat_2.jpg",
    path: "#",
  },
  {
    id: 3,
    category: "Earrings",
    image: "/assets/Hero/About/cat_3.jpg",
    path: "#",
  },
  {
    id: 4,
    category: "Gold Buckle",
    image: "/assets/Hero/About/cat_4.jpg",
    path: "#",
  },
  {
    id: 5,
    category: "Chockers",
    image: "/assets/Hero/About/cat_5.jpg",
    path: "#",
  },
  {
    id: 6,
    category: "Cufflinks",
    image: "/assets/Hero/About/cat_6.jpg",
    path: "#",
  },
  {
    id: 7,
    category: "Necklaces",
    image: "/assets/Hero/About/cat_7.jpg",
    path: "#",
  },
  {
    id: 8,
    category: "Gold Bangles",
    image: "/assets/Hero/About/cat_8.jpg",
    path: "#",
  },
];

function CatSlider() {
  const [width, setWidth] = useState(0);
  const caroseRef = useRef();
  useEffect(() => {
    setWidth(caroseRef.current.scrollWidth - caroseRef.current.offsetWidth);
  }, []);

  return (
    <div className="w-[98%] xl:w-[80%] mx-auto overflow-hidden cursor-pointer active:cursor-grab my-7 md:mt-1 xl:mt-10">
      <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}
        ref={caroseRef}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className=" flex items-center gap-10 md:gap-2 lg:gap-5 xl:gap-18"
      >
        {catChose.map((item) => (
          <motion.li 
            key={item.id}
            onClick={() => (window.location.href = item.path)}
            className="flex flex-col flex-none group text-center gap-3"
          >
            <motion.div  variants={cardVariants} className="relative flex items-center justify-center rounded-2xl max-w-[183px] max-h-[182px] overflow-hidden bg-gray-100">
              <img
                className="pointer-events-none object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.category}
              />
            </motion.div>
            <motion.p  variants={cardVariants} className="text-[18px] tracking-wider font-medium group-hover:text-gold transition-colors duration-500">
              {item.category}
            </motion.p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const [itemView, setItemView] = useState(null);
  const[lView, setLview] = useState(null);

  const action = useNavigate();

  const products = useCartStore((state) => state.allProdducts);

  const slides = [
    {
      id: 1,
      image: "/assets/Hero/revslider_1.jpg",
      title: "Spring Forward Styles",
      subtitle: "Get lifted with the 21 Day Facial Gua Sha Challenge!",
      path: "/ShopA",
    },
    {
      id: 2,
      image: "/assets/Hero/revslider_2.jpg",
      title: "Luxury Diamonds",
      subtitle: "Exclusive collection for your special moments.",
      path: "/ShopB",
    },
    {
      id: 3,
      image: "/assets/Hero/revslider_3.jpg",
      title: "Elegant Necklaces",
      subtitle: "Exclusive collection for your special moments.",
      path: "/ShopC",
    },
  ];

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

  const touch_cart = [
    {
      id: 1,
      title: "One-Of-A-Kinds",
      sub: "Featuring unique and hand-sourced gemstones from all over the world.",
      path: "page#",
      image: "/assets/Hero/Touch/banner_1.jpg",
    },
    {
      id: 2,
      title: "High Tide Looks",
      sub: "Featuring unique and hand-sourced gemstones from all over the world.",
      path: "page#",
      image: "/assets/Hero/Touch/banner_2.jpg",
    },
    {
      id: 3,
      title: "New Organic Dôme",
      sub: "From solid gold staples to diamond jewelry, browse our most-loved pieces.",
      path: "page#",
      image: "/assets/Hero/Touch/banner_3.jpg",
    },
  ];

  const forward = {
    title: "Spring Forward Styles",
    description: "Refresh your collection with our latest arrivals.",
    image: "/assets/Hero/Touch/h5-banner2.jpg",
    path: "page#",
  };
  const founder = {
    title: "About Our Founder",
    description:
      "Olight commitment to innovation, quality, and detail has taken her small start-up to a billion-dollar business - giving back over $65M along the way.",
    image: "/assets/Hero/Touch/h5-banner3.jpg",
    path: "page#",
  };
  const unique = {
    title: "True Unique Shine Bright",
    description:
      "Together, we made a difference. Read our 2025 Philanthropy Impact Report.",
    image: "/assets/Hero/Touch/h5-banner4.jpg",
    path: "page#",
  };
  const clients_Say = [
    {
      id: 1,
      desc: "Montluc claims to offer the finest diamond jewellery you can buy direct from the maker. I did my research, compared specifications with some of the big brands, and now I will never walk into a store again.",
      image: "/assets/Hero/poeple_say/avatar-1.jpg",
      name: "Alex Rony",
      sub: "Alexandra Jerselius",
    },
    {
      id: 2,
      desc: "Montluc claim to offer the finest diamond jewellery you can buy direct from the maker. I did my research, compared specifications with some of the big brands and now I will never walk into a store again",
      image: "/assets/Hero/poeple_say/avatar-2.jpg",
      name: "Alex Rony",
      sub: "Alexandra Jerselius",
    },
    {
      id: 3,
      desc: "Montluc claim to offer the finest diamond jewellery you can buy direct from the maker. I did my research, compared specifications with some of the big brands and now I will never walk into a store again",
      image: "/assets/Hero/poeple_say/avatar-3.jpg",
      name: "Alex Rony",
      sub: "Alexandra Jerselius",
    },
    {
      id: 4,
      desc: "Montluc claim to offer the finest diamond jewellery you can buy direct from the maker. I did my research, compared specifications with some of the big brands and now I will never walk into a store again",
      image: "/assets/Hero/poeple_say/avatar-4.jpg",
      name: "Alex Rony",
      sub: "Alexandra Jerselius",
    },
  ];
  const blog_section = [
    {id:1, sub:"EARRINGS - APRIL 16, 2025", title:"From Classic to Modern: Our Top Picks", 
    desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it's the perfect time to explore", 
    img:"/assets/Hero/blog/blog_1.jpg",
    path:"page#"},
    {id:2, sub:"EARRINGS - APRIL 16, 2025", title:"From Classic to Modern: Our Top Picks", 
    desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it's the perfect time to explore", 
    img:"/assets/Hero/blog/blog_2.jpg",
    path:"page#"},
    {id:3, sub:"EARRINGS - APRIL 16, 2025", title:"From Classic to Modern: Our Top Picks", 
    desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it's the perfect time to explore", 
    img:"/assets/Hero/blog/blog_3.jpg",
    path:"page#"},
    {id:4, sub:"EARRINGS - APRIL 16, 2025", title:"From Classic to Modern: Our Top Picks", 
    desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it's the perfect time to explore", 
    img:"/assets/Hero/blog/blog_4.jpg",
    path:"page#"},
  ]

  const gallery = [
    {id:1, img:"/assets/Hero/gallery/gallery-1.jpg"},
    {id:2, img:"/assets/Hero/gallery/gallery-2.jpg"},
    {id:3, img:"/assets/Hero/gallery/gallery-3.jpg"},
    {id:4, img:"/assets/Hero/gallery/gallery-4.jpg"},
    {id:5, img:"/assets/Hero/gallery/gallery-5.jpg"},
    {id:6, img:"/assets/Hero/gallery/gallery-6.jpg"}
  ]

  /* Category section*/
  const aboutsection = {
    subtitle: "Olight Collection",
    title: (
      <>
        Discover Your Signature <br /> Sparkle with New <br/> Collection
      </>
    ),
    description:  (
      <>
       Exceptional Handcrafted Design to Enhance The Magnificent <br/> Glow
      </>
    ),
    image: "/assets/Hero/About/imA.jpg",
    path: "page#",
  };

  const beauty = {
    title:   (
      <>
      The beauty of the world <br/> at your fingertips.
      </>
    ),
    description: "Refresh your collection with our latest arrivals.",
    image: "/assets/Hero/bearty_1.jpg",
    path: "page#",
  };

  const increase = (id) => {
    setItemView((prev) =>
      prev && prev.id === id ? { ...prev, quantity: prev.quantity + 1 } : prev,
    );
  };

  const decrease = (id) => {
    setItemView((prev) =>
      prev && prev.id === id
        ? { ...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }
        : prev,
    );
  };

  const addLview = (item) => {
    setLview(item);
  }



  {
    /* hero */
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((img) => (img + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);




  const imageNext = () => {
    setLview((current) => {
      if (!current) return null;
      const currentIndex = gallery.findIndex((item) => item.id === current.id);
      const nextIndex = (currentIndex + 1) % gallery.length;
      return gallery[nextIndex];
    });
  };

  const imageOld = () => {
    setLview((current) => {
      if (!current) return null;
      const currentIndex = gallery.findIndex((item) => item.id === current.id);
      const prevIndex =
        (currentIndex - 1 + gallery.length) % gallery.length;
      return gallery[prevIndex];
    });
  };



  {
    /* section 2 */
  }
  const categoryData = [
    {
      id: 1,
      title: (
        <>
          Best Friend <br /> Jewelry
        </>
      ),
 
      subtitle:(
        <>
          A wide range of exquisite  <br /> earrings
        </>
      ),
      category: "LUXURY NECKLACE",
      image: "/assets/Hero/hero2.jpg",
    },
    {
      id: 2,
      title: (
        <>
          Premium  <br /> Stud Earrings
        </>
      ),
      subtitle:(
        <>
          Exquisite designs for every <br /> occasion
        </>
      ), 
      category: "DIAMOND RINGS",
      image: "/assets/Hero/hero1.jpg",
    },
  ];

  {
    /*section Products nav proucts*/
  }
  const [categoryProducts, setCate] = useState([
    { id: 1, name: "rings", active: true },
    { id: 2, name: "bracelets", active: false },
    { id: 3, name: "pendents", active: false },
    { id: 4, name: "earrings", active: false },
    { id: 5, name: "Necklaces", active: false },
  ]);

  const status = (id) => {
    setCate(
      categoryProducts.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false },
      ),
    );
  };

  const activeCategory = categoryProducts.find((cat) => cat.active);

  /* cart products */

  const ProductFilter = activeCategory
    ? products.filter(
        (item) =>
          item.category.toLowerCase() === activeCategory.name.toLowerCase(),
      )
    : products;

  /*timeless*/

  const timeless = [
    ...new Map(products.map((item) => [item.category, item])).values(),
  ].slice(0, 7);

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const [autoscrol] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [Blog] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [galleryslider] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

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

  /*   deialts
   */
  const cart = useCartStore((state) => state.cart);

  const viewProducts = (id) => {
    let product = null;
    if (Array.isArray(ProductFilter) && ProductFilter.length > 0) {
      product = ProductFilter.find((item) => item.id === id);
    }
    if (!product) {
      product = products.find((item) => item.id === id);
    }
    if (!product) return;
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setItemView({ ...product, quantity: itemInCart.quantity });
    } else {
      setItemView(product);
    }
  };



  return (
    <div className="relative flex flex-col gap-4 items-center font-serif justify-center ">
      {/* hero */}
      <motion.div variants={containerVariants }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
       className="w-[98%] xl:w-[80%] h-[600px] xl:h-full   overflow-hidden mx-auto md:rounded-2xl">
        <motion.div variants={cardVariants} className="relative w-full aspect-[15/7] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 h-[600px] w-full md:h-full xl:h-full"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
                style={{
                  backgroundImage: `url(${slides[index].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-[600px] xl:w-full xl:h-full "
              />
              <div
                onClick={() => {
                  if (slides[index].path) {
                    action(slides[index].path);
                  }
                }}
                className="absolute inset-0 flex flex-col h-[600px] xl:h-full justify-center px-4 xl:px-24 md:px-8 text-white z-10"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(88, 55, 29) 0%, rgba(139, 119, 103, 0) 40%, rgba(215, 215, 215, 0) 100%)",
                }}
              >
                <motion.h4
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-gold font-serif tracking-widest mb-6 uppercase"
                >
                  Luxury Necklace
                </motion.h4>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-3xl uppercase font-medium md:text-6xl font-serif mb-3 max-w-xl leading-tight"
                >
                  {slides[index].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-base md:text-xl tracking-wider mb-8 "
                >
                  {slides[index].subtitle}
                </motion.p>

                <div className="relative group">
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="pointer-events-auto w-fit hover:cursor-pointer border border-white transition-all duration-400 px-8 py-3 pt-4 rounded-[8px] uppercase font-bold tracking-widest hover:border-menu hover:bg-menu overflow-hidden relative"
                    onClick={() => {
                      if (slides[index].path) {
                        action(slides[index].path);
                   
                      }
                    }}
                  >
                    <span className="relative z-10">Shop Now</span>
                    <span
                      className="
                        absolute inset-0 bg-menu
                        -translate-x-full
                        group-hover:translate-x-0
                        transition-transform duration-300
                        z-0
                      "
                    ></span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-143 xl:top-170  left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-500 ${
                  i === index ? "bg-gold w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* section 2 */}
      <motion.div variants={containerVariants } initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} 
      className={` w-[98%] xl:w-[80%] mx-auto flex flex-col gap-4 md:flex-row items-start justify-center`}>

        {categoryData.map((item) => (
          <motion.div variants={cardVariants} key={item.id} className="w-full overflow-hidden rounded-[8px] shadow-lg group cursor-pointer" >
            <motion.div variants={cardVariants} className="relative flex items-center overflow-hidden min-h-[350px] md:max-h-[350px]">
              <div  className="absolute inset-0 z-0 transition-transform duration-400 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image}`, backgroundSize: "cover", backgroundPosition: "center", }} />

              <motion.div variants={cardVariants} className="relative z-10 flex justify-center pl-6 w-full h-full flex-col min-h-[350px] md:max-h-[350px] gap-5 md:gap-6 xl:gap-5 font-serif text-start   xl:px-14 hover-stagger-pad">
                
                <p className="font-serif text-sub uppercase tracking-wide text-[13px] md:text-[16px] font-bold t">{item.category}</p>

                <h1 className="font-serif tracking-wide text-dark text-[36px] md:text-[30px] font-semibold w-[270px] group-hover:w-[350px] text-nowrap leading-8">{item.title}</h1>

                <p className="font-serif tracking-wide text-dark text-[15px] md:text-[16px]  group-hover:w-[320px] text-nowrap font-normal">{item.subtitle}</p>
                
                <div>
                  <button className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-2 px-5 rounded-[8px] tracking-widest font-medium font-serif">
                    <span>Shop Now</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/*section Products*/}
      <div  className="w-[98%] xl:w-[80%] flex flex-col items-center gap-6 font-serif my-12">
        <motion.h1 variants={cardVariants} className="text-[36px] tracking-wider font-semibold text-dark">
          Featured Products
        </motion.h1>

        {/*nav bar*/}

        <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-wrap items-center w-[80%] md:w-full justify-center gap-5 uppercase text-[15px] font-semibold tracking-wider ">
          {categoryProducts.map((item) => (
            <motion.li variants={cardVariants}
              key={item.id}
              onClick={() => status(item.id)}
              className={`transition-all duration-300 cursor-pointer ${item.active ? "text-dark relative pb-1" : "text-nmenu"}`}
            >
              {item.name}
              {item.active && (
                <span className="absolute left-0 bottom-0 h-[2px] bg-menu animate-borderSlide w-full"></span>
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/*cart products*/}

        <motion.div
          key={activeCategory ? activeCategory.id : "all"}
          variants={containerVariants}
          initial="hidden"  whileInView="visible" viewport={{once:true, amount:0.01}}
     
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-[30px] mt-5"
        >
   
          {ProductFilter.map((item) => (
            <motion.div  variants={cardVariants}
              key={item.id}
              className="ProPrent flex flex-col items-center gap-3"
            >
              <div className="relative max-h-[250px] border border-gold rounded-2xl hover:shadow-2xl transition-all duration-350 max-w-[250px] overflow-hidden flex items-center justify-center">
                <img
                  className="w-full hover:scale-85 transition-all duration-350 scale-70 max-w-[250px]"
                  src={item.image}
                  alt={item.name}
                />

                {/* icon favorite and view */}
                <div className="favoChild transition-all duration-350  absolute  flex flex-col gap-3 text-[20px] top-[5%] right-[-50px] ">
                  <FavoriteCart itemfavorite={item} style="icon" />
                  <i
                    onClick={() => viewProducts(item.id)}
                    className="hover:bg-gold hover:cursor-pointer hover:text-amber-50 border transition-all border-gold py-1 px-2 rounded-[8px] ri-eye-line"
                  ></i>
                </div>
              </div>

              <div className="relative overflow-hidden pb-10 flex flex-col items-center justify-center">
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* view products */}

        {itemView ? (
          <div   className="w-full h-full bg-[#22201db5] flex justify-center items-center fixed left-0 top-0 z-30 bg-opacity-70">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="bg-white rounded-xl shadow-2xl p-6 flex flex-col md:flex-row w-[97%] md:w-[95%] gap-6 max-w-3xl mx-auto relative">
              <motion.button variants={cardVariants}
                className="absolute overflow-hidden top-4 cursor-pointer right-4 text-dark hover:text-red-600 text-2xl z-10"
                onClick={() => setItemView("")}
                aria-label="Close"
              >
                {" "}
                &times;
              </motion.button>
              <motion.img variants={cardVariants}
                className="w-60 h-60 hover:scale-110 transition-all rounded-lg object-contain bg-gray-50"
                src={itemView.image}
                alt={itemView.name}
              />
              <div  className="flex flex-col gap-3 justify-center">
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
                <motion.p variants={cardVariants} className=" border-b pb-4 border-nmenu tracking-wider text-[16px] text-gray-700">
                  {itemView.description}
                </motion.p>
                <motion.div variants={cardVariants} className="flex flex-row flex-wrap justify-start gap-4 mt-6 whitespace-nowrap">
                  <div className="flex items-center  w-fit py-3 px-3 transition-all duration-300 ease-in-out hover:bg-[#e7e6e3] hover:shadow-lg justify-center gap-5 text-[15px] bg-[#F4F3F1] rounded-[8px]">
                    <button
                      className="cursor-pointer"
                      onClick={() => decrease(itemView.id)}
                    >
                      −
                    </button>
                    <h2 className=" text-dark"> {itemView.quantity} </h2>
                    <button
                      className=" cursor-pointer"
                      onClick={() => increase(itemView.id)}
                    >
                      +
                    </button>
                  </div>
                  <ProductCard product={itemView} amount={itemView.quantity} />
                  <FavoriteCart itemfavorite={itemView} style="button" />
                </motion.div>
                <motion.div variants={cardVariants}>
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>

      {/* Category section */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative  rounded-2xl h-[500px] md:h-[600px] overflow-hidden w-[98%] xl:w-[80%] flex flex-col bg-dark justify-center font-serif md:mt-12 group">
          <motion.img variants={cardVariants} className="absolute w-full h-full inset-0  object-cover object-center group-hover:scale-110   group-hover:opacity-65 transition-all duration-700"
          src={aboutsection.image} alt={aboutsection.title} />
        <div className="flex flex-col gap-2 w-full  pl-6 md:pl-20 justify-center h-[500px] md:h-[840px] transition-all duration-700 hover-stagger-pad">
  
          <motion.h4 variants={cardVariants} className="text-white font-serif uppercase font-bold tracking-wide text-[12px]">{aboutsection.subtitle}</motion.h4>
          <motion.h2 variants={cardVariants} className="text-white tracking-wide text-[36px] md:text-[48px] font-medium mb-4 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">{aboutsection.title} </motion.h2>
          <motion.p variants={cardVariants} className="text-[16px]  tracking-wider  font-normal text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.20)]">{aboutsection.description}</motion.p>
          <div>
            <motion.button variants={cardVariants}
              className="btn-slide mt-8 hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif"
              onClick={() => {
                if (aboutsection.path) {
                  action(aboutsection.path);
                }
              }}
            >
              <span>Shop Now</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      <CatSlider />

      {/* timeless */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.4}}  className="w-[98%] xl:w-[80%] flex flex-col items-center justify-center gap-3 md:my-12 font-serif">
        <motion.h2 variants={cardVariants} className="text-[32px] md:text-[36px] tracking-wide font-medium text-center">
          Timeless, Classic and Elegant
        </motion.h2>
        <motion.p variants={cardVariants} className="text-dark text-[14px] md:text-[16px] tracking-wider text-center px-4">
          Select various items that harmoniously complement one another,
          allowing you to craft a complete and cohesive style.
        </motion.p>

        <div
          className="w-full mx-auto overflow-hidden mt-8 cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex -ml-6 md:-ml-6 lg:ml-3 xl:ml-0">
            {timeless.map((item) => (
              <div
                key={item.id}
                className="flex-none pl-6  lg:ml-13 xl:pl-10 xl:ml-15 2xl:ml-4 w-[200px] md:w-[255px] lg:w-[200px] xl:w-[200px] 2xl:w-[288px]"
              >
                <div className="ProPrent flex flex-col items-center gap-2 w-full">
                  <motion.div variants={cardVariants} className="relative h-[180px] md:h-[200px] lg:h-[220px] lg:w-[220px] xl:h-[220px] xl:w-[220px] 2xl:h-[280px] 2xl:w-[280px] w-full border border-gold rounded-2xl hover:shadow-2xl transition-all duration-350 overflow-hidden flex items-center justify-center bg-white">
                    <img
                      className="w-full hover:scale-85 transition-all duration-350 scale-70 pointer-events-none"
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="favoChild transition-all duration-350 absolute flex flex-col gap-3 text-[20px] top-[5%] right-[-50px]">
                      <FavoriteCart itemfavorite={item} style="icon" />
                      <i
                        onClick={() => viewProducts(item.id)}
                        className="hover:bg-gold hover:cursor-pointer hover:text-amber-50 border transition-all border-gold py-1 px-2 rounded-[8px] ri-eye-line"
                      ></i>
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="relative overflow-hidden pb-10 flex flex-col items-center justify-center w-full">
                    <h2 className="text-nmenu uppercase font-semibold tracking-widest text-[13px]">
                      {item.category}
                    </h2>
                    <p className="text-[15px] text-center tracking-wider font-semibold line-clamp-1 h-6">
                      {item.name}
                    </p>

                    <div className="flex items-center justify-center text-[14px]">
                      {getStars(item.rating).map((star, i) => (
                        <span key={i} className="text-amber-500 text-lg">
                          {star === "full" && "★"}
                          {star === "half" && "⯨"}
                          {star === "empty" && "☆"}
                        </span>
                      ))}
                    </div>

                    <p className="text-[16px] text-dark font-extrabold tracking-wide">
                      {item.price} $
                    </p>

                    <div className="absolute transition-all duration-350 pordButton bottom-[-80px]">
                      <ProductCard product={item} amount={1} />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* beauty of the world */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className=" w-[98%] xl:w-[80%] flex flex-col">
        <motion.div variants={cardVariants} className="relative w-full rounded-2xl h-[380px] md:h-[440px] xl:h-[350px] overflow-hidden flex flex-col justify-center font-serif md:mt-12 group">
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
              <button
                className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif"
                onClick={() => {
                  if (beauty.path) {
                    action(aboutsection.path);
                  }
                }}
              >
                <span>Discover More</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center my-10  lg:text-start gap-5`}
        >
          {cart_service.map((item) => (
            <motion.div variants={cardVariants}
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

      {/* Finishing Touch */}

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.1}} className="w-[98%] xl:w-[80%] flex flex-col items-center gap-12   font-serif my-12">
        <div className="flex flex-col items-center text-center gap-4">
          <motion.h2 variants={cardVariants}  className="text-[36px] font-medium">The Finishing Touch</motion.h2>
          <motion.p variants={cardVariants} className="text-[16px] text-sub leading-5">
            Our collections represent an assemblage of diverse jewelry pieces
            united by a common theme.
          </motion.p>
        </div>
        <div  className="flex flex-col md:flex-row items-center md:gap-4 gap-18 mx-auto">
          {touch_cart.map((item) => (
            <div  key={item.id} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.1}} className="flex flex-col gap-3 group ">
              <motion.div  variants={cardVariants}
                onClick={() => action(item.path)}
                className="relative rounded-[18px] h-[450px] md:h-[370px] lg:h-[450px] overflow-hidden group cursor-pointer"
              >
         
                <motion.img variants={cardVariants}
                  className="w-full h-full group-hover:scale-120 transition-all duration-500 "
                  src={item.image}
                  alt={item.title}
                />
                <img
                  className="absolute left-1/2 -translate-x-1/2 -bottom- opacity-20"
                  style={{ bottom: "-1px" }}
                  src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/triangle.svg"
                  alt=""
                />
              </motion.div>

              <div className="flex flex-col items-center text-center gap-1 md:gap-5 w-[90%] mx-auto cursor-pointer">
                <motion.h2 variants={cardVariants} className="text-[22px] text-dark font-semibold tracking-wider">
                  {item.title}
                </motion.h2>
                <motion.p variants={cardVariants} className="text-[15px] text-dark tracking-wider">
                  {item.sub}
                </motion.p>
                <motion.button variants={cardVariants}
                  onClick={() => action(item.path)}
                  className="text-[16px] font-semibold cursor-pointer tracking-wide group-hover:text-gold transition-all duration-300 group-hover:scale-125"
                >
                  See More Product
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/*  Forward Styles */}

      <div  className="w-[98%] xl:w-[80%] flex flex-col items-center gap-7   font-serif my-12">

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full rounded-2xl h-[380px] md:h-[300px] xl:h-[350px] overflow-hidden flex flex-col justify-center font-serif  group">
          <motion.img variants={cardVariants}
            className="absolute w-full h-full inset-0  object-cover object-center group-hover:scale-110 hover:scale-115 transition-all duration-700"
            src={forward.image}
          />
          <div className="relative flex flex-col  gap-3 md:gap-5 items-end justify-center  pl-6 md:pl-10 xl:gap-4 min-h-[640px] w-full  ">
            <motion.div variants={cardVariants} className="lg:w-[50%] xl:w-[42%] flex flex-col gap-3  transition-all duration-700 hover-stagger-pad">
              <motion.h2 variants={cardVariants} className="text-darck tracking-wide   text-[36px]  xl:text-[36px] font-medium leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                {forward.title}
              </motion.h2>
              <motion.p variants={cardVariants} className="text-[16px]  tracking-wider  font-normal text-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.20)]">
                {forward.description}
              </motion.p>
              <motion.div variants={cardVariants}>
                <button
                  className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif"
                  onClick={() => {
                    if (forward.path) {
                      action(forward.path);
                    }
                  }}
                >
                  <span>Shop Now</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full rounded-2xl h-[380px] md:h-[300px] xl:h-[350px] overflow-hidden flex flex-col justify-center font-serif  group">
          <motion.img variants={cardVariants}
            className="absolute w-full h-full inset-0  object-cover object-center group-hover:scale-125 scale-115 transition-all duration-700"
            src={founder.image}
          />
          <div className="relative flex flex-col  gap-3 md:gap-5 items-start text-center  justify-center w-[90%] mx-auto  md:pl-10 xl:gap-4 min-h-[640px] md:w-full ">
            <motion.div variants={cardVariants} className="lg:w-[50%] md:w-[50%] xl:w-[42%] flex flex-col gap-3  transition-all duration-700 ">
              <h2 className="text-white tracking-wide   text-[36px]  xl:text-[36px] font-medium leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                {founder.title}
              </h2>
              <p className="text-[16px]  tracking-wider  font-normal text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.20)]">
                {founder.description}
              </p>
              <div>
                <button
                  className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif"
                  onClick={() => {
                    if (forward.path) {
                      action(founder.path);
                    }
                  }}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full rounded-2xl h-[380px] md:h-[300px] xl:h-[300px] overflow-hidden flex flex-col justify-center font-serif  group">
          <motion.img variants={cardVariants}
            className="absolute w-full h-full inset-0  object-cover object-center group-hover:scale-110 hover:scale-115 transition-all duration-700"
            src={unique.image}
          />
          <div className="relative flex flex-col  gap-3 md:gap-5 items-center text-center  justify-center   md:pl-10 xl:gap-4 min-h-[640px] w-full  ">
            <motion.div variants={cardVariants} className="lg:w-[50%] xl:w-[42%] flex flex-col gap-5   transition-all duration-700 ">
              <h2 className="text-black tracking-wide   text-[36px]  xl:text-[36px] font-medium leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                {unique.title}
              </h2>
              <p className="text-[16px]  tracking-wider  font-normal text-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.20)]">
                {unique.description}
              </p>
              <div>
                <button
                  className="btn-slide hover:cursor-pointer w-fit bg-light text-black py-3 px-5 rounded-[8px] tracking-widest font-medium font-serif"
                  onClick={() => {
                    if (forward.path) {
                      action(unique.path);
                    }
                  }}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/*  Clients Say */}

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-col w-full items-center justify-center my-24  mx-auto text-center gap-10">
          <motion.div variants={cardVariants}>
            <motion.h2 variants={cardVariants} className="text-[36px] font-semibold">What Our Clients Say</motion.h2>
            <motion.p variants={cardVariants} className="text-[15px] text-sub">Adorn Yourself in Glamour: Find Your Perfect Piece Today</motion.p>
          </motion.div>
          <div className="w-[98%] md:w-[70%] lg:w-[50%] mx-auto overflow-hidden mt-8 cursor-grab active:cursor-grabbing" ref={autoscrol}>
            <div className="flex">
              {clients_Say.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] min-w-0 px-4 "
                >
                  <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-8 my-5 gap-4 shadow-lg mx-auto">
                    <p className="italic text-lg">
                    {item.desc}
                  </p>
                  <div className="flex flex-col items-center ">
                    <img
                      className="w-[70px] h-[70px] rounded-full object-cover mb-2 border-2 border-gold shadow"
                      src={item.image}
                      alt={item.name}
                    />
                    <h2 className="font-semibold text-black mt-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.sub}</p>
                  </div>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

         {/*  blog */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-col w-full items-center justify-center mb-24 mx-auto text-center gap-10">
        <div className=" flex flex-col gap-4 text-center">
            <motion.h2 variants={cardVariants} className="text-[36px] font-semibold tracking-wide ">Our Latest Blog</motion.h2>
            <motion.p variants={cardVariants} className="text-[15px] text-sub tracking-wider">Adorn Yourself in Glamour: Find Your Perfect Piece Today</motion.p>
          </div>
          <div className="w-full overflow-hidden  cursor-pointer " ref={Blog} >
            <div className="flex mr-5">
              {blog_section.map((item) => (
                <motion.div variants={cardVariants} key={item.id} className=" flex flex-col items-center justify-center ml-5 group">
                <div className="min-w-[245px] md:w-[360px] lg:w-[310px] 2xl:w-[380px]  rounded-xl overflow-hidden">
                  <img className="w-fit h-fit object-cover group-hover:scale-110 transition-all duration-300 " src={item.img} alt={item.sub} />
                </div>
           
                <div className="flex flex-col gap-3  w-fit px-6 ">
                  <motion.p variants={cardVariants} className="text-[12px] text-sub tracking-wider">{item.sub}</motion.p>
                  <motion.h2 variants={cardVariants} className="text-dark text-[22px] line-clamp-2 tracking-wide">{item.title}</motion.h2>
                  <motion.p variants={cardVariants} className="line-clamp-3 text-[15px] text-sub tracking-wider">{item.desc}</motion.p>
                </div>
                <motion.button variants={cardVariants} onClick={() => action(item.path)} 
                  className="text-dark text-[14px] font-semibold group-hover:scale-110 group-hover:text-gold group-hover:tracking-widest transition-all duration-300 ">Raed More</motion.button>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

        {/*  Subscribe */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-col w-full items-center justify-center mb-24 mx-auto text-center gap-10">
          <div className=" flex flex-col gap-4 text-center md:w-[80%] lg:w-[50%]">
            <motion.h2 variants={cardVariants} className="text-[36px] font-semibold tracking-wide ">Subscribe to Our Newsletter</motion.h2>
            <motion.p variants={cardVariants} className="text-[15px] text-sub tracking-wider">Sign up to our newsletter for information on sales, delightful content and new additions to the collection.</motion.p>
          </div>
          <motion.form variants={cardVariants} action="" className="flex flex-col md:flex-row md:justify- md:w-fit  gap-5 w-[80%]">
            <div className="flex flex-wrap md:flex-col gap-5 md:gap-2">
              <input className="py-[15px] w-xs px-[20px] bg-[#f4f3f1] outline-0 rounded-[8px] focus:shadow-xl" type="email" placeholder="Enter your email..." />
              <label className="flex items-center gap-2 text-[14px] text-sub cursor-pointer">
                <input type="checkbox" className="accent-black" required />
                I agree to the Privacy Policy.
              </label>
            </div>
            <div>
              <button className="btn-slide hover:cursor-pointer w-fit bg-black text-white py-[15px] px-[20px] rounded-[8px] tracking-wider font-medium font-serif">
                  <span>Subscribe</span>
                </button>
            </div>

          </motion.form>
        </motion.div>

        {/*  gallery */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="w-full overflow-hidden cursor-pointer" ref={galleryslider}>
          <div className="flex mr-2 md:ml-5" >
            {gallery.map((item) => (
              <motion.div variants={cardVariants} key={item.id} onClick={() => addLview(item)} className=" ml-2">
                <div className="relative w-[187px] md:w-[176px] lg:w-[187px] xl:w-[190px] 2xl:w-[230px] rounded-xl overflow-hidden ">
                  <img className="w-fit object-cover " src={item.img} alt={`gallery`} />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#00000061] z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
             
                    <i className="ri-search-eye-line text-3xl  text-white rounded-full p-2"></i>
                  </div>
                </div>
                
              </motion.div>
         
            ))}
          </div>

        </motion.div>
   
        {/*  gallery  view*/}
        
        <div>
          {lView? (<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="w-full h-full bg-[#22201db5] flex justify-center items-center fixed left-0 top-0 z-30 bg-opacity-70">

            <button
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full py-1 px-2  shadow-lg hover:bg-opacity-100 transition-all"
                onClick={imageOld}
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-fill text-2xl"></i>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full  py-1 px-2 shadow-lg hover:bg-opacity-100 transition-all"
                onClick={imageNext}
                aria-label="Next image"
              >
                <i className="ri-arrow-right-fill text-2xl"></i>
              </button>
            <div className="rounded-xl shadow-2xl w-[98%] md:w-[80%] xl:w-[70%] xl:h-[75%] flex flex-col gap-6 max-w-3xl mx-auto relative overflow-hidden">
              <button
                className="absolute overflow-hidden top-4 cursor-pointer right-4 text-dark hover:text-red-600 text-2xl z-10"
                onClick={() => setLview(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <button
                className="absolute md:hidden left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full py-1 px-2  shadow-lg hover:bg-opacity-100 transition-all"
                onClick={imageOld}
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-fill text-2xl"></i>
              </button>
              <button
                className="absolute md:hidden right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full  py-1 px-2 shadow-lg hover:bg-opacity-100 transition-all"
                onClick={imageNext}
                aria-label="Next image"
              >
                <i className="ri-arrow-right-fill text-2xl"></i>
              </button>
         
              <motion.img variants={cardVariants}
                className="w-full h-full object-cover rounded-lg "
                src={lView.img}
                alt="Gallery"
              />
            </div>
      
          </motion.div>): null}
        </div>
      </div>
    </div>
  );
}
export default Hero;
