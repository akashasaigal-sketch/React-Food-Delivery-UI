import { Star, Clock } from "lucide-react";

export default function RestaurantCard({
  item,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">
            {item.name}
          </h3>

          <span className="text-orange-500">
            ${item.price}
          </span>
        </div>

        <div className="mt-4 flex justify-between text-sm text-slate-400">
          <span className="flex gap-1 items-center">
            <Star size={14} />
            {item.rating}
          </span>

          <span className="flex gap-1 items-center">
            <Clock size={14} />
            {item.distance}
          </span>
        </div>
      </div>
    </div>
  );
}