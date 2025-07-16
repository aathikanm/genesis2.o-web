import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-07-31T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white font-sans p-8 space-y-20 overflow-x-hidden">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/sairam-nu-eta.jpeg"
          alt="Sri Sairam Engineering College"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-extrabold">
          <span className="text-yellow-400">GENESIS</span> 2.0
        </h1>
        <p className="text-blue-200 text-xl">HumAInity 2025: Where Intelligence Meets Intention</p>
        <p className="text-2xl font-semibold text-yellow-400">July 31 & August 1, 2025</p>

        {/* Countdown Timer Only */}
<div className="w-full max-w-md mx-auto text-center bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-8 sm:py-10 space-y-6 shadow-lg mt-8">
  <div className="flex justify-center gap-6 sm:gap-10 text-white text-2xl sm:text-3xl font-bold">
    <div className="flex flex-col items-center">
      <span>{timeLeft.days.toString().padStart(2, '0')}</span>
      <span className="text-sm sm:text-base font-medium text-blue-200">Days</span>
    </div>
    <div className="flex flex-col items-center">
      <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
      <span className="text-sm sm:text-base font-medium text-blue-200">Hours</span>
    </div>
    <div className="flex flex-col items-center">
      <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
      <span className="text-sm sm:text-base font-medium text-blue-200">Minutes</span>
    </div>
    <div className="flex flex-col items-center">
      <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
      <span className="text-sm sm:text-base font-medium text-blue-200">Seconds</span>
    </div>
  </div>

  {/* Register Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg sm:text-xl shadow-md hover:bg-yellow-300 transition"
  >
    Register Now
  </motion.button>
</div>

      </motion.div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: faCalendar,
            title: "Two-Day Symposium",
            description: "Expert talks, competitions, and hands-on workshops"
          },
          {
            icon: faUsers,
            title: "3,500+ Participants",
            description: "Connect with IEEE Madras Section professionals"
          },
          {
            icon: faLightbulb,
            title: "SDG Aligned",
            description: "Innovating for the UN Sustainable Development Goals"
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-blue-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Sairam Institution Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-10 mb-20 flex flex-col lg:flex-row gap-10"
      >
        <img
          src="/images/founder.png"
          alt="MJF. Ln. Leo Muthu"
          className="w-full lg:w-[300px] object-contain rounded-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Sri Sairam Engineering College
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            Established in 1995 by <strong>MJF.Ln.Leo Muthu</strong>, Chairman of Sapthagiri Educational Trust,
            Sri Sairam Engineering College is a premier non-profitable, non-minority institution.
            With a commitment to excellence, the institution spans over <strong>300 acres</strong> and houses
            top-tier laboratories, digital classrooms, a modern library, and a superlative sports complex.
            Known for fostering innovation and sustainability, it has become one of India’s leading engineering colleges.
            Its sprawling campus includes state-of-the-art buildings, auditoriums, hostels, and recreational facilities—
            all dedicated to nurturing technical excellence and holistic growth.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>

        <img
          src="/images/campus.png"
          alt="Sairam Campus"
          className="w-full lg:w-[300px] object-cover rounded-lg hidden lg:block"
        />
      </motion.div>
      {/* Genesis 1.0 Recap Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  className="bg-white/5 backdrop-blur-md rounded-xl p-10 mb-20 flex flex-col md:flex-row gap-10 items-center"
>
  <img
    src="/images/genesis1.jpg" 
    alt="Genesis 1.0 Group"
    className="w-full md:w-[450px] h-auto object-cover rounded-lg shadow-lg"
  />

  <div className="flex-1">
    <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Genesis 1.0</h2>
    <p className="text-blue-100 leading-relaxed">
      Genesis 1.0 was a two-day annual symposium organized by the IEEE-HKN Nu Eta Chapter, aimed at empowering students
      with technical knowledge and sustainable development insights. Aligned with the United Nations' Sustainable
      Development Goals (SDGs), the event featured expert tech talks, exhibitions, leadership sessions, and hands-on
      workshops. It served as a powerful platform for students to cultivate innovation, professionalism, and ethical
      engineering practices to make a lasting impact on society.
    </p>
  </div>
</motion.div>

      
      {/* Event Highlights - Tiled Layout with Buttons */}
<div className="space-y-16">
  <h2 className="text-4xl font-bold text-center underline decoration-yellow-400 decoration-4">
    Event Highlights
  </h2>

  {/* Day 1 */}
  <div>
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 1: Ignite the Change</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Pitch for the Planet: SDG Innovation Expo",
          desc: "Students showcase projects addressing one or more SDGs, judged for innovation, feasibility, and impact.",
          image: "/images/events/sdg-pitch.jpg",
          link: "#event-sdg" // <-- Add actual link here later
        },
        {
          title: "Code for Cause: The Humanitarian Hack-Sprint",
          desc: "An individual coding challenge with real-world humanitarian twist problems (disaster, energy, health, etc.).",
          image: "/images/events/code-humanity.jpg",
          link: "#event-code"
        },
        {
          title: "Craft Your Digital Self: Branding Beyond Borders",
          desc: "Hands-on workshop to help students design impactful resumes and LinkedIn profiles.",
          image: "/images/events/linkedin-resume.jpg",
          link: "#event-branding"
        }
      ].map((event, i) => (
        <div
          key={`day1-${i}`}
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="h-40 w-full bg-white/10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[230px]">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed">{event.desc}</p>
            </div>
            <a
              href={event.link}
              className="mt-4 inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Day 2 */}
  <div>
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 2: Think, Solve, Impact</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "GreenMind: Sustainable AI for a Better Tomorrow",
          desc: "Introductory and practical sessions on AI that prioritize green computing, ethics, and inclusive intelligence for SDG-aligned solutions.",
          image: "/images/events/ai-sustainable.jpg",
          link: "#event-ai"
        },
        {
          title: "UrbanThink 2025: Designing Cities that Feel Human",
          desc: "A challenge for students to reimagine urban spaces with sustainable, accessible, and human-first innovations rooted in SDG 11.",
          image: "/images/events/smart-city.jpg",
          link: "#event-smartcity"
        },
        {
          title: "Voices of Fire: Igniting Purpose-Driven Careers with IEEE",
          desc: "A dynamic panel where IEEE visionaries share transformative insights on building careers fueled by innovation, impact, and global responsibility.",
          image: "/images/events/panel-discussion.jpg",
          link: "#event-panel"
        }
      ].map((event, i) => (
        <div
          key={`day2-${i}`}
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="h-40 w-full bg-white/10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[230px]">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed">{event.desc}</p>
            </div>
            <a
              href={event.link}
              className="mt-4 inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




      
    </div>
  );
};

export default Home;
