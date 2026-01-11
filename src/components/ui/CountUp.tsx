import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "motion/react";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
    step?: number;
}

export const CountUp = ({
    to,
    from = 0,
    delay = 0,
    duration = 2,
    className = "",
    suffix = "",
    prefix = "",
    step = 1,
}: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, to, {
                duration: duration,
                delay: delay,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        const rounded = Math.floor(latest / step) * step;
                        ref.current.textContent = `${prefix}${rounded}${suffix}`;
                    }
                }
            });
            return controls.stop;
        }
    }, [isInView, motionValue, to, delay, duration, step, prefix, suffix]);

    return <span ref={ref} className={className} />;
};
