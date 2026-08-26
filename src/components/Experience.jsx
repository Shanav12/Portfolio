import React from 'react'

const EXPERIENCES = [
  {
    title: 'Software Engineer I',
    subtitle: 'College Board',
    workDescription: [
      'Developed an end-to-end test harness to validate cell and tenant provisioning workflows for the control plane of a cell-based architecture, executing locally with LocalStack and in AWS',
    ],
    dateText: '07/2026 – Present',
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Walgreens',
    workDescription: [
      'Implemented a full-stack web app to optimize the creation and distribution of change request deployment plans through Node.js, React.js, and Express.js, eliminating 1000+ email chains',
      'Created Excel workbooks for each deployment plan from user form input, stored the files in Azure Blob Storage, stored metadata in Azure SQL Server, and hosted the app in Azure App Services',
      'Spearheaded the migration of Dynatrace OneAgent from 250 host servers and 6 tenants to a consolidated prod and non-prod tenant environment, utilizing multiprocessing to execute in parallel',
    ],
    dateText: '06/2025 – 08/2025',
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Arora Innoventions',
    workDescription: [
      'Fine-tuned a Stable Diffusion and Control Net model on 1000 image pairs for 5 epochs, optimizing hyperparameters to achieve a 60% improvement in output image quality for avatar creation',
      'Implemented a robust REST API through Node.js and Express.js and deployed it to Google Compute Engine\'s GPU infrastructure, achieving a 40% reduction in latency within three weeks',
    ],
    dateText: '06/2024 – 08/2024',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    subtitle: 'Siebel School of Computing & Data Science',
    workDescription: [
      'Held weekly office hours assisting 50+ students understanding key C++ concepts such as compilation, stacks, memory, queues, trees, graph theory, smart pointers, polymorphism, and file streams',
      'Led 14 lab sessions which enhanced student comprehension and project readiness through coding exercises',
    ],
    dateText: '08/2023 – 12/2023',
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'AI Camp',
    workDescription: [
      "Developed a Python chatbot hosted with Streamlit which allows users to select from 3 different query engines and upload up to 10 files simultaneously, enabling comprehensive search capabilities",
      "Engineered an automated testing suite of 1,000 queries using OpenAI's API and reduced the hallucination rate to 5% and a median accuracy rate of 90%, significantly enhancing the chatbot's reliability",
      'Strengthened performance and reached a 90% median response accuracy score by integrating the Langchain and Pinecone pipeline, which successfully decreased the total incorrect responses by 25%',
    ],
    dateText: '05/2023 – 08/2023',
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Career" title="Experience" />

        <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-navy/20" />

            <div className="space-y-14">
              {EXPERIENCES.map((item, i) => (
                <div key={i} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-navy -translate-x-[3px]" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-serif text-primary text-2xl font-medium">{item.title}</h3>
                      <p className="text-secondary text-base mt-0.5 italic">{item.subtitle}</p>
                    </div>
                    <span className="font-serif text-sm text-dim whitespace-nowrap pt-1.5 shrink-0 italic">
                      {item.dateText}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {item.workDescription.map((point, j) => (
                      <li key={j} className="text-base text-secondary leading-relaxed pl-4 border-l border-navy/20">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {i < EXPERIENCES.length - 1 && (
                    <div className="flex items-center gap-4 mt-14">
                      <span className="h-px flex-1 bg-navy/10" />
                      <span className="text-navy/30 text-xs">✦</span>
                      <span className="h-px flex-1 bg-navy/10" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

function SectionHeader({ label, title }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="h-px w-12 bg-navy/40" />
        <p className="font-serif text-xs text-navy uppercase tracking-widest">{label}</p>
        <span className="h-px w-12 bg-navy/40" />
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-primary tracking-tight">
        {title}
      </h2>
    </div>
  )
}
