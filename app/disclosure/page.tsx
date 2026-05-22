import { site } from '@/lib/site';

export const metadata = { title: 'Affiliate Disclosure', description: 'How we make money and what that means for you.' };

export default function Page() {
  return (
    <article className="prose-isaac">
      <h1 className="font-serif text-3xl">Affiliate Disclosure</h1>
      <p>
        {site.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
        designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
      </p>
      <p>
        As an Amazon Associate, we earn from qualifying purchases. We may also participate in affiliate programs from
        other retailers. When you click an affiliate link on this site and make a purchase, we may receive a small
        commission at no additional cost to you.
      </p>
      <p>
        Affiliate relationships never determine which products we recommend or how we rate them. We only recommend
        products we believe in.
      </p>
    </article>
  );
}
