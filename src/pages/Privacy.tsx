import { motion } from "framer-motion";
import { SEOMeta } from "@/components/SEOMeta";
import { Breadcrumb } from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Privacy = () => {
  return (
    <Layout>
      <SEOMeta
        title="Privacy Policy | Digital Edge Studio"
        description="Privacy policy for Digital Edge Studio. Learn how we protect your personal information and data."
        keywords="privacy policy, data protection"
        ogTitle="Privacy Policy | Digital Edge Studio"
        canonical="https://digitaledgestudio.com/privacy"
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Privacy Policy' }
      ]} />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_71%_30%/0.4),transparent_70%)]" />
        <div className="container-tight px-4 py-16 md:py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">Privacy Policy</motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75">Last updated: February 2026</motion.p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <motion.div
            className="prose prose-lg max-w-none space-y-8 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="heading-card text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Edge ("we", "us", "our") is committed to protecting the privacy of individuals who visit our website and use our services. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of personal information:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Name, email address, phone number, and business name when you fill out our contact form</li>
                <li>• Website usage data including pages visited, time spent on site, and referring URLs</li>
                <li>• IP address and browser information for analytics and security purposes</li>
                <li>• Any other information you voluntarily provide to us</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Respond to your enquiries and provide quotes</li>
                <li>• Deliver the services you have requested</li>
                <li>• Improve our website and services</li>
                <li>• Send relevant communications about our services (with your consent)</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">5. Cookies and Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and Google Analytics to collect anonymous usage data. This helps us understand how visitors use our site so we can improve the experience. You can disable cookies in your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete the personal information we hold about you. To make a request, please contact us at enquiries@digitaledgestudio.com.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:<br />
                Email: enquiries@digitaledgestudio.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
