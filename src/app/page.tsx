import React from 'react';

import Hero from '@/components/Hero';
import ClientProjectsWrapper from '@/components/ClientProjectsWrapper';
import TrendingMiniGrid from '@/components/TrendingMiniGrid';
import NewsSection from '@/components/NewsSection';
import SocialFeed from '@/components/SocialFeed';
import { getTrendingProjects, getTrendingSearch } from '@/services/api';
import { getNewsFeed } from '@/services/serverApi';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import SentimentWidget from '@/components/SentimentWidget';

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  // Parallel data fetching for performance
  const [projects, trendingSearch, news] = await Promise.all([
    getTrendingProjects(),
    getTrendingSearch(),
    getNewsFeed(locale as 'ja' | 'en' | 'zh')
  ]);

  return (
    <>
      <main className="flex-1 w-full relative">
        <Hero />

        <section className="pb-24 pt-8">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* AI Market Sentiment Analyst Widget */}
            <SentimentWidget locale={locale} dict={dict} />

            {/* 1. Trending Search Coins */}
            <TrendingMiniGrid coins={trendingSearch} title={dict.sections.trending} />

            {/* 2. Top Market Cap / Featured Coins (Original Grid) */}
            <ClientProjectsWrapper initialProjects={projects} dict={dict} />

            {/* 3. News and Social Split Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <NewsSection news={news} title={dict.sections.news} />
              <SocialFeed title={dict.sections.social} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
