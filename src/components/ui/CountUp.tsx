import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

export const CountUp = ({
    to,
    from = 0,
    delay = 0,
    duration = 1,
    className = "",
    suffix = "",
    prefix = "",
}: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            // Small timeout to allow for initial layout/delay
            setTimeout(() => {
                motionValue.set(to);
            }, delay * 100);
        }
    }, [isInView, motionValue, to, delay]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix, prefix]);

    return <span ref={ref} className={className} />;
};
