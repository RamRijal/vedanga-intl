"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { School, GraduationCap, Users, Target, Calendar, BookOpen, Image as ImageIcon, Newspaper, BriefcaseBusiness, PhoneCall } from "lucide-react";

const aboutItems = [
  { 
    title: "Principal's Message",
    href: "/about/principal-message",
    description: "Welcome message from our school principal",
    icon: <Users className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Our Team",
    href: "/about/our-team",
    description: "Meet our dedicated faculty and staff",
    icon: <Users className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Vision & Mission",
    href: "/about/vision-mission",
    description: "Our goals and educational philosophy",
    icon: <Target className="h-5 w-5 text-[#D41D33]" />
  },
];

const academicsItems = [
  { 
    title: "Curriculum",
    href: "/academics/curriculum",
    description: "Our comprehensive educational programs",
    icon: <BookOpen className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Programs",
    href: "/academics/programs",
    description: "Specialized academic offerings",
    icon: <GraduationCap className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Calendar",
    href: "/academics/calendar",
    description: "Academic year schedule and events",
    icon: <Calendar className="h-5 w-5 text-[#D41D33]" />
  },
];

const campusLifeItems = [
  { 
    title: "Events",
    href: "/campus-life/events",
    description: "School events and activities",
    icon: <Calendar className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Clubs",
    href: "/campus-life/clubs",
    description: "Student clubs and organizations",
    icon: <Users className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Gallery",
    href: "/campus-life/gallery",
    description: "Photos of school life and events",
    icon: <ImageIcon className="h-5 w-5 text-[#D41D33]" />
  },
];

const newsItems = [
  { 
    title: "Latest News",
    href: "/news",
    description: "Recent updates and announcements",
    icon: <Newspaper className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Notices",
    href: "/news/notices",
    description: "Important notifications and circulars",
    icon: <Newspaper className="h-5 w-5 text-[#D41D33]" />
  },
  { 
    title: "Newsletter",
    href: "/news/newsletter",
    description: "School newsletters and publications",
    icon: <Newspaper className="h-5 w-5 text-[#D41D33]" />
  },
];

export function MainNav() {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo1222.jpg"
          alt="Vedanga Logo"
          width={60}
          height={60}
          className="h-20 w-auto"
        />
        <div>
          <span className="text-xl font-bold text-[#D41D33]">Vedanga</span>
          <span className="hidden md:inline text-xl font-bold text-gray-700"> International School</span>
        </div>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {aboutItems.map((item) => (
                  <ListItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Academics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {academicsItems.map((item) => (
                  <ListItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Campus Life</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {campusLifeItems.map((item) => (
                  <ListItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">News & Updates</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {newsItems.map((item) => (
                  <ListItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/careers" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-50")}>
                <div className="flex items-center space-x-2">
                  <BriefcaseBusiness className="h-5 w-5" />
                  <span>Careers</span>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-50")}>
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5" />
                  <span>Contact</span>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm font-medium leading-none">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";