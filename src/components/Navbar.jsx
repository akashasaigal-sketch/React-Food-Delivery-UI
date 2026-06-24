import React from "react";
import { ShoppingBag, MapPin } from "lucide-react";

export default function Navbar({
  cartCount,
  openCart
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl">
          Food<span className="text-orange-500">Flow</span>
        </h1>

        <div className="flex items-center gap-2 text-slate-300">
          <MapPin size={18} />
          Lahore, Pakistan
        </div>

        <button
          onClick={openCart}
          className="relative hover:scale-105 transition"
        >
          <ShoppingBag />

          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs h-5 w-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}