import { useEffect, useMemo, useState } from "react";
import {
    Calendar,
    Clock,
    Tag,
    CheckCircle2,
    Users,
    Timer,
} from "lucide-react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.uz"; // ⚡ kerakli lib
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "sonner";
import "react-lazy-load-image-component/src/effects/blur.css";
import instructorImage from "/images/hero.jpg";

const nextTargetDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = 9; // 0-based: 9 = Oktyabr
    const days = [5, 6, 7];
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleRegisterClick = () => {
        setIsModalOpen(true);
        setIsSubmitted(false); // 🔑 qo‘shiladi
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;

        try {
            setIsLoading(true);

            const res = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: import.meta.env.VITE_CHAT_ID,
                    text: `📥 Yangi ro‘yxatdan o‘tish:\n\n👤 Ism: ${name}\n📱 Telefon: <code>${phone}</code>`,
                    parse_mode: "HTML", // ✅ HTML format yoqildi
                }),
            });

            if (!res.ok) throw new Error("Telegram API xatosi");

            toast.success("Ro‘yxatdan o‘tish muvaffaqiyatli!");
            setIsSubmitted(true); // 🔑 qo‘shiladi (modal yopilmaydi)
        } catch (err) {
            console.error(err);
            toast.error("Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

            {/* 🔄 Loader */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
                    <div className="w-64 bg-white rounded-xl p-6 shadow-lg">
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-primary animate-pulse"></div>
                        </div>
                        <p className="mt-3 text-center text-sm font-medium text-foreground">
                            Ma’lumot yuborilmoqda...
                        </p>
                    </div>
                </div>
            )}
            {/* Top stripe */}
            <div className="w-full bg-primary border-b border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm md:text-base flex items-center gap-3 justify-center">
                    <span className="text-primary-foreground font-semibold tracking-wide">
                        BEPUL MASTERKLASS
                    </span>
                    <span className="text-primary-foreground/80 text-xs">
                        — Tikuvchilik va dizaynerlikda professional yondashuv
                    </span>
                </div>
            </div>


            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16">
                <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-start">
                    {/* Left: content */}
                    <div className="md:col-span-3 space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-tarsk text-[hsl(var(--foreground))]">
                            3 kunda <span className="text-primary">professional tikuvchilik</span> sirlarini oching
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-prose leading-relaxed">
                            Hisob-kitobli asos andozani <span className="font-semibold text-primary">0 dan</span> chizish,
                            noodatiy fasonlar, modellashtirish sirlari va brend uslubida libos tikish —
                            bularning barchasini ushbu bepul masterklassda bosqichma-bosqich o‘rganasiz.
                        </p>

                        {/* Instructor Image */}
                        <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto md:mx-0">
                            <LazyLoadImage
                                src={instructorImage}
                                alt="Ibodullayeva Chinora - Kurs asoschisi"
                                className="w-full h-auto object-cover rounded-2xl"
                                effect="blur"
                                threshold={100}
                                placeholderSrc={instructorImage}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                <h3 className="text-lg font-bold text-white">Ibodullayeva Chinora</h3>
                                <p className="text-sm text-white/80">Kurs asoschisi va ustoz</p>
                            </div>
                        </div>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 text-sm border border-border bg-primary/10 text-primary">
                                <Calendar className="w-4 h-4 text-primary" />
                                28–29–30 noyabr
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-border bg-primary/10 text-primary">
                                <Clock className="w-4 h-4 text-primary" />
                                20:30
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-border bg-primary/10 text-primary">
                                <Tag className="w-4 h-4 text-primary" />
                                <span className="line-through text-muted-foreground">999 000 so‘m</span>
                                <strong className="text-primary">BEPUL</strong>
                            </span>
                        </div>

                        {/* Bullets */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Professional Myuller metodikasi asos andazasini 0 dan qurishni",
                                "Asos andazadan to'g'ri foydalanish sirlarini",
                                "Avtorlik \"Anor\" nomli assimetriya fasonli libosimni modellashtirish sirlarini",
                                "Mijozlar oqimini oshirish va qimmat narx qo‘yish sirlarini",
                                "Tikuvchilikda daromadingizni 5x gacha oshirish sirlarini",
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    className="group flex items-start gap-3 rounded-lg bg-white p-4 border border-border 
                 hover:bg-primary/5 hover:border-primary/30 transition-colors cursor-pointer"
                                >
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                                    <p className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                                        {t}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right: sticky card */}
                    <aside className="md:col-span-2">
                        <div className="sticky top-6 rounded-2xl bg-white border border-border shadow-sm overflow-hidden">
                            <div className="p-6 space-y-5">
                                <div className="flex items-center gap-2 text-primary font-semibold">
                                    <Users className="w-5 h-5" />
                                    Joylar soni cheklangan!
                                </div>

                                {/* Timer */}
                                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-[hsl(var(--secondary))]/10 border border-primary/20 p-4">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Timer className="w-4 h-4" />
                                        <span className="text-sm font-medium">Boshlanishiga:</span>
                                    </div>
                                    {done ? (
                                        <p className="text-xl font-mono font-semibold text-primary">
                                            Efir boshlanmoqda…
                                        </p>
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
                                                    className="rounded-lg bg-[hsl(var(--background))] p-3 border border-border hover:bg-accent/10 transition-colors"
                                                >
                                                    <div className="text-xl font-bold text-primary">
                                                        {String(value).padStart(2, "0")}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Price Row */}
                                <div className="flex items-center justify-between rounded-lg bg-[hsl(var(--background))] p-4 border border-border">
                                    <div className="text-muted-foreground text-sm">Ishtirok narxi</div>
                                    <div className="text-right">
                                        <div className="line-through text-muted-foreground text-sm">
                                            999 000 so‘m
                                        </div>
                                        <div className="text-lg font-bold text-primary">BEPUL</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={handleRegisterClick}
                                    className="w-full inline-flex justify-center items-center rounded-full 
             bg-primary text-primary-foreground px-6 py-3 font-semibold 
             hover:bg-primary-light transition-colors shadow-md hover:shadow-lg"
                                >
                                    Ro‘yxatdan o‘tish
                                </button>

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
                <div className="rounded-2xl bg-white border border-black/20 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                        Nega aynan shu masterklass?
                    </h3>
                    <p className="text-muted-foreground max-w-3xl text-base md:text-lg leading-relaxed">
                        Ushbu masterklass boshlang‘ich va malakasini oshirayotganlar uchun ideal. Konstruksiya, texnologiya va dizaynni bir tizimda o‘rganasiz, amaliy yondashuv bilan professional darajaga chiqasiz.
                    </p>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="bg-white rounded-xl p-6 w-full max-w-md mx-4 md:mx-auto shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!isSubmitted ? (
                            <>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    Ro‘yxatdan o‘tish
                                </h2>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Pastdagi formani to‘ldirishingiz bilan yopiq kanalga qo‘shilasiz!
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">
                                            Ism
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ismingizni kiriting"
                                            name="name"
                                            className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                            onInvalid={(e) => e.target.setCustomValidity("Ismingizni kiriting")}
                                            onInput={(e) => e.target.setCustomValidity("")}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">
                                            Telefon raqami
                                        </label>
                                        <Cleave
                                            options={{
                                                prefix: "+998",
                                                blocks: [4, 2, 3, 2, 2], // +998 88 595 02 21
                                                delimiters: [" ", " ", "-", "-"],
                                                numericOnly: true,
                                            }}
                                            placeholder="+998 (__) ___-__-__"
                                            className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            name="phone"
                                            required
                                            onInvalid={(e) => e.target.setCustomValidity("📱 Telefon raqamingizni kiriting")}
                                            onInput={(e) => e.target.setCustomValidity("")}
                                            pattern="\+998 \d{2} \d{3}-\d{2}-\d{2}"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
                                    >
                                        Yuborish
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center space-y-4">
                                <h2 className="text-2xl font-bold">✅ Ro‘yxatdan o‘tish muvaffaqiyatli!</h2>
                                <p className="text-sm text-muted-foreground">
                                    Endi yopiq Telegram kanalimizga qo‘shiling:
                                </p>
                                <a
                                    href="https://t.me/+ZlMsl6Ool8k4Zjdi" // 🔑 kanal linkini shu yerga qo‘yasan
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
                                >
                                    Telegram kanalga qo‘shilish
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Offer;