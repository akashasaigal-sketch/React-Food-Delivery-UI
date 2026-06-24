export default function CartDrawer({
  open,
  close,
  cart,
  updateQty
}) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 5 : 0;
  const total = subtotal + delivery;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-slate-950 border-l border-slate-800 z-50 transition-transform duration-300 ${
        open
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      <div className="p-6 flex justify-between border-b border-slate-800">
        <h2 className="font-bold text-xl">
          Cart Summary
        </h2>

        <button onClick={close}>✕</button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center text-slate-400 mt-20">
            Cart is Empty
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-5"
            >
              <div>
                <h4>{item.name}</h4>
                <p className="text-orange-500">
                  ${item.price}
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <button
                  onClick={() =>
                    updateQty(item.id, "dec")
                  }
                >
                  -
                </button>

                {item.quantity}

                <button
                  onClick={() =>
                    updateQty(item.id, "inc")
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-slate-800 p-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span>Delivery</span>
          <span>${delivery.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mt-4 text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-5 bg-orange-600 py-3 rounded-xl hover:scale-105 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}