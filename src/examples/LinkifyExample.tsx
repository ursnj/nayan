import { NCard } from '@/components/NCard';
import { NLinkify } from '@/components/NLinkify';

const LinkifyExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Linkify:</h1>
      <NLinkify>Checkout our new landing page at nayan.app and new email hello@nayan.app</NLinkify>
    </div>
  );
};

export default LinkifyExample;
