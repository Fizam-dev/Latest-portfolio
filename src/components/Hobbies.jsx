import React from "react";
import { Flag, Code2, Dumbbell, CircleDot } from "lucide-react";

export function Hobbies() {
    const hobbies = [
        {
            title: "CTF (Capture The Flag)",
            description: "Participating in cybersecurity challenges to sharpen hacking skills, cryptography, and reverse engineering abilities.",
            icon: Flag,
        },
        {
            title: "Coding",
            description: "Building scripts, applications, and automated tools. Always learning and exploring new programming languages.",
            icon: Code2,
        },
        {
            title: "Workout",
            description: "Maintaining a healthy lifestyle and discipline through regular physical workouts and strength training.",
            icon: Dumbbell,
        },
        {
            title: "Volleyball",
            description: "Staying active and fostering teamwork on the court through competitive and recreational volleyball.",
            icon: CircleDot, // Simple circle dot representing a ball as an abstract icon
        },
    ];

    return (
        <section id="hobbies" className="py-24 px-4 bg-white dark:bg-black transition-colors border-y border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto">
                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        Hobbies & Interests
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hobbies.map((hobby, index) => {
                        const Icon = hobby.icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-900 group-hover:bg-black group-hover:dark:bg-white transition-colors">
                                        <Icon className="w-6 h-6 text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {hobby.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {hobby.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
