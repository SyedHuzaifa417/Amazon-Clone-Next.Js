import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateProps, StoreProduct } from "../../type";
import { removeFavorite } from "@/store/nextSlice";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { favoriteData } = useSelector((state: stateProps) => state.next);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amazon_blue text-3xl rounded hover:text-amazon_yellow"
        >
          <IoMdCloseCircle />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">Favorites</h2>
        <div
          className="overflow-y-auto max-h-[calc(80vh-8rem)] pr-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {favoriteData.length === 0 ? (
            <p className="text-stone-600">No favorites added yet.</p>
          ) : (
            favoriteData.map((item: StoreProduct) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-stone-700">
                      {item.title}
                    </h3>
                    <p className="text-stone-500">
                      <FormattedPrice amount={item.price} />
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFavorite(item.id))}
                  className="text-red-500 text-2xl px-3 py-1 rounded hover:text-red-800"
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
