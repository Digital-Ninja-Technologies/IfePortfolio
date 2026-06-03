import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Timer, Trophy, RotateCcw, Gamepad2 } from "lucide-react";

// ============ Game 1: Zen Bubble Pop ============
interface Bubble {
  id: number;
  x: number; // %
  size: number;
  duration: number;
  delay: number;
  hue: number;
}

const ZenBubbles = () => {
  const [score, setScore] = useState(0);
  const [popped, setPopped] = useState<Set<number>>(new Set());
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const spawn = () => {
      idRef.current += 1;
      const id = idRef.current;
      const b: Bubble = {
        id,
        x: Math.random() * 90 + 2,
        size: Math.random() * 50 + 40,
        duration: Math.random() * 6 + 7,
        delay: 0,
        hue: 170 + Math.random() * 40,
      };
      setBubbles((prev) => [...prev.slice(-25), b]);
      setTimeout(() => {
        setBubbles((prev) => prev.filter((x) => x.id !== id));
        setPopped((prev) => {
          const n = new Set(prev);
          n.delete(id);
          return n;
        });
      }, (b.duration + 1) * 1000);
    };
    const i = setInterval(spawn, 700);
    return () => clearInterval(i);
  }, []);

  const handlePop = (id: number) => {
    if (popped.has(id)) return;
    setPopped((p) => new Set(p).add(id));
    setScore((s) => s + 1);
  };

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-border bg-gradient-to-b from-primary/5 via-background to-primary/10">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur border border-border">
        <Sparkles size={16} className="text-primary" />
        <span className="text-sm font-semibold">Popped: {score}</span>
      </div>
      <p className="absolute top-4 right-4 z-10 text-xs text-muted-foreground bg-background/80 backdrop-blur px-3 py-2 rounded-full border border-border">
        Tap the bubbles ✨
      </p>
      {bubbles.map((b) => (
        <button
          key={b.id}
          onClick={() => handlePop(b.id)}
          aria-label="Pop bubble"
          className="absolute bottom-[-100px] rounded-full cursor-pointer transition-all"
          style={{
            left: `${b.x}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: `radial-gradient(circle at 30% 30%, hsla(${b.hue}, 80%, 85%, 0.9), hsla(${b.hue}, 72%, 55%, 0.55))`,
            boxShadow: `0 0 30px hsla(${b.hue}, 72%, 60%, 0.4), inset -4px -4px 12px hsla(${b.hue}, 50%, 40%, 0.2)`,
            animation: `bubble-float ${b.duration}s linear forwards`,
            opacity: popped.has(b.id) ? 0 : 1,
            transform: popped.has(b.id) ? "scale(1.6)" : "scale(1)",
            transitionDuration: "350ms",
          }}
        />
      ))}
      <style>{`
        @keyframes bubble-float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-640px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

// ============ Game 2: Memory Match ============
const EMOJIS = ["🎨", "✨", "🌿", "🪷", "🍃", "🔮", "🌊", "🕊️"];

interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

const MemoryMatch = () => {
  const build = () =>
    shuffle([...EMOJIS, ...EMOJIS]).map((emoji, i) => ({
      id: i,
      emoji,
      flipped: false,
      matched: false,
    }));

  const [cards, setCards] = useState<Card[]>(build);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (won) return;
    const i = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(i);
  }, [won]);

  useEffect(() => {
    if (cards.every((c) => c.matched)) setWon(true);
  }, [cards]);

  const flip = (id: number) => {
    if (selected.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;
    const next = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
    setCards(next);
    const newSel = [...selected, id];
    setSelected(newSel);

    if (newSel.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = newSel.map((sid) => next.find((c) => c.id === sid)!);
      if (a.emoji === b.emoji) {
        setTimeout(() => {
          setCards((cs) =>
            cs.map((c) => (c.id === a.id || c.id === b.id ? { ...c, matched: true } : c)),
          );
          setSelected([]);
        }, 400);
      } else {
        setTimeout(() => {
          setCards((cs) =>
            cs.map((c) => (c.id === a.id || c.id === b.id ? { ...c, flipped: false } : c)),
          );
          setSelected([]);
        }, 800);
      }
    }
  };

  const reset = () => {
    setCards(build());
    setSelected([]);
    setMoves(0);
    setSeconds(0);
    setWon(false);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm">
            <Timer size={16} className="text-primary" />
            <span className="font-semibold tabular-nums">{seconds}s</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Trophy size={16} className="text-primary" />
            <span className="font-semibold">{moves} moves</span>
          </div>
        </div>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-border hover:bg-primary/10 transition-colors"
        >
          <RotateCcw size={14} /> Restart
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
        {cards.map((c) => {
          const show = c.flipped || c.matched;
          return (
            <button
              key={c.id}
              onClick={() => flip(c.id)}
              className="aspect-square rounded-2xl relative [perspective:800px]"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]"
                style={{ transform: show ? "rotateY(180deg)" : "rotateY(0)" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-primary/60 [backface-visibility:hidden] flex items-center justify-center">
                  <Sparkles className="text-primary-foreground/70" size={20} />
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-secondary border border-border [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center text-3xl sm:text-4xl ${
                    c.matched ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {c.emoji}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {won && (
        <div className="mt-6 text-center p-5 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="font-heading text-2xl text-foreground">You did it! 🎉</p>
          <p className="text-sm text-muted-foreground mt-1">
            Solved in {moves} moves · {seconds}s
          </p>
          <button
            onClick={reset}
            className="mt-4 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

// ============ Page ============
type Tab = "bubbles" | "memory";

const Game = () => {
  const [tab, setTab] = useState<Tab>("bubbles");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Play Zen Games — Onifade Ifeoluwa"
        description="Take a break. Pop calming bubbles or play a quick memory match game on Ife's portfolio."
        path="/game"
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-wider text-muted-foreground mb-5">
              <Gamepad2 size={14} className="text-primary" /> Take a breather
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Relax & Play
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Two tiny games to unwind between case studies. No score-keeping, no pressure —
              just pure good vibes.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setTab("bubbles")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                tab === "bubbles"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground hover:bg-primary/10"
              }`}
            >
              Zen Bubbles
            </button>
            <button
              onClick={() => setTab("memory")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                tab === "memory"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground hover:bg-primary/10"
              }`}
            >
              Memory Match
            </button>
          </div>

          {tab === "bubbles" ? <ZenBubbles /> : <MemoryMatch />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Game;
