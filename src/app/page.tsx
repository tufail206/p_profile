"use client";
import "./globals.css"
import { useState } from "react";
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId:string) => {
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

      link: "https://t-shop-eight.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS"],
      features: [
        "Coffee Buying",
        "Responsive Design",
        "Image Galleries",
      ],
    },
    {
      title: "Alpine Adventure Guide Pakistan",
      description:
        "A comprehensive tourism website for adventure trekking and tours in Pakistan's northern areas. Built with modern web technologies to showcase breathtaking landscapes and facilitate tour bookings.",
      image: "/api/placeholder/600/400",
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
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Tufail Abbas</div>

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
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-green-600 px-4 py-2 rounded-md  hover:text-primary hover:bg-green-50 transition-colors font-medium`}
              >
              {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {[
                "Home",
                "Experience",
                "Projects",
                "Education",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-3 rounded-md text-gray-600 hover:text-primary hover:bg-green-50 transition-colors text-left font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-100"
      >
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Tufail Abbas
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-8">
              MERN Stack Developer
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed">
            Highly motivated and skilled MERN Stack Developer with expertise in
            Next.js, TypeScript, Tailwind CSS, and modern UI libraries.
            Passionate about building scalable web applications and continuously
            improving my skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FiMail size={18} />
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiExternalLink size={18} />
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-4">
            <a
              target="_blank"
              href="https://github.com/tufail206"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-primary"
            >
              <FiGithub size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Work Experience
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My professional journey and contributions to the tech industry
          </p>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primaryHover"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Showcasing my work at Digital Pine
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                      <div className="text-center p-6">
                        <FiGlobe className="text-6xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          Live Project
                        </p>
                      </div>
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
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primaryHover transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">More projects coming soon...</p>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              <FiMail size={16} />
              Request More Examples
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Education
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-50 to-gray-100 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-full text-primary">
                        {info.icon}
                      </div>
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
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg  focus:outline-green-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg  focus:outline-green-300"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg  focus:outline-green-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:tufail206abbas@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <FiMail size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tufail Abbas. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Made with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
