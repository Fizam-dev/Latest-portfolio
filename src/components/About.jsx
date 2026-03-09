import React from "react";
import { User, Library, ShieldCheck, GraduationCap, MapPin, Hash } from "lucide-react";

export function About() {
    const details = [
        { icon: User, label: "Name", value: "Muhammad Syafizam" },
        { icon: Hash, label: "Age", value: "18 Years Old" },
        { icon: GraduationCap, label: "Education", value: "Student at MSU Sabah" },
        { icon: ShieldCheck, label: "Role", value: "Ethical Hacker" },
        { icon: Library, label: "Role", value: "Head Community MYCyberLab (MYCL)" },
        { icon: MapPin, label: "Role", value: "CTF Player" },
    ];

    return (
        <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        About Me
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A passionate 18-year-old student plunging into the depths of cybersecurity,
                        dedicating time as the Head Community of MYCyberLab, playing CTFs, and learning as an Ethical Hacker.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {details.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-900 hover:shadow-md hover:border-black dark:hover:border-white transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-black group-hover:dark:bg-white transition-colors">
                                    <Icon className="h-6 w-6 text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-colors" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-1">
                                    {item.label}
                                </h3>
                                <p className="text-lg font-semibold text-black dark:text-white">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
