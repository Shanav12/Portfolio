import React from 'react'

const EDUCATION = [
  {
    title: 'August 2025 - May 2026',
    cardTitle: "Master's of Computer Science",
    cardSubtitle: 'University of Illinois Urbana-Champaign',
    cardDetailedText: 'GPA: 3.60',
  },
  {
    title: 'August 2022 - May 2025',
    cardTitle: 'Bachelor of Science in Computer Science & Statistics',
    cardSubtitle: 'University of Illinois Urbana-Champaign',
    cardDetailedText: 'GPA: 3.71',
  },
]

export default function Education() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Academic" title="Education" />

        <div className="space-y-8">
            {EDUCATION.map((item, i) => (
              <div key={i} className="border border-navy/20 rounded p-8 hover:border-navy/50 transition-colors duration-200 bg-[#f5f4f1]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif text-primary text-2xl font-medium">{item.cardTitle}</h3>
                    <p className="text-secondary text-base italic mt-1">{item.cardSubtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-xl italic text-dim">{item.title}</span>
                  </div>
                </div>

                {item.cardDetailedText && (
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <span className="font-serif text-md text-navy uppercase tracking-widest">GPA </span>
                    <span className="font-serif text-md text-secondary">{item.cardDetailedText.replace('GPA: ', '')}</span>
                  </div>
                )}
              </div>
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
