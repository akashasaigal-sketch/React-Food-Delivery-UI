import { useState } from "react";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import MenuModal from "./components/MenuModal";
import CartDrawer from "./components/CartDrawer";
import { ShoppingBag, Pizza, Beef, Cake } from "lucide-react";

const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    price: 18,
    rating: 4.8,
    distance: "15 min",
    description: "Fresh mozzarella, basil, tomato sauce."
  },
  {
    id: 2,
    name: "Zinger Burger",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: 12,
    rating: 4.7,
    distance: "12 min",
    description: "Crispy chicken, lettuce, spicy mayo."
  },
  {
    id: 3,
    name: "Chicken Biryani",
    category: "Desi",
    image:
   "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop",
    price: 14,
    rating: 4.9,
    distance: "20 min",
    description: "Traditional aromatic chicken biryani."
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    price: 9,
    rating: 4.9,
    distance: "8 min",
    description: "Rich chocolate molten center."
  }
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
        const existing = prev.find((p) => p.id === item.id);
        
        if (existing) {
            return prev.map((p) =>
                p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
            );
        } else {
            return [...prev, { ...item, quantity: 1 }];
        }
    });
};

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          return {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : item.quantity - 1
          };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        openCart={() => setCartOpen(true)}
      />

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold">
            Fast Delivery,
            <span className="text-orange-500"> Premium Taste</span>
          </h1>

          <p className="mt-4 text-slate-400">
            Order from the best restaurants near you.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-orange-600 px-5 py-3 rounded-xl flex items-center gap-2">
              <Pizza size={18} /> Pizza
            </button>

            <button className="bg-slate-800 px-5 py-3 rounded-xl flex items-center gap-2">
              <Beef size={18} /> Burgers
            </button>

            <button className="bg-slate-800 px-5 py-3 rounded-xl">
              Desi
            </button>

            <button className="bg-slate-800 px-5 py-3 rounded-xl flex items-center gap-2">
              <Cake size={18} /> Desserts
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodData.map((food) => (
            <RestaurantCard
              key={food.id}
              item={food}
              onClick={() => setSelectedItem(food)}
            />
          ))}
        </div>
      </section>

      {selectedItem && (
        <MenuModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          addToCart={addToCart}
        />
      )}

      <CartDrawer
        open={cartOpen}
        close={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
      />
    </div>
  );
}