import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
    return (
      <section className="p-5 lg:p-10 bg-white flex flex-col justify-start ">
        <h5
          className="mb-10 w-full text-center text-black text-lg font-medium"
          data-aos="fade-down"
        >
          Contact Us
        </h5>
        <h3
          className="michroma text-3xl lg:text-7xl font-light text-center text-black"
          data-aos="fade-up"
        >
          Get In Touch
        </h3>
        <a
          href="mailto:adoramjohntom1234@gmail.com"
          className="w-full max-w-sm  self-end mb-30 py-5 px-10 rounded-full border outline-0 text-black"
        >
          adoramjohntom1234@gmail.com
        </a>
        <ContactForm />
      </section>
    );
}