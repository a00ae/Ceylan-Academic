import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1, rootMargin = "0px 0px 0px 0px") {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("ظهر العنصر ")
          // نوقف المراقبة بمجرد الظهور الأول لتجنب تكرار الأنميشن
          if (currentElement) observer.unobserve(currentElement);
        }
      },
      { threshold, rootMargin }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, rootMargin]);

  // نُرجع الـ ref لتثبيته على العنصر، والحالة لمعرفة هل ظهر أم لا
  return [elementRef, isVisible] as const;
}