export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-grow pt-20">
      {children}
    </div>
  );
}
