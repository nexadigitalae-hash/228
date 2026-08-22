"use client";

// Local fallback for Link if 'next/link' isn't available
const Link = (props: any) => <a {...props} />;

import { 
  FileText, 
  ShieldCheck, 
  ArrowLeft,
  Scale,
  Smartphone,
  ShoppingBag,
  Building2,
  CreditCard,
  Building,
  HelpCircle,
  Clock,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] pt-10 pb-20 md:pt-16 md:pb-28 border-b border-[var(--color-border)]">
      
      {/* خلفية زخرفية إسلامية سيادية */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%239A7532' stroke-width='1.5'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' fill='none' stroke='%239A7532' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='8' fill='none' stroke='%239A7532' stroke-width='1'/%3E%3Cpath d='M0 0l80 80M80 0L0 80' stroke='%239A7532' stroke-width='0.5' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} 
        />
        {/* هالتان ضوئيتان متقابلتان لعمق بصري */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-[10%] w-40 h-40 bg-[var(--color-uae-gold-primary)]/10 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-[8%] w-32 h-32 bg-[var(--color-uae-gold-primary)]/10 rounded-full blur-2xl" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center">

        
        {/* العنوان الرئيسي */}
        <h1 className="max-w-4xl text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl md:text-6xl leading-[1.25]">
          منصة <span className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient inline-block mx-1">سندك</span> الرقمية
          <br />
          <span className="text-[var(--color-primary)]">حقك مصان</span>
        </h1>

        {/* الوصف */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-muted-foreground)]">
          المنصة الرقمية الموحدة لرفع الشكاوى واقتراحات المتعاملين. نضمن لك إحالة مباشرة للجهات المعنية
          وتتبعاً دقيقاً لكافة الإجراءات بشفافية وعدالة.
        </p>

        {/* أزرار الإجراءات */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
   <Link
  href="/complaint/new"
  className="group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius)] bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 ease-out hover:brightness-90 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
>
  <FileText className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
  تقديم شكوى جديدة
  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
</Link>

          <Link
            href="/guide"
            className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--color-border)] bg-white px-7 py-4 text-base font-semibold text-[var(--color-foreground)] shadow-sm transition-all duration-200 hover:bg-[var(--color-muted)] hover:border-[var(--color-primary)]/40"
          >
            <HelpCircle className="h-5 w-5 text-[var(--color-primary)]" />
            دليل تقديم الشكاوى
          </Link>
        </div>

        {/* شريط ثقة مضغوط: وعد الاستجابة + الحيادية */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <div className="flex items-center gap-2 text-[var(--color-foreground)] font-semibold">
            <Clock className="h-4 w-4 text-[var(--color-primary)]" />
            رد أولي خلال 24 ساعة عمل
          </div>
          <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />
          <div className="flex items-center gap-2 text-[var(--color-foreground)] font-semibold">
            <ShieldCheck className="h-4 w-4 text-[var(--color-success)]" />
            معالجة شفافة وموثوقة
          </div>
          <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />
          <div className="flex items-center gap-2 text-[var(--color-foreground)] font-semibold">
            <Scale className="h-4 w-4 text-[var(--color-primary)]" />
            حيادية وسيادة القانون
          </div>
        </div>

        {/* القطاعات المشمولة — شارات دائرية عائمة بدل البطاقة */}
        <div className="mt-14 w-full max-w-3xl">
          <p className="text-xs font-bold text-[var(--color-muted-foreground)] mb-5 uppercase tracking-wide">
         الشكاوى تشمل كل من القطاعات :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { Icon: Smartphone, text: "الاتصالات والتقنية" },
              
              { Icon: CreditCard, text: "الخدمات المالية" },
              { Icon: Building2, text: "المتاجر والأسواق" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-sm transition-all duration-200 hover:border-[var(--color-primary)]/50 hover:shadow-soft hover:-translate-y-0.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-muted)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-200">
                  <item.Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-[var(--color-foreground)]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Named Export للتوافق مع التصدير المطلوبة
export { Hero as HeroSection };