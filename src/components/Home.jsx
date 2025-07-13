import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-blue-900 to-black text-white font-sans p-8 space-y-20 overflow-x-hidden">
      
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
        <p className="text-blue-200 text-xl">Empowering Engineering Excellence through Innovation and Sustainability</p>
        <p className="text-2xl font-semibold text-yellow-400">August 12 - 13, 2025</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-blue-900 px-10 py-3 rounded-full font-bold text-lg hover:bg-yellow-300"
        >
          Register Now
        </motion.button>
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

      {/* Event Highlights - Scrollable with Two Visible Cards */}
<div className="space-y-16">
  <h2 className="text-4xl font-bold text-center underline decoration-yellow-400 decoration-4">Event Highlights</h2>

  {/* Day 1 */}
  <div>
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 1</h3>
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1">
      {[
        {
          title: "BIDWARS",
          desc: "Outbid your rivals in a competitive business bidding simulation. Use market insight, economic planning, and negotiation to dominate the virtual economy.",
          image: "/images/events/bidwars.jpg"
        },
        {
          title: "CODEVERSE",
          desc: "Engage in a high-speed programming contest. Solve logic-based problems under time pressure to prove your coding mettle and stand out among tech elites.",
          image: "/images/events/codeverse.jpg"
        },
        {
          title: "PROTOVESE Workshop",
          desc: "Dive into the world of prototyping. Work with mentors and tools to turn raw ideas into tangible models—fast, functional, and future-ready.",
          image: "/images/events/protovese.jpg"
        },
        {
          title: "INTERVISTA 2.0",
          desc: "Experience professional mock interviews. Get real-time feedback from experts and polish your soft skills, technical rounds, and resume presentation.",
          image: "/images/events/intervista.jpg"
        }
      ].map((event, i) => (
        <div
          key={`day1-${i}`}
          className="snap-center shrink-0 w-[85vw] sm:w-[48%] bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col gap-4 min-h-[320px]"
        >
          <div className="h-40 bg-white/5 rounded-lg overflow-hidden">
            {/* Optional image placeholder */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">{event.title}</h4>
            <p className="text-blue-200 text-sm leading-relaxed">{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Day 2 */}
  <div>
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 2</h3>
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1">
      {[
        {
          title: "SUSTAINABLE TECH EXPO",
          desc: "Explore green technologies and sustainability-driven solutions. Featuring live demos, prototypes, and future-focused models from student innovators.",
          image: "/images/events/sustaintech.jpg"
        },
        {
          title: "TEASEBURST",
          desc: "A brain-teasing event filled with quizzes, logic puzzles, and riddles designed to challenge and entertain the sharpest minds in tech.",
          image: "/images/events/teaseburst.jpg"
        },
        {
          title: "STARTUP PITCH FEST",
          desc: "Step into the spotlight and pitch your groundbreaking startup ideas to a panel of mentors and investors. Receive feedback, funding tips, and more.",
          image: "/images/events/startupfest.jpg"
        },
        {
          title: "AUTOMAX Workshop",
          desc: "Hands-on session with automation kits. Build bots, code controllers, and explore real-world applications of IoT and robotics technologies.",
          image: "/images/events/automax.jpg"
        }
      ].map((event, i) => (
        <div
          key={`day2-${i}`}
          className="snap-center shrink-0 w-[85vw] sm:w-[48%] bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col gap-4 min-h-[320px]"
        >
          <div className="h-40 bg-white/5 rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">{event.title}</h4>
            <p className="text-blue-200 text-sm leading-relaxed">{event.desc}</p>
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
