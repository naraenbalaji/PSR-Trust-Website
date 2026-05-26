import { useState, useEffect, useRef } from "react";

import sarathi from "./assets/Sarathi.jpeg"
import sumithra from "./assets/sumithra.jpeg"
import chakrapani from "./assets/chakrapani.jpeg"
import jayam from "./assets/jayam.jpeg"

import Keezhachalai_Rep from "./assets/Keezhachalai_Rep.jpg"
import NewBuilding from "./assets/NewBuilding.jpg"
import YogaSession from "./assets/YogaSession.jpeg"
import Deepavali from "./assets/Deepavali.jpeg"
import Puduthurai_Rep from "./assets/Puduthurai_Rep.jpg"
import CSK_School from "./assets/CSK School.jpeg"

import headerLogo from "./assets/header-logo-try-2.png"
import footerLogo from "./assets/footer-logo-try-1.png"

// ─── THEME ───────────────────────────────────────────────────
const T = {
    gold: "#C9993A",
    goldLight: "#F5EDD6",
    goldPale: "#FBF7EE",
    ink: "#1A1612",
    inkMid: "#4A4038",
    inkSoft: "#7A6E64",
    cream: "#FAF7F2",
    white: "#FFFFFF",
    green: "#3A7D44",
};

// ─── CENTRAL DATA ─────────────────────────────────────────────
const SITE = {
    name: "P S Ramachandran Educational & Charitable Trust",
    shortName: "PSR Trust",
    tagline: "Supporting Education to Everyone",
    founded: "2007",
    phone: "+91 98846 06570",
    email: "info@psrtrust.org",
    website: "https://psrtrust.org",
    donateUrl: "https://rzp.io/l/Qo8sLLe",
    address: "3/17, G2 Melody Castle, Soundarapandian Street, Ashok Nagar, Chennai, Tamil Nadu, India - 600083",
};

const HERO_SLIDES = [
    {
        headline: ["Education is a right,", "not a privilege."],
        sub: "Providing scholarships to meritorious students from economically disadvantaged backgrounds since 2007.",
        cta: "Support a Student",
        ctaHref: "#causes",
        accent: "right",
    },
    {
        headline: ["Reviving schools,", "restoring futures."],
        sub: "We take over struggling rural primary schools across Tamil Nadu and rebuild them into beacons of quality education.",
        cta: "Our Schools",
        ctaHref: "#schools",
        accent: "restoring",
    },
    {
        headline: ["70+ lives changed", "and counting."],
        sub: "From engineers to graduates — our scholars prove that economic background should never limit academic destiny.",
        cta: "Read Their Stories",
        ctaHref: "#testimonials",
        accent: "counting",
    },
];

const STATS = [
    { num: "70+", label: "Students Supported" },
    { num: "60+", label: "Institutions Reached" },
    { num: "100+", label: "Generous Donors" },
    { num: "3", label: "Rural Schools Managed" },
    { num: "17+", label: "Years of Service" },
    { num: "80G", label: "Tax Exemption Certified" },
];

const CAUSES = [
    { icon: "🎓", title: "Merit Scholarships", desc: "We fund the education of academically excelling students who cannot afford schooling or college due to economic hardship — across any stream, any institution in Tamil Nadu.", link: "#testimonials", linkLabel: "See Scholar Stories" },
    { icon: "🏫", title: "Rural School Revival", desc: "We take over management of deteriorating government-aided primary schools in rural villages, rebuild infrastructure, hire quality teachers and restore enrolment to healthy levels.", link: "#schools", linkLabel: "Our Schools" },
    { icon: "🌱", title: "New School Construction", desc: "We are building brand-new English medium nursery and primary schools in underserved villages, with plans to expand to Class 12 with sports and extracurricular facilities.", link: "#schools", linkLabel: "Thirunangur School" },
    { icon: "🏋️", title: "Holistic Development", desc: "Our schools offer qualified PE teachers providing yoga, chess and carrom training across all three village schools twice a week, nurturing latent talent in children.", link: "#schools", linkLabel: "Learn More" },
    { icon: "🍱", title: "Mid-Day Meal Support", desc: "All three rural schools participate in the Government noon-meal scheme. We maintain and upgrade cooking facilities to ensure every child receives a nutritious meal daily.", link: "#schools", linkLabel: "Our Schools" },
    { icon: "📖", title: "Educational Equity", desc: "We believe no citizen should be deprived of education due to financial reasons. Scholarship eligibility is open to any grade — school or college — wherever merit and need align.", link: "#faq", linkLabel: "Eligibility FAQ" },
];
 
const SCHOOLS = [
    {
        number: "01", color: "#C9993A",
        name: "Keezhachalai Primary School",
        location: "Keezhachalai Village, Sirkazhi Taluk",
        established: "1952", takenOver: "2019", status: "Fully Operational", students: 54,
        details: [
            "Rebuilt to ~3,000 sq ft — 5 classrooms, AV room, kitchen & toilets for boys and girls",
            "Solar power, Reverse Osmosis water supply and Wi-Fi throughout",
            "Funded by Valeo Friction Materials India Pvt Ltd (Valeo France + Anand Group JV)",
            "2 Govt teachers + 3 Management teachers + 1 dedicated PE teacher",
            "Inaugurated Oct 26, 2020 · Academic year 2022–23 launched June 13, 2022",
        ],
    },
    {
        number: "02", color: "#3A7D44",
        name: "Mandapam School",
        location: "Puduthurai Village (2 km from Keezhachalai)",
        established: "1934", takenOver: "June 2022", status: "Active & Growing", students: 30,
        details: [
            "Founded by Late Sri M. Kalyanam, Ex-Village Administrative Officer",
            "Current building constructed 2003 using Member of Parliament funds",
            "Govt takeover approval: Letter 257/A3/2022 dated 31.10.2022",
            "2 Govt-appointed teachers · Classes 1 to 5 · ONGC-donated smart board",
            "Trust renovated mid-day meal kitchen and flooring · Retention is key focus",
        ],
    },
    {
        number: "03", color: "#5B7FA6",
        name: "Chambagalakshmi Seshadri School",
        location: "Thirunangur Village",
        established: "2022 (new build)", takenOver: "Founded by Trust", status: "New & Expanding", students: 13,
        details: [
            "Brand-new English medium Nursery & Primary school built by the Trust",
            "Phase I: 3 classrooms, toilet block and play area nearing completion",
            "Classes began from Vijayadasami 2022 · 13 students enrolled",
            "Moderate and affordable fee structure being finalised by the Trust",
            "Long-term plan: expand to Class 12 with sports facilities within 3–5 years",
        ],
    },
];

const TRUSTEES = [
    {
        initials: "SJ", name: "S Jayam", role: "Managing Trustee", bio: "Holds a Major's Degree in Physics. Works as an administrator at a school book publishing house, coordinating CBSE curriculum content for kindergarten classes. Also brings 15 years of administrative experience in a reputed audit firm. Associated with PSR Trust since its inception in 2007.",
        img: jayam,
    },
    {
        initials: "SS", name: "S Sarathi", role: "Trustee", bio: "CA, Cost Accountant & Company Secretary with 30+ years' experience. Completed Advanced Management at Oxford, UK. Served as CFO of Gabriel India Ltd, COO of Arvin Exhaust, and Operations Head at Spicer India. Currently Joint Managing Director of Mando Automotive India Ltd and Chairman of the Manufacturing Committee, Madras Chamber of Commerce.",
        img: sarathi
    },
    {
        initials: "SuS", name: "Sumithra Sarathi", role: "Trustee", bio: "Qualified Company Secretary with ~12 years of experience in secretarial and legal compliance at renowned MNCs. Instrumental in all of PSR Trust's compliance activities for 12+ years, ensuring every sponsorship aligns with the Trust's stated objectives.",
        img: sumithra
    },
    {
        initials: "SC", name: "S Chakarapani", role: "Trustee", bio: "CA & Cost Accountant with ~30 years of experience. Has handled Finance & Accounts portfolios at The India Cements Ltd. Currently Sr. Vice President – Corporate Finance, with vast experience in regulatory compliance and corporate funding.",
        img: chakrapani
    },
];

const TESTIMONIALS = [
    { name: "Aarthi", role: "Engineer, TCS", short: "From 7th Std to TCS — the Trust made it possible.", text: "From my 7th standard, the Trust has been my support system. I secured more than 90% in my public exams and semesters — all while my family faced immense challenges. My father was deaf-dumb yet was a school topper and my role model. Without the Trust, I cannot imagine my academics and career. They are not just a trust; they are family." },
    { name: "Mahati", role: "B.Com Graduate", short: "A single mother could give her child a future.", text: "I am honoured to be one of the recipients of the Ramachandra Trust. Thanks to your generosity, I was able to pursue my education and my mother, as a single parent, could cope with financial hardship. I hope that one day I will also help a student achieve their goals, just like you helped me." },
    { name: "P Jayachithra", role: "B.Com Student, Meenakshi College", short: "4 semesters of fees — 4 semesters of hope.", text: "With my high marks in the 12th public exam, I was introduced to PSR Trust to continue higher studies. For the past 4 semesters, they have been providing me fees for my course, enabling me to study with good grades. I sincerely thank them for providing such a great opportunity." },
    { name: "Madhava Prasad & Pratheeba", role: "B.Com Graduates", short: "Education is the only tool to rise — you gave us the ladder.", text: "For us education is the only tool to rise up — and you gave us the ladder to move on. With your support and almighty God's blessings we are now standing super strong. We will always be indebted for your timely help." },
    { name: "Parthasarathy S & Padma Parthasarathy", role: "Proud Parents of Two Beneficiaries", short: "12 years of gratitude from a grateful family.", text: "The monetary benefit given for education by your trust was of immense help since education costs have become so costly. Thanks to the timely blessings in the shape of education aid, we could see our children come out successfully in their education. We express our Gratitude for the kind services extended for the past 12 years." },
    { name: "Guru Prasad B S & Ramani B S", role: "Parents of Three Beneficiaries", short: "Three children. Five years of trust. A lifetime of change.", text: "My daughter Pratheeba benefited with 3 years UG scholarship, my son Madhava Prasad with 1 year UG, and my brother's son Venkata Krushna with 5 years of Higher Secondary & UG support. By the grace of Raghavendra Swamy, people like you are there to help. May God be with you for this wonderful service." },
];

const FAQS = [
    { q: "Who are you and what is your mission?", a: "PS Ramachandran Educational & Charitable Trust (formerly Shri PS Ramachandran Dharma Paripalana Trust) was founded in 2007. Our prime motive is providing scholarships to academically excelling students from weaker economic backgrounds, and supporting quality education in rural Tamil Nadu through school management and new school construction." },
    { q: "How can an eligible student receive support?", a: "The Trust considers applications from students referred by existing beneficiaries, schools, or other known sources. Students at any grade or year — school or college — who excel academically and face economic constraints are eligible for consideration." },
    { q: "Is the Trust registered under a government body?", a: "Yes. PS Ramachandran Educational and Charitable Trust is duly registered under The Income Tax Act 1961." },
    { q: "Do you accept foreign donations?", a: "The Trust is permitted to receive donations only in Indian Rupees (INR). Presently, the Trust is not entitled to accept Foreign Contribution in any form." },
    { q: "Does my donation qualify for 80G tax exemption?", a: "Yes. Donations to the Trust are entitled to exemption under Section 80G of The Income Tax Act, 1961. You will receive an 80G receipt for your contribution, which you can use when filing your tax returns." },
    { q: "What streams or institutions do you fund?", a: "We support students across any educational stream — science, arts, commerce, vocational, engineering, medicine — in any recognised school or college. The key criteria are academic merit and economic need." },
    { q: "How are the rural schools funded?", a: "Our rural schools operate under Government aid, meaning salaries for government-appointed teachers are covered by the State. The Trust funds additional teachers, infrastructure improvements, PE programmes, celebration activities and enrichment programmes. The Keezhachalai school building was funded by Valeo Friction Materials India Pvt Ltd." },
    { q: "How can I get in touch?", a: "Call us at +91 9884606570 or email info@psrtrust.org. We welcome all queries regarding scholarships, donations or school partnerships." },
];

const PARTNERS = [
    { name: "Valeo Friction Materials India Pvt Ltd", note: "Funded the new Keezhachalai school building" },
    { name: "Anand Group / Mando Automotive India", note: "Corporate support partner" },
    { name: "ONGC", note: "Donated smart board to Puduthurai school" },
    { name: "Government of Tamil Nadu", note: "Teacher salaries, recognition & support" },
];

// ─── STYLES ───────────────────────────────────────────────────
const gs = {
    sectionTag: { fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 },
    h2: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 300, lineHeight: 1.15, color: T.ink, margin: 0 },
    h2White: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 300, lineHeight: 1.15, color: "#fff", margin: 0 },
    lead: { fontSize: 15, color: T.inkSoft, lineHeight: 1.8, marginTop: 12, maxWidth: 560 },
    goldLine: { display: "inline-block", width: 28, height: 1, background: T.gold, flexShrink: 0 },
};

// ─── HOOKS ───────────────────────────────────────────────────
function useScrolled() {
    const [s, setS] = useState(false);
    useEffect(() => {
        const h = () => setS(window.scrollY > 60);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);
    return s;
}

// ─── COMPONENTS ───────────────────────────────────────────────

function Navbar({ active }) {
    const scrolled = useScrolled();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Causes", href: "#causes" },
        { label: "Schools", href: "#schools" },
        { label: "Impact", href: "#impact" },
        { label: "Our Pride", href: "#testimonials" },
        { label: "Trustees", href: "#trustees" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    const base = {
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(250,247,242,0.97)" : "rgba(250,247,242,0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? `1px solid rgba(201,153,58,0.2)` : "1px solid transparent",
        transition: "all 0.3s",
        padding: "0 clamp(1rem,3vw,2.5rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
        fontFamily: "'Jost', sans-serif",
    };

    return (
        <nav style={base}>
            {/* Logo */}
            <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap:0, flexDirection:'column' }} onClick={() => setMenuOpen(false)}>
                {/* <div style={{ width: 38, height: 38, borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, flexShrink: 0 }}>PSR</div> */}
                <img src={headerLogo}/>
                <div style={{ lineHeight: 1.25 }}>
                    {/* <div style={{ fontSize: 14, fontWeight: 500, color: T.ink }}>PSR Trust</div> */}
                    <div style={{ fontSize: 10, color: T.inkSoft, letterSpacing: "0.08em", textTransform: "uppercase" }}>Est. 2007 · 80G Registered</div>
                </div>
            </a>

            {/* Desktop links */}
            <ul style={{ display: "flex", gap: "clamp(1rem,2vw,1.8rem)", listStyle: "none", margin: 0, padding: 0, "@media(maxWidth:900px)": { display: "none" } }} className="nav-desktop">
                {navLinks.map(l => (
                    <li key={l.label}>
                        <a href={l.href} style={{ fontSize: 12, color: T.inkMid, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 400, transition: "color 0.2s" }}
                            onMouseEnter={e => e.target.style.color = T.gold}
                            onMouseLeave={e => e.target.style.color = T.inkMid}>
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Donate + burger */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer"
                    style={{ background: T.gold, color: "#fff", padding: "9px 22px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.2s" }}
                    onMouseEnter={e => e.target.style.background = "#B5891E"}
                    onMouseLeave={e => e.target.style.background = T.gold}>
                    Donate Now
                </a>
                <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }} className="burger" aria-label="Menu">
                    <div style={{ width: 22, height: 2, background: T.ink, marginBottom: 5, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
                    <div style={{ width: 22, height: 2, background: T.ink, marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
                    <div style={{ width: 22, height: 2, background: T.ink, transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{ position: "fixed", top: 68, left: 0, right: 0, background: T.cream, borderBottom: `1px solid rgba(201,153,58,0.2)`, padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: 0 }}>
                    {navLinks.map(l => (
                        <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                            style={{ padding: "0.75rem 0", borderBottom: `1px solid rgba(201,153,58,0.1)`, fontSize: 14, color: T.inkMid, textDecoration: "none", letterSpacing: "0.06em" }}>
                            {l.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media(max-width:860px){ .nav-desktop{display:none!important} .burger{display:flex!important;flex-direction:column} }
      `}</style>
        </nav>
    );
}

function Hero() {
    const [idx, setIdx] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const t = setInterval(() => {
            setFading(true);
            setTimeout(() => { setIdx(i => (i + 1) % HERO_SLIDES.length); setFading(false); }, 400);
        }, 5000);
        return () => clearInterval(t);
    }, []);

    const slide = HERO_SLIDES[idx];

    return (
        <section id="home" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", fontFamily: "'Jost',sans-serif", paddingTop: 68 }}>
            {/* Left dark panel */}
            <div style={{ background: T.ink, padding: "clamp(3rem,6vw,5rem) clamp(2rem,5vw,5rem)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {/* Decorative rings */}
                <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, border: `1px solid rgba(201,153,58,0.12)`, borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -50, left: -50, width: 220, height: 220, border: `1px solid rgba(201,153,58,0.08)`, borderRadius: "50%", pointerEvents: "none" }} />

                <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ display: "inline-block", width: 32, height: 1, background: T.gold }} />
                    {SITE.name}
                </div>

                <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2.8rem,4.5vw,4.2rem)", color: "#fff", lineHeight: 1.1, fontWeight: 300, margin: "0 0 1.5rem", opacity: fading ? 0 : 1, transition: "opacity 0.4s" }}>
                    {slide.headline[0]}<br />
                    <em style={{ fontStyle: "italic", color: T.gold }}>{slide.headline[1]}</em>
                </h1>

                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 400, lineHeight: 1.8, marginBottom: "2.5rem", opacity: fading ? 0 : 1, transition: "opacity 0.4s 0.05s" }}>
                    {slide.sub}
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer"
                        style={{ background: T.gold, color: "#fff", padding: "13px 30px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
                        Donate Now
                    </a>
                    <a href={slide.ctaHref}
                        style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "13px 30px", borderRadius: 2, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>
                        {slide.cta}
                    </a>
                </div>

                {/* Slide dots */}
                <div style={{ display: "flex", gap: 8, marginTop: "3rem" }}>
                    {HERO_SLIDES.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)}
                            style={{ width: i === idx ? 28 : 8, height: 4, borderRadius: 2, background: i === idx ? T.gold : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                    ))}
                </div>

                {/* Stats bar */}
                <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: 28, flexWrap: "wrap" }}>
                    {STATS.slice(0, 3).map(s => (
                        <div key={s.label}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", color: T.gold, fontWeight: 300, lineHeight: 1 }}>{s.num}</div>
                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right panel */}
            <div style={{ background: T.goldPale, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem clamp(2rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(201,153,58,0.05) 30px,rgba(201,153,58,0.05) 31px),repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(201,153,58,0.05) 30px,rgba(201,153,58,0.05) 31px)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "3rem" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(5rem,8vw,8rem)", color: T.goldLight, lineHeight: 0.8, marginBottom: "1rem" }}>"</div>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.4rem,2vw,1.9rem)", color: T.inkMid, fontStyle: "italic", lineHeight: 1.45, fontWeight: 300 }}>
                        No citizen of this country should be deprived of education due to economic and financial reasons.
                    </p>
                    <p style={{ marginTop: "1.25rem", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: T.inkSoft }}>— PSR Trust Mission</p>
                </div>
                <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 4, padding: "1.25rem 1.5rem", borderLeft: `3px solid ${T.gold}` }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: T.gold, marginBottom: 6, fontWeight: 600 }}>80G Tax Benefit</div>
                    <div style={{ fontSize: 13, color: T.inkMid, lineHeight: 1.6 }}>Donations qualify for exemption under Section 80G of the Income Tax Act, 1961. Registered and verified.</div>
                </div>
            </div>

            <style>{`@media(max-width:820px){#home{grid-template-columns:1fr!important} #home>div:last-child{display:none!important}}`}</style>
        </section>
    );
}

function About() {
    return (
        <section id="about" style={{ background: "#fff", padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                {/* Left */}
                <div>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Our History</div>
                    <h2 style={gs.h2}>A trust built on<br /><em style={{ fontStyle: "italic", color: T.gold }}>unwavering belief</em></h2>
                    <p style={{ ...gs.lead, marginBottom: "1.25rem" }}>
                        PS Ramachandran Educational & Charitable Trust was founded in 2007 with one clear belief — that no child in India should lose access to education because of poverty.
                    </p>
                    <p style={{ ...gs.lead, marginBottom: "1.25rem" }}>
                        Starting with individual scholarships, the Trust has grown to manage three government-aided rural primary schools in the Sirkazhi Taluk area, rebuilding infrastructure, restoring enrolment and bringing holistic education to villages.
                    </p>
                    <p style={gs.lead}>
                        Registered under the Income Tax Act 1961 and 80G certified, we are governed by a board of seasoned professionals — Chartered Accountants, Company Secretaries and educators — who volunteer their expertise in service of a better Tamil Nadu.
                    </p>
                    <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer"
                            style={{ background: T.gold, color: "#fff", padding: "12px 28px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
                            Support the Trust
                        </a>
                        <a href="#trustees" style={{ border: `1px solid ${T.gold}`, color: T.gold, padding: "12px 28px", borderRadius: 2, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                            Meet the Board
                        </a>
                    </div>
                </div>

                {/* Right — Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    {STATS.map(s => (
                        <div key={s.label} style={{ background: T.goldPale, border: `1px solid rgba(201,153,58,0.2)`, borderRadius: 4, padding: "1.5rem", textAlign: "center" }}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.5rem", color: T.gold, fontWeight: 300, lineHeight: 1 }}>{s.num}</div>
                            <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@media(max-width:820px){#about>div{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Causes() {
    return (
        <section id="causes" style={{ background: T.cream, padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />What We Do</div>
                    <h2 style={gs.h2}>Our <em style={{ fontStyle: "italic", color: T.gold }}>causes</em> in focus</h2>
                    <p style={gs.lead}>We believe every child in India deserves quality education, regardless of economic circumstances.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1.5, background: "rgba(201,153,58,0.15)", borderRadius: 4 }}>
                    {CAUSES.map((c, i) => (
                        <div key={i}
                            style={{ background: "#fff", padding: "2.5rem", transition: "background 0.3s", cursor: "default" }}
                            onMouseEnter={e => e.currentTarget.style.background = T.goldPale}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <div style={{ fontSize: 32, marginBottom: "1.25rem" }}>{c.icon}</div>
                            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 500, color: T.ink, marginBottom: "0.6rem", margin: "0 0 0.6rem" }}>{c.title}</h3>
                            <p style={{ fontSize: 13.5, color: T.inkSoft, lineHeight: 1.75, margin: "0 0 1.25rem" }}>{c.desc}</p>
                            <a href={c.link} style={{ fontSize: 11, color: T.gold, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                                {c.linkLabel} →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@media(max-width:820px){#causes .cause-grid{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Schools() {
    const [open, setOpen] = useState(0);

    return (
        <section id="schools" style={{ background: "#fff", padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Rural Education</div>
                    <h2 style={gs.h2}>Schools we <em style={{ fontStyle: "italic", color: T.gold }}>nurture</em></h2>
                    <p style={gs.lead}>Three schools in the Sirkazhi Taluk area where we are rebuilding educational futures for village children.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
                    {SCHOOLS.map((s, i) => (
                        <div key={i} onClick={() => setOpen(open === i ? -1 : i)}
                            style={{ border: `1px solid ${open === i ? s.color : "rgba(201,153,58,0.2)"}`, borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "border-color 0.3s, box-shadow 0.3s", boxShadow: open === i ? `0 4px 24px rgba(0,0,0,0.08)` : "none" }}>
                            {/* School header */}
                            <div style={{ background: T.ink, padding: "1.5rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", color: s.color, fontWeight: 300, lineHeight: 1, minWidth: 36 }}>{s.number}</div>
                                    <div>
                                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "#fff", fontWeight: 400, lineHeight: 1.3 }}>{s.name}</div>
                                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{s.location}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Body */}
                            <div style={{ padding: "1.25rem" }}>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                                    <span style={{ fontSize: 12, color: T.inkSoft }}>Est. <strong style={{ color: T.ink, fontWeight: 500 }}>{s.established}</strong></span>
                                    <span style={{ fontSize: 12, color: T.inkSoft }}>Managed from <strong style={{ color: T.ink, fontWeight: 500 }}>{s.takenOver}</strong></span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span style={{ background: T.goldLight, color: "#8B6820", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 2, fontWeight: 600 }}>{s.status}</span>
                                    <span style={{ fontSize: 13, color: T.inkSoft }}>{s.students} students</span>
                                </div>
                                {/* {open === i && ( */}
                                <ul style={{ marginTop: "1rem", paddingLeft: 0, listStyle: "none" }}>
                                    {s.details.map((d, di) => (
                                        <li key={di} style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.65, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                                            <span style={{ position: "absolute", left: 0, color: s.color }}>•</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                                {/* )} */}
                                {/* <div style={{ marginTop: "0.75rem", fontSize: 12, color: T.gold, fontWeight: 500 }}>
                  {open === i ? "▲ Less" : "▼ More details"}
                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@media(max-width:820px){#schools>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Impact() {
    return (
        <section id="impact" style={{ background: T.ink, padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <div style={{ ...gs.sectionTag, color: T.gold }}><span style={gs.goldLine} />Our Impact</div>
                    <h2 style={gs.h2White}>Numbers that <em style={{ fontStyle: "italic", color: T.gold }}>matter</em></h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.06)" }}>
                    {STATS.map((s, i) => (
                        <div key={i} style={{ padding: "2.5rem", borderBottom: "1px solid rgba(201,153,58,0.1)" }}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", color: T.gold, fontWeight: 300, lineHeight: 1, marginBottom: "0.5rem" }}>{s.num}</div>
                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Partners */}
                <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>Partnered With</div>
                    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                        {PARTNERS.map((p, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: "1rem 1.5rem", flex: "1 1 200px" }}>
                                <div style={{ fontSize: 13, color: "#fff", fontWeight: 500, marginBottom: 4 }}>{p.name}</div>
                                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{p.note}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`@media(max-width:700px){#impact .stat-grid{grid-template-columns:1fr 1fr!important}}`}</style>
        </section>
    );
}

function Testimonials() {
    const [active, setActive] = useState(0);
    const t = TESTIMONIALS[active];

    return (
        <section id="testimonials" style={{ background: T.goldPale, padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Our Pride Speaks</div>
                    <h2 style={gs.h2}>Stories that <em style={{ fontStyle: "italic", color: T.gold }}>inspire</em></h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}>
                    {/* Selector */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {TESTIMONIALS.map((tt, i) => (
                            <button key={i} onClick={() => setActive(i)}
                                style={{ background: i === active ? T.ink : "#fff", border: `1px solid ${i === active ? T.ink : "rgba(201,153,58,0.2)"}`, borderRadius: 4, padding: "0.9rem 1.1rem", textAlign: "left", cursor: "pointer", transition: "all 0.25s" }}>
                                <div style={{ fontSize: 13, fontWeight: 500, color: i === active ? "#fff" : T.ink, marginBottom: 2 }}>{tt.name}</div>
                                <div style={{ fontSize: 11, color: i === active ? "rgba(255,255,255,0.5)" : T.inkSoft }}>{tt.role}</div>
                            </button>
                        ))}
                    </div>

                    {/* Quote */}
                    <div style={{ background: "#fff", border: `1px solid rgba(201,153,58,0.2)`, borderRadius: 4, padding: "2.5rem" }}>
                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "5rem", color: T.goldLight, lineHeight: 0.7, marginBottom: "1.25rem", fontStyle: "italic" }}>"</div>
                        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", color: T.inkMid, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 1.75rem" }}>{t.text}</p>
                        <div style={{ borderTop: `1px solid rgba(201,153,58,0.15)`, paddingTop: "1.25rem" }}>
                            <div style={{ fontSize: 14, color: T.ink, fontWeight: 500 }}>{t.name}</div>
                            <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 3 }}>{t.role}</div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`@media(max-width:820px){#testimonials>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Trustees() {
    return (
        <section id="trustees" style={{ background: "#fff", padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3.5rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Leadership</div>
                    <h2 style={gs.h2}>Board of <em style={{ fontStyle: "italic", color: T.gold }}>Trustees</em></h2>
                    <p style={gs.lead}>Decades of expertise in finance, law and administration — all in service of education.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
                    {TRUSTEES.map((tr, i) => (
                        <div key={i} style={{ border: "1px solid rgba(201,153,58,0.2)", borderRadius: "28px",padding:'4px', overflow: "hidden", transition: "border-color 0.3s, transform 0.3s" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.transform = "translateY(-4px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,153,58,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <div style={{ width: 68, height: 68, borderRadius: "50%", background: T.gold, color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{tr.initials}</div> */}
                                <img src={tr.img} height={300} style={{borderRadius:'28px', objectFit:"cover", width:"100%"}}/>
                            </div>
                            <div style={{ padding: "1.25rem" }}>
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: T.ink, fontWeight: 500 }}>{tr.name}</div>
                                <div style={{ fontSize: 10, color: T.gold, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>{tr.role}</div>
                                <p style={{ fontSize: 12, color: T.inkSoft, lineHeight: 1.65 }}>{tr.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@media(max-width:900px){#trustees>div>div:last-child{grid-template-columns:1fr 1fr!important}} @media(max-width:600px){#trustees>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Gallery() {
    const colors = [T.gold, T.green, "#5B7FA6", "#8B5E3C", "#6B5B95", "#C06060"];
    const items = [
        "Republic Day Celebration — Keezhachalai School, Jan 2021",
        "New School Building — Valeo & Anand Group Funded",
        "Yoga & PE Sessions — Keezhachalai Primary School",
        "Deepavali Dress Distribution for All Students",
        "Republic Day Celebration - Puduthurai Govt Aided School, Jan 2021",
        "CSK School, Thirunangur — Nursery and Primary School",
    ];
    const images = [
        Keezhachalai_Rep,
        NewBuilding,
        YogaSession,
        Deepavali,
        Puduthurai_Rep,
        CSK_School
    ]

    return (
        <section id="gallery" style={{ background: T.cream, padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ marginBottom: "3rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Photo Gallery</div>
                    <h2 style={gs.h2}>Moments from <em style={{ fontStyle: "italic", color: T.gold }}>our journey</em></h2>
                    <p style={gs.lead}>Glimpses of school life, celebrations and construction milestones across our rural school projects.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
                    {items.map((caption, i) => (
                        <div key={i} style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3", position: "relative", cursor: "pointer" }}
                            onMouseEnter={e => { e.currentTarget.children[0].style.transform = "scale(1.05)"; }}
                            onMouseLeave={e => { e.currentTarget.children[0].style.transform = "scale(1)"; }}>
                            <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg,${colors[i]}33,${colors[i]}88)`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.4s ease", fontSize: 40 }}>
                                <img src={images[i]} style={{objectFit:'cover', width:'100%', height:'100%'}}/>
                            </div>
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(26,22,18,0.85))", padding: "2rem 1rem 1rem", color: "#fff", fontSize: 12, lineHeight: 1.4 }}>{caption}</div>
                        </div>
                    ))}
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: 13, color: T.inkSoft, textAlign: "center" }}>
                    Gallery images will be replaced with actual photos when integrated with the website CMS.
                </p>
            </div>
            <style>{`@media(max-width:700px){#gallery>div>div:last-child{grid-template-columns:1fr 1fr!important}}`}</style>
        </section>
    );
}

function DonationCTA() {
    return (
        <section style={{ background: T.gold, padding: "5rem clamp(1.5rem,5vw,3rem)", textAlign: "center", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,3.5vw,3rem)", color: "#fff", fontWeight: 300, lineHeight: 1.2, margin: "0 0 1rem" }}>
                    Help us <em style={{ fontStyle: "italic" }}>light the lamp</em> of education
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                    Your contribution goes directly to scholarships for deserving students and improving infrastructure at rural schools in Tamil Nadu. Every rupee counts.
                </p>
                <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer"
                    style={{ background: "#fff", color: T.gold, padding: "15px 48px", borderRadius: 2, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
                    Donate Now
                </a>
                <p style={{ marginTop: "1.5rem", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                    Only INR donations accepted · 80G exemption applicable · Registered under Income Tax Act 1961
                </p>
            </div>
        </section>
    );
}

function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faq" style={{ background: T.cream, padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <div style={{ marginBottom: "3rem" }}>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />FAQ</div>
                    <h2 style={gs.h2}>Common <em style={{ fontStyle: "italic", color: T.gold }}>questions</em></h2>
                </div>
                {FAQS.map((f, i) => (
                    <div key={i} style={{ borderBottom: "1px solid rgba(201,153,58,0.18)" }}>
                        <button onClick={() => setOpen(open === i ? null : i)}
                            style={{ width: "100%", background: "none", border: "none", padding: "1.4rem 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", textAlign: "left" }}>
                            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: T.ink, fontWeight: 500 }}>{f.q}</span>
                            <span style={{ color: T.gold, fontSize: 20, flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
                        </button>
                        {open === i && (
                            <p style={{ fontSize: 14, color: T.inkSoft, lineHeight: 1.85, paddingBottom: "1.25rem", margin: 0 }}>{f.a}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section id="contact" style={{ background: "#fff", padding: "5rem clamp(1.5rem,5vw,3rem)", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
                {/* Info */}
                <div>
                    <div style={gs.sectionTag}><span style={gs.goldLine} />Get in Touch</div>
                    <h2 style={gs.h2}>Contact <em style={{ fontStyle: "italic", color: T.gold }}>us</em></h2>
                    <p style={gs.lead}>Have questions about scholarships, school partnerships, or donations? We'd love to hear from you.</p>
                    <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {[
                            { icon: "📞", label: "Phone", val: SITE.phone, href: `tel:${SITE.phone}` },
                            { icon: "✉️", label: "Email", val: SITE.email, href: `mailto:${SITE.email}` },
                            { icon: "🌐", label: "Website", val: "psrtrust.org", href: SITE.website },
                            { icon: "📍", label: "Location", val: SITE.address, href: null },
                        ].map(c => (
                            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: 40, height: 40, background: T.goldPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                                <div>
                                    <div style={{ fontSize: 11, color: T.inkSoft, letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.label}</div>
                                    {c.href
                                        ? <a href={c.href} style={{ fontSize: 14, color: T.gold, textDecoration: "none", fontWeight: 500 }}>{c.val}</a>
                                        : <div style={{ fontSize: 14, color: T.inkMid }}>{c.val}</div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div style={{ background: T.goldPale, border: "1px solid rgba(201,153,58,0.2)", borderRadius: 4, padding: "2.5rem" }}>
                    {sent ? (
                        <div style={{ textAlign: "center", padding: "2rem 0" }}>
                            <div style={{ fontSize: 48, marginBottom: "1rem" }}>✅</div>
                            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", color: T.ink, marginBottom: "0.5rem" }}>Message Received</h3>
                            <p style={{ fontSize: 14, color: T.inkSoft }}>Thank you for reaching out. We'll get back to you at {form.email} within 2–3 working days.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {[
                                { label: "Your Name", key: "name", type: "text", placeholder: "Full name" },
                                { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
                            ].map(f => (
                                <div key={f.key}>
                                    <label style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: T.inkSoft, display: "block", marginBottom: 6 }}>{f.label}</label>
                                    <input type={f.type} placeholder={f.placeholder} required value={form[f.key]}
                                        onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                                        style={{ width: "100%", background: "#fff", border: "1px solid rgba(201,153,58,0.25)", borderRadius: 2, padding: "10px 14px", fontSize: 14, color: T.ink, fontFamily: "'Jost',sans-serif", outline: "none" }} />
                                </div>
                            ))}
                            <div>
                                <label style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: T.inkSoft, display: "block", marginBottom: 6 }}>Message</label>
                                <textarea required rows={5} placeholder="Tell us how we can help you…" value={form.message}
                                    onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                                    style={{ width: "100%", background: "#fff", border: "1px solid rgba(201,153,58,0.25)", borderRadius: 2, padding: "10px 14px", fontSize: 14, color: T.ink, fontFamily: "'Jost',sans-serif", outline: "none", resize: "vertical" }} />
                            </div>
                            <button type="submit" style={{ background: T.gold, color: "#fff", border: "none", padding: "13px 32px", borderRadius: 2, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", alignSelf: "flex-start" }}>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <style>{`@media(max-width:820px){#contact>div{grid-template-columns:1fr!important}}`}</style>
        </section>
    );
}

function Footer() {
    const footerLinks = [
        { title: "Quick Links", items: [{ label: "About", href: "#about" }, { label: "Causes", href: "#causes" }, { label: "Schools", href: "#schools" }, { label: "Our Pride", href: "#testimonials" }, { label: "Trustees", href: "#trustees" }, { label: "FAQ", href: "#faq" }] },
        { title: "Schools", items: [{ label: "Keezhachalai School", href: "#schools" }, { label: "Puduthurai School", href: "#schools" }, { label: "CSK School, Thirunangur", href: "#schools" }] },
        { title: "Legal", items: [{ label: "Terms & Conditions", href: "https://psrtrust.org/web/terms-condition/" }, { label: "Privacy Policy", href: "https://psrtrust.org/web/privacy-policy/" }, { label: "Cancellation / Refund", href: "https://psrtrust.org/web/cancellation-refund-policy/" }, { label: "Donor Dashboard", href: "https://psrtrust.org/web/donordashboard-2/" }] },
    ];

    return (
        <footer style={{ background: T.ink, padding: "4rem clamp(1.5rem,4vw,3rem) 2rem", fontFamily: "'Jost',sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
                            {/* <div style={{ width: 38, height: 38, borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600 }}>PSR</div> */}
                            {/* <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "#fff" }}>PS Ramachandran Trust</div> */}
                            <img src={footerLogo} width={300}/>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>Operating since 2007 with the primary aim of providing education to the needy. Registered under The Income Tax Act 1961. 80G exemption applicable.</p>
                        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 6 }}>
                            <a href={`tel:${SITE.phone}`} style={{ color: T.gold, fontSize: 13, textDecoration: "none" }}>{SITE.phone}</a>
                            <a href={`mailto:${SITE.email}`} style={{ color: T.gold, fontSize: 13, textDecoration: "none" }}>{SITE.email}</a>
                        </div>
                    </div>
                    {/* Link columns */}
                    {footerLinks.map(col => (
                        <div key={col.title}>
                            <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>{col.title}</div>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {col.items.map(it => (
                                    <li key={it.label} style={{ marginBottom: 8 }}>
                                        <a href={it.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                                            onMouseEnter={e => e.target.style.color = T.gold}
                                            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>{it.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2024 P S Ramachandran Educational & Charitable Trust. All rights reserved.</span>
                    <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: T.gold, textDecoration: "none" }}>Donate Now →</a>
                </div>
            </div>
            <style>{`@media(max-width:820px){footer>div>div:first-child{grid-template-columns:1fr 1fr!important}}`}</style>
        </footer>
    );
}

// ─── APP ─────────────────────────────────────────────────────
export default function App() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
        document.body.style.cssText = "margin:0;padding:0;background:#FAF7F2;";
    }, []);

    return (
        <div style={{ fontFamily: "'Jost',sans-serif", overflowX: "hidden" }}>
            <Navbar />
            <Hero />
            <About />
            <Causes />
            <Schools />
            <Impact />
            <Testimonials />
            <Trustees />
            <Gallery />
            <DonationCTA />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}