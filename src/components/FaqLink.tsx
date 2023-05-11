import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function FaqLink() {
  const { t } = useTranslation('common');

  const faqLink = {
    label: t('urls.faq.label'),
    href: t('urls.faq.href'),
  };

  return (
    <Link href={faqLink.href}>
      {faqLink.label}
    </Link>
  );
}