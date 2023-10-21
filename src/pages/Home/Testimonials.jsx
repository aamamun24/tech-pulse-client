import { useEffect, useState } from "react";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-5xl text-blue-500 font-bold mb-6">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                                <div className="font-semibold">
                                    <p className="text-blue-500">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
