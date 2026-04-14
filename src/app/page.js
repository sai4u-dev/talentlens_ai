"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  FileText,
  Target,
  BarChart4,
  Users,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <FileText className="h-6 w-6 text-accent" />,
    title: "Intelligent Parsing",
    description: "Extract structured data from unstructured PDF or DOCX resumes instantly."
  },
  {
    icon: <Target className="h-6 w-6 text-accent" />,
    title: "Semantic Matching",
    description: "Compare candidates to job descriptions using cutting-edge vector embeddings."
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    title: "LLM Evaluation",
    description: "Gain deep, qualitative reasoning for every candidate via advanced LLMs."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-accent" />,
    title: "Hybrid Scoring Engine",
    description: "Combine deterministic matching (60%) with AI fit (40%) to remove bias."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-[rgba(255,255,255,0.05)] border-b transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <span className="font-bold text-xl tracking-tight">TalentLens<span className="text-accent">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
            <Link href="#impact" className="hover:text-foreground transition-colors">Business Impact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/upload" className="bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              Start Screening <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 border border-accent/20"
            >
              <Sparkles className="h-4 w-4" />
              <span>Next-Gen Recruiting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            >
              Hire the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">top 1%</span> faster than ever.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Automate candidate evaluation using semantic matching and LLM-based reasoning.
              Reduce manual screening effort, improve consistency, and scale your hiring workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/upload" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                Upload Resumes <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/dashboard" className="glass-panel hover:bg-white/5 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center">
                View Dashboard
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-y border-white/5 bg-white/5" id="impact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl font-bold text-foreground mb-2">~70%</div>
              <div className="text-muted-foreground">reduction in manual screening time</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-foreground mb-2">10x</div>
              <div className="text-muted-foreground">improved candidate-job matching accuracy</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">consistent and explainable evaluation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 md:py-32" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Engine Behind Better Hiring</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Pure LLM outputs can be unpredictable. Our hybrid engine layers deterministic skill requirements over semantic resonance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-start hover:scale-[1.02] transition-transform"
              >
                <div className="bg-accent/10 p-4 rounded-xl mb-6 border border-accent/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Layer */}
      <section className="py-24 relative overflow-hidden" id="how-it-works">
        {/* Decorative backdrop */}
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Explainable AI you can trust.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We never make automated decisions in the dark. Every candidate receives a detailed, plain-text breakdown of why they scored well (or poorly) across Semantic Match, Skills, and Experience vectors.
            </p>
            <ul className="space-y-4">
              {['Resume Parsing via AWS S3 & Parsing Microservices', 'High-dimension Vector Embeddings generation', 'LLM Contextual Reasoning for every resume', 'Final Dashboard aggregation via Next.js SSR'].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            {/* Mock Dashboard UI Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="bg-black/40 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground font-mono">/api/evaluate</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-bold text-white text-lg">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Senior React Engineer</div>
                      <div className="text-sm text-muted-foreground">Match Score: 94%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold text-2xl">Exceptional Fit</div>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-mono text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="text-accent">›</span>
                    <span>Analyzing semantic vectors... <span className="text-green-400">Completed (0.4s)</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent">›</span>
                    <span>Validating exact skills match... <span className="text-green-400">9/10 Found</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent">›</span>
                    <span>LLM reasoning: "Candidate possesses strong Next.js App Router experience aligned perfectly with requirement."</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-20 text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your hiring process?</h2>
          <p className="text-muted-foreground mb-8">
            Deploy the Intelligent Resume Screening Agent today and spend more time interviewing the right people.
          </p>
          <Link href="/upload" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            Start Processing Resumes <Users className="h-5 w-5" />
          </Link>
        </div>
        <div className="absolute bottom-8 w-full text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TalentLens AI. Mitigating hiring bias through advanced LLMs.
        </div>
      </footer>
    </div>
  );
}
