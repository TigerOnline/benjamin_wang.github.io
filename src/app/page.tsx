import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileNav } from "@/components/MobileNav";
import { Section } from "@/components/Section";
import { SideNav } from "@/components/SideNav";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-4">
        <div className="flex gap-16">
          <div className="flex-1 min-w-0">
            <Hero
              name="Benjamin"
              subtitle="Data Science & Computer Science @ UC Berkeley"
              imageSrc="/profile.jpg"
            />
            <MobileNav />
            <div className="space-y-0">
              <Section id="bio" title="about me">
                <p>
                  A learner who loves to deeply study concepts and implement them into the world. Studying Data Science and Computer Science to see how we can make technology work for people.
                </p>
                <p className="mt-4">
                  You can learn more by clicking around the sections on the right—or just poke around the rest of the site!
                </p>
              </Section>
              <Section id="work" title="currently">
                <ul className="space-y-6 list-none">
                  <li>
                    <span className="font-medium text-foreground">MatX: LLM Benchmarking Sandbox (WIP)</span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Contributing to a secure, containerized platform using sand-boxed Docker containers to evaluate participant-submitted LLM training setups. Implementing a standardized evaluation framework to measure decode/inference efficiency and model quality metrics. Full stack: React, Python, FastAPI, Docker, Kubernetes, PostgreSQL, PyTorch.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Customer Service AI Agent | BMO (Daxe)</span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Engineered a program integrating an LLM API and SpaCy to extract unstructured data from PDF customer support tickets into structured text. Exported to CSV for Neo4j loading, drastically increasing processing efficiency. Researched cost-efficient open-weight models to resolve API scaling issues.
                    </p>
                  </li>
                </ul>
              </Section>
              <Section id="research" title="research">
                <ul className="space-y-6 list-none">
                  <li>
                    <span className="font-medium text-foreground">Big Data Preparation: Company Restructuring</span>
                    <span className="text-zinc-500 dark:text-zinc-400"> — with Dr. Anastassia Fedyk</span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Researched 10-k filings to identify restructuring activities. Analyzed HTML structures and keyword trends to isolate information-dense text, minimizing token counts for efficient LLM processing. Designed bulk scraping pipelines scaling to 50,000 companies.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">DNA Sequencing Lab</span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Automated client queries using the Gmail API. Managed Google Cloud credentials and trained for data pipeline engineering on the Savio supercomputer.
                    </p>
                  </li>
                </ul>
              </Section>
              <Section id="teaching" title="teaching">
                <p>
                  <span className="font-medium text-foreground">Academic Intern, CS 61A</span>
                  <span className="text-zinc-600 dark:text-zinc-400"> — supporting UC Berkeley&apos;s introductory computer science course.</span>
                </p>
              </Section>
              <Section id="projects" title="projects">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">Academic</h3>
                    <ul className="space-y-4 list-none">
                      <li>
                        <span className="font-medium">Spam/Ham Email Classifier</span> — Binary classifier using Logistic Regression; 0.8475 test accuracy
                      </li>
                      <li>
                        <span className="font-medium">Housing Price Prediction</span> — Linear regression on 500k+ records; custom error metric, EDA
                      </li>
                      <li>
                        <span className="font-medium">NYT Text Analysis</span> — Sentiment analysis with DistilBERT; seaborn visualizations
                      </li>
                      <li>
                        <span className="font-medium">Build Your Own World (BYOW)</span> — 2D tile-based Java game with procedural generation, persistence
                      </li>
                      <li>
                        <span className="font-medium">WordNet (NGordnet)</span> — Semantic search engine; custom directed graph, 150MB+ data processing
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">Club & Independent</h3>
                    <ul className="space-y-4 list-none">
                      <li>
                        <span className="font-medium">Homesnap AI & Crime Trend Webscraper</span> — Data pipelines for fine-tuned ChatGPT app; Selenium scraper for CA crime data
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">Personal</h3>
                    <ul className="space-y-4 list-none">
                      <li>
                        <span className="font-medium">Wordguessr</span> — <a href="https://studio.code.org/projects/applab/LFf6uaSikXhsaxaXsQoBMKSz2gxs18nOte3s_gfgiio" target="_blank" rel="noopener noreferrer">Play</a>
                      </li>
                      <li>
                        <span className="font-medium">Shario</span> — <a href="https://shario.neocities.org" target="_blank" rel="noopener noreferrer">shario.neocities.org</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Section>
              <Section id="coursework" title="coursework">
                <p className="text-zinc-600 dark:text-zinc-400">
                  CS61A, CS61B, Data 8, Data 100, Data 104, EECS 126 (Probability and Random Processes), CS170 (Efficient Algorithms and Intractable Problems), discrete math. Member of the Data Science Scholars Program.
                </p>
              </Section>
              <Section id="contact" title="contact">
                <p>
                  Feel free to reach out to me, I&apos;d be glad to talk about Data Science, ML, or any exciting projects! The best way to reach me is at{" "}
                  <a href="mailto:wang.benjamin2006@gmail.com">wang.benjamin2006@gmail.com</a>
                </p>
              </Section>
            </div>
          </div>
          <SideNav />
        </div>
        <Footer />
      </main>
    </div>
  );
}
