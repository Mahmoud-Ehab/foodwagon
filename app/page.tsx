import Header from '@/app/ui/sections/header'
import Populars from './ui/sections/populars';
import Middle from './ui/sections/middle';
import Suggestions from './ui/sections/suggestions';
import Footer from './ui/sections/footer';

import { Source_Sans_700 } from './fonts';

export default function Home() {
  return (
    <main className={`${Source_Sans_700.className} antialiased flex flex-col min-h-screen overflow-hidden smooth`}>
      <Header />
      <Populars />
      <Middle />
      <Suggestions />
      <Footer />
    </main>
  );
}
