import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Users,
  Timer,
} from "lucide-react";
import hero from "/images/hero.jpg"; // hero rasmi shu joyga qo‘yiladi

const nextTargetDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = 7; // Avgust
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
  const [remaining, setRemaining] = useState(
    () => target.getTime() - Date.now()
  );

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

const OfferV2 = () => {
  const target = useMemo(nextTargetDate, []);
  const { d, h, m, s, done } = useCountdown(target);

  return (
    <main className="min-h-screen bg-[#FCF7F3] text-[#2E1F26] font-sans">
      {/* Hero */}
      <section
        className="relative w-full min-h-[90vh] flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E1F26]/80 to-[#3D1F2B]/70" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 grid md:grid-cols-5 gap-10 items-center text-white">
          {/* Left */}
          <div className="md:col-span-3 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              3 kunda{" "}
              <span className="text-[#C7A27C]">professional tikuvchilik</span>{" "}
              sirlarini oching
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl text-[#FCEEE0]">
              Hisob-kitobli asos andozani <span className="font-semibold">0 dan</span>{" "}
              chizish, noodatiy fasonlar va brend uslubida libos tikish — barchasini
              ushbu bepul masterklassda o‘rganasiz.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm border border-[#C7A27C]/40">
                <Calendar className="w-4 h-4 text-[#C7A27C]" />
                21–22–23 avgust
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm border border-[#C7A27C]/40">
                <Clock className="w-4 h-4 text-[#C7A27C]" />
                20:30
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm border border-[#C7A27C]/40">
                <Tag className="w-4 h-4 text-[#C7A27C]" />
                <span className="line-through opacity-70">999 000 so‘m</span>
                <strong className="text-[#C7A27C]">BEPUL</strong>
              </span>
            </div>

            {/* CTA */}
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full 
              bg-[#C7A27C] text-[#2E1F26] px-8 py-4 font-semibold text-lg 
              shadow-lg hover:shadow-xl hover:bg-[#b08f67] transition"
            >
              Ro‘yxatdan o‘tish
            </a>
          </div>

          {/* Right: Card */}
          <aside className="md:col-span-2">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-[#EADBCF] shadow-xl p-6 space-y-6">
              <div className="flex items-center gap-2 text-[#3D1F2B] font-semibold">
                <Users className="w-5 h-5" />
                Joylar soni cheklangan!
              </div>

              {/* Timer */}
              <div className="rounded-xl bg-gradient-to-br from-[#C7A27C]/10 to-[#3D1F2B]/10 p-4 border border-[#C7A27C]/30">
                <div className="flex items-center gap-2 text-[#3D1F2B] mb-3">
                  <Timer className="w-4 h-4" />
                  <span className="text-sm font-medium">Boshlanishiga:</span>
                </div>
                {done ? (
                  <p className="text-xl font-mono font-semibold text-[#3D1F2B]">
                    Efir boshlanmoqda…
                  </p>
                ) : (
                  <div className="grid grid-cols-4 gap-3 text-center font-mono">
                    {[
                      { value: d, label: "kun" },
                      { value: h, label: "soat" },
                      { value: m, label: "daq" },
                      { value: s, label: "son" },
                    ].map(({ value, label }, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-white p-3 border border-[#EADBCF] shadow-sm"
                      >
                        <div className="text-2xl font-bold text-[#3D1F2B]">
                          {String(value).padStart(2, "0")}
                        </div>
                        <div className="text-xs text-[#7E3057] uppercase tracking-wide">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Row */}
              <div className="flex items-center justify-between rounded-lg bg-[#FCF7F3] p-4 border border-[#EADBCF]">
                <div className="text-sm text-muted-foreground">Ishtirok narxi</div>
                <div className="text-right">
                  <div className="line-through text-sm text-gray-500">
                    999 000 so‘m
                  </div>
                  <div className="text-lg font-bold text-[#C7A27C]">BEPUL</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#register"
                className="w-full inline-flex justify-center items-center rounded-full 
                bg-[#3D1F2B] text-white px-6 py-3 font-semibold 
                hover:bg-[#2E1F26] transition shadow-lg hover:shadow-xl"
              >
                Hoziroq qo‘shiling
              </a>
              <p className="text-xs text-center text-gray-500">
                Ro‘yxatdan o‘tishdan so‘ng yopiq chatga taklif yuboramiz.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#C7A27C]/10 to-[#3D1F2B]/5 p-8 border border-[#EADBCF]">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3D1F2B] mb-4">
            Nega aynan shu masterklass?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Ushbu masterklass boshlang‘ich va malakasini oshirayotganlar uchun ideal.
            Konstruksiya, texnologiya va dizaynni bir tizimda o‘rganasiz, amaliy
            yondashuv bilan professional darajaga chiqasiz.
          </p>
        </div>
      </section>
    </main>
  );
};

export default OfferV2;
