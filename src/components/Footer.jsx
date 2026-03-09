import React from "react";
import { Terminal } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-black py-12 px-4 border-t border-gray-100 dark:border-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-black dark:text-white" />
                    <span className="font-mono font-bold tracking-tighter text-black dark:text-white">
                        FizamCyberSec
                    </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Muhammad Syafizam. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                        [ status: online ]
                    </span>
                </div>
            </div>
        </footer>
    );
}
