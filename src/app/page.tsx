import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientProjectsWrapper from '@/components/ClientProjectsWrapper';
import { getTrendingProjects } from '@/services/api';

// This is a Server Component that fetches data at build/revalidate time
export default async function Home() {
  const projects = await getTrendingProjects();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full relative">
        <Hero />

        <section className="pb-24 pt-8">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* We pass the initial fetched data to a Client Component for filtering state */}
            <ClientProjectsWrapper initialProjects={projects} />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 text-center text-gray-500">
        <p className="text-sm">© 2024 Web3Research. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-50">Data provided by CoinGecko API</p>
      </footer>
    </div>
  );
}
