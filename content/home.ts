import type {
  HeroContent,
  SponsorItem,
  SponsorsContent,
  BenefitItem,
  BenefitsContent,
  FeatureItem,
  FeaturesContent,
  ServiceItem,
  ServicesContent,
  TestimonialItem,
  TestimonialsContent,
  SocialLink,
  TeamMember,
  TeamContent,
  PricingPlan,
  PricingContent,
  ContactInfoBlock,
  ContactContent,
  FaqItem,
  FaqContent,
  FooterLink,
  FooterColumn,
  FooterContent,
  NavRoute,
  NavFeature,
  NavbarContent,
  HomeContent,
} from "./home";

// ─── TaskNest Branding Content ──────────────────────────────────────────────

export const homeContent: HomeContent = {
  hero: {
    badgeInner: "New",
    badgeOuter: "TaskNest is live",
    titleBefore: "",
    titleHighlight: "Organize Your Team’s Tasks with TaskNest",
    titleAfter: "",
    subtitle:
      "All your tasks, projects, and deadlines in a single, collaborative dashboard. Boost productivity and keep your team on track with TaskNest.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "TaskNest dashboard preview",
  },

  sponsors: {
    heading: "Trusted by productive teams",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Postgres" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why TaskNest",
    heading: "Stay organized, stay productive",
    description:
      "TaskNest brings clarity and collaboration for every team, so you can focus on doing your best work.",
    items: [
      {
        icon: "Blocks",
        title: "Centralized Task Management",
        description:
          "Create, assign, and manage all your tasks in one intuitive workspace.",
      },
      {
        icon: "Users",
        title: "Collaborative Workflows",
        description:
          "Work together with your team, share updates, and track progress in real-time.",
      },
      {
        icon: "CalendarClock",
        title: "Stay On Schedule",
        description:
          "Set deadlines, get reminders, and never miss an important task again.",
      },
    ],
  },

  features: {
    eyebrow: "Why Choose TaskNest?",
    heading: "Why Choose TaskNest?",
    subtitle:
      "Built for teams to work together, keep projects on track, and finish more every week.",
    items: [
      {
        icon: "Blocks",
        title: "Centralized Task Management",
        description:
          "Create, assign, and manage all your tasks in one intuitive workspace.",
      },
      {
        icon: "Users",
        title: "Collaborative Workflows",
        description:
          "Work together with your team, share updates, and track progress in real-time.",
      },
      {
        icon: "CalendarClock",
        title: "Stay On Schedule",
        description:
          "Set deadlines, get reminders, and never miss an important task again.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Organize. Track. Succeed.",
    subtitle:
      "From daily to-dos to goal-shattering projects, TaskNest powers better teamwork.",
    items: [
      {
        title: "Fast Task Creation",
        description: "Quickly add, assign, and organize tasks from anywhere.",
        pro: false,
      },
      {
        title: "Team Inbox",
        description: "Central dashboard for all conversations and updates.",
        pro: false,
      },
      {
        title: "Reminders & Deadlines",
        description: "Custom reminders, calendar sync, and due date tracking.",
        pro: false,
      },
      {
        title: "Real-Time Collaboration",
        description: "Comment, update status, and track progress as a team.",
        pro: true,
      },
    ],
  },

  testimonials: {
    eyebrow: "What Our Users Say",
    heading: "What Our Users Say",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Alex M.",
        role: "Operations Manager",
        comment:
          "TaskNest transformed how our team collaborates and gets things done.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Jordan R.",
        role: "Project Lead",
        comment:
          "Simple, effective, and exactly what we needed for our projects.",
        rating: 4.9,
      },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the TaskNest team",
    members: [],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, Transparent Pricing",
    subtitle: "Start free, grow with TaskNest as your team needs.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for individuals and small teams to get organized.",
        buttonText: "Start for free",
        benefits: [
          "Unlimited tasks",
          "Up to 3 team members",
          "Real-time updates",
          "Basic notifications",
        ],
      },
      {
        title: "Pro",
        popular: true,
        price: 12,
        description:
          "For growing teams that want additional collaboration tools.",
        buttonText: "Start 14-day trial",
        benefits: [
          "Unlimited tasks and members",
          "Advanced reporting",
          "Integrations (Calendar & more)",
          "Priority Support",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 39,
        description: "Custom solutions for enterprises and large teams.",
        buttonText: "Contact sales",
        benefits: [
          "Dedicated account manager",
          "Custom integrations",
          "Audit logs",
          "SAML/SSO support",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in Touch",
    description:
      "Want to learn more or need support? Contact our team and we’ll respond as soon as possible.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: [
      "General Inquiry",
      "Product Demo",
      "Tech Support",
      "Partnership",
    ],
    formSubmitLabel: "Send message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Is TaskNest free to get started?",
        answer:
          "Yes, you can start using TaskNest for free with core features forever. Upgrade anytime for more powerful tools.",
      },
      {
        question: "Does TaskNest support teams?",
        answer:
          "Absolutely! Collaborate, assign tasks, and track progress with multiple team members.",
      },
      {
        question: "Can I get reminders for deadlines?",
        answer:
          "Yes—set due dates and TaskNest will remind you so you never miss a deadline.",
      },
      {
        question: "Do you integrate with external calendars?",
        answer:
          "Calendar and other productivity integrations are coming soon to TaskNest Pro and up.",
      },
    ],
  },

  footer: {
    brandName: "TaskNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 TaskNest.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "TaskNest",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "TaskNest Preview" },
    features: [
      {
        title: "Centralized Management",
        description:
          "All tasks and collaboration tools in one dashboard, for teams and individuals.",
      },
      {
        title: "Easy Collaboration",
        description:
          "Discuss, assign, and review team tasks instantly.",
      },
      {
        title: "Stay On Track",
        description:
          "Reminders, notifications, and calendar sync keep you moving forward.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: {
      href: "https://github.com",
      ariaLabel: "View TaskNest GitHub",
    },
  },
};

// For backward compatibility
export function getHomeContent(): HomeContent {
  return homeContent;
}