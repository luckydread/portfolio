
import HomeButton from '../../components/HomeButton';

export default function SubPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-32"> 

      
        <HomeButton />
  
      {children}
    </main>
  );
}
