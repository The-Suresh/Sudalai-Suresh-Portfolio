import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, Minus } from "lucide-react";

const Bot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Suresh's AI assistant. 👋 Ask me about his skills, projects, or how to contact him!", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = { id: Date.now(), text: inputText, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        // Simple Keyword AI Logic
        setTimeout(() => {
            const lowerInput = userMessage.text.toLowerCase();
            let botResponse = "I'm not sure about that. Try asking about 'skills', 'projects', or 'contact'!";

            if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
                botResponse = "Hello there! How can I help you today? 😊";
            } else if (lowerInput.includes("who are you") || lowerInput.includes("bot")) {
                botResponse = "I'm a virtual assistant designed to showcase Suresh's portfolio. I run on code, coffee, and magic! ✨";
            } else if (lowerInput.includes("skill") || lowerInput.includes("stack") || lowerInput.includes("tech")) {
                botResponse = "Suresh is a pro at **MERN Stack** (MongoDB, Express, React, Node.js). He also knows Python, Java, and modern UI frameworks like Tailwind & Framer Motion. 💻";
            } else if (lowerInput.includes("project") || lowerInput.includes("work")) {
                botResponse = "He has built some cool stuff! Check out the **Projects** section for his latest work, including this portfolio and web apps. 🚀";
            } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire")) {
                botResponse = "You can reach him via the **Contact form** on this site, or follow the social links in the sidebar! 📧";
            } else if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
                botResponse = "You can download his Resume from the **About** or **Hero** section. It's packed with details! 📄";
            }

            const botMessage = { id: Date.now() + 1, text: botResponse, sender: "bot" };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] glass-card border border-white/20 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-primary/90 backdrop-blur-md p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                                    <img src="/bot_waving.png" alt="Bot" className="w-8 h-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                                    <p className="text-xs text-white/80 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Minus size={20} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-white/10 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-md text-foreground rounded-bl-none"
                                            }`}
                                    >
                                        <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 dark:bg-black/40 p-4 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <form onSubmit={handleSend} className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-secondary/50"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="bg-primary hover:bg-primary/90 text-white p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative group cursor-pointer"
            >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-primary/40 blur-[30px] rounded-full pointer-events-none transition-all duration-500 ${isOpen ? 'opacity-0' : 'group-hover:opacity-100'}`} />

                {isOpen ? (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="w-14 h-14 bg-white dark:bg-black/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative z-10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </div>
                ) : (
                    <img
                        src="/bot_waving.png"
                        alt="AI Assistant"
                        className="w-16 h-16 object-contain drop-shadow-2xl animate-float relative z-10"
                    />
                )}

                {/* Notification Badge if closed */}
                {!isOpen && messages.length === 1 && (
                    <span className="absolute top-0 right-2 z-20 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                )}
                {!isOpen && messages.length === 1 && (
                    <span className="absolute top-0 right-2 z-20 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                )}
            </motion.div>
        </div>
    );
};

export default Bot;
