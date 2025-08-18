'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, slideUp, zoomIn } from "@/utils/animations";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-green-100 text-gray-900">
      <motion.nav
        className="p-4 flex justify-between items-center shadow-md bg-white/80 backdrop-blur-lg sticky top-0 z-50"
        initial="hidden"
        animate="visible"
        variants={slideUp(0.3)}
      >
        <motion.h1 className="text-2xl font-bold text-indigo-600" variants={zoomIn(0.5)}>
          🎓 Edura
        </motion.h1>
        <motion.div className="space-x-4 flex items-center" variants={fadeIn(0.6)}>
          <Link href="/courses" className="text-indigo-700 hover:underline">Courses</Link>
          <Link href="/dashboard" className="text-indigo-700 hover:underline">Dashboard</Link>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </motion.div>
      </motion.nav>

      <section className="text-center py-20 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6"
          variants={slideUp(0.4)}
          initial="hidden"
          animate="visible"
        >
          Learn Anytime, Anywhere 🌍
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 max-w-xl mx-auto mb-8"
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
        >
          Unlock your potential with interactive video lessons, quizzes, and real-time progress tracking.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          variants={zoomIn(0.8)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/register">
            <Button className="bg-gradient-to-r from-indigo-500 to-green-500 text-white px-6 py-2 text-lg rounded-xl shadow-md hover:scale-105 transition-transform">
              🚀 Get Started
            </Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline" className="text-indigo-600 border-indigo-400 hover:scale-105 transition-transform">
              📚 Browse Courses
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
        {[{
          icon: "🎥",
          title: "Video Lessons",
          desc: "Stream HD courses with intuitive navigation and resume playback.",
        }, {
          icon: "🧪",
          title: "Quizzes",
          desc: "Reinforce learning through interactive, timed quizzes.",
        }, {
          icon: "📊",
          title: "Progress Tracking",
          desc: "Visual dashboards to track achievements and consistency.",
        }].map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            variants={zoomIn(i * 0.2 + 1)}
            initial="hidden"
            animate="visible"
          >
            <Card className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
              <CardContent className="flex flex-col items-center text-center">
                <div className="text-5xl mb-3 animate-bounce">{icon}</div>
                <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <motion.footer
        className="text-center py-6 bg-indigo-600 text-white mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © 2025 Edura. Learn. Grow. Succeed. 💡
      </motion.footer>
    </main>
  );
}