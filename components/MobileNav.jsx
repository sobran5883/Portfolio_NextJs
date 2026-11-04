"use client";

import { useState } from 'react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links=[
    {
        name:'home',
        path:'/',
    },
    // {
    //     name:'services',
    //     path:'/services',
    // },
    {
        name:'resume',
        path:'/resume',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'achievements',
        path:'/achievements',
    },
    {
        name:'contact',
        path:'/contact',
    },
]

const MobileNav=()=> {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-2xl text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-24 mb-10 text-center text-2xl">
                <Link onClick={handleLinkClick} href="/">
                    <h1>Sobran<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=>{
                    return(
                        <Link
                            onClick={handleLinkClick}
                            href={link.path}
                            key={index}
                            className={`${link.path===pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav