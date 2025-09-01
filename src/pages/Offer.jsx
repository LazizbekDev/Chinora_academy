import { useEffect, useMemo, useState } from "react";
import {
    Calendar,
    Clock,
    Tag,
    CheckCircle2,
    Users,
    Timer,
} from "lucide-react";

const nextTargetDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = 7; // 0-based: 7 = Avgust
    const days = [21, 22, 23];
    const hour = 20;
    const minute = 30;

    for (const d of days) {
        const t = new Date(year, month, d, hour, minute, 0);
        if (t.getTime() > now.getTime()) return t;
    }
    const nextMonth = new Date(year, month + 1, 1);
    const ny = nextMonth.getFullYear();
    const nm = nextMonth.getMonth();
    return new Date(ny, nm, days[0], hour, minute, 0);
};

const useCountdown = (target) => {
    const [remaining, setRemaining] = useState(() => target.getTime() - Date.now());

    useEffect(() => {
        const id = setInterval(() => {
            setRemaining(target.getTime() - Date.now());
        }, 1000);
        return () => clearInterval(id);
    }, [target]);

    if (remaining <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };

    const totalSeconds = Math.floor(remaining / 1000);
    const d = Math.floor(totalSeconds / (3600 * 24));
    const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return { d, h, m, s, done: false };
};

const Offer = () => {
    const target = useMemo(nextTargetDate, []);
    const { d, h, m, s, done } = useCountdown(target);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Top stripe */}
            <div className="w-full bg-secondary border-b border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm md:text-base flex items-center gap-3 justify-center">
                    <span className="text-primary font-semibold tracking-wide">BEPUL MASTERKLASS</span>
                    <span className="text-muted-foreground text-xs">— Tikuvchilik va dizaynerlikda professional yondashuv</span>
                </div>
            </div>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16">
                <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-start">
                    {/* Left: content */}
                    <div className="md:col-span-3 space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-tarsk text-foreground">
                            3 kunda <span className="text-primary">professional tikuvchilik</span> sirlarini oching
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-prose leading-relaxed">
                            Hisob-kitobli asos andozani <span className="font-semibold text-primary">0 dan</span> chizish,
                            noodatiy fasonlar, zamonaviy karset texnologiyalari va brend uslubida libos tikish —
                            bularning barchasini ushbu bepul masterklassda bosqichma-bosqich o‘rganasiz.
                        </p>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm border border-border text-secondary-foreground">
                                <Calendar className="w-4 h-4 text-primary" />
                                21–22–23 avgust
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm border border-border text-secondary-foreground">
                                <Clock className="w-4 h-4 text-primary" />
                                20:30
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm border border-border text-secondary-foreground">
                                <Tag className="w-4 h-4 text-primary" />
                                <span className="line-through text-muted-foreground">999 000 so‘m</span>
                                <strong className="text-primary">BEPUL</strong>
                            </span>
                        </div>

                        {/* Bullets */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "0 dan andoza chizish (amaliy)",
                                "Noodatiy fasonlar yaratish",
                                "Zamonaviy karset texnikalari",
                                "Brend uslubida libos tikish",
                                "Professional metodika bilan ishlash",
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 rounded-lg bg-primary p-4 border cursor-pointer border-border hover:bg-secondary hover:text-secondary-foreground transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <p className="text-sm md:text-base text-primary-foreground">{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: sticky card */}
                    <aside className="md:col-span-2">
                        <div className="sticky top-6 rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
                            <div className="p-6 space-y-5">
                                <div className="flex items-center gap-2 text-primary font-semibold">
                                    <Users className="w-5 h-5" />
                                    Joylar soni cheklangan!
                                </div>

                                {/* Timer */}
                                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-4">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Timer className="w-4 h-4" />
                                        <span className="text-sm font-medium">Boshlanishiga:</span>
                                    </div>
                                    {done ? (
                                        <p className="text-xl font-mono font-semibold text-primary">Efir boshlanmoqda…</p>
                                    ) : (
                                        <div className="grid grid-cols-4 gap-2 text-center font-mono">
                                            {[
                                                { value: d, label: "kun" },
                                                { value: h, label: "soat" },
                                                { value: m, label: "daq" },
                                                { value: s, label: "son" },
                                            ].map(({ value, label }, i) => (
                                                <div
                                                    key={i}
                                                    className="rounded-lg bg-background p-3 border border-border hover:bg-accent/10 transition-colors"
                                                >
                                                    <div className="text-xl font-bold text-primary">{String(value).padStart(2, "0")}</div>
                                                    <div className="text-xs text-muted-foreground">{label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Price Row */}
                                <div className="flex items-center justify-between rounded-lg bg-background p-4 border border-border">
                                    <div className="text-muted-foreground text-sm">Ishtirok narxi</div>
                                    <div className="text-right">
                                        <div className="line-through text-muted-foreground text-sm">999 000 so‘m</div>
                                        <div className="text-lg font-bold text-primary">BEPUL</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#register"
                                    className="w-full inline-flex justify-center items-center rounded-full 
             bg-primary text-primary-foreground px-6 py-3 font-semibold 
             hover:bg-primary-light transition-colors shadow-md hover:shadow-lg"
                                >
                                    Ro‘yxatdan o‘tish
                                </a>

                                <p className="text-xs text-muted-foreground text-center">
                                    Ro‘yxatdan o‘tishdan so‘ng yopiq chatga taklif yuboramiz.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Bottom info */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                        Nega aynan shu masterklass?
                    </h3>
                    <p className="text-muted-foreground max-w-3xl text-base md:text-lg leading-relaxed">
                        Ushbu masterklass boshlang‘ich va malakasini oshirayotganlar uchun ideal. Konstruksiya, texnologiya va dizaynni bir tizimda o‘rganasiz, amaliy yondashuv bilan professional darajaga chiqasiz.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Offer;