import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto max-w-6xl px-5 sm:px-4", className)}>
      {children}
    </div>
  );
}