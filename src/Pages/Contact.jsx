import { motion } from "framer-motion";
function Contact() {

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


    const contact = {addres:"Conseil Régional du Tourisme de Tanger-Tétouan-Al Hoceima", phone:"+212 612 56 3470", email:"mustafarbiah@gamil.com"}
  return (
    <div className="relative w-[98%] xl:w-[80%] items-start mx-auto font-serif flex flex-col gap-8">
      {/* presentation */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="relative w-full flex items-center justify-center h-[200px] md:h-[300px] overflow-hidden bg-black rounded-[12px] shadow-2xl">
        <motion.img variants={cardVariants}
          className="absolute object-cover w-full h-full opacity-70"
          src="/assets/Hero/revslider_2.jpg"
          alt="Cart Hero"
        />
        <motion.h2 variants={cardVariants} className="text-3xl text-shadow-2xl font-bold tracking-wider z-11 text-white xl:pb-8">
          {" "}
          Contact{" "}
        </motion.h2>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.01}}  className=" w-full flex flex-col items-center justify-center gap-2 my-12">
        <motion.h2 variants={cardVariants} className="text-[36px] font-semibold    tracking-wider">Our Stores</motion.h2>
        <motion.p variants={cardVariants} className="text-[15px] w-[95%] font-medium tracking-wide text-sub text-center  ">We are exactly what you are looking for. Yes, we are an FSSAI certified online cake and Bakery Company <br></br> that specializes in delivering absolutely lip-smacking delicacies.</motion.p>
      </motion.div>

      {/* formation */}

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.01}} className="w-full  flex  flex-col lg:flex-row  items-start justify-center gap-8 my-8 group">
        <motion.div variants={cardVariants} className="relative w-[98%] lg:w-[45%] h-[300px] md:h-[400px] mx-auto  rounded-[12px] overflow-hidden shadow-lg">
          <img
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-800"
            src="/assets/blog_9.jpg"
            alt="Store"
          />
        </motion.div>

        <div className=" w-[98%] md:w-[90%] lg:w-[55%] flex items-center justify-center">
          <div className="flex flex-col gap-4 lg:gap-1 2xl:gap-6">
            <motion.h2 variants={cardVariants} className="text-[26px] font-bold tracking-wide "> Gold Collection – Elegance & Value</motion.h2>
            <motion.p variants={cardVariants} className="text-[18px]  font-serif tracking-wide  leading-6 text-dark">
              Step into a world of elegance with our exclusive gold collection,
              where luxury meets craftsmanship. Our gold pieces are carefully
              selected and designed to reflect sophistication, purity, and
              enduring beauty. Whether you are looking for a statement
              accessory, a meaningful gift, or a smart long-term investment, our
              collection offers something truly special for every taste and
              occasion.<br></br> By choosing our products, you are
              not only enhancing your style but also investing in something that
              holds its value for years to come. Our collection is perfect for
              weddings, celebrations, daily wear, or simply adding a touch of
              luxury to your everyday life.<br></br>  We are committed to providing our
              customers with exceptional service, competitive prices, and a
              seamless shopping experience. Explore our gold collection today
              and discover pieces that combine beauty, value, and timeless
              elegance.
            </motion.p>
          </div>
        </div>
      </motion.div>


     {/*  Get In Touch */}

     <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="w-full flex flex-col items-center justify-center gap-6 my-8">
        <motion.h2 variants={cardVariants} className="text-[36px] font-semibold pb-8 tracking-wider">Get In Touch</motion.h2>
        <div className="w-full flex flex-col lg:flex-row items-center ">
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                <motion.h2 variants={cardVariants} className="text-[22px] font-semibold tracking-wide uppercase  ">Address</motion.h2>
                <div className="flex flex-col gap-2">
                    <motion.h2 variants={cardVariants} className="text-[16px] tracking-wide text-sub ">Location: <span className="text-[18px] text-dark tracking-wide font-medium ">{contact.addres}</span> </motion.h2>
                    <motion.h2 variants={cardVariants} className="text-[16px] tracking-wide text-sub ">Phone: <span  className="text-[18px] text-dark tracking-wide font-medium ">{contact.phone}</span></motion.h2>
                    <motion.h2 variants={cardVariants} className="text-[16px] tracking-wide text-sub ">Email: <span  className="text-[18px] text-dark tracking-wide font-medium ">{contact.email}</span></motion.h2>
                </div>
                
            </div>
            <div className="flex flex-col gap-2">
                <motion.h2 variants={cardVariants} className="text-[22px] tracking-wide font-semibold  uppercase ">Working Hours</motion.h2>
                <motion.p variants={cardVariants} className="text-[16px] tracking-wide text-sub ">Open: 8:00AM – Close: 18:00PM</motion.p>
                <motion.p variants={cardVariants} className="text-[16px] tracking-wide text-sub ">Saturday – Sunday: Close</motion.p>
            </div>  
            </div>
            <motion.div variants={cardVariants} className="w-full flex justify-center items-center my-6">
                <iframe
                  title="Tangier, Morocco Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141621.0751494796!2d-5.859031109802224!3d35.72451674922033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e1!3m2!1sen!2ses!4v1776374608146!5m2!1sen!2ses"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[12px] shadow-lg w-full max-w-xl h-[400px] lg:h-[330px]"
                ></iframe>
            </motion.div>
        </div>
        
   
     </motion.div>

     <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="flex flex-col w-full items-center justify-center my-24 mx-auto text-center gap-10">
          <div className=" flex flex-col gap-4 text-center md:w-[80%] lg:w-[50%]">
            <motion.h2 variants={cardVariants} className="text-[36px] font-semibold tracking-wide ">Subscribe to Our Newsletter</motion.h2>
            <motion.p variants={cardVariants} className="text-[15px] text-sub tracking-wider">Sign up to our newsletter for information on sales, delightful content and new additions to the collection.</motion.p>
          </div>
          <form action="" className="flex flex-col md:flex-row md:justify- md:w-fit  gap-5 w-[80%]">
            <motion.div variants={cardVariants} className="flex flex-wrap md:flex-col gap-5 md:gap-2">
              <input className="py-[15px] w-xs px-[20px] bg-[#f4f3f1] outline-0 rounded-[8px] focus:shadow-xl" type="email" placeholder="Enter your email..." />
              <motion.label variants={cardVariants} className="flex items-center gap-2 text-[14px] text-sub cursor-pointer">
                <input type="checkbox" className="accent-black" required />
                I agree to the Privacy Policy.
              </motion.label>
            </motion.div>
            <div>
              <motion.button variants={cardVariants} className="btn-slide hover:cursor-pointer w-fit bg-black text-white py-[15px] px-[20px] rounded-[8px] tracking-wider font-medium font-serif">
                  <span>Subscribe</span>
                </motion.button>
            </div>

          </form>
        </motion.div>
    </div>
  );
}

export default Contact;
