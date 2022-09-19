import { ListDay } from '../components/HomePage/ListDay';
import { Main } from '../components/HomePage/Main';
import { Nav } from '../components/Nav/Nav';

export function HomePage() {
  return (
    <div>
      <Nav />
      <Main />
      <ListDay />
    </div>
  );
}
