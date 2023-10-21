const Sections = () => {
    return (
        <div>
            <section className="bg-gray-100 p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border rounded-lg overflow-hidden shadow-md">
                            <img src="article1.jpg" alt="Featured Article 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Article Title 1</h3>
                                <p className="text-gray-600">Short article excerpt or description.</p>
                                <a href="/article1" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Tech News and Updates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border rounded-lg overflow-hidden shadow-md">
                            <img src="news1.jpg" alt="Tech News 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">News Headline 1</h3>
                                <p className="text-gray-600">Short news snippet or update description.</p>
                                <p className="text-sm text-gray-500">Published on Date | Source: Source Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sections;