import React from 'react'

const dbImg = '/projects/db.jpg'
const chartImg = '/projects/chart.jpg'
const footballImg = '/projects/football.jpg'
const chatImg = '/projects/chat.jpg'

const PROJECTS = [
  {
    title: 'RainStorm',
    bodyText: '- Built a distributed stream processing system supporting filter, transform, and aggregate operators across 10 worker VMs with a leader-based scheduler and hash-partitioned tuple routing\n - Configured auto-scaling via a Resource Manager that monitors per-task tuple throughput and dynamically scales tasks up/down against high/low watermarks\n - Benchmarked against Apache Spark across 4 workloads, achieving comparable end-to-end latency on synthetic datasets',
    links: [],
    tags: ['Go', 'Distributed Systems'],
  },
  {
    image: dbImg,
    title: 'Customer ETL Pipeline',
    bodyText: '- Implemented an **ETL Pipeline** that extracted 250,000 records of ecommerce customer data from **MySQL**\n -  Transformed data in **PySpark** through filtering and aggregating by customer, and loaded it to **Google BigQuery**\n - Developed a **logistic regression model** to predict customer retainment, achieving an accuracy rate of 85%',
    links: [{ text: 'GitHub', href: 'https://github.com/Shanav12/ETL-Pipeline' }],
    tags: ['Python', 'Spark', 'MySQL', 'Google BigQuery'],
  },
  {
    image: chartImg,
    title: 'LSTM Trading Model',
    bodyText: '- Implemented a deep learning model using 4 LSTM layers in **Keras** and stock data through **REST API** calls to Alpaca to analyze stock data for a 100 tickers from the Q1 in 2022 until present\n - Predicted the next 10-day moving average for each ticker took long/short positions by comparing the forecast to the current 10-day moving average, generating **10% profit** in 1 month',
    links: [{ text: 'GitHub', href: 'https://github.com/Shanav12/LSTM_Trading_Model' }],
    tags: ['Python', 'Tensorflow', 'Keras', 'REST API'],
  },
  {
    image: footballImg,
    title: 'Sports Ball Classification Model',
    bodyText: '- Fine-tuned a **Google ViT** model in Python that takes prompts the user to upload an image of a sports ball and outputs the probability of which type of sports balls it could be\n - Used **Roboflow** to classify images and create the train, test, and validation datasets, and deployed the fine-tuned model to Hugging Face\n - Implemented a full-stack website using Flask, HTML, and CSS to allow users to interact with the model',
    links: [{ text: 'GitHub', href: 'https://github.com/Shanav12/Sports_Ball_Classification_Model' }],
    tags: ['Python', 'Flask', 'Google ViT', 'HTML', 'CSS'],
  },
  {
    image: chatImg,
    title: 'TCP Chat App',
    bodyText: '- Engineered a chat application using **Boost** libraries in C++, facilitating seamless multi-client connectivity to a server through **TCP/IP** networking protocols to ensure efficient and reliable message delivery\n - Implemented efficient **threading** and **synchronization** mechanisms to handle multiple clients simultaneously, enhancing the overall system stability and user experience\n',
    links: [{ text: 'GitHub', href: 'https://github.com/Shanav12/TCP-Chat-App' }],
    tags: ['C++', 'Boost', 'TCP/IP'],
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Work" title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const { title, bodyText, tags, links } = project

  const parseBody = (text) => {
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => line.replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1').trim())
      .filter(Boolean)
  }

  return (
    <div className="group border border-navy/20 rounded p-6 hover:border-navy/50 transition-all duration-200 flex flex-col h-full bg-[#f5f4f1]">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-serif text-primary text-lg leading-snug">{title}</h3>
        <svg className="w-5 h-5 text-navy/40 group-hover:text-navy transition-colors shrink-0 ml-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7V6a3 3 0 013-3h2M3 17v1a3 3 0 003 3h2m10-18h2a3 3 0 013 3v1M21 17v1a3 3 0 01-3 3h-2" />
        </svg>
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {parseBody(bodyText).map((point, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-secondary leading-relaxed">
            <span className="text-navy mt-1.5 shrink-0 text-xs">›</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-end justify-between gap-4 mt-auto pt-4 border-t border-navy/10">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="font-serif text-xs text-navy border border-navy/30 px-2 py-0.5 rounded uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 shrink-0">
          {links?.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-dim hover:text-navy transition-colors underline underline-offset-4"
            >
              {link.text}
            </a>
          ))}
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
