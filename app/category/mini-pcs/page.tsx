import { categories } from '@/lib/site';
import CategoryPage from '@/components/CategoryPage';

const SLUG = 'mini-pcs';
const cat = categories.find((c) => c.slug === SLUG)!;
export const metadata = { title: cat.name, description: cat.blurb };

export default function Page() {
  return <CategoryPage slug={SLUG} />;
}
