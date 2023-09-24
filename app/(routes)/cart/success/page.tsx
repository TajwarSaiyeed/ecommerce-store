"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import useCart from "@/hook/use-cart";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { removeAll } = useCart();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      router.push("/");
    }

    async function retriveData() {
      await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout?sessionId=${sessionId}`
      );
      removeAll();
      router.push("/");
    }

    retriveData();
  }, [removeAll, router, sessionId]);

  return null;
};

export default SuccessPage;
