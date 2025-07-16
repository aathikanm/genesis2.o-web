import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      events: [
        {
          time: "08:30 AM - 09:00 AM",
          name: "REGISTRATION",
          description: "ID card and registration at the venue"
        },
        {
          time: "09:30 AM - 12:30 PM",
          name: "INAUGURAL CEREMONY",
          description: "Welcome address, IEEE keynote & induction of new HKN members"
        },
        {
          time: "12:30 PM - 01:15 PM",
          name: "LUNCH BREAK",
          description: "Lunch provided to all participants"
        },
        {
          time: "01:30 PM - 03:30 PM",
          name: "PROJECT PRESENTATION",
          description: "Parallel event showcasing student projects"
        },
        {
          time: "01:30 PM - 03:30 PM",
          name: "CODEVERSE",
          description: "Parallel coding event hosted via HackerRank"
        },
        {
          time: "02:00 PM - 03:00 PM",
          name: "LINKEDIN & RESUME WORKSHOP",
          description: "Hands-on parallel session on resume building and LinkedIn profile creation"
        },
        {
          time: "01:30 PM - 03:30 PM",
          name: "STALLS",
          description: "Exhibition by Section Best Chapter, EPICS & SIGHT"
        }
      ]
    },
    {
      day: "Day 2",
      events: [
        {
          time: "09:30 AM - 11:00 AM",
          name: "GREEN AI WORKSHOP",
          description: "Parallel workshop on sustainable AI applications"
        },
        {
          time: "09:30 AM - 11:00 AM",
          name: "SMART CITIES IDEATHON",
          description: "Parallel ideation event focused on smart city solutions"
        },
        {
          time: "11:00 AM - 11:30 AM",
          name: "BREAK",
          description: "Refreshments provided"
        },
        {
          time: "11:30 AM - 12:30 PM",
          name: "STALLS",
          description: "Section Best Chapter, EPICS & SIGHT exhibitions"
        },
        {
          time: "12:30 PM - 01:15 PM",
          name: "LUNCH BREAK",
          description: "Lunch provided to all attendees"
        },
        {
          time: "01:30 PM - 02:30 PM",
          name: "PANEL DISCUSSION",
          description: "Session with alumni and experts (moderated)"
        },
        {
          time: "02:30 PM - 04:00 PM",
          name: "VALEDICTORY",
          description: "Closing ceremony and prize distribution"
        },
        {
          time: "04:00 PM",
          name: "REFRESHMENTS",
          description: "Juice & snacks served post event"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#123A94] text-white font-sans pt-[80px] px-6 pb-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Event Schedule
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: dayIndex * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">{day.day}</h2>
            <div className="space-y-6">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.name + event.time}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                  className="border-l-2 border-yellow-400 pl-4"
                >
                  <p className="text-blue-200 text-sm">{event.time}</p>
                  <h3 className="text-white font-bold mt-1">{event.name}</h3>
                  <p className="text-blue-200 text-sm mt-1">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
