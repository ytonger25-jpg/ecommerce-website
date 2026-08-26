"use client";

import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const PAGE_NAMES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/products": "Products",
  "/admin/orders": "Orders",
  "/admin/users": "Users",
  "/admin/categories": "Categories",
};

export default function AdminMobileBar() {
  const pathname = usePathname() ?? "";

  const pageName = Object.entries(PAGE_NAMES)
    .reverse()
    .find(([key]) => pathname.startsWith(key))?.[1] ?? "";

  const openDrawer = () => {
    if (typeof window !== "undefined" && (window as any).__adminOpenSidebar) {
      (window as any).__adminOpenSidebar();
    }
  };

  return (
    <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white border-b border-[#f3f4f6] sticky top-0 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div>
        <Link href="/admin">
              <div className="flex flex-col items-start justify-center">
                <div className="relative h-10 w-20 sm:h-12 sm:w-24">
                  <Image
                    src="/images/LOGO.png"
                    alt="E-commerce Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="flex items-center leading-none">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[5px] text-[#111827]">
                    E-
                  </span>

                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[5px] text-[#c9a96e]">
                    commerce
                  </span>
                </div>
              </div>
            </Link>
      </div>
      <span className="flex-1 text-center text-[13px] font-semibold text-[#6b7280]">
        {pageName}
      </span>
      <button
        onClick={openDrawer}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f4f6] text-[#111827] text-[20px] transition hover:bg-[#111827] hover:text-white"
      >
        <FiMenu />
      </button>
    </div>
  );
}