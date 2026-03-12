export interface PortfolioProject {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  location: string;
  title: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; description: string }[];
  testimonial?: { quote: string; name: string; role: string };
  services: string[];
  image: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "sparks-electrical-wollongong",
    clientName: "Sparks Electrical Solutions",
    industry: "Electrician",
    location: "Wollongong, NSW",
    title: "How a Wollongong Electrician Went From Zero Online Presence to 40+ Leads Per Month",
    excerpt: "Sparks Electrical had no website and relied entirely on word-of-mouth. We built them a lead-generating website and local SEO strategy that transformed their business.",
    challenge: "Sparks Electrical Solutions had been operating for 8 years in Wollongong with zero online presence. No website, no Google Business Profile, and no way for new customers to find them online. They were losing jobs to competitors who showed up on Google, even though their workmanship was better. The owner was spending $2,000/month on letterbox drops with minimal return.",
    solution: "We built a fast, mobile-first website focused on emergency electrical services and local suburb targeting. We set up and optimised their Google Business Profile, created service-area pages for Wollongong, Shellharbour, and Kiama, and implemented a click-to-call button prominently on every page. The site was built with proper schema markup for local electrician services and optimised for 'electrician Wollongong' and 'emergency electrician near me' keywords.",
    results: [
      { label: "Monthly Leads", value: "40+", description: "From 0 online leads to 40+ enquiries per month within 4 months" },
      { label: "Google Ranking", value: "Top 3", description: "Ranking in the top 3 for 'electrician Wollongong' within 3 months" },
      { label: "Phone Calls", value: "+340%", description: "340% increase in phone calls compared to pre-website period" },
      { label: "ROI", value: "12x", description: "Website paid for itself 12 times over in the first 6 months" },
    ],
    testimonial: {
      quote: "I was sceptical about needing a website — I'd survived without one for years. But within weeks of launching, my phone started ringing with jobs I never would have got before. Best money I've ever spent on my business.",
      name: "Dave R.",
      role: "Owner, Sparks Electrical Solutions",
    },
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    image: "/images/blog/electrician-google-pic.webp",
    featured: true,
  },
  {
    id: "2",
    slug: "precision-plumbing-illawarra",
    clientName: "Precision Plumbing Illawarra",
    industry: "Plumber",
    location: "Illawarra, NSW",
    title: "Illawarra Plumber Doubles Revenue With a Website That Actually Converts",
    excerpt: "Precision Plumbing had an outdated DIY website that wasn't generating any leads. We rebuilt it from scratch and implemented local SEO that doubled their revenue.",
    challenge: "Precision Plumbing had a Wix website they'd built themselves 5 years ago. It was slow, not mobile-friendly, and wasn't ranking for any local searches. They were paying $1,500/month on Google Ads just to stay visible, but the landing pages were so poor that most visitors bounced without calling. Their cost per lead was over $120.",
    solution: "We designed a conversion-focused website with clear service pages for each plumbing specialty — emergency plumbing, hot water systems, blocked drains, and gas fitting. We added suburb-specific landing pages across the Illawarra region, implemented proper call tracking, and optimised their Google Business Profile with photos of completed jobs. Within 2 months of the new site launching, we were able to reduce their Google Ads spend by 60% while generating more leads organically.",
    results: [
      { label: "Revenue Growth", value: "+94%", description: "Near-doubled revenue within 6 months of the new site launching" },
      { label: "Ad Spend Saved", value: "$900/mo", description: "Reduced Google Ads from $1,500/mo to $600/mo with better results" },
      { label: "Cost Per Lead", value: "-72%", description: "Cost per lead dropped from $120 to $34 through organic traffic" },
      { label: "Organic Traffic", value: "+280%", description: "280% increase in organic search traffic within 5 months" },
    ],
    testimonial: {
      quote: "Our old website was embarrassing — customers told us they almost didn't call because of it. The new site looks professional and the phone hasn't stopped ringing. We've had to hire another plumber to keep up with demand.",
      name: "Chris M.",
      role: "Director, Precision Plumbing Illawarra",
    },
    services: ["Website Design", "Local SEO", "Google Ads Optimisation"],
    image: "/images/blog/plumber-web-design.webp",
    featured: true,
  },
  {
    id: "3",
    slug: "coastal-physio-wollongong",
    clientName: "Coastal Physiotherapy",
    industry: "Healthcare",
    location: "Wollongong, NSW",
    title: "Wollongong Physio Clinic Fills Their Booking Calendar With a New Website and SEO",
    excerpt: "Coastal Physiotherapy needed a modern website with online booking integration. We delivered a site that increased their new patient bookings by 165%.",
    challenge: "Coastal Physiotherapy had a basic WordPress site that was outdated, slow, and had no online booking capability. Patients had to call during business hours to book, which meant they were losing after-hours bookings to competitors with online scheduling. Their website also had poor mobile performance, which was critical since 78% of their traffic came from smartphones.",
    solution: "We built a clean, modern website with integrated online booking through their existing practice management software. Every service page — sports physio, back pain, post-surgery rehab — included a prominent 'Book Now' button. We optimised page load speed to under 2 seconds on mobile, added FAQ schema for common physiotherapy questions, and created content targeting 'physiotherapist Wollongong' and condition-specific searches like 'back pain treatment Wollongong'.",
    results: [
      { label: "New Bookings", value: "+165%", description: "165% increase in new patient bookings within the first quarter" },
      { label: "Online Bookings", value: "73%", description: "73% of all bookings now come through the website, up from 0%" },
      { label: "Mobile Speed", value: "1.8s", description: "Page load time reduced from 6.2 seconds to 1.8 seconds on mobile" },
      { label: "Google Ranking", value: "#1", description: "Ranking #1 for 'physiotherapist Wollongong' within 4 months" },
    ],
    testimonial: {
      quote: "The online booking system alone was worth it — we were losing so many patients who wanted to book outside of office hours. Now our calendar fills up automatically and we can focus on treating patients instead of answering phones.",
      name: "Dr. Sarah K.",
      role: "Principal Physiotherapist, Coastal Physiotherapy",
    },
    services: ["Website Design", "Local SEO", "Booking Integration"],
    image: "/images/blog/about-page-pic.jpg",
    featured: true,
  },
  {
    id: "4",
    slug: "summit-constructions-sydney",
    clientName: "Summit Constructions",
    industry: "Builder",
    location: "Sydney, NSW",
    title: "Sydney Builder Wins $2.4M in Projects From Their New Website in 12 Months",
    excerpt: "Summit Constructions needed a website that showcased their high-end residential builds. We created a portfolio-driven site that attracted premium clients.",
    challenge: "Summit Constructions was a boutique residential builder doing high-end renovations and new builds across Sydney's Inner West and Eastern Suburbs. They had no website and relied entirely on architect referrals. The owner wanted to reduce dependency on referrals and attract clients directly, but needed a site that reflected the quality of their $500K-$2M projects.",
    solution: "We designed a visually striking, portfolio-first website with full-screen project galleries, video walkthroughs, and detailed case studies for each completed build. The site featured a project cost calculator, a detailed 'Our Process' page to build confidence with potential clients, and was optimised for high-intent keywords like 'luxury home builder Sydney' and 'home renovation Inner West'. We also set up a content strategy with monthly blog posts showcasing project progress.",
    results: [
      { label: "Project Value", value: "$2.4M", description: "$2.4 million in new projects attributed directly to website enquiries in 12 months" },
      { label: "Enquiries", value: "8/month", description: "Averaging 8 qualified enquiries per month from organic search" },
      { label: "Referral Dependency", value: "-60%", description: "Reduced reliance on architect referrals by 60%" },
      { label: "Avg. Project Value", value: "+35%", description: "Website clients had 35% higher average project value than referral clients" },
    ],
    testimonial: {
      quote: "The website completely changed how clients perceive us before we even meet them. People come to consultations already sold on our work because they've spent 20 minutes browsing our project gallery. The quality of enquiries has been incredible.",
      name: "Tom W.",
      role: "Director, Summit Constructions",
    },
    services: ["Website Design", "Content Strategy", "Local SEO"],
    image: "/images/blog/hero-banner.png",
    featured: false,
  },
  {
    id: "5",
    slug: "green-thumb-landscaping",
    clientName: "Green Thumb Landscaping",
    industry: "Landscaper",
    location: "Shellharbour, NSW",
    title: "Shellharbour Landscaper Goes From Part-Time to Fully Booked in 3 Months",
    excerpt: "A one-man landscaping operation turned into a thriving business with a professional website and Google presence that filled his calendar.",
    challenge: "Green Thumb Landscaping was a one-man operation run by a landscaper who'd been doing weekend jobs through Gumtree and Facebook Marketplace. He wanted to go full-time but couldn't generate enough consistent leads. His only online presence was a Facebook page with 87 followers and no website.",
    solution: "We built an affordable, single-page website with a strong hero section, before-and-after photo gallery, service list with pricing guides, and a simple quote request form. We set up and optimised his Google Business Profile with professional photos of completed jobs, targeted 'landscaper Shellharbour' and 'garden design Illawarra' keywords, and helped him implement a simple review collection process after each job.",
    results: [
      { label: "Bookings", value: "Fully booked", description: "Went from part-time weekends to fully booked 5 days a week in 3 months" },
      { label: "Google Reviews", value: "4.9 stars", description: "Built up to 28 Google reviews with a 4.9 star average" },
      { label: "Weekly Enquiries", value: "12+", description: "Receiving 12+ quote requests per week, up from 1-2 via Gumtree" },
      { label: "Revenue", value: "+400%", description: "Revenue increased over 400% in the first 6 months" },
    ],
    testimonial: {
      quote: "I went from scrounging for weekend jobs on Gumtree to having a 3-week waitlist. I've even hired my first employee. The website and Google profile were the best investment I've made in my business.",
      name: "Jake H.",
      role: "Owner, Green Thumb Landscaping",
    },
    services: ["Website Design", "Google Business Profile", "Review Strategy"],
    image: "/images/blog/website-hosting.jpg",
    featured: false,
  },
  {
    id: "6",
    slug: "bright-clean-services",
    clientName: "Bright & Clean Services",
    industry: "Cleaning",
    location: "Wollongong, NSW",
    title: "Wollongong Cleaning Company Cuts Ad Spend 50% While Tripling Organic Leads",
    excerpt: "A commercial cleaning company was bleeding money on ineffective ads. We rebuilt their online presence and tripled their organic lead generation.",
    challenge: "Bright & Clean Services was spending $2,000/month on Google Ads with a poorly built landing page. Their bounce rate was 78% and cost per lead was $95. They had a template website from a cheap provider that looked identical to dozens of other cleaning companies. They needed to stand out and reduce their dependence on paid advertising.",
    solution: "We redesigned their website with a focus on commercial cleaning — office cleaning, strata cleaning, and end-of-lease cleaning. Each service had its own optimised page with pricing transparency, a checklist of what's included, and trust signals like insurance certificates and police check badges. We implemented local SEO targeting 'commercial cleaning Wollongong' and 'office cleaning Illawarra', and set up automated review request emails after each completed job.",
    results: [
      { label: "Organic Leads", value: "+210%", description: "210% increase in organic leads within 4 months" },
      { label: "Ad Spend", value: "-50%", description: "Cut Google Ads spend from $2,000 to $1,000/month" },
      { label: "Cost Per Lead", value: "$31", description: "Blended cost per lead dropped from $95 to $31" },
      { label: "Bounce Rate", value: "34%", description: "Bounce rate improved from 78% to 34% on the new site" },
    ],
    testimonial: {
      quote: "We were throwing money at Google Ads and getting nothing back. Digital Edge rebuilt our website and now we get more leads from organic search than we ever got from ads — and it costs us half as much. Wish we'd done this years ago.",
      name: "Maria L.",
      role: "Operations Manager, Bright & Clean Services",
    },
    services: ["Website Design", "Local SEO", "Google Ads Optimisation"],
    image: "/images/blog/small-business-features.webp",
    featured: false,
  },
];
