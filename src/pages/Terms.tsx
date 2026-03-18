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

const Terms = () => {
  return (
    <Layout>
      <SEOMeta
        title="Terms of Service | Digital Edge Studio"
        description="Terms of Service for Digital Edge Studio. Review our service agreement, payment terms, and refund policy for web design and digital marketing services."
        keywords="terms of service, service agreement, refund policy"
        ogTitle="Terms of Service | Digital Edge Studio"
      />

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Terms of Service' }
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
            <motion.h1 variants={fadeUp} className="heading-display text-primary-foreground mb-4">Terms of Service</motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-primary-foreground/75">Last updated: March 2026</motion.p>
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
                These Terms of Service ("Terms") govern your use of the services provided by Digital Edge Studio ("we", "us", "our"). By engaging our services or using our website, you agree to be bound by these Terms. Please read them carefully before proceeding.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Edge Studio provides web design, web development, search engine optimisation (SEO), Google Ads management, and digital marketing services for small businesses and tradespeople across Australia. Services are delivered on either a project basis (one-time website builds) or a monthly retainer basis (ongoing SEO, ads management, and maintenance).
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">3. Quotes & Pricing</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All quotes provided by Digital Edge Studio are valid for 30 days from the date of issue unless otherwise stated.</li>
                <li>• Prices are quoted in Australian Dollars (AUD) and are inclusive of GST where applicable.</li>
                <li>• Quotes are based on the scope of work discussed at the time. Any additional work requested beyond the original scope may incur additional charges, which will be communicated and agreed upon before proceeding.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">4. Payment Terms</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong className="text-foreground">Project work:</strong> A 50% deposit is required before work commences. The remaining balance is due upon project completion, prior to the website going live.</li>
                <li>• <strong className="text-foreground">Monthly retainers:</strong> Retainer fees are billed monthly in advance. Payment is due within 7 days of the invoice date.</li>
                <li>• We accept payment via bank transfer, credit card, or other methods as agreed.</li>
                <li>• Late payments may incur a fee of 2% per month on the outstanding balance.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">5. Project Timeline & Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We provide estimated timelines for all projects at the start of the engagement. These timelines depend on timely provision of content, feedback, and approvals from the client.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delays caused by late content, feedback, or approvals from the client may extend the project timeline.</li>
                <li>• We will communicate any anticipated delays as soon as possible and work with you to minimise disruption.</li>
                <li>• Digital Edge Studio is not liable for delays caused by third-party services such as domain registrars, hosting providers, or payment processors.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">6. Revisions</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Each project includes a set number of revision rounds as outlined in your quote or service agreement.</li>
                <li>• Revisions refer to minor adjustments to the agreed design or content — not a complete redesign or change of scope.</li>
                <li>• Additional revisions beyond the included rounds will be billed at our standard hourly rate, which will be communicated in advance.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">7. Intellectual Property</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Upon receipt of full payment, the client owns all rights to the final website design, content, and deliverables created specifically for their project.</li>
                <li>• Digital Edge Studio retains the right to display the completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.</li>
                <li>• Any third-party assets (stock images, fonts, plugins) used in the project are subject to their respective licence terms.</li>
                <li>• Source code for custom-built components remains the intellectual property of Digital Edge Studio until full payment is received.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">8. Refund Policy</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• The 50% deposit is non-refundable once work has commenced, as it covers the time and resources allocated to your project.</li>
                <li>• If Digital Edge Studio is unable to deliver the agreed services, a full or partial refund will be provided for any undelivered work.</li>
                <li>• No refunds will be issued after the client has approved and signed off on the final deliverables.</li>
                <li>• Monthly retainer fees are non-refundable for the current billing period but you may cancel future billing at any time (see Termination below).</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">9. Termination</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Either party may terminate a project engagement by providing 14 days' written notice via email.</li>
                <li>• Monthly retainer agreements may be cancelled with 30 days' written notice. There are no lock-in contracts.</li>
                <li>• Upon termination, the client will be invoiced for all work completed up to the date of termination.</li>
                <li>• Any materials or deliverables completed and paid for will be provided to the client upon request.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Digital Edge Studio's total liability for any claim arising from our services is limited to the total fees paid by the client for the specific service in question.</li>
                <li>• We are not liable for any indirect, incidental, or consequential damages including loss of revenue, data, or business opportunities.</li>
                <li>• We are not responsible for issues arising from third-party services including web hosting, domain registration, email providers, or payment gateways.</li>
                <li>• The client is responsible for maintaining backups of their website content and data.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">11. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Edge Studio reserves the right to update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="heading-card text-foreground mb-3">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:<br />
                Email: enquiries@digitaledgestudio.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
