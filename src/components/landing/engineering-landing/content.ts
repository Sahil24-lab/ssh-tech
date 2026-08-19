import type { TestimonialItem } from "@ssh/brand-ui";

export const engineeringTestimonials: TestimonialItem[] = [
  {
    preview: "Bridging the gap between vision & execution",
    quote:
      "Working with Sahil was a game-changer. He was instrumental in bridging the gap between what we needed operationally and how to actually build it. His ability to translate complex requirements into production-ready systems ensured smooth execution and timely delivery. He played a critical role in designing and integrating multiple systems into a cohesive architecture that scaled with us. He thrives in high-pressure environments, tackling challenges head-on with a problem-solving approach that drives real results.",
    author: "Ben Howen",
    role: "Head of Product at Playlobby",
    rating: 5,
    image: "/testimonials/Ben.jpeg",
  },
  {
    preview: "Prioritizing What Matters Most",
    quote:
      "I've been fortunate to know Sahil for quite some time and I'm always eager to team up with him on new projects. Sahil's energy for crafting solutions is contagious. He strikes the perfect balance between focusing on business outcomes and tackling the technical complexity that comes with integrating AI into real operations. Sahil thrives on challenges and is always ready to dive into complex problems, determined to emerge with practical, production-ready solutions. His steadfast work ethic, coupled with his engaging personality, makes working together a smooth and enjoyable experience.",
    author: "Mack Saraswat",
    role: "Serial Entrepreneur",
    rating: 5,
    image: "/testimonials/Mack.jpeg",
  },
];

export const selectedWork = [
  {
    organisation: "3ME Technology",
    title: "Battery systems and manufacturing automation",
    outcome: "2 months to 3 days",
    description:
      "Built testing and automation tooling that shortened the manufacturing cycle. Embedded C++ work on the BMS platform supported more than AU$4M in sales.",
    disciplines: "Embedded C++ · CAN · BMS · test automation",
  },
  {
    organisation: "Vehicle electrification",
    title: "Control-system reverse engineering",
    outcome: "A contract-defining prototype",
    description:
      "Reverse-engineered vehicle control modules on a 15-tonne Volvo loader and built a circuit to reproduce sensor signals. The work led to a multi-million-dollar electrification contract.",
    disciplines: "Vehicle controls · instrumentation · systems integration",
  },
  {
    organisation: "Elite Robotics",
    title: "Autonomous electric vehicle platform",
    outcome: "From sensors to motion",
    description:
      "Built the C++ and ROS platform across Raspberry Pi and Jetson, integrating GPS, IMU and LiDAR for real-time navigation and control.",
    disciplines: "C++ · ROS · sensor fusion · motion planning",
  },
  {
    organisation: "Operational software",
    title: "Security patrol route optimisation",
    outcome: "30% less overlap and idle time",
    description:
      "Built a Python backend using Google Maps data to improve route planning for security patrol operations.",
    disciplines: "Python · route optimisation · operational tooling",
  },
] as const;

export const engagementSteps = [
  {
    title: "Diagnose the operation",
    description:
      "Map the workflow, interfaces, constraints and failure modes that matter. This defines the technical risk worth removing first.",
  },
  {
    title: "Prove the hard part",
    description:
      "Build a focused prototype or architecture spike around the highest-risk assumption, then test it with the people and systems involved.",
  },
  {
    title: "Integrate and deliver",
    description:
      "Turn the evidence into production engineering, system integration, validation and a clear handover path.",
  },
] as const;
