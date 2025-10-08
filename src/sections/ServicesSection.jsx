import CustomButton from "@/components/CustomButton";

const services = [
    {
        id: 1, 
        name: "Branding", 
        tags: ["identity", "presence", "consistency"], 
        text: "Your brand is more than just a logo-it's how people feel when they intereact with your product. I help you shape that feeling"
    },
    {
        id: 2, 
        name: "Wire-framing & Prototyping", 
        tags: ["structure", "efficiency", "precision"], 
        text: "map out the blueprint of your digital product through low to high fidelity wireframes and interactive prototypes. It's where ideas take shape and user flows are validated"
    },
    {
        id: 3, 
        name: "Website & Web App", 
        tags: ["speed", "functionality", "responsiveness"], 
        text: "Modern, responsive, and user-focused web designs. Whether you're building a landing page or a complex web application, we tailor each screen for clarity, accessibility and conversion."
    },
    {
        id: 4, 
        name: "Mobile App Design", 
        tags: ["fludity", "performance", "engagement"], 
        text: "Whether it's iOS or andriod, native or hybrid our mobile-first approach ensures your app stands out in both form and function."
    }
]

export default function ServicesSection() {
    return (
        <section className="p-5 lg:p-10 bg-white">
            <h5
                className="mb-10 w-full text-center text-black text-lg font-medium"
                data-aos="fade-down"
            >
                Services
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {services.map((skill, i) => {
                    return (
                        <div
                            key={i}
                            className="group text-black hover:text-highlight relative flex flex-col items-start justify-start p-10 cursor-pointer transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 100} 
                            data-aos-duration="800"
                        >
                            <p className="text-lg">{skill.id}</p>
                            <h2 className="text-3xl lg:text-7xl mb-5">{skill.name}</h2>
                            <div className="mb-5 w-full flex flex-wrap justify-start gap-4 ">
                                {skill.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-2 rounded-full text-sm bg-transparent border border-black group-hover:border-highlight"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg">{skill.text}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col lg:flex-row items-end justify-end">
                <div className="flex flex-wrap gap-5">
                    <CustomButton variant="white" href={"/services"}>See More</CustomButton>
                    <CustomButton variant="black" href={"/projects"}>Book an Appointment</CustomButton>
                </div>
            </div>
        </section>
    )
}