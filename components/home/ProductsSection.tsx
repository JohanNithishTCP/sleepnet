import Link from 'next/link';

export default function ProductsSection() {
    return (
        <section className="py-24 bg-[#F5F5F5]">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue max-w-xl leading-tight">
                        Masks for Every Need:<br /> Comfort, Protection, and Quality.
                    </h2>
                    <Link
                        href="/products"
                        className="bg-brand-cyan hover:bg-brand-hover text-white text-sm font-semibold px-8 py-3 rounded transition-colors inline-block text-center"
                    >
                        View All Products
                    </Link>
                </div>

                {/* Main Tabs */}
                <div className='bg-brand-blue'>
                    <div className="flex flex-wrap p-2 bg-brand-blue text-white text-sm font-medium mb-8">
                        <button className="bg-brand-cyan px-6 py-4 grow md:grow-0 text-center transition-colors">Sleep Apnea / CPAP Masks</button>
                        <button className="px-6 py-4 hover:bg-brand-blue-card transition-colors grow md:grow-0 text-center border-l border-white/10">Respiratory / NIV Masks</button>
                        <button className="px-6 py-4 hover:bg-brand-blue-card transition-colors grow md:grow-0 text-center border-l border-white/10">Pediatric Masks</button>
                        <button className="px-6 py-4 hover:bg-brand-blue-card transition-colors grow md:grow-0 text-center border-l border-white/10">Home Care</button>
                        <button className="px-6 py-4 hover:bg-brand-blue-card transition-colors grow md:grow-0 text-center border-l border-white/10">Hospital</button>
                        <button className="px-6 py-4 hover:bg-brand-blue-card transition-colors grow md:grow-0 text-center border-l border-white/10">Personal Protective Equipment</button>
                    </div>
                </div>

                {/* Sub configuration */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <p className="text-gray-500 text-sm font-medium">
                        Our line of CPAP masks are designed for Sleep Apnea therapy at home.
                    </p>
                    <div className="flex gap-2">
                        <button className="bg-brand-cyan text-white px-6 py-2 text-sm font-medium transition-colors">Full Face Masks</button>
                        <button className="text-gray-500 hover:text-brand-blue px-6 py-2 text-sm font-medium transition-colors">Nasal Masks</button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Dummy Product Cards */}
                    {[
                        { title: "Ascend® Full Face Mask", desc: "Experience a higher level of comfort and convenience" },
                        { title: "Innova® Full Face Mask", desc: "Innovative fit. Maximum comfort. Freedom of movement." },
                        { title: "Mojo® Full Face Mask", desc: "A mask that fits your life." },
                        { title: "Mojo®2 Full Face Mask", desc: "Personalized comfort." },
                        { title: "V3 Full Face Mask", desc: "Providing untold comfort without compromise." }
                    ].map((product, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 flex flex-col group cursor-pointer shadow-lg transition-shadow">
                            <img src={`/home/mask-${idx + 1}.png`} alt="" />
                            <div className="p-6">
                                <h3 className="text-brand-blue font-bold text-lg mb-2 group-hover:text-brand-cyan transition-colors">{product.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
