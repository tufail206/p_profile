"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiGlobe,
} from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMui,
  SiFramer,
} from "react-icons/si";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 20px rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      company: "Digital Pine",
      period: "2024 - Till",
      position: "MERN Stack Developer",
      description:
        "Building full-stack applications using MongoDB, Express.js, React.js, and Node.js with Next.js and TypeScript. Designed and implemented scalable, maintainable frontend architectures. Worked closely with the backend Go development team for API integrations. Customized MUI and ShadCN UI components to match branding requirements.",
    },
    {
      company: "Next Planner Academy",
      period: "08-03-2024 - 15-07-2024",
      position: "Teaching web development",
      description:
        "Experienced HTML, CSS, and JavaScript Instructor at Next Planners Academy, empowering students to build dynamic web applications and kickstart their development careers.",
    },
  ];

  const projects = [
    {
      title: "Fronted Coffee Shop",
      description:
        "A modern and responsive coffee shop website built to showcase premium brews, cozy ambiance, and an easy online ordering experience for coffee lovers.",
      image: "/images/coffee.png",
      link: "https://t-shop-eight.vercel.app/",
      technologies: ["Reactjs", "Tailwind CSS"],
      features: ["Coffee Buying", "Responsive Design", "Image Galleries"],
    },
    {
      title: "Alpine Adventure Guide Pakistan",
      description:
        "A comprehensive tourism website for adventure trekking and tours in Pakistan's northern areas. Built with modern web technologies to showcase breathtaking landscapes and facilitate tour bookings.",
      image: "/images/alpine.png",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://www.adventureguide.com.pk/",
      features: [
        "Tour Booking System",
        "Responsive Design",
        "Image Galleries",
        "Payment Integration",
        "Admin Dashboard",
      ],
    },
    {
      title: "Kara-kurum Magic",
      description:
        "Karakurum Magic Mountains, your gateway to exploring the breathtaking beauty of Gilgit Baltistan! As we are based amongst the mountains in the extreme north of Pakistan, we personally run each trip to ensure the best and most reasonable prices and excellent service, which is what we are known for. “Being from the north side of Pakistan, we have an intimate knowledge of the region's hidden gems and secrets. Our team of local experts is dedicated to providing you with the best tourism services, tailored to your needs and preferences. We strive to exceed your expectations and make your trip an unforgettable adventure.",
      image: "images/karakurum1.png",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://www.karakurummagic.com/",
      features: ["Tour Booking System", " MOUNTAINEERING", "Admin Dashboard"],
    },
  ];

  const education = [
    {
      institution: "Baltistan University Skardu",
      period: "2023-2026",
      degree: "BSc Computer Science",
      grade: "A",
    },
    {
      institution: "Government Boys Degree College Skardu",
      period: "2021-2022",
      degree: "Intermediate",
      grade: "B",
    },
    {
      institution: "USWA Public School & College Skardu",
      period: "2019-2020",
      degree: "Matriculation",
      grade: "A",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "React.js", icon: <SiReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        {
          name: "Material UI",
          icon: <SiMui className="text-blue-400" />,
        },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-black" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <FiMail className="text-primary" />,
      label: "Email",
      value: "tufail206abbas@gmail.com",
      link: "mailto:tufail206abbas@gmail.com",
    },
    {
      icon: <FiPhone className="text-green-500" />,
      label: "Phone",
      value: "+92 355 5040206",
      link: "tel:+923555040206",
    },
    {
      icon: <FiMapPin className="text-blue-500" />,
      label: "Location",
      value: "Skardu Baltistan, Near Clifton pool",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200"
        style={{
          background: headerBackground,
          boxShadow: headerShadow,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Tufail Abbas
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {[
              "Home",
              "Experience",
              "Projects",
              "Education",
              "Skills",
              "Contact",
            ].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-green-600 px-4 py-2 rounded-md hover:text-primary hover:bg-green-50 transition-colors font-medium`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
                {[
                  "Home",
                  "Experience",
                  "Projects",
                  "Education",
                  "Skills",
                  "Contact",
                ].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-4 py-3 rounded-md text-gray-600 hover:text-primary hover:bg-green-50 transition-colors text-left font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-white via-green-50 to-gray-100 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            className="mb-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Tufail Abbas
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-primary font-semibold mb-8"
              variants={fadeInUp}
            >
              MERN Stack Developer
            </motion.h2>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Highly motivated and skilled MERN Stack Developer with expertise in
            Next.js, TypeScript, Tailwind CSS, and modern UI libraries.
            Passionate about building scalable web applications and continuously
            improving my skills.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={18} />
              Get in Touch
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink size={18} />
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-12 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              target="_blank"
              href="https://github.com/tufail206"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-primary"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My professional journey and contributions to the tech industry
          </motion.p>

          <motion.div
            className="grid gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primaryHover"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {exp.period}
                    </p>
                  </div>
                  <span className="bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium">
                    {exp.position}
                  </span>
                </div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing my work at Digital Pine
          </motion.p>

          <motion.div
            className="grid gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project?.features?.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primaryHover transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={16} />
                      Visit Website
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">More projects coming soon...</p>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={16} />
              Request More Examples
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My academic background and qualifications
          </motion.p>

          <motion.div
            className="grid gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                variants={fadeInUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-600 mt-1">{edu.period}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{edu.degree}</p>
                    <p className="text-blue-600 font-medium">
                      Grade: {edu.grade}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies and tools I work with
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-50 to-gray-100 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="p-2 bg-green-100 rounded-full text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {info.label}
                        </p>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Send a Message
                </h3>
                <motion.form
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:outline-green-300"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:outline-green-300"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:outline-green-300"
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-12 bg-gray-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex justify-center space-x-6 mb-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <FiGithub size={24} />, href: "#" },
              { icon: <FiLinkedin size={24} />, href: "#" },
              {
                icon: <FiMail size={24} />,
                href: "mailto:tufail206abbas@gmail.com",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="hover:text-primary transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Tufail Abbas. All rights reserved.
          </motion.p>
          <motion.p
            className="text-gray-400 text-sm mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Made By Tufail Abbas using Next.js and Tailwind CSS
          </motion.p>
        </div>
      </motion.footer>
    </main>
  );
}
