import React from 'react';
import { CoinGeckoMarketData } from '../services/api';
import ProjectCard from './ProjectCard';

interface Props {
    projects: CoinGeckoMarketData[];
    dict: any;
}

export default function ProjectGrid({ projects, dict }: Props) {
    if (projects.length === 0) {
        return (
            <div className="w-full py-20 text-center flex flex-col items-center justify-center">
                <p className="text-gray-400 text-lg">情報を取得できませんでした。しばらく待ってから再読み込みしてください。</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8 max-w-7xl mx-auto">
                {projects.map(project => (
                    <div key={project.id} className="animate-fade-in-up" style={{ animationFillMode: 'both' }}>
                        {/* For real filtering, we might need more complex category logic, but for now we pass a placeholder or remove it entirely from card if fetching generalized trending */}
                        <ProjectCard project={project} dict={dict.common} />
                    </div>
                ))}
            </div>
        </div>
    );
}
