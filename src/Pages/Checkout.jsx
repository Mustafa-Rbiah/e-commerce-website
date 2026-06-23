import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/useCartStore";

function Checkout(){
    const [form, setForm] = useState({
        first: "",
        last: "",
        country: "",
        address: "",
        phone: "",
        email: "",
    });
    const [message, setMessage] = useState("")
    const [error, setError] = useState({});

    const totalPrice = useCartStore((state) =>
        state.cart
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
      );

    const action = useNavigate();
    const handleClick = (e) =>{

        e.preventDefault();
        let newErrors = {};

        if (!form.first) {
            newErrors.first = "First name is required. Please enter your first name.";
        }
        if (!form.last) {
            newErrors.last = "Last name is required. Please enter your last name.";
        }
        if (!form.country) {
            newErrors.country = "Country is required. Please select your country.";
        }
        if (!form.address) {
            newErrors.address = "Address is required. Please enter your full address.";
        }
        if (!form.phone) {
            newErrors.phone = "Phone number is required. Please provide your contact number.";
        }
        if (!form.email) {
            newErrors.email = "Email address is required. Please provide a valid email.";
        }

        setError(newErrors);

        if(Object.keys(newErrors).length === 0){
            setMessage("Thank you! Your information has been submitted successfully and all details are correct. We appreciate your purchase.");
        }
   
    }

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
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}   className="relative w-[98%] xl:w-[80%] items-start mx-auto font-serif flex flex-col gap-18  my-25">
                {/* presentation */}
             <div className="relative w-full flex items-center justify-center h-[200px] md:h-[300px] overflow-hidden bg-black rounded-[12px] shadow-2xl">
                <motion.img variants={cardVariants} className="absolute object-cover w-full h-full opacity-70" src="/assets/Hero/revslider_3.jpg" alt="Cart Hero" />
                <motion.h2 variants={cardVariants} className="text-3xl text-shadow-2xl font-bold tracking-wider z-11 text-white xl:pb-8"> Checkout </motion.h2>
             </div>


             <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}}   className="w-full flex flex-col xl:flex-row items-center gap-8 xl:items-start">

                <motion.div variants={cardVariants} className="w-[98%] lg:w-[80%] xl:w-[70%] bg-white border border-[#ede9e3] rounded-xl p-8 shadow-xl flex flex-col gap-8">
                    <h2 className="text-3xl font-bold tracking-wide text-gold mb-4">Billing Details</h2>
                    {message && (
                      <div className="w-full rounded-lg from-gold via-yellow-200 shadow-lg px-6 py-4 mb-2 flex items-center gap-3 animate-fadeSlide">
                        <svg className="w-7 h-7 text-gold flex-shrink-0 drop-shadow-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" fill="#fde68a" stroke="#dbaf36" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" stroke="#229954" strokeWidth="2" />
                        </svg>
                        <span className="font-semibold text-lg text-green-600 tracking-wide">{message}</span>
                      </div>
                    )}
               
                    <form action="" className="w-full flex flex-col gap-6">
                        {/* name */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* first name */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="firstName">First Name</label>
                                <input id="firstName" className="py-3 px-4 bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                    type="text" placeholder="Enter your first name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })}/>

                                {error.first && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.first}
                                    </p>
                                )}       
                           
                            </div>
                            {/* last name */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="lastName"> Last Name</label>
                                <input id="lastName" className="py-3 px-4 bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                    type="text" placeholder="Enter your last name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })}/>
                                    {error.last && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.last}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* contry / region */}
                        <div className="flex flex-col gap-2"> 
                            <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="country">Country / Region</label>
                            <input id="country" className="py-3 px-4 bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                type="text" placeholder="Enter your country or region" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
                                {error.country && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.country}
                                    </p>
                                )}
                        </div>
                        {/* Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="address"> Address </label>
                            <input id="address" className="py-3 px-4 bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                type="text" placeholder="Enter your address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                                {error.address && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.address}
                                    </p>
                                )}
                        </div>
                        {/* Contact*/}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Phone */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="phone">  Phone </label>
                                <input id="phone" className="py-3 px-4  bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                    type="tel" placeholder="Enter your phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                              
                                    {error.phone && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.phone}
                                    </p>
                                )}
                            </div>
                            {/* email */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-base font-semibold tracking-wide text-[#423c23]" htmlFor="email"> Email </label>
                                <input id="email" className="py-3 px-4 bg-[#f9f8f6] border-2 border-[#efe9dd] rounded-lg shadow-gold/10 focus:border-gold outline-none transition-all duration-150 text-base"
                                    type="email" placeholder="Enter your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    {error.email && (
                                    <p className="text-[13px] font-semibold tracking-wide text-red-600 px-2 py-1 mt-1 rounded animate-SlideDown  transition-all duration-300"
                                        style={{animation: 'fadeInSlideDown 0.6s cubic-bezier(.4,2,.6,1) both'}} >
                                        <span className="inline-block mr-2 align-middle animate-bounce">
                                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fecaca"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                            </svg>
                                        </span>
                                        {error.email}
                                    </p>
                                )}
                            </div>
                        </div>
             
                        <button onClick={handleClick} type="submit"
                            className="mt-6 py-3 px-8 cursor-pointer rounded-lg bg-gradient-to-r from-gold to-amber-300 w-fit text-center text-white font-bold text-lg tracking-widest shadow-lg hover:scale-95 hover:shadow-xl transition-all duration-150">
                            Place Order
                        </button>

                    </form>
                </motion.div>
     
                <motion.div variants={cardVariants} className="w-[98%]  lg:w-[80%] xl:w-[32%] bg-white border-2 border-[#efe9dd] rounded-xl shadow-lg p-8 font-serif flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-gold mb-2 tracking-wide border-b border-[#efe9dd] pb-4">
                        Your Order
                    </h2>
                    <div className="flex flex-col gap-2 text-base font-medium text-dark">
                        <div className="flex items-center justify-between py-2 border-b border-[#efe9dd]">
                            <span className="tracking-wide">Subtotal:</span>
                            <span className="font-semibold text-lg">{totalPrice} <span className="font-bold">$</span></span>
                        </div>
                        <div className=" from-amber-100 flex flex-col to-yellow-50 border-l-4 border-gold rounded-md px-4 py-3 my-3 shadow animate-fadeSlide items-start gap-3">
                            
                                <h3 className="font-bold text-gold mb-1 text-lg tracking-wide">Thank you for visiting!</h3>
                                <p className="font-medium text-dark/80 text-[15px] leading-relaxed tracking-wide">
                                    I'm truly grateful you took the time to explore this React project. It was crafted as part of my ongoing journey to expand my skills and build beautiful interfaces.<br className="hidden md:inline" />
                                    <span className="block my-1"></span>
                                    If you have any feedback, ideas, or suggestions, I'd deeply appreciate your thoughts. Every tip helps me improve and create even better experiences. 🌟
                                </p>
                            
                        </div>
                   
                    </div>

                    <div className="w-full flex items-center justify-between">
                    <button className="px-5  cursor-pointer py-3 rounded-lg bg-gradient-to-r from-gold to-amber-300 text-white font-medium tracking-wide shadow hover:scale-90 hover:shadow-2xl transition-all duration-300">
                        Confirm & Pay
                    </button>
                    <button onClick={()=> action("/cart")} className="btn-slide text-[14px] hover:cursor-pointer  text-light bg-dark py-3 px-5 rounded-[8px] tracking-wide font-medium font-serif">
                             <span>Back to cat</span>
                    </button>
                    
                    </div>
                    
                </motion.div>
           

             </motion.div>
           </motion.div>
    )

}

export default Checkout;