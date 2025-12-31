// Container for main website layout
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {children}
    </div>
  );
}