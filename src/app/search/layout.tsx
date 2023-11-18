import SearchHeader from "./components/SearchHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <SearchHeader />
        {children}
      </main>
    </main>
  );
}
