import React from 'react'

const profileImg = '/about/smokies.jpg'

const ABOUT = {
  text: ` Hi! My name is Shanav Bagga and I recently graduated from the University of Illinois at Urbana-Champaign with a Master's of Computer Science degree. I'm currently a Software Engineer I at College Board based out of New York!\n\n\n\nI'm extremely passionate about my field, with a particular interest in Distributed Systems and Computer Networks. I'm a huge fan of football and F1 and can be caught watching every Bears game and F1 race. I've only been to 3 countries at the moment but I hope to visit numerous more in the future, especially Western European countries. Outside of my time working and studying, I've had a growing interest in graphic design and video editing using Canva and Adobe Creative Cloud!`,
}

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About" title="A bit about me" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {ABOUT.text.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="text-secondary leading-relaxed text-base">
                {para.trim()}
              </p>
            ))}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 border border-navy/30 translate-x-3 translate-y-3 rounded" />
              <img
                src={profileImg}
                alt="Shanav Bagga"
                className="relative w-96 h-96 object-cover rounded transition-all duration-500"
              />
            </div>
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

function Divider() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px flex-1 bg-navy/20" />
      <span className="text-navy/40 text-xs">✦</span>
      <span className="h-px flex-1 bg-navy/20" />
    </div>
  )
}
