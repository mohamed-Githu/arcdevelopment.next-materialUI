import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data";
import automationAnimation from "../../animations/automationAnimation/data";
import uxAnimation from "../../animations/uxAnimation/data";

export const customSoftwareOptions = [
  {
    title: "Digital Documents & Data",
    animationData: documentsAnimation,
    styles: { maxWidth: 275, maxHeight: 275, minHeight: 250},
    body: [
      "Reduce Errors. Reduce Waste. Reduce Costs.",
      "Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.",
      "By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.",
    ],
    align: "left",
  },
  {
    title: "Scale",
    animationData: scaleAnimation,
    styles: { maxWidth: 280, maxHeight: 260 },
    body: [
      "Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.",
    ],
    align: "right"
  },
  {
    title: "Root-Cause Analysis",
    icon: "/assets/root.svg",
    body: [
      "Many problems are merely symptoms of larger, underlying issues.",
      "We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology",
    ],
    align: "center",
  },
  {
    title: "Automation",
    animationData: automationAnimation,
    styles: { maxWidth: 250, maxHeight: 240 },
    body: [
      "Why waste time when you don’t have to?",
      "We can help you identify processes with time or event based actions which can now easily be automated.",
      " Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.",
    ],
    aling: "left",
  },
  {
    title: "User Experience Design",
    animationData: uxAnimation,
    styles: { maxWidth: 155, maxHeight: 310 },
    body: [
      "A good design that isn’t usable isn’t a good design.",
      "So why are so many pieces of software complicated, confusing, and frustrating?",
      "By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.",
    ],
    align: "right"
  }
];

export const topSectionBody = [
  "Custom Software Development",
  "Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.",
  "Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.",
  "Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options",
  "We create exactly what you what, exactly how you want it.",
];

export const featuresOptions = [
  {
    title: "Save Energy",
    icon: "/assets/bulb.svg",
  },
  {
    title: "Save Time",
    icon: "/assets/stopwatch.svg",
  },
  {
    title: "Save Money",
    icon: "/assets/cash.svg",
  }
]
