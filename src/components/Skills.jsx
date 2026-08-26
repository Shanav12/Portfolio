import React from 'react'
import cppIcon from '../../public/skills/c-plus-plus.svg'
import pythonIcon from '../../public/skills/python.png'
import javaIcon from '../../public/skills/java.png'
import jsIcon from '../../public/skills/js.png'
import tsIcon from '../../public/skills/typescript.png'
import rustIcon from '../../public/skills/rust.png'
import sqlIcon from '../../public/skills/sql.png'
import htmlIcon from '../../public/skills/html.png'
import reactIcon from '../../public/skills/react.png'
import nodeIcon from '../../public/skills/nodejs.png'
import expressIcon from '../../public/skills/ex.png'
import flaskIcon from '../../public/skills/flask.jpg'
import tfIcon from '../../public/skills/tensorflow.jpg'
import sparkIcon from '../../public/skills/spark.jpg'
import gitIcon from '../../public/skills/git.png'
import dockerIcon from '../../public/skills/docker.png'
import mysqlIcon from '../../public/skills/mysql.png'
import mongoIcon from '../../public/skills/mongo-db.png'
import awsIcon from '../../public/skills/aws.jpg'
import linuxIcon from '../../public/skills/linux.jpg'
import gcpIcon from '../../public/skills/gcp.png'
import goIcon from '../../public/skills/go.svg'
import rIcon from '../../public/skills/r.svg'
import pytorchIcon from '../../public/skills/pytorch.svg'
import azureIcon from '../../public/skills/azure.svg'
import kubernetesIcon from '../../public/skills/kubernetes.svg'
import terraformIcon from '../../public/skills/terraform.svg'

const SKILLS = [
  {
    title: 'Languages',
    items: [
      { icon: cppIcon, title: 'C++' },
      { icon: pythonIcon, title: 'Python' },
      { icon: javaIcon, title: 'Java' },
      { icon: jsIcon, title: 'JavaScript' },
      { icon: tsIcon, title: 'Typescript' },
      { icon: rustIcon, title: 'Rust' },
      { icon: sqlIcon, title: 'SQL' },
      { icon: htmlIcon, title: 'HTML' },
      { icon: goIcon, title: 'Go' },
      { icon: rIcon, title: 'R' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { icon: reactIcon, title: 'React.js' },
      { icon: nodeIcon, title: 'Node.js' },
      { icon: expressIcon, title: 'Express.js' },
      { icon: flaskIcon, title: 'Flask' },
      { icon: tfIcon, title: 'Tensorflow' },
      { icon: sparkIcon, title: 'Spark' },
      { icon: pytorchIcon, title: 'PyTorch' },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { icon: gitIcon, title: 'Git' },
      { icon: dockerIcon, title: 'Docker' },
      { icon: mysqlIcon, title: 'MySQL' },
      { icon: mongoIcon, title: 'MongoDB' },
      { icon: awsIcon, title: 'AWS' },
      { icon: linuxIcon, title: 'Linux' },
      { icon: gcpIcon, title: 'Google Cloud' },
      { icon: azureIcon, title: 'Azure' },
      { icon: kubernetesIcon, title: 'Kubernetes' },
      { icon: terraformIcon, title: 'Terraform' },
    ],
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="My Background" title="Skills" />

        <div className="space-y-12">
            {SKILLS.map((group, i) => (
              <div key={group.title}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-8 bg-navy/40" />
                  <h3 className="font-serif text-xs text-navy uppercase tracking-widest shrink-0">
                    {group.title}
                  </h3>
                  <span className="flex-1 h-px bg-navy/20" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-2.5 px-4 py-2.5 border border-navy/20 rounded hover:border-navy hover:bg-navy/5 transition-colors duration-200 group"
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-5 h-5 object-contain transition-all duration-200"
                        />
                      )}
                      <span className="text-sm text-secondary group-hover:text-navy transition-colors duration-200">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
                {i < SKILLS.length - 1 && (
                  <div className="flex items-center gap-4 mt-12">
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
