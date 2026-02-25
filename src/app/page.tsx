import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientProjectsWrapper from '@/components/ClientProjectsWrapper';
import TrendingMiniGrid from '@/components/TrendingMiniGrid';
import NewsSection from '@/components/NewsSection';
import SocialFeed from '@/components/SocialFeed';
import { getTrendingProjects, getTrendingSearch, getNewsFeed } from '@/services/api';

export default async function Home() {
  // Parallel data fetching for performance
  const [projects, trendingSearch, news] = await Promise.all([
    getTrendingProjects(),
    getTrendingSearch(),
    getNewsFeed()
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full relative">
        <Hero />

        <section className="pb-24 pt-8">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* 1. Trending Search Coins */}
            <TrendingMiniGrid coins={trendingSearch} />

            {/* 2. Top Market Cap / Featured Coins (Original Grid) */}
            <ClientProjectsWrapper initialProjects={projects} />

            {/* 3. News and Social Split Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <NewsSection news={news} />
              <SocialFeed />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 text-center text-gray-500 mt-20">
        <p className="text-sm">© 2024 Web3Research. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-50">Data provided by CoinGecko API & RSS Feeds</p>
      </footer>
    </div>
  );
}
