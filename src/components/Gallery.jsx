import React from "react";

export function Gallery() {
    const images = [
        { src: "/images/11.jpg", alt: "Gallery Image 1" },
        { src: "/images/12.jpg", alt: "Gallery Image 2" },
        { src: "/images/13.jpg", alt: "Gallery Image 3" },
        { src: "/images/14.jpg", alt: "Gallery Image 4" },
        { src: "/images/16.jpg", alt: "Gallery Image 5" },
        { src: "/images/18.jpg", alt: "Gallery Image 6" },
        { src: "/images/34.jpeg", alt: "Gallery Image 7" },
        { src: "/images/5.jpg", alt: "Gallery Image 8" },
        { src: "/images/6.jpg", alt: "Gallery Image 9" },
        { src: "/images/IMG_20250926_010322_106.jpg", alt: "Gallery Image 10" },
        { src: "/images/IMG_20250926_191005_873 (1).jpg", alt: "Gallery Image 11" },
        { src: "/images/Untitled5_20250925011644.jpg", alt: "Gallery Image 12" },
    ];

    return (
        <section id="gallery" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-black/50 pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        Gallery
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A glimpse into my journey, activities, and moments captured.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={(index % 4) * 100}
                            className="break-inside-avoid relative overflow-hidden rounded-2xl group border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
