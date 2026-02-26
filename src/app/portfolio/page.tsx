import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import PortfolioClient from './PortfolioClient';

export const metadata = {
    title: 'Watchlist | Web3 Research Platform',
    description: 'Your personal crypto watchlist',
};

export default async function PortfolioPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return <PortfolioClient translations={dict} />;
}
