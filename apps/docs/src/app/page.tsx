import { redirect } from 'next/navigation';

//redirect to /docs/introduction
export default function Home() {
  redirect('/docs/getting-started/overview');
}