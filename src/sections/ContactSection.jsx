import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
    return (
      <section className="p-5 lg:p-10 bg-white">
        <h5
          className="mb-10 w-full text-center text-black text-lg font-medium"
          data-aos="fade-down"
        >
          Services
        </h5>
        <h3 className="mb-30 michroma text-3xl lg:text-7xl font-light text-center text-black" data-aos="fade-up">
          Get In Touch
        </h3>
        <ContactForm />
      </section>
    );
}