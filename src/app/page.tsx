import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/card-list');
  return <div></div>;
}
