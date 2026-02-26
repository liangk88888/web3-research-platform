import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import PortfolioClient from './PortfolioClient';
import TierGuard from '@/components/TierGuard';

export const metadata = {
    title: 'Watchlist | Web3 Research Platform',
    description: 'Your personal crypto watchlist',
};

export default async function PortfolioPage() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <TierGuard requiredTier="NFT_HOLDER" dict={dict}>
            <PortfolioClient translations={dict} />
        </TierGuard>
    );
}
