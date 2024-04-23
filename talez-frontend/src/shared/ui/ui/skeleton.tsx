import { cn } from "@/shared/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-pattensBlue", className)}
      {...props}
    />
  );
}

export { Skeleton };
