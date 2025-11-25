import { Button } from "../ui/button";
import RightArrowIcon from "../ui/RightArrowIcon";

const ContactForm = () => {
  return (
    <div className="relative z-10">
      <div className="relative bg-dark/30 border border-border-dark rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Send us a Message{" "}
          <span className="text-amber-500">(Working on it...)</span>
        </h2>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (234) 567-890"
              className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Subject Select */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              placeholder="Tell us more about your inquiry..."
              className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              className="mt-1  h-7 w-7 rounded-md border-border-light bg-dark focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="terms" className="text-sm text-text-gray">
              I agree to receive communications from CreativeVision and
              understand that I can opt out at any time.
            </label>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="xl" className="w-full">
            <span>Send Message</span>
            <RightArrowIcon />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
