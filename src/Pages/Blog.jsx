import { motion } from "framer-motion";
function Blog(){

    const listBlog = [
        {id:1, name:"Accessories", 
         date:"April 16, 2025" ,
         title:"Layering Necklaces Like a Pro", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_1.jpg"
         },
        {id:2, name:"Accessories", 
         date:"April 16, 2025" ,
         title:"Behind the Craft: Handmade Jewelry Love", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_2.jpg"
         },
        {id:3, name:"Earrings", 
         date:"April 16, 2025" ,
         title:"From Classic to Modern: Our Top Picks", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_3.jpg"
         },
        {id:4, name:"Gifts set", 
         date:"April 16, 2025" ,
         title:"Gift Ideas That Sparkle", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_4.jpg"
         },
        {id:5, name:"Necklaces & Pendants", 
         date:"April 16, 2025" ,
         title:"Timeless Pieces for Your Collection", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_5.jpg"
         },
        {id:6, name:"Pearles", 
         date:"April 16, 2025" ,
         title:"Mix and Match: Jewelry Styling Tips", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_6.jpg"
         },
        {id:7, name:"Rings", 
         date:"April 16, 2025" ,
         title:"The Meaning Behind Birthstone Jewelry", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_7.jpg"
         },
        {id:8, name:"Wedding", 
         date:"April 16, 2025" ,
         title:"Jewelry Care Tips You Should Know", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_8.jpg"
         },
        {id:9, name:"Accessories", 
         date:"April 16, 2025" ,
         title:"How to Choose the Perfect Engagement Ring", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_9.jpg"
         },
        {id:10, name:"Diamonds", 
         date:"April 16, 2025" ,
         title:"Why Gold Never Goes Out of Style", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_10.jpg"
         },
        {id:11, name:"Earrings", 
         date:"April 16, 2025" ,
         title:"Top 5 Jewelry Pieces for Every Occasion", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_11.jpg"
         },
        {id:12, name:"Gifts set", 
         date:"April 16, 2025" ,
         title:"Shine Bright with Our New Arrivals", 
         desc:"Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world",
         image:"/assets/Blog/blog_12.jpg"
         },
        ];
        
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
        

    return(
        <div className="relative w-[98%] xl:w-[80%] items-start mx-auto font-serif flex flex-col ">
           {/* presentation */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full flex items-center justify-center h-[200px] md:h-[300px] overflow-hidden bg-black rounded-[12px] shadow-2xl">
             <motion.img variants={cardVariants} className="absolute object-cover w-full h-full opacity-70" src="/assets/Hero/revslider_1.jpg" alt="Cart Hero" />
             <motion.h2 variants={cardVariants} className="text-3xl text-shadow-2xl font-bold tracking-wider z-11 text-white xl:pb-8"> Blog </motion.h2>
          </motion.div>
           {/* cart plog */}
           <div className="mt-22 flex flex-col xl:gap-10 xl:flex-row">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.01}} className="flex flex-col xl:w-[68%]  items-center justify-center gap-12  "> 
                {listBlog.map((item) => (
                    <div key={item.id} className="flex flex-col md:w-[94%] md:flex-row items-center  gap-6 border-b border-[#4b4a4a2b] pb-10  group">
                        <motion.div variants={cardVariants} className="w-[380px] md:w-[480px] h-[220px] md:h-[190px] rounded-[10px] shadow-2xl overflow-hidden">
                            <img
                                className="w-full h-full object-center object-cover cursor-pointer group-hover:scale-115  duration-500"
                                src={item.image}
                                alt={item.title}
                            />
                        </motion.div>
                        <div className=" w-[92%] flex flex-col items-start gap-2 md:gap-3">
                            <motion.div variants={cardVariants} className="w-fit flex items-center cursor-pointer justify-center gap-1 hover:text-gold duration-300 tracking-wider text-[12px] text-sub font-semibold " >
                                <p className="uppercase ">{item.name}</p> - 
                                <p>{item.date}</p>
                            </motion.div>
                            <motion.h2 variants={cardVariants} className="text-[24px] font-medium tracking-wide cursor-pointer leading-6 hover:text-gold duration-300">{item.title}</motion.h2>
                            <motion.p variants={cardVariants} className="text-[15px] tracking-wider text-sub line-clamp-3">{item.desc}</motion.p>
                       
                            <motion.h2 variants={cardVariants} className="text-[14px] font-semibold tracking-wider  border-b hover:text-gold transition-colors duration-300 cursor-pointer">Read More</motion.h2>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.01}} className="flex flex-col xl:w-[30%] gap-6  py-8">
       
                <motion.h2 variants={cardVariants} className="text-[24px] text-dark font-semibold tracking-wide">Recent Posts</motion.h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1  gap-6 ">
                    {listBlog.slice(0, 5).map((item)=>(
                    <div key={item.id} className="flex  gap-3 cursor-pointer">
                        <motion.img variants={cardVariants} className="w-[116px] h-[90px] rounded-[8px]" src={item.image} alt={item.name}/>
                        <div className="flex flex-col w-[220px] md:w-[250px] ">
                            <motion.p variants={cardVariants} className=" tracking-wider text-[12px] text-sub font-semibold  hover:text-gold duration-300">{item.name} - {item.date}</motion.p>
                            <motion.h2 variants={cardVariants} className="text-[16px] font-medium tracking-wide  hover:text-gold duration-300">{item.title}</motion.h2>
                        </div>
                        
                    </div>
                     ))}
                </div>
                
            </motion.div>
       
           </div>

           <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-col w-full items-center justify-center my-24 mx-auto text-center gap-10">
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
                  <motion.span variants={cardVariants}>Subscribe</motion.span>
                </button>
            </div>

          </motion.form>
        </motion.div>

        </div>
    )

}


export default Blog;