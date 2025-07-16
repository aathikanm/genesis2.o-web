import React from 'react';
import { useParams, Link } from 'react-router-dom';

const eventDetails = {
  sdginnovationexpo: {
    title: "Pitch for the Planet: SDG Innovation Expo",
    description: "Students showcase projects addressing one or more SDGs, judged for innovation, feasibility, and impact.",
    image: "/images/events/sdg-pitch.jpg",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Highlight student-led sustainable innovation.",
    date: "July 31, 2025 | 1:30 PM - 3:30 PM",
    venue: "Expo Arena"
  },
  codeforcause: {
    title: "Code for Cause: The Humanitarian Hack-Sprint",
    description: "An individual coding challenge with real-world humanitarian twist problems (disaster, energy, health, etc.)",
    image: "/images/events/code-humanity.jpg",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Promote problem-solving for social good.",
    date: "July 31, 2025 | 1:30 PM - 3:30 PM",
    venue: "Coding Lab"
  },
  brandingbeyondborders: {
    title: "Craft Your Digital Self: Branding Beyond Borders",
    description: "Hands-on workshop to help students design impactful resumes and LinkedIn profiles.",
    image: "/images/events/linkedin-resume.jpg",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Empower students to build strong digital presence.",
    date: "July 31, 2025 | 1:30 PM - 3:30 PM",
    venue: "Career Hub"
  },
  greenmind: {
    title: "GreenMind: Sustainable AI for a Better Tomorrow",
    description: "Introductory and practical sessions on AI that prioritize green computing, ethics, and inclusive intelligence for SDG-aligned solutions.",
    image: "/images/events/ai-sustainable.jpg",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Introduce students to sustainable AI principles.",
    date: "August 1, 2025 | 9:30 AM - 11:00 AM",
    venue: "AI Lab"
  },
  urbanthink2025: {
    title: "UrbanThink 2025: Designing Cities that Feel Human",
    description: "A challenge for students to reimagine urban spaces with sustainable, accessible, and human-first innovations rooted in SDG 11.",
    image: "/images/events/smart-city.jpg",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Promote SDG-based urban ideation.",
    date: "August 1, 2025 | 9:30 AM - 11:00 AM",
    venue: "Design Studio"
  },
  voicesoffire: {
    title: "Voices of Fire: Igniting Purpose-Driven Careers with IEEE",
    description: "A dynamic panel where IEEE visionaries share transformative insights on building careers fueled by innovation, impact, and global responsibility.",
    image: "/images/events/panel-discussion.jpg",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Inspire students through leadership journeys.",
    date: "August 1, 2025 | 1:30 PM - 2:30 PM",
    venue: "Main Auditorium"
  }
};

const EventDetail = () => {
  const { slug } = useParams();
  const event = eventDetails[slug];

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
          <p className="text-gray-400 mb-6">The event you're looking for doesn't exist.</p>
          <Link to="/" className="text-yellow-400 underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#123A94] text-white font-sans pt-[80px] px-8 pb-8 space-y-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[300px] object-cover rounded-lg shadow-xl"
        />
        <h1 className="text-4xl font-bold text-yellow-400">{event.title}</h1>
        <p className="text-blue-200 text-lg">{event.description}</p>

        <div className="space-y-4 text-blue-100">
          <p><strong className="text-yellow-400">Focus:</strong> {event.focus}</p>
          <p><strong className="text-yellow-400">Objective:</strong> {event.objective}</p>
          <p><strong className="text-yellow-400">Date & Time:</strong> {event.date}</p>
          <p><strong className="text-yellow-400">Venue:</strong> {event.venue}</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
