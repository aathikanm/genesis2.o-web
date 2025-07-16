import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBullseye, FaCalendarAlt, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';

const eventDetails = {
  sdginnovationexpo: {
    title: "Pitch for the Planet: SDG Innovation Expo",
    description: "Students showcase projects addressing one or more SDGs, judged for innovation, feasibility, and impact.",
    image: "/images/expo.png",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Highlight student-led sustainable innovation.",
    date: "July 31, 2025 | 1:30 PM - 4:00 PM",
    venue: "Sigma"
  },
  codeforcause: {
    title: "Code for Cause: The Humanitarian Hack-Sprint",
    description: "An individual coding challenge with real-world humanitarian twist problems (disaster, energy, health, etc.)",
    image: "/images/code.png",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Promote problem-solving for social good.",
    date: "July 31, 2025 | 1:30 PM - 4:00 PM",
    venue: "Alpha"
  },
  brandingbeyondborders: {
    title: "Craft Your Digital Self: Branding Beyond Borders",
    description: "Hands-on workshop to help students design impactful resumes and LinkedIn profiles.",
    image: "/images/linkedin.png",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Empower students to build strong digital presence.",
    date: "July 31, 2025 | 2:00 PM - 3:00 PM",
    venue: "Beta"
  },
  greenmind: {
    title: "GreenMind: Sustainable AI for a Better Tomorrow",
    description: "Introductory and practical sessions on AI that prioritize green computing, ethics, and inclusive intelligence for SDG-aligned solutions.",
    image: "/images/AI.png",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Introduce students to sustainable AI principles.",
    date: "August 1, 2025 | 9:30 AM - 11:00 AM",
    venue: "Alpha"
  },
  urbanthink2025: {
    title: "UrbanThink 2025: Designing Cities that Feel Human",
    description: "A challenge for students to reimagine urban spaces with sustainable, accessible, and human-first innovations rooted in SDG 11.",
    image: "/images/smart-city.png",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Promote SDG-based urban ideation.",
    date: "August 1, 2025 | 9:30 AM - 11:00 AM",
    venue: "Beta"
  },
  voicesoffire: {
    title: "Voices of Fire: Igniting Purpose-Driven Careers with IEEE",
    description: "A dynamic panel where IEEE visionaries share transformative insights on building careers fueled by innovation, impact, and global responsibility.",
    image: "/images/Ieee.png",
    focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
    objective: "Inspire students through leadership journeys.",
    date: "August 1, 2025 | 1:30 PM - 2:30 PM",
    venue: "Sigma"
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

  const infoCards = [
    { label: "Focus", value: event.focus, icon: <FaLightbulb className="text-yellow-400" /> },
    { label: "Objective", value: event.objective, icon: <FaBullseye className="text-yellow-400" /> },
    { label: "Date & Time", value: event.date, icon: <FaCalendarAlt className="text-yellow-400" /> },
    { label: "Venue", value: event.venue, icon: <FaMapMarkerAlt className="text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen w-full bg-[#123A94] text-white font-sans pt-[80px] px-6 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-yellow-400 bg-white/5">
       <img
  src={event.image}
  alt={event.title}
  className="w-full max-h-[500px] object-contain"
/>

        </div>

        {/* Title & Description */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">{event.title}</h1>
          <p className="text-blue-200 text-lg">{event.description}</p>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-blue-500/30 hover:scale-[1.02] transition-transform"
            >
              <div className="text-2xl">{card.icon}</div>
              <div>
                <p className="text-yellow-300 font-semibold">{card.label}</p>
                <p className="text-blue-100">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
