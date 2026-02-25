import Image from "next/image";

export default function BenefitsSection() {
    return (
        <section className="bg-white py-12 pb-32">
            <div className="container mx-auto px-6">

                <h2 className="text-center text-3xl md:text-3xl font-semibold text-brand-blue mb-12">
                    Why you should choose Sleepnet?
                </h2>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">

                        {/* Card 1 */}
                        <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform">
                            <div className="w-20 h-20 relative mb-4">
                                <Image src="/home/why-1.png" alt="Made in USA" fill className="object-contain" />
                            </div>
                            <h3 className="text-brand-blue font-bold text-base">Made in USA</h3>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform">
                            <div className="w-20 h-20 relative mb-4">
                                <Image src="/home/why-2.png" alt="Quality" fill className="object-contain" />
                            </div>
                            <h3 className="text-brand-blue font-bold text-base">Quality</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform">
                            <div className="w-20 h-20 relative mb-4">
                                <Image src="/home/why-3.png" alt="Dependable" fill className="object-contain" />
                            </div>
                            <h3 className="text-brand-blue font-bold text-base">Dependable</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform">
                            <div className="w-20 h-20 relative mb-4">
                                <Image src="/home/why-4.png" alt="Quick Ship" fill className="object-contain" />
                            </div>
                            <h3 className="text-brand-blue font-bold text-base">Quick Ship</h3>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
