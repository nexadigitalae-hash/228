"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Menu, 
  X, 
  ArrowLeft, 
  ShieldCheck, 
  Home, 
  Info, 
  HelpCircle, 
  PhoneCall, 
  Layers 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "الرئيسية", icon: Home },
  { to: "/about", label: "من نحن", icon: Info },
  { to: "/how-it-works", label: "كيف تعمل المنصة", icon: Layers },
  { to: "/faq", label: "الأسئلة الشائعة", icon: HelpCircle },
  { to: "/contact", label: "تواصل معنا", icon: PhoneCall },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/40 transition-all duration-300">
      <div className="container-page flex h-20 md:h-22 items-center justify-between px-4 sm:px-6">
        
        {/* 1. قسم اللوجو والدعم */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          >
            <div className="relative flex items-center justify-center">
              <img 
                src="/sanadk.png" 
                alt="شعار منصة سندك" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                fetchPriority="high"
              />
            </div>
          </Link>
        </div>

        {/* 2. القائمة الرئيسية المنتصفة (Floating Nav) */}
        <nav 
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-surface/70 px-3 py-1.5 shadow-sm backdrop-blur-md"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-xs lg:text-sm font-semibold text-muted-foreground transition-all duration-200 rounded-full hover:text-foreground hover:bg-background/80 whitespace-nowrap"
              activeProps={{ 
                className: "bg-background text-primary font-bold shadow-sm border border-border/50 text-foreground" 
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 3. زر الإجراء الرئيسي للـ Desktop وزر الموبايل */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* زر تقديم شكوى لأسطح المكتب */}
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              hash="complaint-form"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs lg:text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 active:scale-95 overflow-hidden"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
              <span>تقديم شكوى جديدة</span>
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* زر فتح القائمة للشاشات الصغيرة */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-surface text-foreground md:hidden transition-all hover:bg-secondary active:scale-95 focus:outline-none"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* 4. قائمة الموبايل المنسدلة (Mobile Drawer) */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/98 backdrop-blur-2xl border-b border-border/60", 
          open ? "max-h-[500px] opacity-100 py-4 shadow-xl" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container-page flex flex-col gap-1.5 px-4">
          
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-secondary hover:text-foreground active:bg-secondary/80"
                activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-70" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-3 mt-1 border-t border-border/50">
            <Link
              to="/"
              hash="complaint-form"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-transform active:scale-98"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>تقديم شكوى أونلاين</span>
              <ArrowLeft className="h-4 w-4 shrink-0" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}