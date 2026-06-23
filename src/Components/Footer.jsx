import {useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function Footer() {

    const action = useNavigate();

const brand = {
    image: "/assets/logo.webp",
    desc: "Lorem ipsum dolor sit amet, conse elit, sedid do eiusmod tempor incidi ut labore et dolore magna aliqua. Quis ipsum usendi laboris mollit",
    path: "page#"
};

const social = [
    {id:1, icon:<i class="ri-linkedin-fill"></i>, path:"https://www.linkedin.com/feed/"},
    {id:2, icon:<i class="ri-instagram-line"></i>, path:"https://www.linkedin.com/feed/"},
    {id:3, icon:<i class="ri-facebook-fill"></i>, path:"https://www.linkedin.com/feed/"},
];
const shop_Online = [
    {title:"Shop Online"},
    {id:1, name:"Jewellery Materials", path:"page#"},
    {id:2, name:"Sizing Children's Jewellery", path:"page#"},
    {id:3, name:"Delivery & Returns", path:"page#"},
    {id:4, name:"Order Tracking", path:"page#"},
    {id:5, name:"FAQs", path:"page#"},
]

const information = [
    {title:"Information"},
    {id:2, name:"Order Tracking", path:"page#"},
    {id:3, name:"Terms & Conditions", path:"page#"},
    {id:4, name:"Privacy Policy", path:"page#"},
    {id:5, name:"FAQs", path:"page#"},
]   
const need_Help = [
    { title: "Need Help?" },
    { id: 1, address: "Tangier, Morocco" },
    { id: 2, number: "+212 61256 3470", path: "https://mustafarbiah.website/" },
    { id: 3, email: "Mustafarbiah@gmail.com", path: "mailto:Mustafarbiah@gmail.com" }
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
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={cardVariants} className="flex flex-col items-start space-y-4">
            <img
              onClick={() => action(brand.path)}
              src={brand.image}
              alt="Brand logo"
              className="w-32 h-auto cursor-pointer"
            />
            <motion.p variants={cardVariants} className="text-gray-600 text-sm">{brand.desc}</motion.p>
            <div variants={cardVariants} className="flex gap-4 mt-2">
              {social.map((item) => (
                <motion.button variants={cardVariants}
                  key={item.id}
                  className="text-xl text-gray-600 hover:text-gold cursor-pointer transition-colors"
                  aria-label="Social link"
                  onClick={() => window.open(item.path, "_blank")}
                  type="button"
                >
                  {item.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
          {/* Shop Online Section */}
          <div>
            <motion.h2 variants={cardVariants} className="font-semibold text-lg mb-3">{shop_Online[0].title}</motion.h2>
            <div variants={cardVariants} className="space-y-2">
              {shop_Online
                .filter((item) => item.name)
                .map((item) => (
                  <motion.button variants={cardVariants} 
                    key={item.id}
                    className="block text-left text-gray-700 hover:text-gold transition-colors cursor-pointer text-sm"
                    onClick={() => action(item.path)}
                    type="button"
                  >
                    {item.name}
                  </motion.button>
                ))}
            </div>
          </div>
          {/* Information Section */}
          <div>
            <motion.h2 variants={cardVariants} className="font-semibold text-lg mb-3">{information[0].title}</motion.h2>
            <div className="space-y-2">
              {information
                .filter((item) => item.name)
                .map((item) => (
                  <motion.button variants={cardVariants}
                    key={item.id}
                    className="block text-left text-gray-700 hover:text-gold transition-colors cursor-pointer text-sm"
                    onClick={() => action(item.path)}
                    type="button"
                  >
                    {item.name}
                  </motion.button>
                ))}
            </div>
          </div>
          {/* Need Help Section */}
          <div>
            <motion.h2 variants={cardVariants} className="font-semibold text-lg mb-3">{need_Help[0].title}</motion.h2>
            <div className="space-y-2">
              <motion.div variants={cardVariants}>
                <span className="block text-gray-700 text-sm">
                  Head Office: {need_Help[1].address}
                </span>
              </motion.div>
              <div>
                <motion.button variants={cardVariants}
                  onClick={() => window.open(need_Help[2].path, "_blank")}
                  className="block text-gray-700 hover:text-gold transition-colors text-sm"
                  type="button"
                >
                  Tel: {need_Help[2].number}
                </motion.button>
              </div>
              <div>
                <motion.button variants={cardVariants} 
                  onClick={() => window.open(need_Help[3].path, "_blank")}
                  className="block  text-gray-700 hover:text-gold transition-colors text-sm "
                  type="button"
                >
                  Email: {need_Help[3].email}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Footer Bottom */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.3}} className="mt-10 border-t pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <motion.span variants={cardVariants} onClick={() => window.open("https://mustafarbiah.website/")} >&copy; {new Date().getFullYear()} Mustafarbiah.website</motion.span>
          <motion.span variants={cardVariants}>First project with React.js</motion.span>
        </motion.div>
      </div>
    </footer>
)


}

export default Footer;