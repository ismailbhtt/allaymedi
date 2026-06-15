"use client";

import { useEffect } from "react";

import { useCart } from "@/lib/cart-context";

export function ClearCartOnMount() {
  const { clear, isHydrated } = useCart();
  useEffect(() => {
    if (isHydrated) clear();
  }, [isHydrated, clear]);
  return null;
}
