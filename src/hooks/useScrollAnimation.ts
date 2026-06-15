import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.05) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // حل احتياطي: إذا كان المتصفح لا يدعم IntersectionObserver لأي سبب، أظهر البطاقات فوراً
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("العنصر ظهر في الشاشة والأنميشن يجب أن يعمل الآن!");
          setIsVisible(true);
          observer.unobserve(currentElement); // توقف عن المراقبة فوراً
        }
      },
      { 
        threshold, 
        rootMargin: "0px 0px -10px 0px" // تقليل الهامش لتفادي مشاكل الشاشات الصغيرة
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  return [elementRef, isVisible] as const;
}