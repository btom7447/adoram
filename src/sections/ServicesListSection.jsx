
const services = [
  {
    id: 1,
    name: "Branding",
    tags: ["identity", "presence", "consistency"],
    text: [
      "Your brand is far more than just a logo, color palette, or typography—it is the complete experience that your audience associates with your product or service. It encompasses every touchpoint, from your visual identity to messaging, tone of voice, and interactions. ",
      "Through a thoughtful and strategic branding process, we help you craft a cohesive identity that reflects your vision, values, and personality. This includes designing visual assets, establishing brand guidelines, creating messaging frameworks, and ensuring consistency across all platforms. Every detail is deliberately considered so that your brand is recognizable, memorable, and resonates with your target audience, forming a lasting impression that extends beyond visuals.",
      "By combining design principles with audience research and market insights, we create a brand experience that is authentic and impactful. The goal is to transform abstract concepts and core values into tangible and cohesive experiences that delight your audience, encourage engagement, and build loyalty over time, ultimately contributing to sustained growth and long-term business success.",
    ],
  },
  {
    id: 2,
    name: "Wire-framing & Prototyping",
    tags: ["structure", "efficiency", "precision"],
    text: [
      "Wireframes and prototypes form the essential blueprint of any digital product, providing a clear, visual representation of its structure, hierarchy, and flow before development begins. This process reduces assumptions, prevents costly mistakes, and allows teams to validate ideas with real users early on.",
      "Through low to high fidelity wireframes and interactive prototypes, we convert abstract ideas into concrete, testable designs. This iterative approach allows for continuous feedback from stakeholders and users, ensuring that every interface decision is informed, intentional, and optimized for usability. The process also facilitates collaboration between designers, developers, and product managers, streamlining communication and avoiding unnecessary revisions later in the project.",
      "By carefully mapping user flows, validating interaction patterns, and defining visual hierarchy, wireframing and prototyping provide a solid foundation for development. It enables designers and developers to anticipate potential pain points, improve efficiency, and focus on creating a product that is not only functional but also intuitive, accessible, and enjoyable for the end user, resulting in higher adoption and satisfaction.",
    ],
  },
  {
    id: 3,
    name: "Website & Web App",
    tags: ["speed", "functionality", "responsiveness"],
    text: [
      "Building modern websites and web applications requires more than just beautiful visuals—it requires creating seamless experiences that meet both business and user needs. Every screen and interaction is carefully designed to ensure clarity, functionality, and accessibility.",
      "Whether you are creating a landing page, corporate website, or complex web application, we focus on responsiveness, speed, and usability. Each interface is crafted to work flawlessly across devices and screen sizes, with performance optimization, intuitive navigation, and visually appealing layouts. Every design decision is made to enhance engagement, simplify user journeys, and maximize conversion rates while staying true to your brand identity.",
      "By combining research, user testing, and iterative design, we produce web experiences that are not only aesthetically pleasing but also highly functional and accessible. Each screen is structured for clarity and efficiency, minimizing cognitive load while enhancing user satisfaction. This approach ensures that your digital presence is professional, engaging, and effective, ultimately driving measurable results and reinforcing your brand authority.",
    ],
  },
  {
    id: 4,
    name: "Mobile App Design",
    tags: ["fluidity", "performance", "engagement"],
    text: [
      "Designing mobile applications requires a careful balance between aesthetics, usability, and performance. Whether your app is native, hybrid, iOS, or Android, every screen and interaction must be intuitive, engaging, and optimized for speed and responsiveness.",
      "Our mobile app design process focuses on creating fluid and interactive experiences that align with your brand identity while maximizing usability. This includes crafting user flows, designing onboarding experiences, and optimizing each interaction to minimize friction and enhance engagement. By considering every detail, from gestures to layout hierarchy, we ensure the app feels natural, enjoyable, and functional across a wide range of devices and screen sizes.",
      "Through prototyping, testing, and iterative refinement, we deliver mobile applications that are visually appealing, highly usable, and built to achieve specific business objectives. Our designs not only look modern and polished but also perform efficiently, supporting user retention, increasing satisfaction, and strengthening the overall brand presence in the competitive mobile landscape.",
    ],
  },
];

export default function ServicesListsSection() {
    return (
      <section className="p-5 lg:p-10 bg-white">
        {/* Title */}
        <div className="mt-20 lg:mt-30 mb-20">
          <h1
            className="michroma text-3xl lg:text-7xl font-light text-center text-black"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Services
          </h1>

          <h5
            className="text-center text-black text-lg mt-10"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Collaborating with clients of all sizes to create bold, memorable
            brands that leave a lasting impression and stay on people's minds
          </h5>
        </div>

        <div className="grid grid-cols-1 gap-0">
          {services.map((skill, i) => {
            return (
              <div
                key={i}
                className="group border-y border-black text-black hover:text-highlight relative flex flex-col items-start justify-start p-10 cursor-pointer transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                <p className="text-lg">{skill.id}</p>
                <h2 className="text-3xl lg:text-7xl mb-5 text-highlight">
                  {skill.name}
                </h2>
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
                <p className="mb-2 text-lg">{skill.text[0]}</p>
                <p className="mb-2 text-lg">{skill.text[1]}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
}