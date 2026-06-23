import { create } from "zustand";
import { persist } from "zustand/middleware";

/* this for add products */

export const useCartStore  = create(
  persist(
    (set) => ({
      allProdducts:[
        {
          id: 1,
          category: "rings",
          name: "14k Gold Bespoke Signet Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.3,
          reviews: 5,
          price: 954.46,
          view: false,
          image: "/assets/Hero/Products/A.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 2,
          category: "rings",
          name: "14k Gold Rose Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.9,
          reviews: 5,
          price: 1022.56,
          favorite: "",
          image: "/assets/Hero/Products/B.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 3,
          category: "rings",
          name: "14k Gold Amour Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 592.18,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/C.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 4,
          category: "rings",
          name: "Diamond and White Topaz Ring Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.7,
          reviews: 5,
          price: 870.93,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/D.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 5,
          category: "rings",
          name: "Opal La Femme Amulet",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 752.86,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/E.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 6,
          category: "rings",
          name: "24k Gold Rose Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.9,
          reviews: 5,
          price: 962.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/F.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 7,
          category: "rings",
          name: "Gorgeous Golden Blossom Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 692.98,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/G.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 8,
          category: "rings",
          name: "Pure Aura Gold Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.8,
          reviews: 5,
          price: 1208.76,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/H.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 9,
          category: "rings",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 397.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/I.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 10,
          category: "rings",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 397.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/J.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 11,
          category: "bracelets",
          name: "Classic Eternity Ring Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 997.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 12,
          category: "bracelets",
          name: "14k Gold Crew Helium Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 3,
          reviews: 5,
          price: 357.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 13,
          category: "bracelets",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 677.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity2.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 14,
          category: "bracelets",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 15,
          category: "bracelets",
          name: "14k Gold Crew Helium Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4,
          reviews: 5,
          price: 797.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity4.avif",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 16,
          category: "pendents",
          name: "14k Gold Rose Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.9,
          reviews: 5,
          price: 1022.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/B.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 17,
          category: "pendents",
          name: "14k Gold Amour Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 592.18,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/C.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 18,
          category: "pendents",
          name: "Diamond and White Topaz Ring Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.7,
          reviews: 5,
          price: 870.93,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/D.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 19,
          category: "pendents",
          name: "Opal La Femme Amulet",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 752.86,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/E.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 20,
          category: "pendents",
          name: "24k Gold Rose Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4.9,
          reviews: 5,
          price: 962.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/F.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 21,
          category: "earrings",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 397.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/J.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 22,
          category: "earrings",
          name: "Classic Eternity Ring Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 997.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 23,
          category: "earrings",
          name: "14k Gold Crew Helium Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 3,
          reviews: 5,
          price: 357.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 24,
          category: "earrings",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 677.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity2.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 25,
          category: "earrings",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 26,
          category: "Necklaces",
          name: "14k Gold Crew Helium Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 4,
          reviews: 5,
          price: 797.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity4.avif",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 27,
          category: "Necklaces",
          name: "Classic Eternity Ring Sets",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 997.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.jpg",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 28,
          category: "Necklaces",
          name: "14k Gold Crew Helium Ring",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 3,
          reviews: 5,
          price: 357.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 29,
          category: "Necklaces",
          name: "Gold Ring with Emerald Detail",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 677.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity2.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 31,
          category: "pearles",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 32,
          category: "pearle",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 33,
          category: "Neckl",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
        {
          id: 34,
          category: "Nec",
          name: "Crystal Accent Gold Hoops",
          description:
            "Ut sapiente non consequatur aliquam et doloribus. Dolor ipsum quia non architecto illo. Ipsam deleniti voluptas ullam. Qui nisi ut rem rerum in commodi ipsa.",
          rating: 5,
          reviews: 5,
          price: 837.56,
          favorite: false,
          view: false,
          image: "/assets/Hero/Products/Eternity3.webp",
          SKU: "sleek-silk-computer-66581178",
          quantity: 1,
        },
      ],
      cart: [],
      addToCart: (product, amount = 1) => 
        set((state) => {
          const existingItem = state.cart.find(item => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map(item =>
                item.id === product.id
                  ? { ...item, quantity:amount }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: amount }],
          };
        }),
      
      remove:(id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
      })),
      increase: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
              : item
          ),
        })),

      clear: () => set({cart:[]}),
    }),
    
    

    {
      name: "Market-Products",
    }
  )
);





/* this for add favorite */

export const useCartFavorite = create(
    persist(
      (set) => ({
        favorite: [],
  
        addFavorite: (itemfavorite) =>
          set((state) => {
            const exists = state.favorite.some(
              (item) => item.id === itemfavorite.id
            );
  
            if (exists) {
              // remove
              return {
                favorite: state.favorite.filter(
                  (item) => item.id !== itemfavorite.id
                ),
              };
            }
  
            // add
            return {
              favorite: [...state.favorite, { ...itemfavorite, favorite: true }],
            };
          }),

        remove: (id) =>
          set((state) => ({
            favorite: state.favorite.filter((item) => item.id !== id),
          })),
        
          increase: (id) =>
            set((state) => ({
              favorite: state.favorite.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            })),
    
          decrease: (id) =>
            set((state) => ({
              favorite: state.favorite.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                  : item
              ),
            })),
    
   
        
      }),
      {
        name: "Cart-favorite",
      }
    )
);





