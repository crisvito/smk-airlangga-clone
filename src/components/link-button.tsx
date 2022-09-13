export function LinkButton({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a className={`button ${className}`} href={to}>
      {children}
    </a>
  );
}
