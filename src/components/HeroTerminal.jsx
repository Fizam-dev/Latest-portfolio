import React, { useState, useEffect } from "react";
import { Terminal, ArrowRight, Github, Code, ShieldCheck } from "lucide-react";

export function HeroTerminal() {
    const [text, setText] = useState("");
    const fullText = `> Initializing connection...
> Connection established.
> 
> USER_PROFILE_ACCESS: GRANTED
> 
> Name : Muhammad Syafizam (FizamCyberSec)
> Role : Head Community MYCyberLab (MYCL)
> Role : CTF Player & Ethical Hacker
> Status : Online...
> 
> Type 'help' to see available commands.`;

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(intervalId);
            }
        }, 30);
        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-white dark:bg-black transition-colors relative overflow-hidden" id="hero">
            {/* Background glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full blur-[100px] opacity-30 animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gray-300 dark:bg-gray-900 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

                {/* Left Column: Text Content */}
                <div
                    className="flex flex-col items-start text-left space-y-6"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Cybersecurity Enthusiast</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
                        Welcome to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black dark:from-gray-300 dark:to-white">
                            My Portfolio
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        I'm Muhammad Syafizam (A.K.A FizamCyberSec), an 18-year-old student, CTF player, and Ethical Hacker. I build secure solutions and push the boundaries of technology.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                            Explore Profile
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#gallery"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                        >
                            <Code className="w-5 h-5" />
                            View Gallery
                        </a>
                    </div>
                </div>

                {/* Right Column: Terminal */}
                <div
                    className="w-full relative animate-float"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {/* Terminal shadow/glow effect behind */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 blur-2xl opacity-50 rounded-2xl"></div>

                    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                        {/* Terminal Header */}
                        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex gap-2.5">
                                <div className="w-3 h-3 rounded-full border border-red-500 bg-red-400 opacity-80" />
                                <div className="w-3 h-3 rounded-full border border-yellow-500 bg-yellow-400 opacity-80" />
                                <div className="w-3 h-3 rounded-full border border-green-500 bg-green-400 opacity-80" />
                            </div>
                            <div className="mx-auto flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
                                <Terminal className="w-4 h-4" />
                                <span>guest@fizamcybersec: ~</span>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 md:p-8 min-h-[350px] font-mono text-sm md:text-base selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black shadow-inner">
                            <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                                {text}
                                <span className="animate-pulse inline-block w-2.5 h-5 bg-black dark:bg-white ml-1 align-middle" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
