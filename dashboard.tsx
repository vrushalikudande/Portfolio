"use client"

import { useEffect, useState, useRef } from "react"
import {
  Activity,
  AlertCircle,
  Briefcase,
  Clock,
  Cloud,
  Code,
  Database,
  Download,
  ExternalLink,
  FileCode,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  Phone,
  Server,
  Shield,
  Terminal,
  User,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import type { LucideIcon } from "lucide-react"

// Custom Upwork Logo Component
function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z"/>
    </svg>
  )
}

export default function DevOpsPortfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [currentTime, setCurrentTime] = useState(new Date())

  // Skill proficiency levels
  const [skills, setSkills] = useState({
    kubernetes: 85,
    docker: 92,
    terraform: 88,
    aws: 90,
    gcp: 88,
    ansible: 94,
    puppet: 85,
    bash: 90,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div
      className={`${theme} min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}
    >
      {/* Background particle effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-4 border-r-purple-500 border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
              <div className="absolute inset-6 border-4 border-b-blue-500 border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin-slower"></div>
              <div className="absolute inset-8 border-4 border-l-green-500 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-4 text-cyan-500 font-mono text-sm tracking-wider">INITIALIZING PORTFOLIO</div>
          </div>
        </div>
      )}

      <div className="container mx-auto p-4 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between py-4 border-b border-slate-700/50 mb-6">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DEVOPS ENGINEER
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 rounded-full px-3 py-1.5 border border-slate-700/50 backdrop-blur-sm">
              <Terminal className="h-4 w-4 text-slate-400" />
              <span className="bg-transparent border-none text-sm w-40 text-slate-400">
                <span className="text-cyan-400">$</span> ./view_portfolio.sh
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-slate-100"
                      onClick={() => window.open("https://github.com/vrushalikudande", "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-slate-100"
                      onClick={() => window.open("https://linkedin.com/in/vrushalikudande", "_blank")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-slate-100"
                      onClick={() => window.open("https://upwork.com/freelancers/~019fbca7d6477e095b", "_blank")}
                    >
                      <UpworkIcon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upwork Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-slate-100"
                      onClick={() => window.open("https://www.dropbox.com/scl/fi/tfl9ldre1k46vwo8kwjnj/Vrushali-Resume.pdf?rlkey=xt5gh34c1uy6h5nqld5hjn7md&st=dspz2w9x&dl=0", "_blank")}
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download Resume</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <NavItem
                    icon={Home}
                    label="Home"
                    active={activeSection === "home"}
                    onClick={() => setActiveSection("home")}
                  />
                  <NavItem
                    icon={User}
                    label="About"
                    active={activeSection === "about"}
                    onClick={() => setActiveSection("about")}
                  />
                  <NavItem
                    icon={Code}
                    label="Skills"
                    active={activeSection === "skills"}
                    onClick={() => setActiveSection("skills")}
                  />
                  <NavItem
                    icon={Layers}
                    label="Projects"
                    active={activeSection === "projects"}
                    onClick={() => setActiveSection("projects")}
                  />
                  <NavItem
                    icon={FileCode}
                    label="Articles"
                    active={activeSection === "articles"}
                    onClick={() => setActiveSection("articles")}
                  />
                  <NavItem
                    icon={Activity}
                    label="Experience"
                    active={activeSection === "experience"}
                    onClick={() => setActiveSection("experience")}
                  />
                  <NavItem
                    icon={Mail}
                    label="Contact"
                    active={activeSection === "contact"}
                    onClick={() => setActiveSection("contact")}
                  />
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main portfolio content */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="grid gap-6">
              {/* Enhanced Home Section */}
              {activeSection === "home" && (
                <div className="space-y-8">
                  {/* Hero Section */}
                  <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-10">
                      <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="relative group">
                          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300">
                            <Avatar className="w-full h-full">
                              <AvatarImage
                                src="/me.png"
                                alt="Vrushali Kudande"
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-6xl font-bold text-cyan-400">VK</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="absolute -bottom-3 -right-3 bg-slate-800 rounded-full p-3 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                            <Terminal className="h-7 w-7 text-cyan-500" />
                          </div>
                          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="flex-1 text-center lg:text-left space-y-6">
                          <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                              Vrushali Kudande
                            </h1>
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                                <Server className="h-5 w-5 text-cyan-500" />
                                <span className="text-lg font-medium text-cyan-400">DevOps Engineer</span>
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-400">Available for Hire</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                            Specializing in <span className="text-cyan-400 font-semibold">infrastructure automation</span>, 
                            <span className="text-blue-400 font-semibold"> containerization</span>, and 
                            <span className="text-purple-400 font-semibold"> cloud-native technologies</span>. 
                            Building scalable systems that power enterprise applications.
                          </p>

                          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 px-4 py-2 text-sm">Kubernetes</Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 px-4 py-2 text-sm">Docker</Badge>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 px-4 py-2 text-sm">Terraform</Badge>
                            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 px-4 py-2 text-sm">AWS</Badge>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 text-sm">GCP</Badge>
                            <Badge className="bg-red-500/20 text-red-400 border-red-500/50 px-4 py-2 text-sm">Ansible</Badge>
                          </div>

                          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <Button 
                              size="lg" 
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-3"
                              onClick={() => setActiveSection("projects")}
                            >
                              <Layers className="h-5 w-5 mr-2" />
                              View Projects
                            </Button>
                            <Button 
                              size="lg" 
                              variant="outline" 
                              className="border-slate-600 hover:bg-slate-800 px-8 py-3"
                              onClick={() => setActiveSection("contact")}
                            >
                              <Mail className="h-5 w-5 mr-2" />
                              Get In Touch
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stats & Quick Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Cloud className="h-6 w-6 text-cyan-500" />
                        </div>
                        <div className="text-2xl font-bold text-cyan-400 mb-1">1000+</div>
                        <div className="text-sm text-slate-300">Repositories Managed</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Activity className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                        <div className="text-sm text-slate-300">Uptime Achieved</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Clock className="h-6 w-6 text-purple-500" />
                        </div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">80%</div>
                        <div className="text-sm text-slate-300">Time Reduction</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Shield className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                        <div className="text-sm text-slate-300">Enterprise Projects</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Featured Projects Preview */}
                  <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                        <Workflow className="h-6 w-6 text-cyan-500" />
                        Featured Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="group cursor-pointer" onClick={() => window.open("https://github.com/vrushalikudande/PhoenixFlux.git", "_blank")}>
                          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-800/70">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Database className="h-6 w-6 text-cyan-500" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                    PhoenixFlux Platform
                                  </h3>
                                  <Github className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <p className="text-slate-400 text-sm mb-3">
                                  ML-powered Kubernetes observability platform with automated anomaly detection and self-healing capabilities.
                                </p>
                                <div className="flex gap-2">
                                  <Badge className="bg-cyan-500/10 text-cyan-400 text-xs">Kubernetes</Badge>
                                  <Badge className="bg-purple-500/10 text-purple-400 text-xs">ML</Badge>
                                  <Badge className="bg-blue-500/10 text-blue-400 text-xs">Python</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="group cursor-pointer" onClick={() => setActiveSection("projects")}>
                          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:bg-slate-800/70">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Workflow className="h-6 w-6 text-green-500" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-green-400 transition-colors">
                                  Jenkins Shared Library
                                </h3>
                                <p className="text-slate-400 text-sm mb-3">
                                  Enterprise-grade CI/CD framework standardizing workflows across 1000+ repositories.
                                </p>
                                <div className="flex gap-2">
                                  <Badge className="bg-green-500/10 text-green-400 text-xs">Jenkins</Badge>
                                  <Badge className="bg-orange-500/10 text-orange-400 text-xs">Groovy</Badge>
                                  <Badge className="bg-blue-500/10 text-blue-400 text-xs">CI/CD</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-8">
                        <Button 
                          variant="outline" 
                          className="border-slate-600 hover:bg-slate-800"
                          onClick={() => setActiveSection("projects")}
                        >
                          View All Projects
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* About Section */}
              {activeSection === "about" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-slate-100 flex items-center">
                      <User className="mr-2 h-5 w-5 text-cyan-500" />
                      About Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <p className="text-slate-300">
                        Hi, I'm <span className="text-cyan-400 font-semibold">Vrushali Kudande</span>, a DevOps Engineer passionate about 
                        building scalable, automated, and reliable infrastructure.
                      </p>

                      <p className="text-slate-300">
                        I started working as a Freelance DevOps Engineer during my Computer Engineering degree, which I recently completed 
                        from Savitribai Phule Pune University with a 9.36 CGPA.
                      </p>

                      <p className="text-slate-300">
                        I have experience in <span className="text-cyan-400 font-semibold">containerization, automation, and cloud platforms</span>, 
                        and I enjoy creating systems that are efficient, consistent, and easy to maintain.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4">
                          <h3 className="text-lg font-medium text-cyan-400 mb-3">Philosophy</h3>
                          <ul className="space-y-2 text-slate-300">
                            <li className="flex items-start">
                              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                              <span>Automate everything that can be automated</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                              <span>Infrastructure as code is the foundation</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                              <span>Monitoring and observability are critical</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                              <span>Security should be built-in, not bolted on</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4">
                          <h3 className="text-lg font-medium text-cyan-400 mb-3">Education & Certifications</h3>
                          <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                              <Badge className="mr-2 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                                Dec 2021 - Jun 2025
                              </Badge>
                              <span>B.E. Computer Engineering, Savitribai Phule Pune University (Completed - CGPA: 9.36)</span>
                            </li>
                            <li className="flex items-start">
                              <Badge className="mr-2 bg-blue-500/20 text-blue-400 border-blue-500/50">Feb 2025</Badge>
                              <span>Kubernetes for the Absolute Beginners - KodeKloud</span>
                            </li>
                            <li className="flex items-start">
                              <Badge className="mr-2 bg-purple-500/20 text-purple-400 border-purple-500/50">Dec 2024</Badge>
                              <span>Docker Foundations Professional Certificate - Docker, Inc</span>
                            </li>
                            <li className="flex items-start">
                              <Badge className="mr-2 bg-green-500/20 text-green-400 border-green-500/50">Jan 2025</Badge>
                              <span>GitOps Foundations - LinkedIn Learning</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Skills Section */}
              {activeSection === "skills" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-2xl font-bold text-slate-100 flex items-center">
                      <Code className="mr-2 h-6 w-6 text-cyan-500" />
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-cyan-400 mb-4">DevOps & Cloud</h3>

                        <SkillBar label="Docker" value={skills.docker} icon={Database} color="blue" />
                        <SkillBar label="Kubernetes" value={skills.kubernetes} icon={Server} color="cyan" />
                        <SkillBar label="Terraform" value={skills.terraform} icon={FileCode} color="purple" />
                        <SkillBar label="AWS" value={skills.aws} icon={Cloud} color="amber" />
                        <SkillBar label="GCP" value={skills.gcp} icon={Cloud} color="green" />
                        <SkillBar label="Ansible" value={skills.ansible} icon={Workflow} color="red" />
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-cyan-400 mb-4">Tools & Technologies</h3>

                        <div className="grid grid-cols-2 gap-4">
                          <TechCard title="Containerization" items={["Docker", "Kubernetes", "CloudRun"]} />
                          <TechCard title="CI/CD" items={["Jenkins", "Jenkins Shared Libraries", "GitHub Actions", "GitOps"]} />
                          <TechCard title="IaC" items={["Terraform", "Ansible", "Puppet"]} />
                          <TechCard title="Cloud" items={["AWS", "GCP", "Proxmox", "Nginx"]} />
                          <TechCard title="Monitoring" items={["Prometheus", "Fluent Bit", "Observability"]} />
                          <TechCard title="Languages" items={["Python", "Bash", "Machine Learning", "Chaos Engineering"]} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Projects Section */}
              {activeSection === "projects" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-2xl font-bold text-slate-100 flex items-center">
                      <Layers className="mr-2 h-6 w-6 text-cyan-500" />
                      Featured Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      <ProjectCard
                        title="PhoenixFlux - Kubernetes Observability & Self-Healing Platform"
                        description="Developed an intelligent cloud infrastructure system that automatically detects and resolves application failures using AI-driven monitoring and remediation workflows. Built comprehensive Kubernetes monitoring stack with Prometheus, Fluent Bit, and custom microservices architecture using RBAC and DaemonSets. Implemented chaos engineering scenarios and automated incident response reducing mean time to detection by 80%."
                        tags={["Kubernetes", "Python", "Prometheus", "Fluent Bit", "Machine Learning", "Redis", "Flask", "Chaos Engineering"]}
                        image="/PhonixFlux.jpeg"
                      />

                      <ProjectCard
                        title="Stateful Application Deployment on GCP"
                        description="Built enterprise-grade stateful application infrastructure on Google Cloud Platform ensuring high availability and persistent data storage. Architected Cloud Run deployment with native volume mounting service achieving 99.9% data persistence and reliability. Implemented automated scaling policies and load balancing configuration for optimal performance under variable workloads."
                        tags={["GCP Cloud Run", "Persistent Storage", "Load Balancing", "Auto-scaling", "Container Orchestration"]}
                        image="/CloudRun.jpeg"
                      />

                      <ProjectCard
                        title="Enterprise Jenkins Shared Library Framework"
                        description="Architected and developed comprehensive Jenkins shared library framework that standardizes CI/CD workflows across 1000+ repositories for multiple client organizations. Implemented reusable pipeline components, automated testing strategies, and deployment orchestration reducing development overhead by 60%. Created modular library structure with version control and backward compatibility ensuring seamless adoption across diverse tech stacks."
                        tags={["Jenkins", "Groovy", "CI/CD", "Pipeline as Code", "DevOps", "Automation"]}
                        image="/jenkins.jpeg"
                      />

                      <ProjectCard
                        title="Fleet Device Management Infrastructure"
                        description="Built scalable fleet management infrastructure system automating provisioning and configuration of 100+ cloud nodes using enterprise-grade tools. Implemented infrastructure as code approach with Puppet for configuration management, Terraform for resource provisioning, and GitHub Actions for automated deployments on GCP. Achieved 75% faster deployment cycles with comprehensive monitoring and alerting."
                        tags={["Puppet", "Terraform", "GCP", "GitHub Actions", "Infrastructure as Code", "Fleet Management"]}
                        image="/fleet.jpeg"
                      />

                      <ProjectCard
                        title="Cross-Platform Dotfiles Automation System"
                        description="Developed comprehensive Ansible-based dotfiles setup and configuration management system for MacOS and Linux environments. Created automated development environment provisioning reducing onboarding time for distributed teams by 90%. Implemented secure credential management with Ansible Vault and created extensive documentation for seamless adoption across development teams."
                        tags={["Ansible", "Ansible Vault", "Linux", "MacOS", "Automation", "Development Environment"]}
                        image="/dotfiles.jpeg"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Experience Section */}
              {activeSection === "experience" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-2xl font-bold text-slate-100 flex items-center">
                      <Activity className="mr-2 h-6 w-6 text-cyan-500" />
                      Professional Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="relative border-l-2 border-slate-700 pl-6 ml-2 space-y-10">
                      <ExperienceItem
                        title="Freelance DevOps Engineer"
                        company="Upwork-based Agency | DevOps Dynamics"
                        period="May 2024 - Present"
                        description="Working as a freelance DevOps engineer through established agency, delivering enterprise-scale infrastructure solutions."
                        achievements={[
                          "Developing enterprise-grade Jenkins shared library framework that standardizes CI/CD workflows across 1000+ repositories for multiple client organizations",
                          "Built scalable fleet management infrastructure system automating provisioning and configuration of 100+ cloud nodes using Puppet, Terraform, and GitHub Actions on GCP",
                          "Created automated development environment setup solution reducing onboarding time for distributed teams by 90% through Ansible playbooks and secure credential management",
                          "Modernized containerized applications using Docker and CloudRun, implementing cloud-native deployments and optimizing storage access",
                          "Achieved 75% faster deployment cycles through automated configuration management and monitoring across client infrastructure",
                        ]}
                      />

                      <ExperienceItem
                        title="Former President & Technical Leader"
                        company="PDEA's College of Engineering | Linux Club"
                        period="Academic Year 2024-25 (Lifelong Member)"
                        description="Led the Linux Club as President during academic year 2024-25, fostering technical skill development and open-source collaboration."
                        achievements={[
                          "Led the Linux Club as President during 2024-25, mentoring 30+ students through hands-on workshops on Docker, Linux Administration, and DevOps practices",
                          "Built and directed collaborative community initiatives to foster open-source projects and technical skill development, significantly increasing student engagement and participation",
                          "Committed to remaining a lifelong member who will continue helping and mentoring fellow students even after graduation",
                        ]}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Section */}
              {activeSection === "contact" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-2xl font-bold text-slate-100 flex items-center">
                      <Mail className="mr-2 h-6 w-6 text-cyan-500" />
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-medium text-cyan-400 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                                                      <div className="flex items-start">
                              <Mail className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">Email</div>
                                <div className="text-lg text-slate-200">vrushalikudande@outlook.com</div>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Linkedin className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">LinkedIn</div>
                                <div className="text-lg text-slate-200">linkedin.com/in/vrushalikudande</div>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Github className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">GitHub</div>
                                <div className="text-lg text-slate-200">github.com/vrushalikudande</div>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <UpworkIcon className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">Upwork</div>
                                <div className="text-lg text-slate-200">upwork.com/freelancers/~019fbca7d6477e095b</div>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Globe className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">Location</div>
                                <div className="text-lg text-slate-200">Pune, India</div>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Phone className="h-5 w-5 text-cyan-500 mt-0.5 mr-3" />
                              <div>
                                <div className="text-sm text-slate-400">Phone</div>
                                <div className="text-lg text-slate-200">+91 8483018396</div>
                              </div>
                            </div>
                        </div>

                        <div className="mt-8">
                          <h3 className="text-xl font-medium text-cyan-400 mb-4">Let's Connect</h3>
                          <p className="text-lg text-slate-300 mb-4">
                            I'm always open to discussing new projects, opportunities, or partnerships.
                          </p>
                          <div className="flex space-x-3">
                            <Button className="bg-cyan-600 hover:bg-cyan-700">
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                              onClick={() => window.open("https://www.dropbox.com/scl/fi/tfl9ldre1k46vwo8kwjnj/Vrushali-Resume.pdf?rlkey=xt5gh34c1uy6h5nqld5hjn7md&st=dspz2w9x&dl=0", "_blank")}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download Resume
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-5">
                        <h3 className="text-lg font-medium text-cyan-400 mb-4">Send Me a Message</h3>
                        <form className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="text-sm text-slate-400">
                              Name
                            </Label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Your Name"
                              className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email" className="text-sm text-slate-400">
                              Email
                            </Label>
                            <input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                          </div>

                          <div>
                            <Label htmlFor="message" className="text-sm text-slate-400">
                              Message
                            </Label>
                            <textarea
                              id="message"
                              placeholder="Your message here..."
                              rows={4}
                              className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            />
                          </div>

                          <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                            <Terminal className="mr-2 h-4 w-4" />
                            Submit Message
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Articles Section */}
              {activeSection === "articles" && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-3">
                    <CardTitle className="text-slate-100 flex items-center">
                      <FileCode className="mr-2 h-5 w-5 text-cyan-500" />
                      Technical Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Blog Platform Link */}
                      <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-cyan-400">My DevOps Learning Journey</h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                            onClick={() => window.open("https://vrushalikudande.hashnode.dev/", "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit My Blog
                          </Button>
                        </div>
                        <p className="text-slate-300 mb-4">
                          I documented my early DevOps learning journey on Hashnode, sharing insights and discoveries 
                          as I explored containerization, cloud platforms, and infrastructure automation. While I'm currently 
                          focused on hands-on projects and client work, you can check out my learning articles on my blog.
                        </p>
                        <div className="flex items-center text-slate-400">
                          <Globe className="h-4 w-4 mr-2" />
                          <span className="text-sm">vrushalikudande.hashnode.dev</span>
                        </div>
                      </div>

                      {/* Coming Soon Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                              <FileCode className="h-8 w-8 text-cyan-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100">More Articles Coming Soon</h3>
                            <p className="text-slate-400 text-sm">
                              Currently focused on building enterprise-scale projects and expanding technical expertise. 
                              New technical deep-dives and tutorials are in the pipeline!
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                              <Terminal className="h-8 w-8 text-purple-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100">Project Case Studies</h3>
                            <p className="text-slate-400 text-sm">
                              Planning to share detailed case studies of real-world DevOps implementations, 
                              including architecture decisions and lessons learned.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for nav items
function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: { icon: LucideIcon; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start ${active ? "bg-slate-800/70 text-cyan-400" : "text-slate-400 hover:text-slate-100"}`}
      onClick={onClick}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  )
}

// Component for social links
function SocialLink({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-slate-100">
      <Icon className="mr-2 h-4 w-4 text-cyan-500" />
      {label}
    </Button>
  )
}

// Component for skill bars
function SkillBar({
  label,
  value,
  icon: Icon,
  color,
}: { label: string; value: number; icon: LucideIcon; color: string }) {
  const getColor = () => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-blue-500"
      case "green":
        return "from-green-500 to-emerald-500"
      case "blue":
        return "from-blue-500 to-indigo-500"
      case "purple":
        return "from-purple-500 to-pink-500"
      case "amber":
        return "from-amber-500 to-orange-500"
      case "red":
        return "from-red-500 to-pink-500"
      default:
        return "from-cyan-500 to-blue-500"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-slate-300">
          <Icon className={`h-4 w-4 text-${color}-500 mr-2`} />
          {label}
        </div>
        <div className="text-sm text-cyan-400">{value}%</div>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${getColor()} rounded-full`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}

// Component for tech cards
function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-3">
      <h4 className="text-sm font-medium text-cyan-400 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-1">
        {items.map((item, index) => (
          <Badge key={index} variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  tags,
  image,
}: { title: string; description: string; tags: string[]; image: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 h-full">
          <div className="h-full w-full bg-slate-700/50 overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-4 md:col-span-2">
          <h3 className="text-lg font-medium text-cyan-400 mb-2">{title}</h3>
          <p className="text-slate-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-slate-700/70 text-slate-300 border-slate-600/50">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex space-x-2">
            <Button variant="outline" size="sm" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
              <Github className="mr-1 h-3 w-3" />
              View Code
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-400 hover:bg-slate-700/50">
              <ExternalLink className="mr-1 h-3 w-3" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for experience items
function ExperienceItem({
  title,
  company,
  period,
  description,
  achievements,
}: { title: string; company: string; period: string; description: string; achievements: string[] }) {
  return (
    <div className="relative">
      <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-slate-900 bg-cyan-500 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-slate-900"></div>
      </div>
      <div>
        <Badge className="mb-2 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">{period}</Badge>
        <h3 className="text-lg font-medium text-slate-200">{title}</h3>
        <h4 className="text-cyan-400 mb-2">{company}</h4>
        <p className="text-slate-400 mb-3">{description}</p>
        <div className="space-y-1">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2"></div>
              <span className="text-slate-300">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Component for action buttons
function ActionButton({ icon: Icon, label, url = "#" }: { icon: LucideIcon; label: string; url?: string }) {
  return (
    <Button
      variant="outline"
      className="h-auto py-3 px-3 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center space-y-1 w-full"
      onClick={() => window.open(url, "_blank")}
    >
      <Icon className="h-5 w-5 text-cyan-500" />
      <span className="text-xs">{label}</span>
    </Button>
  )
}

// Component for blog post items
function BlogPostItem({ title, date, url }: { title: string; date: string; url: string }) {
  return (
    <div className="group">
      <a href={url} className="block">
        <div className="flex justify-between items-start">
          <h4 className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">{title}</h4>
          <Badge variant="outline" className="text-xs bg-slate-800/50 text-slate-400 border-slate-700/50">
            {date}
          </Badge>
        </div>
      </a>
    </div>
  )
}

// Component for enhanced blog post items
function EnhancedBlogPost({
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
}: {
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
}) {
  return (
    <div className="group bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-colors">
      <a href="#" className="block p-3">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden bg-slate-700/50">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge
                className={`
                ${category === "Kubernetes" ? "bg-blue-500/20 text-blue-400 border-blue-500/50" : ""}
                ${category === "IaC" ? "bg-purple-500/20 text-purple-400 border-purple-500/50" : ""}
                ${category === "CI/CD" ? "bg-green-500/20 text-green-400 border-green-500/50" : ""}
                ${category === "Monitoring" ? "bg-amber-500/20 text-amber-400 border-amber-500/50" : ""}
              `}
              >
                {category}
              </Badge>
              <span className="text-xs text-slate-500">{date}</span>
            </div>
            <h4 className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors line-clamp-1">
              {title}
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{excerpt}</p>
            <div className="flex items-center mt-1 text-xs text-slate-500">
              <Clock className="h-3 w-3 mr-1" />
              {readTime}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

// Component for article cards in the Articles page
function ArticleCard({
  title,
  description,
  date,
  category,
  readTime,
  image,
  excerpt,
}: {
  title: string
  description: string
  date: string
  category: string
  readTime: string
  image: string
  excerpt: string
}) {
  return (
    <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-colors h-full flex flex-col">
      <div className="w-full h-48 overflow-hidden bg-slate-700/50">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <Badge
            className={`
              ${category === "Kubernetes" ? "bg-blue-500/20 text-blue-400 border-blue-500/50" : ""}
              ${category === "IaC" ? "bg-purple-500/20 text-purple-400 border-purple-500/50" : ""}
              ${category === "Docker" ? "bg-blue-500/20 text-blue-400 border-blue-500/50" : ""}
              ${category === "Ansible" ? "bg-red-500/20 text-red-400 border-red-500/50" : ""}
            `}
          >
            {category}
          </Badge>
          <div className="flex items-center text-xs text-slate-500">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        <h3 className="text-lg font-medium text-cyan-400 mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-4 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-500">{date}</span>
          <Button variant="outline" size="sm" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
            Read Article
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Add missing imports
// function Workflow(props) {
//   return <Activity {...props} />
// }

function Check(props) {
  return <Shield {...props} />
}

function Info(props) {
  return <AlertCircle {...props} />
}
