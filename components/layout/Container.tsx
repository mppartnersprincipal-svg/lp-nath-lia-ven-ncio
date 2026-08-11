type Props = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false }: Props) {
  return (
    <div
      className={`mx-auto w-full ${narrow ? "max-w-narrow" : "max-w-site"} px-4 md:px-6 ${className}`}
    >
      {children}
    </div>
  );
}
