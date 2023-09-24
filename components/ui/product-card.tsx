"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hook/use-preview-modal";
import { MouseEventHandler } from "react";
import useCart from "@/hook/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className={
        "bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      }
    >
      {/*  images and actions  */}
      <div className={"aspect-square rounded-xl bg-gray-100 relative"}>
        <Image
          fill
          src={data?.images?.[0].url}
          alt={data?.name}
          className={"aspect-square object-cover rounded-md"}
        />
        <div
          className={
            "opacity-0 group-hover:opacity-100 transition w-full absolute px-6 bottom-5"
          }
        >
          <div className={"flex gap-x-6 justify-center"}>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={24} className={"text-gray-600"} />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={24} className={"text-gray-600"} />}
            />
          </div>
        </div>
      </div>
      {/*description*/}
      <div>
        <p className={"font-semibold text-lg"}>{data?.name}</p>
        <p className={"text-gray-500 text-sm"}>{data?.category?.name}</p>
      </div>
      {/*price*/}
      <div className={"flex items-center justify-between"}>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
