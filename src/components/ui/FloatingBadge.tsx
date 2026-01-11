import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
    icon: ReactNode;
    text: string;
    className?: string;
    delay?: number;
}

export const FloatingBadge = ({ icon, text, className, delay = 0 }: FloatingBadgeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                // Continuous float animation
                y: [0, -10, 0],
            }}
            transition={{
                // Entry animation
                opacity: { duration: 0.5, delay },
                scale: { type: "spring", stiffness: 300, damping: 20, delay },
                // Floating animation
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 1 // Offset float start
                }
            }}
            whileHover={{
                scale: 1.15,
                rotate: -2,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            className={cn(
                "absolute flex items-center gap-3 bg-white dark:bg-card p-4 rounded-xl shadow-lg cursor-pointer z-20 border border-white/50 dark:border-border",
                className
            )}
        >
            <motion.div
                className="relative z-10"
                whileHover={{ rotate: 15, scale: 1.2 }}
            >
                {icon}
            </motion.div>
            <span className="font-semibold text-sm md:text-base text-card-foreground relative z-10">
                {text}
            </span>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    whileHover={{ left: "200%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
};
