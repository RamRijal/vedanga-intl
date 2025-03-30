export const heroSlides = [
  {
    image: "/images/foto1.jpg",
    title: "Excellence in Education",
    subtitle: "Nurturing Minds, Shaping Futures",
  },
  {
    image: "/images/foto2.jpg",
    title: "World-Class Facilities",
    subtitle: "Creating the Perfect Learning Environment",
  },
  {
    image: "/images/foto16.jpg",
    title: "Holistic Development",
    subtitle: "Beyond Academics",
  },
  {
    image: "/images/foto8.jpg",
    title: "World-Class Facilities",
    subtitle: "Creating the Perfect Learning Environment",
  },
  {
    image: "/images/foto3.jpg",
    title: "Holistic Development",
    subtitle: "Beyond Academics",
  },
];


export const galleryImages = [
  "/images/foto5.jpg",
  "/images/foto12.jpg",
  "/images/foto13.jpg",
  "/images/foto14.jpg",
];

export const news = [
  {
    id: 1,
    title: "Outstanding Academic Results in National Examinations",
    excerpt:
      "Our students have achieved exceptional results in this year's national examinations, with 95% scoring distinction grades across all subjects.",
    date: "2024-03-15",
    category: "Academic",
    author: "Admin",
    image: "/images/foto3.jpg",
    slug: "outstanding-academic-results",
    color: "bg-blue-100 text-blue-600",
    content: `
      <p class="mb-4">We are proud to announce that our students have achieved exceptional results in this year's national examinations. The dedication of our students, combined with the support of our faculty and parents, has led to outstanding academic performance across all subjects.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Key Highlights</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>95% of students scored distinction</li>
        <li>100% pass rate across all subjects</li>
        <li>Top scores in Mathematics and Sciences</li>
        <li>Multiple students ranked in national top 10</li>
      </ul>

      <p class="mb-4">This achievement reflects our commitment to academic excellence and our holistic approach to education. We continue to strive for even better results while ensuring our students develop into well-rounded individuals.</p>
    `,
    tags: ["Academic", "Achievement", "Examinations"],
  },
  {
    id: 2,
    title: "New STEM Laboratory Inauguration",
    excerpt:
      "State-of-the-art STEM laboratory inaugurated with cutting-edge technology to enhance scientific learning and innovation.",
    date: "2024-03-10",
    category: "Facilities",
    author: "Principal",
    image: "/images/foto4.jpg",
    slug: "stem-lab-inauguration",
    color: "bg-green-100 text-green-600",
    content: `
      <p class="mb-4">We are excited to announce the inauguration of our new STEM laboratory, equipped with the latest technology to foster innovation and scientific learning.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Features Include</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>3D printing and robotics stations</li>
        <li>Virtual reality science simulations</li>
        <li>Advanced microscopy equipment</li>
        <li>Collaborative research spaces</li>
      </ul>

      <p class="mb-4">This facility represents our commitment to preparing students for careers in science and technology, with hands-on learning experiences that inspire creativity and problem-solving.</p>
    `,
    tags: ["STEM", "Facilities", "Innovation"],
  },
  {
    id: 3,
    title: "International Student Exchange Program Launch",
    excerpt:
      "New global partnership program offering students international exposure and cross-cultural learning opportunities.",
    date: "2024-03-05",
    category: "International",
    author: "Admin",
    image: "/images/foto5.jpg",
    slug: "student-exchange-program",
    color: "bg-purple-100 text-purple-600",
    content: `
      <p class="mb-4">We are thrilled to launch our new International Student Exchange Program in partnership with leading schools across three continents.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Program Highlights</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Semester-long exchanges with partner schools</li>
        <li>Cultural immersion experiences</li>
        <li>Language learning opportunities</li>
        <li>Global classroom collaborations</li>
      </ul>

      <p class="mb-4">This program will broaden our students' horizons and prepare them to be global citizens in an increasingly interconnected world.</p>
    `,
    tags: ["International", "Exchange", "Global"],
  },
  {
    id: 4,
    title: "Annual Sports Day Champions Crowned",
    excerpt:
      "Record-breaking performances at this year's sports day with new school records set in multiple events.",
    date: "2024-02-28",
    category: "Sports",
    author: "Sports Director",
    image: "/images/foto7.jpg",
    slug: "sports-day-champions",
    color: "bg-red-100 text-red-600",
    content: `
      <p class="mb-4">Our annual sports day was a tremendous success, with students demonstrating exceptional athleticism and sportsmanship.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Notable Achievements</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>New school records in 100m dash and long jump</li>
        <li>Close competition in team events</li>
        <li>Outstanding performances from all age groups</li>
        <li>Spirit award for best team support</li>
      </ul>

      <p class="mb-4">Congratulations to all participants for their dedication and to the champions in each category.</p>
    `,
    tags: ["Sports", "Achievement", "Athletics"],
  },
  {
    id: 5,
    title: "School Wins Environmental Sustainability Award",
    excerpt:
      "Recognized for our comprehensive green initiatives and student-led conservation projects.",
    date: "2024-02-20",
    category: "Achievement",
    author: "Eco Club",
    image: "/images/foto9.jpg",
    slug: "sustainability-award",
    color: "bg-yellow-100 text-yellow-600",
    content: `
      <p class="mb-4">Our school has been honored with the prestigious Green Schools Award for our outstanding environmental initiatives.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Green Programs</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Solar panel installation covering 60% of energy needs</li>
        <li>Comprehensive recycling program</li>
        <li>Student-led organic garden</li>
        <li>Water conservation systems</li>
      </ul>

      <p class="mb-4">This recognition reflects our commitment to environmental stewardship and sustainable education.</p>
    `,
    tags: ["Environment", "Award", "Sustainability"],
  },
];
export const Newscategories = [
  "All",
  "Academic",
  "Events",
  "Facilities",
  "International",
  "Sports",
];
export const latestNews = (() => {
  const now = new Date();
  const recentNews = news.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ); // Sort newest first

  return recentNews.slice(0, 3); // Return the 3 most recent news items
})();
export const GalleryImages = [
  {
    id: 1,
    src: "/images/foto1.jpg",
    category: "Campus Life",
    title: "Student Life",
    description: "Students enjoying campus activities",
    date: "March 15, 2024",
  },
  {
    id: 2,
    src: "/images/foto2.jpg",
    category: "Academics",
    title: "Library",
    description: "Our state-of-the-art library facility",
    date: "March 10, 2024",
  },
  {
    id: 3,
    src: "/images/foto3.jpg",
    category: "Sports",
    title: "Annual Sports Meet",
    description: "Highlights from our annual sports day",
    date: "March 5, 2024",
  },
  {
    id: 4,
    src: "/images/foto4.jpg",
    category: "Events",
    title: "Cultural Festival",
    description: "Celebrating diversity through cultural performances",
    date: "March 1, 2024",
  },
  {
    id: 5,
    src: "/images/foto5.jpg",
    category: "Activities",
    title: "Science Fair",
    description: "Students showcasing their scientific projects",
    date: "February 25, 2024",
  },
  {
    id: 6,
    src: "/images/foto6.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 7,
    src: "/images/foto7.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 8,
    src: "/images/foto8.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 9,
    src: "/images/foto9.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 10,
    src: "/images/foto10.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 11,
    src: "/images/foto19.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 12,
    src: "/images/foto12.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 13,
    src: "/images/foto13.jpg",
    category: "Campus Life",
    title: "Student Council",
    description: "Student leaders in action",
    date: "February 20, 2024",
  },
  {
    id: 14,
    src: "/images/foto14.jpg",
    category: "Campus Life",
    title: "Student Life",
    description: "Students enjoying campus activities",
    date: "March 15, 2024",
  },
  {
    id: 15,
    src: "/images/foto15.jpg",
    category: "Academics",
    title: "Library",
    description: "Our state-of-the-art library facility",
    date: "March 10, 2024",
  },
  {
    id: 16,
    src: "/images/foto16.jpg",
    category: "Sports",
    title: "Annual Sports Meet",
    description: "Highlights from our annual sports day",
    date: "March 5, 2024",
  },
  {
    id: 17,
    src: "/images/foto17.jpg",
    category: "Events",
    title: "Cultural Festival",
    description: "Celebrating diversity through cultural performances",
    date: "March 1, 2024",
  },
  {
    id: 18,
    src: "/images/foto18.jpg",
    category: "Activities",
    title: "Science Fair",
    description: "Students showcasing their scientific projects",
    date: "February 25, 2024",
  },
];

export const Gallerycategories = [
  "All",
  "Campus Life",
  "Academics",
  "Sports",
  "Events",
  "Activities",
];

export const notices = [
  {
    title: "Admission Open for Academic Year 2024-25",
    date: "2024-02-15",
    category: "Admissions",
    content:
      "Applications are now being accepted for all grades. Limited seats available.",
  },
  {
    title: "Parent-Teacher Meeting Schedule",
    date: "2024-02-10",
    category: "Academic",
    content:
      "The first term parent-teacher meeting will be held on March 1st, 2024.",
  },
  {
    title: "Holiday Notice: Holi Festival",
    date: "2024-02-05",
    category: "Holiday",
    content:
      "School will remain closed on March 25th, 2024 for Holi celebrations.",
  },
];
export const events = [
  {
    id: 1,
    title: "Annual Sports Meet 2024",
    slug: "annual-sports-meet-2024",
    date: "2024-03-15",
    time: "8:00 AM - 5:00 PM",
    venue: "School Sports Complex",
    category: "Sports",
    image:
'/images/foto14.jpg',    description:
      "Join us for three days of athletic excellence featuring track and field events, team sports, and special competitions.",
    schedule: [
      {
        day: "Day 1",
        date: "March 15, 2024",
        events: [
          "8:00 AM - Opening Ceremony",
          "9:30 AM - Track Events Begin",
          "4:00 PM - Day 1 Awards",
        ],
      },
      {
        day: "Day 2",
        date: "March 16, 2024",
        events: [
          "8:30 AM - Field Events",
          "1:00 PM - Team Sports",
          "4:30 PM - Day 2 Awards",
        ],
      },
      {
        day: "Day 3",
        date: "March 17, 2024",
        events: [
          "9:00 AM - Finals Begin",
          "2:00 PM - Championship Matches",
          "4:00 PM - Closing Ceremony",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Science & Technology Fair",
    slug: "science-technology-fair",
    date: "2024-04-10",
    time: "10:00 AM - 3:00 PM",
    venue: "School Auditorium",
    category: "Academic",
    image:
'/images/foto13.jpg',    description:
      "Showcase of student projects in robotics, renewable energy, and computer science innovations.",
    schedule: [
      {
        day: "Main Event",
        date: "April 10, 2024",
        events: [
          "10:00 AM - Exhibit Opens",
          "11:30 AM - Guest Speaker",
          "1:00 PM - Project Demonstrations",
          "2:30 PM - Awards Ceremony",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cultural Festival",
    slug: "cultural-festival",
    date: "2024-05-22",
    time: "6:00 PM - 9:00 PM",
    venue: "School Grounds",
    category: "Cultural",
    image:
'/images/foto3.jpg',    description:
      "Celebration of diverse cultures through performances, food, and art from around the world.",
    schedule: [
      {
        day: "Festival Day",
        date: "May 22, 2024",
        events: [
          "6:00 PM - Opening Ceremony",
          "6:30 PM - Cultural Performances",
          "7:30 PM - Food Fair",
          "8:30 PM - Closing Remarks",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    slug: "graduation-ceremony",
    date: "2024-06-08",
    time: "2:00 PM - 5:00 PM",
    venue: "City Convention Center",
    category: "Academic",
    image:
'/images/foto10.jpg',    description:
      "Celebrating the achievements of our graduating class with speeches, awards, and diploma presentation.",
    schedule: [
      {
        day: "Graduation Day",
        date: "June 8, 2024",
        events: [
          "2:00 PM - Processional",
          "2:30 PM - Speeches",
          "3:30 PM - Diploma Presentation",
          "4:30 PM - Reception",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Parent-Teacher Conference",
    slug: "parent-teacher-conference",
    date: "2024-07-12",
    time: "4:00 PM - 7:00 PM",
    venue: "School Classrooms",
    category: "Academic",
    image:
'/images/foto5.jpg',    description:
      "Opportunity for parents to meet with teachers and discuss student progress and goals.",
    schedule: [
      {
        day: "Conference Day",
        date: "July 12, 2024",
        events: [
          "4:00 PM - Sessions Begin",
          "5:30 PM - Principal's Address",
          "6:00 PM - Continued Sessions",
          "7:00 PM - Event Concludes",
        ],
      },
    ],
  },
];

export const Eventcategories = [
  "All",
  "Academic",
  "Sports",
  "Cultural",
  "Community",
];

export const latestEvents = (() => {
  const now = new Date();
  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= now) // Only future events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort soonest first

  // If fewer than 3 upcoming events, add the most recent past events
  if (upcomingEvents.length < 3) {
    const pastEvents = events
      .filter((event) => new Date(event.date) < now)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort newest first

    return [
      ...upcomingEvents,
      ...pastEvents.slice(0, 3 - upcomingEvents.length),
    ];
  }

  return upcomingEvents.slice(0, 4);
})();
