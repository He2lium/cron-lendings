import { AuthedHeader } from './components/AuthedHeader/AuthedHeader';
import { NotAuthedHeader } from './components/NotAuthedHeader/NotAuthedHeader';

export const Header = () => {
  const isAuthed = true;

  return <>{isAuthed ? <AuthedHeader /> : <NotAuthedHeader />}</>;
};
