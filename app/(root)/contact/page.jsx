import ContactForm from "@/components/shared/ContactForm";
import PageHeading from "@/components/shared/PageHeading";
import EmailIcon from "@/components/ui/EmailIcon";
import { contactCards, contactSocialLinks } from "@/constants";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <PageHeading
        Icon={<EmailIcon />}
        badge="Get in Touch"
        title1="We'd Love to"
        title2="Hear From You"
        description="Have a question or feedback? Our team is here to help you succeed
              with our platform."
      />

      {/* Contact Section */}
      <section className="py-20 px-6 bg-dark-light relative  ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Let&apos;s Talk
                </h2>
                <p className="text-text-gray leading-relaxed">
                  Whether you have a question about features, pricing, or
                  anything else, our team is ready to answer all your questions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactCards.map((card) => (
                  <div
                    key={card.id}
                    className="group p-6 rounded-2xl border border-border-dark bg-dark/30 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-text-gray mb-2">
                          {card.description}
                        </p>
                        <Link
                          href={card.link}
                          className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
                        >
                          {card.other}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {contactSocialLinks.map((item) => (
                    <Link
                      key={item.route}
                      href={item.route}
                      className="w-12 h-12 rounded-xl border border-border-dark bg-dark/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                    >
                      <item.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          {/* Badges */}
          <div className="mt-16 pt-16 border-t border-border-dark">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">
                  &lt; 1 Hour
                </div>
                <p className="text-sm text-text-gray">Average Response Time</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">24/7</div>
                <p className="text-sm text-text-gray">Support Available</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">98%</div>
                <p className="text-sm text-text-gray">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
