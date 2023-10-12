import Player from '../components/Player';
import Navbar from './navbar';
import Sidebar from './sidebar';

function RootLayout({ children }) {
  return (
    <div className="flex w-full bg-stone-900">
      <Sidebar />
      <div className="block w-full">
        <Navbar />
        <main className="flex-1 py-4 px-7 text-white">{children}</main>
      </div>
      <Player />
    </div>
  );
}

export default RootLayout;
