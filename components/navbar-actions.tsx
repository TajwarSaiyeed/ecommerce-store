'use client'


import Button from "@/components/ui/button";
import {ShoppingBag} from "lucide-react";
import {useEffect, useState} from "react";
import useCart from "@/hook/use-cart";
import {useRouter} from "next/navigation";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const cart = useCart()
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true)
    }, []);


    if (!isMounted) return null;

    return (
        <div className={'ml-auto flex items-center gap-x-4'}>
            <Button onClick={() => router.push("/cart")}
                    className={'flex items-center px-4 py-2 rounded-full bg-black'}>
                <ShoppingBag size={20} color={'white'}/>
                <span className={'ml-2 text-white text-sm font-medium'}>
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
};

export default NavbarActions;