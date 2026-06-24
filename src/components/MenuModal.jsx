import { X } from "lucide-react";

export default function MenuModal({
  item,
  onClose,
  addToCart
}) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 max-w-lg w-full rounded-3xl overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <p className="text-slate-400 mt-4">
            {item.description}
          </p>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-orange-500 text-2xl font-bold">
              ${item.price}
            </span>

            <button
              onClick={() => {
                addToCart(item);
                onClose();
              }}
              className="bg-orange-600 px-5 py-3 rounded-xl hover:scale-105 transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}