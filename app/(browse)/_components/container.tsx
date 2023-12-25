"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  //  breakpoint is 1024px (to know if we're on mobile or not)
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExpand } = useSidebar(set => set);

  // useEffect will watch for changes in the isLg variable
  useEffect(() => {
    // if on desktop mode - collapse the sidebar
    if (isMobile) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [isMobile, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
