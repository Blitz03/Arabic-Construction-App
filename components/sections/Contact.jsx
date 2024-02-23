import FormComponent from "../shared/FormComponent";
import Map from "../shared/Map";
import ContactBar from "../shared/ContactBar";
import Subheader from "../shared/Subheader";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <Subheader text="تواصل معنا" />

        {/* Wrapper */}
        <div className="flex flex-wrap items-center gap-10 lg:gap-0">
          {/* Map */}
          <Map />
          {/* Map */}

          {/* Contact Form */}
          <div className="flex items-center flex-wrap justify-center flex-column sm:flex-row">
            {/* Social Media Bar */}
            <ContactBar />
            {/* Social Media Bar */}

            <FormComponent />
          </div>
          {/* Contact Form */}
        </div>
        {/* Wrapper */}
      </div>
    </section>
  );
}
