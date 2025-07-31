import { Code, Camera, Mic, Palette, Music } from "lucide-react";

export const clubs = [
  {
    name: "Robotics Club",
    slug: "robotics-club",
    description:
      "Learn coding, circuits, and AI-driven technology. Work on real-world robotics projects and automation. Collaborate on hardware cum software innovations for competitions.",
    icon: <Code className="h-6 w-6" />,
    members: 40,
    meetingDay: "Thursday",
    activities: ["Coding Workshops", "Robotics Projects", "Competitions"],
    advisor: "Ms. Sarah Chen",
    color: "bg-green-100 text-green-600",
    image: "/images/foto18.jpg", // Add image path
  },
  {
    name: "Digital Content Creation Club",
    slug: "digital-content-creation-club",
    description:
      "Learn video editing, animation, and graphic design. Create content for social media, school projects, and events. Work on branding and multimedia storytelling.",
    icon: <Camera className="h-6 w-6" />,
    members: 30,
    meetingDay: "Friday",
    activities: ["Video Editing", "Animation", "Graphic Design"],
    advisor: "Mr. James Wilson",
    color: "bg-amber-100 text-amber-600",
    image: "/images/foto21.jpg", // Add image path
  },
  {
    name: "Studio Club",
    slug: "studio-club",
    description:
      "Record and edit podcasts on student life, tech, and creativity. Share your voice through poetry readings and storytelling sessions. Collaborate with the Digital Content Club for high-quality productions.",
    icon: <Mic className="h-6 w-6" />,
    members: 25,
    meetingDay: "Monday",
    activities: ["Podcasting", "Poetry Readings", "Storytelling"],
    advisor: "Mrs. Lisa Chen",
    color: "bg-red-100 text-red-600",
    image: "/images/foto15.jpg", // Add image path
  },
  {
    name: "Arts Club",
    slug: "arts-club",
    description:
      "Explore sketching, painting, and creative writing. Work on mural projects and school exhibitions.",
    icon: <Palette className="h-6 w-6" />,
    members: 32,
    meetingDay: "Wednesday",
    activities: ["Sketching", "Painting", "Creative Writing"],
    advisor: "Mr. Robert Taylor",
    color: "bg-purple-100 text-purple-600",
    image: "/images/foto5.jpg", // Add image path
  },
  {
    name: "Music & Dance Club",
    slug: "music-and-dance-club",
    description:
      "Learn instrumental and vocal performance at school competitions. Explore different genres from classical to modern.",
    icon: <Music className="h-6 w-6" />,
    members: 40,
    meetingDay: "Monday",
    activities: ["Instrumental Practice", "Vocal Performance", "Competitions"],
    advisor: "Mrs. Lisa Chen",
    color: "bg-blue-100 text-blue-600",
    image: "/images/foto7.jpg",  // Add image path
  },
];
