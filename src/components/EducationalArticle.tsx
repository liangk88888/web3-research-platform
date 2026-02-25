'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface Course {
    id: string;
    title: string;
    content: string;
}

interface Props {
    courses: Course[];
}

export default function EducationalArticle({ courses }: Props) {
    const [openId, setOpenId] = useState<string | null>(courses[0]?.id || null);

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-4 w-full">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                    <button
                        onClick={() => toggleOpen(course.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                                <BookOpen size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{course.title}</h3>
                        </div>
                        {openId === course.id ? (
                            <ChevronUp size={20} className="text-gray-400" />
                        ) : (
                            <ChevronDown size={20} className="text-gray-400" />
                        )}
                    </button>

                    <div
                        className={`transition-all duration-300 ease-in-out ${openId === course.id
                                ? 'max-h-[500px] opacity-100 p-6 pt-0'
                                : 'max-h-0 opacity-0 overflow-hidden px-6 py-0'
                            }`}
                    >
                        <div className="text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                            {course.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
