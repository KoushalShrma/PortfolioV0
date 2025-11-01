'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '@/components/icons';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
}

export const AIChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Koushal's AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    reason: '',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isExpanded && chatInputRef.current) {
      setTimeout(() => chatInputRef.current?.focus(), 400);
    }
  }, [isExpanded]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Hide quick actions after first message
    setShowQuickActions(false);

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.needsContact) {
        setShowContactForm(true);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.message,
            timestamp: new Date(),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.message,
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.reason) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
        },
      ]);

      setShowContactForm(false);
      setContactForm({ name: '', email: '', reason: '' });
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, failed to send your message. Please try again.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isExpanded) {
        handleSendMessage();
      }
    }
  };

  const handleConnectClick = () => {
    setShowQuickActions(false);
    setShowContactForm(true);
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content:
          "Great! I'd love to help you connect with Koushal. Please fill in your details below and he'll get back to you within 24-48 hours.",
        timestamp: new Date(),
      },
    ]);
  };

  const handleAskQuestion = (question: string) => {
    setShowQuickActions(false);
    setInput(question);
    // Simulate clicking send after setting the question
    setTimeout(() => {
      const event = new KeyboardEvent('keypress', { key: 'Enter' });
      chatInputRef.current?.dispatchEvent(event);
    }, 100);
  };

  return (
    <>
      {/* Bottom bar - collapsed state (same size as navbar) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 left-0 right-0 z-50 mx-auto sm:bottom-10"
          >
            <div className="container mx-auto px-4">
              <div className="sm:bg-background/80 mx-auto flex max-w-[800px] items-center gap-2 sm:rounded-full sm:border sm:px-2 sm:py-3 sm:backdrop-blur-sm">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-muted-foreground hover:text-foreground flex w-full items-center gap-3 rounded-full bg-white/80 px-6 py-3 backdrop-blur-sm transition-colors dark:bg-gray-900/80 sm:bg-transparent sm:backdrop-blur-none"
                >
                  <Icons.sparkles className="size-5 shrink-0" />
                  <span className="text-sm">
                    Ask me anything about Koushal...
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <kbd className="bg-muted hidden rounded border px-2 py-1 text-xs sm:inline-block">
                      Click to chat
                    </kbd>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen expanded view */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop with heavy blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-lg"
            />

            {/* Close button at top right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1, type: 'spring' }}
              onClick={() => setIsExpanded(false)}
              className="fixed right-6 top-6 z-[70] flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:bg-white/20 sm:right-10 sm:top-10"
            >
              <Icons.close className="size-6 text-white" />
            </motion.button>

            {/* Connect button on the side */}
            {!showContactForm && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2, type: 'spring' }}
                onClick={handleConnectClick}
                className="fixed left-6 top-6 z-[70] flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all hover:bg-white/20 sm:left-10 sm:top-10"
              >
                <span className="text-sm font-medium text-white">
                  Connect with Koushal
                </span>
              </motion.button>
            )}

            {/* Messages floating on blurred background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="fixed inset-x-4 bottom-36 top-20 z-[65] overflow-y-auto sm:inset-x-8 sm:bottom-44 md:inset-x-16 lg:inset-x-32 xl:inset-x-48"
            >
              <div className="mx-auto max-w-4xl space-y-6 pb-8">
                {messages.map((message, index) => {
                  // Parse message content to identify emphasis patterns
                  const renderStyledContent = (content: string, isUser: boolean) => {
                    // Remove markdown formatting
                    const cleanContent = content
                      .replace(/\*\*/g, '') // Remove **
                      .replace(/\*/g, '')   // Remove *
                      .replace(/`/g, '')    // Remove `
                      .replace(/#/g, '');   // Remove #
                    
                    const words = cleanContent.split(' ');
                    return words.map((word, i) => {
                      // Keywords that should be emphasized (larger and bold)
                      const emphasisKeywords = [
                        'Java', 'Spring', 'Boot', 'React', 'MySQL', 'Hibernate', 
                        'Backend', 'Frontend', 'Developer', 'Projects', 'Skills',
                        'Experience', 'Full', 'Stack',
                        'REST', 'API', 'JWT', 'Database', 'Authentication',
                        'Training', 'Certification', 'IIT', 'Kharagpur',
                        'connect', 'hire', 'portfolio', 'work', 'contact',
                        'Hello', 'Hi', 'Thanks', 'Thank', 'What', 'How', 'Can'
                      ];
                      
                      const isEmphasized = emphasisKeywords.some(keyword => 
                        word.toLowerCase().includes(keyword.toLowerCase())
                      );
                      
                      // Check if word is Koushal or Sharma for special gradient color
                      const isName = word.toLowerCase().includes('koushal') || 
                                     word.toLowerCase().includes('sharma');
                      
                      return (
                        <span key={i}>
                          <span
                            className={`${
                              isName
                                ? 'text-3xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent' // Gradient like typewriter (same in both modes)
                                : isEmphasized
                                  ? 'text-3xl font-bold text-gray-900 dark:text-white' // Black in light mode, white in dark mode
                                  : 'text-xl text-gray-800 dark:text-gray-200' // Darker gray in light mode, light gray in dark mode
                            } transition-all`}
                          >
                            {word}
                          </span>
                          {' '}
                        </span>
                      );
                    });
                  };

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="max-w-[85%] py-4">
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {renderStyledContent(message.content, message.role === 'user')}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="border border-white/20 bg-white/90 dark:bg-gray-800/90 max-w-[85%] rounded-2xl px-6 py-4 shadow-lg backdrop-blur-md">
                      <div className="flex space-x-2">
                        <div className="size-2 animate-bounce rounded-full bg-purple-600"></div>
                        <div className="size-2 animate-bounce rounded-full bg-purple-600 [animation-delay:0.2s]"></div>
                        <div className="size-2 animate-bounce rounded-full bg-purple-600 [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Contact Form */}
                {showContactForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-md"
                  >
                    <div className="space-y-4 rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur-md dark:bg-gray-800/90">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <textarea
                        placeholder="Reason to connect"
                        value={contactForm.reason}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, reason: e.target.value })
                        }
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <button
                        onClick={handleContactSubmit}
                        disabled={isLoading}
                        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-purple-600 disabled:opacity-50"
                      >
                        Send Connection Request
                      </button>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </motion.div>

            {/* Input bar at bottom (same style as collapsed bar) */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="fixed bottom-5 left-0 right-0 z-[70] mx-auto sm:bottom-10"
            >
              <div className="container mx-auto px-4">
                <div className="sm:bg-background/80 mx-auto flex max-w-[800px] items-center gap-2 sm:rounded-full sm:border sm:px-2 sm:py-3 sm:backdrop-blur-sm">
                  {!showContactForm ? (
                    <div className="flex w-full items-center gap-3 rounded-full bg-white/90 px-6 py-3 backdrop-blur-md dark:bg-gray-900/90 sm:bg-transparent sm:backdrop-blur-none">
                      <div className="relative flex-1">
                        <input
                          ref={chatInputRef}
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          disabled={isLoading}
                          className="w-full bg-transparent pr-8 text-sm outline-none placeholder:text-gray-500 disabled:opacity-50 dark:placeholder:text-gray-400"
                        />
                        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 animate-pulse text-xl font-thin text-[#e63946]">
                          |
                        </span>
                      </div>
                      <button
                        onClick={handleSendMessage}
                        disabled={isLoading || !input.trim()}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white transition-all hover:from-purple-700 hover:to-purple-600 disabled:opacity-50"
                      >
                        <Icons.send className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full rounded-full bg-white/90 px-6 py-4 text-center text-sm text-gray-600 backdrop-blur-md dark:bg-gray-900/90 dark:text-gray-400">
                      Fill out the form above to connect
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
