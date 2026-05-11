import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import {
  MapPin, Phone, Star, ShieldCheck, FileText, Scale, KeyRound,
  Home, Banknote, Search, Award, CheckCircle2, ArrowRight,
} from "lucide-react";

import agentImg from "@/assets/agent.jpg";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import keysImg from "@/assets/keys.jpg";
import contractImg from "@/assets/contract.jpg";

const BRAND = "Nika Estate";
const CITY = "Москва";

const properties = [
  { img: prop1, title: "2-комн. квартира, ЖК «Садовые Кварталы»", price: "32 500 000 ₽", area: "74 м²", meta: "Хамовники · 5/9 эт." },
  { img: prop2, title: "3-комн. квартира с дизайн-ремонтом", price: "48 900 000 ₽", area: "98 м²", meta: "Пресненский · 12/24 эт." },
  { img: prop3, title: "Студия в новостройке у метро", price: "14 200 000 ₽", area: "32 м²", meta: "Аэропорт · 8/17 эт." },
];

const services = [
  { icon: Home, title: "Продажа квартиры", text: "Оценка по рынку, профессиональные фото, размещение на топ-площадках, показы." },
  { icon: Search, title: "Подбор и покупка", text: "Подбираем по бюджету и району, выезжаем на просмотры, торгуемся за вас." },
  { icon: Banknote, title: "Ипотека", text: "Подбор банка, помощь с одобрением и подготовкой документов под сделку." },
  { icon: Scale, title: "Юридическое сопровождение", text: "Проверка истории объекта, составление договора, безопасный расчёт." },
];

const cases = [
  { title: "Продали 2-комн. за 21 день", text: "Семья переезжала в Подмосковье. Сделали хоум-стейджинг, подняли цену на 4% к рынку и нашли покупателя без скидки." },
  { title: "Подобрали квартиру за 2 недели", text: "Клиент искал 3-комн. у школы в ЦАО. Показали 6 вариантов, помогли с торгом — итоговая цена ниже на 1,2 млн ₽." },
  { title: "Сложная сделка с ипотекой и опекой", text: "Расселение с долями детей. Согласовали с опекой, провели через аккредитив, ключи в срок." },
];

const reviews = [
  { name: "Алина К.", text: "Ника помогла продать квартиру быстрее, чем я рассчитывала. Всё спокойно, без давления, по-человечески." },
  { name: "Дмитрий П.", text: "Покупали первую квартиру в ипотеку. Вели за руку: банк, документы, сделка. Спасибо за внимание к мелочам." },
  { name: "Марина С.", text: "Грамотный риелтор и приятный человек. Договор прозрачный, комиссия обсуждена сразу." },
];

const trust = [
  { icon: Award, t: "5 лет на рынке Москвы" },
  { icon: FileText, t: "Договор и юр. сопровождение" },
  { icon: ShieldCheck, t: "Член РГР" },
  { icon: MapPin, t: "Реальные сделки в районе" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md flex items-center justify-center surface-elevated border-hairline">
              <KeyRound className="w-4 h-4 text-gold" />
            </span>
            <span className="font-semibold tracking-tight">{BRAND} <span className="text-muted-foreground font-normal">· {CITY}</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#objects" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
          </nav>
          <a href="#contact"><Button size="sm" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">Оставить заявку</Button></a>
        </div>
      </header>

      {/* HERO */}
      <section className="container py-12 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full surface border-hairline text-xs text-muted-foreground">
            <Star className="w-3.5 h-3.5 text-gold fill-current" />
            <span>4,9 на Яндекс.Картах · 10 отзывов · 5 лет в Москве</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
            Подберём квартиру в&nbsp;Москве —
            <span className="text-gold"> без давления и&nbsp;скрытых комиссий</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Агентство недвижимости {BRAND}. Помогаем купить, продать и&nbsp;оформить квартиру под ключ: подбор, ипотека, юридическое сопровождение, прозрачная комиссия в&nbsp;договоре.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Получить подборку объектов <ArrowRight className="ml-2 w-4 h-4" /></Button></a>
            <a href="#contact"><Button size="lg" variant="outline" className="border-border">Узнать стоимость моей квартиры</Button></a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {trust.map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border-hairline surface">
            <img src={agentImg} alt="Риелтор Ника, агентство Nika Estate в Москве" width={1280} height={1600} className="w-full h-[520px] object-cover" />
            <div className="absolute bottom-4 left-4 right-4 surface-elevated/90 backdrop-blur rounded-xl p-4 border-hairline" style={{ backgroundColor: "hsl(var(--surface-elevated) / 0.92)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-gold font-semibold">Н</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Ника · ваш персональный риелтор</div>
                  <div className="text-xs text-muted-foreground">Перезвоню в течение 15 минут</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTS */}
      <section id="objects" className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-sm text-gold mb-2">Свежие объекты</div>
            <h2 className="text-3xl md:text-4xl font-bold">Подборка квартир в Москве</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground items-center gap-1">
            Запросить полную подборку <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article key={p.title} className="surface rounded-2xl overflow-hidden border-hairline hover-lift">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="w-full h-56 object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-gold font-semibold text-lg">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.area}</span>
                </div>
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <div className="text-sm text-muted-foreground flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{p.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="surface border-y border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mb-12">
            <div className="text-sm text-gold mb-2">Услуги</div>
            <h2 className="text-3xl md:text-4xl font-bold">Сопровождаем сделку с&nbsp;первой встречи до&nbsp;ключей</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl surface-elevated border-hairline hover-lift">
                <Icon className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-semibold mb-2 text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* PROCESS — animated SVG */}
          <div className="mt-16 p-8 rounded-2xl surface-elevated border-hairline">
            <h3 className="font-semibold text-lg mb-6">Как проходит сделка</h3>
            <div className="relative">
              <svg viewBox="0 0 800 80" className="w-full h-20" aria-hidden="true">
                <line x1="40" y1="40" x2="760" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
                <line x1="40" y1="40" x2="760" y2="40" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="animate-draw" pathLength={400} />
                {[40, 220, 400, 580, 760].map((x, i) => (
                  <g key={x}>
                    <circle cx={x} cy="40" r="9" fill="hsl(var(--surface))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x={x} y="46" textAnchor="middle" fontSize="11" fill="hsl(var(--primary))" fontWeight="600">{i + 1}</text>
                  </g>
                ))}
              </svg>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 text-xs md:text-sm text-muted-foreground">
                {["Заявка и встреча", "Подбор объектов", "Просмотры и торг", "Документы и ипотека", "Ключи"].map((s) => (
                  <div key={s} className="text-center">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-sm text-gold mb-2">Кейсы сделок</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Истории клиентов, а&nbsp;не&nbsp;громкие обещания</h2>
            <p className="text-muted-foreground mb-8">Мы не работаем с&nbsp;шаблонами — каждая сделка отличается. Вот несколько свежих примеров из&nbsp;Москвы.</p>
            <img src={keysImg} alt="Передача ключей от квартиры в Москве" loading="lazy" width={1280} height={800} className="rounded-2xl w-full h-64 object-cover border-hairline" />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {cases.map((c, i) => (
              <div key={c.title} className="p-6 rounded-2xl surface border-hairline">
                <div className="flex items-start gap-4">
                  <span className="text-gold font-mono text-sm pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold mb-1.5">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="surface border-y border-border">
        <div className="container py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gold mb-2">О команде</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Ника — риелтор, которому доверяют квартиру</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              5 лет работаю с&nbsp;недвижимостью в&nbsp;Москве. Специализация: вторичный рынок ЦАО и&nbsp;САО, новостройки бизнес-класса, сделки с&nbsp;ипотекой и&nbsp;долями.
            </p>
            <ul className="space-y-3">
              {[
                "Сертифицированный специалист, член Российской Гильдии Риелторов",
                "Более 80 закрытых сделок за последние 3 года",
                "Работаю по договору с фиксированной комиссией",
                "Юрист на сделке — за наш счёт",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={prop2} alt="Сделка по квартире в Москве" loading="lazy" width={1280} height={960} className="rounded-2xl h-64 object-cover w-full border-hairline" />
            <img src={contractImg} alt="Подписание договора" loading="lazy" width={1280} height={800} className="rounded-2xl h-64 object-cover w-full border-hairline mt-8" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="container py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <div className="text-sm text-gold mb-2">Отзывы клиентов</div>
            <h2 className="text-3xl md:text-4xl font-bold">10 отзывов · средняя 4,9</h2>
          </div>
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-2xl surface border-hairline">
              <div className="flex gap-0.5 text-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">«{r.text}»</p>
              <div className="text-sm font-medium">{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="surface border-y border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-gold mb-2">Гарантии</div>
            <h2 className="text-3xl md:text-4xl font-bold">Прозрачно с&nbsp;первого звонка</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: FileText, t: "Договор на услуги", d: "Все обязательства, сроки и комиссия зафиксированы письменно." },
              { icon: ShieldCheck, t: "Юридическая чистота", d: "Проверяем историю объекта, обременения, долги и согласия." },
              { icon: Banknote, t: "Понятная комиссия", d: "Без скрытых платежей. Озвучиваем сумму до начала работы." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl surface-elevated border-hairline">
                <Icon className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-semibold mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-sm text-gold mb-2">Заявка на подбор</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Расскажите задачу — подготовим подборку за&nbsp;1 день</h2>
            <p className="text-muted-foreground mb-6">Перезвоним в&nbsp;удобное время. Без спама и&nbsp;давления.</p>
            <form onSubmit={submit} className="space-y-4">
              <Input placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="surface border-border h-12" />
              <Input placeholder="Телефон" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="surface border-border h-12" />
              <Textarea placeholder="Что ищете: район, бюджет, комнаты (необязательно)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="surface border-border min-h-[110px]" />
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Получить подборку объектов
              </Button>
              <p className="text-xs text-muted-foreground">Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>

          <div className="space-y-5">
            <div className="surface border-hairline rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+74957778998" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold" /> 8 (495) 777-89-98
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Сытинский пер., 5/10 стр.3, Москва, 123104
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Star className="w-4 h-4 text-gold fill-current" /> 4,9 на Яндекс.Картах · 10 отзывов
                </div>
              </div>
            </div>
            <div className="surface border-hairline rounded-2xl overflow-hidden">
              <iframe
                title="Nika Estate — Сытинский пер., 5/10 стр.3, Москва"
                src="https://yandex.ru/map-widget/v1/?ll=37.597%2C55.764&z=16&mode=search&text=Сытинский%20переулок%205%2F10%20стр.3%20Москва"
                className="w-full h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-gold" />
            <span>© {new Date().getFullYear()} {BRAND} · Агентство недвижимости в&nbsp;Москве</span>
          </div>
          <div>Член Российской Гильдии Риелторов</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
