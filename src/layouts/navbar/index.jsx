import { FiSettings } from 'react-icons/fi';
import SearchInput from '../../components/SearchInput';
import { Icon } from '../../helper/icons';

const Navbar = () => {
  return (
    <div className="sticky top-0 h-20 z-50">
      <nav className="px-6 py-3 top-0 bg-stone-900 text-white h-full flex items-center justify-between">
        <div className="flex space-x-4 flex items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-lg p-2 bg-black rounded-full">
              <Icon size={20} name="prev" />
            </a>
            <a href="#" className="text-lg p-2 bg-black rounded-full">
              <Icon size={20} name="next" />
            </a>
          </div>
          <SearchInput />
        </div>
        <div className="flex space-x-4">
          <div className="space-x-5 flex items-center">
            <div className="rounded-full border-2 p-2">
              <a href="#" className="text-lg">
                <FiSettings />
              </a>
            </div>

            <div className="rounded-full">
              <img
                src="https://s120-ava-talk-zmp3.zmdcdn.me/5/d/7/f/1/120/068cfaa74b06de4a16fd00e968a2cffe.jpg"
                alt="avatar"
                className="rounded-full"
                width={40}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
