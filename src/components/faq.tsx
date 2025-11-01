'use client';

import { useState } from 'react';

import { Icons } from './icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: 'What are you looking for right now?',
    answer:
      "I'm actively seeking a Full Stack Java Developer role where I can contribute, learn, and grow. I'm open to remote positions, on-site opportunities, or hybrid roles. Whether it's an internship, entry-level position, or a junior developer role, I'm ready to prove myself and add real value to your team.",
  },
  {
    question: 'What technologies do you work with?',
    answer:
      "My core stack is Java, Spring Boot, Hibernate, and MySQL for backend development, and React.js, Tailwind CSS, and JavaScript for frontend. I'm comfortable with REST APIs, JWT authentication, Maven, Docker, and Git. I'm also a quick learner—if there's a technology your team uses that I haven't worked with yet, I'll pick it up fast.",
  },
  {
    question: 'Do you have real project experience?',
    answer:
      "I've built hands-on projects like Learn Now (a learning platform with secure authentication and REST APIs) and Find-A-Spot (a smart parking solution with real-time booking). I also completed an intensive Full Stack Java Developer training program where I earned recognition for problem-solving and code quality. I'm certified by IIT Kharagpur (NPTEL) and J.P. Morgan Chase (Forage).",
  },
  {
    question: 'What makes you a good fit for a development team?',
    answer:
      "I'm not just looking for a job—I'm looking to make an impact. I'm hungry to learn, eager to contribute, and obsessed with writing clean, maintainable code. I take feedback seriously, collaborate well, and don't give up when things get tough. You won't have to push me to improve; I push myself every single day.",
  },
  {
    question: 'Are you open to remote work?',
    answer:
      "Absolutely! I'm fully comfortable with remote work and can adapt to different timezones. I communicate proactively, stay accountable, and deliver results whether I'm working from home or in an office. Remote or on-site, I'm committed to being a reliable team member.",
  },
  {
    question: 'What are your career goals?',
    answer:
      "Short-term, I want to land a role where I can apply my skills, learn from experienced developers, and contribute to real-world projects. Long-term, I aim to become a highly skilled Full Stack Engineer who builds scalable, impactful applications. I'm not here to coast—I'm here to grow, excel, and prove that hard work beats everything.",
  },
];

export function FAQ({ items = defaultFAQItems }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Structured data for FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to common questions about my services and expertise
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <div key={index} className="border-border border-b last:border-b-0">
              <button
                className="hover:bg-muted/50 flex w-full items-center justify-between py-6 text-left transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="pr-4 text-lg font-semibold">{item.question}</h3>
                <Icons.chevronDown
                  className={`size-5 transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index)
                    ? 'max-h-96 pb-6 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
