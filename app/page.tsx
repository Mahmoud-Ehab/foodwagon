import Header from '@/app/ui/sections/header'
import Populars from './ui/sections/populars';
import { Source_Sans_700 } from './fonts';
import Middle from './ui/sections/middle';
import Suggestions from './ui/sections/suggestions';

export default function Home() {
  return (
    <main className={`${Source_Sans_700.className} flex flex-col min-h-screen`}>
      <Header />
      <Populars />
      <Middle />
      <Suggestions />
    </main>
  );
}
