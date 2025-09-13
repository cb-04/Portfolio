import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const coolBadgeVariants = cva(
  "inline-flex items-center rounded-2xl px-3 py-1 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:shadow-xl",
        secondary:
          "bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 text-white shadow hover:scale-105",
        destructive:
          "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white shadow hover:scale-105",
        outline:
          "border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface CoolBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof coolBadgeVariants> {}

export function CoolBadge({ className, variant, size, ...props }: CoolBadgeProps) {
  return <div className={cn(coolBadgeVariants({ variant, size }), className)} {...props} />;
}
