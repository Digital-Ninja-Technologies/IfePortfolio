import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Hey! I'm Ife's AI Assistant. Ask me anything about Ife, their portfolio, services, or how to work together! 🚀"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const ifeContext = `
You are Ife's AI Assistant - a friendly, knowledgeable assistant about Onifade Ifeoluwa, a Product Designer.

ABOUT IFE:
- Name: Onifade Ifeoluwa
- Title: Product Designer
- Experience: 5+ years building digital products
- Specialization: Mobile apps, web apps, Web2 and Web3 products
- Email: Contact via the website
- LinkedIn: https://www.linkedin.com/in/onifadeifeoluwa/

EXPERTISE:
- Mobile Design (iOS & Android)
- Web & Web3 Design (Responsive Web Apps, Web3 Interfaces, Blockchain Design)
- Product Skills (User Research, Wireframing, Prototyping, Design Systems, User Flows, Hand-off to Developers)
- SaaS Dashboards
- FinTech Platforms
- Web3 Products
- Admin Interfaces
- Data Visualization

KEY ACHIEVEMENTS:
- 26+ Projects Delivered (mobile, web, and blockchain)
- 500K+ Users Impacted
- 18+ Happy Clients
- 100% User-Focused approach
- Available 24/7
- Results-Driven

PROCESS (How Ife Works):
1. Discovery & Alignment - Deep research, workshops, strategy
2. Design & Iterate - Wireframes, prototypes, user testing
3. Polish & Handoff - Pixel-perfect designs, specs, ongoing support

PORTFOLIO HIGHLIGHTS:
- OPay Landing Page Redesign
- BlowX Cryptocurrency
- Sportrex GameFi Platform
- Synclove (lovesyn.lovable.app)
- Moducode Hiring Platform
- Eskro Mobile App
- Taptap Send Redesign
- Bible Verse Display App
- Flex2Ride Ride Hailing App
- ConektApp Website Redesign
- Yumdash
- Gigatalik Meme-Token
- Korlodworks Website
- CineMetric AI
- And 12+ more projects

SERVICES:
- Product Design
- User Research & Testing
- Design Systems
- Web & App Design
- Web3/Blockchain Interface Design
- Design Handoff & Specs

CONTACT & LINKS:
- Website: Portfolio available at this site
- LinkedIn: https://www.linkedin.com/in/onifadeifeoluwa/
- Contra: https://contra.com/designninja?r=designninja
- Formspree Contact: Use the contact form on the website

YOU ARE:
- Friendly and professional
- Knowledgeable about Ife's work
- Helpful in connecting people with Ife
- Enthusiastic about design and products
- Quick to encourage reaching out directly for project discussions

CONVERSATION STYLE:
- Be warm and engaging
- Use emojis occasionally (but not excessively)
- Keep responses concise but informative
- Always offer to connect them with Ife for detailed discussions
- Answer questions about portfolio, services, and how to get started
`;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: ifeContext,
          messages: [
            ...messages,
            { role: "user", content: userMessage }
          ]
        })
      });

      const data = await response.json();
      const assistantMessage = data.content[0].text;
      
      setMessages(prev => [...prev, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please try again or reach out directly through the contact form!"
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Ask Ife's AI</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-full max-w-md h-96 rounded-2xl bg-card border border-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50 bg-primary/10">
            <div>
              <h3 className="font-bold text-foreground">Ife's AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask anything about portfolio & services</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-foreground/70" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-2 rounded-2xl rounded-bl-none">
                  <Loader className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50 flex gap-2">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              className="flex-1 px-4 py-2 rounded-full border border-border/50 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
