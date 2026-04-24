import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z
    .string()
    .trim()
    .max(150, { message: "Subject must be less than 150 characters" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please write a short message" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormValues = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    // Compose a mailto fallback so the message reaches Luv directly without a backend.
    const { name, email, subject, message } = result.data;
    const mailSubject = subject?.trim()
      ? `[Portfolio] ${subject}`
      : `[Portfolio] New message from ${name}`;
    const mailBody = `Hi Luv,\n\n${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:luvtakkar@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    // Small delay so the loading state is perceptible
    setTimeout(() => {
      window.location.href = mailto;
      toast({
        title: "Opening your email app…",
        description: "Hit send and I'll get back to you within 24 hours.",
      });
      setValues(initialValues);
      setSubmitting(false);
    }, 400);
  };

  const fieldBase =
    "w-full bg-transparent border-b border-cream/20 px-0 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-terracotta transition-colors duration-300";

  return (
    <section id="hire-me" className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden grain">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-6">
              ✦ Hire me
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] font-light tracking-tight">
              Tell me
              <br />
              about your
              <br />
              <span className="italic text-terracotta">project.</span>
            </h2>
            <p className="mt-8 text-cream/60 leading-relaxed max-w-md">
              Freelance, full-time, or a quick consultation — drop the details and
              I'll respond within 24 hours.
            </p>

            <div className="mt-10 space-y-3 text-sm text-cream/60">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-terracotta" />
                <span>Available for onsite, freelance or remote</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-terracotta" />
                <span>Based in India · Working worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="cf-name" className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
                  Your name
                </label>
                <input
                  id="cf-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  maxLength={100}
                  placeholder="Jane Doe"
                  className={fieldBase}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-terracotta">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="cf-email" className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
                  Email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  maxLength={255}
                  placeholder="you@company.com"
                  className={fieldBase}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-terracotta">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="cf-subject" className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
                Subject <span className="text-cream/30 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="cf-subject"
                type="text"
                value={values.subject}
                onChange={handleChange("subject")}
                maxLength={150}
                placeholder="Mobile app redesign, landing page, design system…"
                className={fieldBase}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="mt-2 text-xs text-terracotta">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="cf-message" className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
                Message
              </label>
              <textarea
                id="cf-message"
                value={values.message}
                onChange={handleChange("message")}
                maxLength={1000}
                rows={5}
                placeholder="Tell me a bit about your product, timeline and what you're hoping to achieve."
                className={`${fieldBase} resize-none`}
                aria-invalid={!!errors.message}
              />
              <div className="mt-2 flex items-center justify-between gap-4">
                {errors.message ? (
                  <p className="text-xs text-terracotta">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-cream/30 tabular-nums">
                  {values.message.length}/1000
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-cream text-ink text-sm font-medium hover:bg-terracotta hover:text-cream transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2} />
                  </>
                )}
              </button>
              <p className="text-xs text-cream/40 max-w-xs">
                Your details open in your email app — no data is stored.
              </p>
            </div>
          </motion.form>
        </div>
      </div>

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-terracotta opacity-15 blur-3xl pointer-events-none" />
    </section>
  );
};
