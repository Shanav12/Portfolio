import React from 'react'

const profileImg = '/about/smokies.jpg'

const INTERESTS = [
  {
    icon: '🎵',
    label: 'Music',
    detail: 'R&B + Rap',
    sub: 'Drake · Kanye · J. Cole · Giveon · Omar Apollo · Brent Faiyaz · Bryson Tiller',
  },
  {
    icon: '🏎️',
    label: 'Formula 1',
    sub: 'Huge McLaren fan, specifically of Lando Norris',
  },
  {
    icon: '🏈',
    label: 'Football',
    sub: 'Born & raised in the Windy City, huge Bears Fan',
  },
  {
    icon: '☕',
    label: 'Coffee',
    sub: 'Caramel latte variations or cappuccinos are the go to',
  },
  {
    icon: '✈️',
    label: 'Travel',
    detail: 'Dream destinations',
    sub: 'Banff · Australia · Western Europe',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About" title="A bit about me" />

        {/* Bio + Photo */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-base">
              Hi! I'm Shanav Bagga — a Software Engineer at College Board based in New York, fresh
              off a Master's in Computer Science from the University of Illinois at
              Urbana-Champaign. I'm deeply passionate about Distributed Systems and Computer
              Networks, and I love building systems that scale.
            </p>
            <p className="text-secondary leading-relaxed text-base">
              Outside of work I'm usually finding a new playlist, catching an F1 race, or hunting
              down a great cappuccino. I grew up playing quarterback and the Bears hold a permanent
              piece of my heart (for better or worse). Lately I've been mapping out trips to Banff,
              Australia, and as much of Western Europe as I can fit in.
            </p>
          </div>

          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              <div className="absolute inset-0 border border-navy/30 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 rounded" />
              <img
                src={profileImg}
                alt="Shanav Bagga"
                className="relative w-60 h-60 md:w-96 md:h-96 object-cover object-top rounded transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-12 bg-navy/40" />
            <p className="font-serif text-xs text-navy uppercase tracking-widest">Interests</p>
            <span className="h-px flex-1 bg-navy/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERESTS.map(({ icon, label, detail, sub }) => (
              <div
                key={label}
                className="group relative bg-surface border border-border rounded-xl p-6 hover:border-navy/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5 select-none">{icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="font-serif text-primary text-lg leading-tight">{label}</span>
                      <span className="text-navy text-xs font-mono tracking-wide opacity-70">
                        {detail}
                      </span>
                    </div>
                    <p className="text-secondary text-sm leading-snug">{sub}</p>
                  </div>
                </div>
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
      <h2 className="font-serif text-4xl md:text-5xl text-primary tracking-tight">{title}</h2>
    </div>
  )
}
