import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Armchair, X, Menu, Phone, ArrowDown, BadgeCheck, ShieldCheck, Truck, CheckCircle2, ArrowRight, Upload, ChevronDown, Mail, MapPin, ArrowLeft } from "lucide-react";
const phone = "+38162788984";
const categories = ["Sve", "Nameštaj", "Dekoracija", "Antikviteti"];
const pieces = [{
  name: "Garniture i sofe",
  description: "Klasika koja nikada ne izlazi iz stila.",
  image: "/img/original-5.jpeg",
  category: "Nameštaj",
  position: "center 60%"
}, {
  name: "Fotelje i stolice",
  description: "Karakter u svakom detalju.",
  image: "/img/original-6.png",
  category: "Nameštaj",
  position: "center"
}, {
  name: "Komode i vitrine",
  description: "Vrednost prirodnog drveta i ručnog rada.",
  image: "/img/original-7.png",
  category: "Nameštaj",
  position: "center"
}, {
  name: "Antikviteti i dekoracija",
  description: "Mali predmeti. Velike priče.",
  image: "/img/original-11.png",
  category: "Antikviteti",
  position: "center"
}, {
  name: "Kreveti i spavaće sobe",
  description: "Posebni komadi za novi početak.",
  image: "/img/original-8.png",
  category: "Nameštaj",
  position: "center"
}, {
  name: "Regali i ormari",
  description: "Prostor za tradiciju i kvalitet.",
  image: "/img/original-9.jpeg",
  category: "Nameštaj",
  position: "center"
}, {
  name: "Ogledala",
  description: "Lepota koja se ogleda u detaljima.",
  image: "/img/original-13.jpeg",
  category: "Dekoracija",
  position: "center"
}, {
  name: "Satovi",
  description: "Svedoci vremena koje cenimo.",
  image: "/img/original-12.png",
  category: "Antikviteti",
  position: "center"
}, {
  name: "Porcelan i skulpture",
  description: "Umetnost sa ličnom pričom.",
  image: "/img/original-14.png",
  category: "Dekoracija",
  position: "center"
}, {
  name: "Stilske fotelje",
  description: "Prepoznatljiv oblik. Trajna vrednost.",
  image: "/img/original-10.jpeg",
  category: "Antikviteti",
  position: "center"
}];
const questions = [{
  question: "Koji nameštaj otkupljujete?",
  answer: "Otkupljujemo polovan i stilski nameštaj: garniture, sofe, fotelje, stolice, stolove, komode, vitrine, krevete, regale i ormare. Zainteresovani smo i za antikvitete, ogledala, satove, lampe, lustere, porcelan i skulpture. Pošaljite fotografije da proverimo mogućnost otkupa konkretnog komada."
}, {
  question: "Da li je procena zaista besplatna?",
  answer: "Da. Početna procena na osnovu fotografija je besplatna i ne obavezuje vas na prodaju. Konačnu ponudu dogovaramo nakon što pogledamo stanje, materijal i detalje nameštaja."
}, {
  question: "Na kom području radite?",
  answer: "Nalazimo se na Zvezdari u Beogradu, a otkup dogovaramo na području cele Srbije, uključujući Kragujevac i Niš. Mogućnost i termin dolaska zavise od lokacije i komada koje nudite."
}, {
  question: "Ko organizuje prevoz i kada dobijam novac?",
  answer: "Mi organizujemo preuzimanje i prevoz otkupljenog nameštaja. Nakon što prihvatite ponudu, dogovaramo termin dolaska i isplatu na licu mesta, prilikom preuzimanja."
}, {
  question: "Kako da pripremim fotografije za procenu?",
  answer: "Fotografišite ceo komad u dobrom svetlu, zatim detalje, eventualna oštećenja i oznake proizvođača. U poruci navedite približne dimenzije, stanje i grad u kojem se nameštaj nalazi. Za više fotografija možete nas kontaktirati i putem mejla."
}];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "LocalBusiness",
    "@id": "https://grand-profiterole-c9a5c7.netlify.app/#business",
    name: "Otkup stilskog nameštaja",
    url: "https://grand-profiterole-c9a5c7.netlify.app/",
    description: "Besplatna procena i otkup polovnog, stilskog nameštaja i antikviteta u Beogradu i celoj Srbiji. Organizovan prevoz i isplata pri preuzimanju.",
    telephone: phone,
    email: "jelica1111@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressRegion: "Zvezdara",
      addressCountry: "RS"
    },
    areaServed: {
      "@type": "Country",
      name: "Srbija"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge otkupa",
      itemListElement: ["Otkup polovnog nameštaja", "Otkup stilskog nameštaja", "Otkup antikviteta"].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name
        }
      }))
    }
  }, {
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }]
};
function imageUrl(path, width) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=85`;
}
function Picture({
  piece,
  hero = false
}) {
  const photoPath = hero ? "/img/hero-modernized.webp" : piece.image;
  return /* @__PURE__ */ jsx("img", { src: imageUrl(photoPath, hero ? 1600 : 600), srcSet: `${imageUrl(photoPath, 480)} 480w, ${imageUrl(photoPath, 800)} 800w, ${imageUrl(photoPath, 1200)} 1200w, ${imageUrl(photoPath, 1600)} 1600w`, sizes: hero ? "(max-width: 1280px) 94vw, 1280px" : "(max-width: 600px) 90vw, (max-width: 900px) 45vw, 24vw", alt: hero ? "Zelena stilska garnitura od pliša — modernizovan prikaz zasnovan na originalnoj fotografiji" : piece.name + " — primer komada za otkup", loading: hero ? "eager" : "lazy", fetchPriority: hero ? "high" : "auto", width: hero ? 2048 : 1200, height: hero ? 869 : 1200, style: {
    objectPosition: piece.position
  } });
}
function Dialog({
  open,
  close,
  title,
  children,
  className = ""
}) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open]);
  return /* @__PURE__ */ jsx("dialog", { ref: dialogRef, className: `dialog ${className}`, "aria-label": title, onCancel: (event) => {
    event.preventDefault();
    close();
  }, onClick: (event) => {
    if (event.target === event.currentTarget) close();
  }, children: /* @__PURE__ */ jsxs("div", { className: "dialog-inner", children: [
    /* @__PURE__ */ jsx("button", { className: "icon-button dialog-close", onClick: close, "aria-label": "Zatvorite prozor", children: /* @__PURE__ */ jsx(X, { size: 21 }) }),
    children
  ] }) });
}
function AssessmentForm({
  close
}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("photo");
    if (file instanceof File && file.size > 7 * 1024 * 1024) {
      setError("Fotografija je prevelika. Izaberite fotografiju manju od 7 MB.");
      setStatus("error");
      return;
    }
    if (file instanceof File && file.size > 0 && !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Izaberite JPG, PNG ili WebP fotografiju.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/procena-form.html", {
        method: "POST",
        body: data
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
      setError("Poruka nije poslata. Pokušajte ponovo ili nas pozovite na 062 788 984.");
    }
  }
  if (status === "success") return /* @__PURE__ */ jsxs("div", { className: "form-success", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { size: 48, strokeWidth: 1.3 }),
    /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "HVALA NA POVERENJU" }),
    /* @__PURE__ */ jsx("h2", { children: "Vaša priča je stigla do nas." }),
    /* @__PURE__ */ jsx("p", { children: "Primili smo zahtev za procenu. Kontaktiraćemo vas putem telefona ili mejla koji ste naveli." }),
    /* @__PURE__ */ jsxs("button", { className: "button button-dark", onClick: close, children: [
      "Nazad na sajt ",
      /* @__PURE__ */ jsx(ArrowRight, { size: 17 })
    ] })
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "BESPLATNO. BEZ OBAVEZE." }),
    /* @__PURE__ */ jsxs("h2", { id: "form-heading", children: [
      "Otkrijte vrednost",
      /* @__PURE__ */ jsx("br", {}),
      "svog nameštaja."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "form-intro", children: "Pošaljite nekoliko detalja i fotografiju. Za ostalo smo tu mi." }),
    /* @__PURE__ */ jsxs("form", { name: "procena", method: "POST", encType: "multipart/form-data", onSubmit: submit, "aria-labelledby": "form-heading", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "procena" }),
      /* @__PURE__ */ jsx("div", { hidden: true, children: /* @__PURE__ */ jsxs("label", { children: [
        "Ostavite prazno",
        /* @__PURE__ */ jsx("input", { name: "bot-field", tabIndex: -1, autoComplete: "off" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Vaše ime",
          /* @__PURE__ */ jsx("input", { name: "name", autoComplete: "name", maxLength: 100, placeholder: "Ime i prezime", required: true })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Telefon",
          /* @__PURE__ */ jsx("input", { name: "phone", type: "tel", autoComplete: "tel", maxLength: 30, placeholder: "06x xxx xxxx", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Email ",
          /* @__PURE__ */ jsx("span", { children: "(opciono)" }),
          /* @__PURE__ */ jsx("input", { name: "email", type: "email", autoComplete: "email", maxLength: 200, placeholder: "vas@email.com" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Grad",
          /* @__PURE__ */ jsx("input", { name: "city", autoComplete: "address-level2", maxLength: 100, placeholder: "Gde se nameštaj nalazi?", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "O vašem nameštaju",
        /* @__PURE__ */ jsx("textarea", { name: "message", rows: 3, maxLength: 3e3, placeholder: "Vrsta, približne dimenzije, stanje…", required: true })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "upload-field", children: [
        /* @__PURE__ */ jsx(Upload, { size: 24, strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx("strong", { children: fileName || "Dodajte fotografiju nameštaja" }),
        /* @__PURE__ */ jsx("span", { children: "JPG, PNG ili WebP · do 7 MB · opciono" }),
        /* @__PURE__ */ jsx("input", { name: "photo", type: "file", accept: "image/jpeg,image/png,image/webp", onChange: (event) => {
          setFileName(event.target.files?.[0]?.name || "");
          setError("");
        } })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "consent", children: [
        /* @__PURE__ */ jsx("input", { name: "consent", type: "checkbox", value: "accepted", required: true }),
        /* @__PURE__ */ jsx("span", { children: "Saglasan/na sam da me kontaktirate povodom procene. Podaci se koriste za obradu ovog zahteva." })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "form-error", role: "alert", children: error }),
      /* @__PURE__ */ jsxs("button", { className: "button button-dark form-submit", disabled: status === "sending", type: "submit", children: [
        status === "sending" ? "Šaljemo vaš zahtev…" : "Pošaljite zahtev za procenu",
        /* @__PURE__ */ jsx(ArrowRight, { size: 17 })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "form-note", children: [
        "Želite da razgovaramo? ",
        /* @__PURE__ */ jsx("a", { href: `tel:${phone}`, children: "062 788 984" })
      ] })
    ] })
  ] });
}
function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [category, setCategory] = useState("Sve");
  const [showAll, setShowAll] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const filteredPieces = pieces.filter((piece) => category === "Sve" || piece.category === category);
  const visiblePieces = showAll ? filteredPieces : filteredPieces.slice(0, 4);
  const openAssessment = () => {
    setSelectedPiece(null);
    setMenuOpen(false);
    setAssessmentOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
    } }),
    /* @__PURE__ */ jsx("a", { href: "#sadrzaj", className: "skip-link", children: "Pređite na sadržaj" }),
    /* @__PURE__ */ jsxs("div", { className: "announcement", children: [
      /* @__PURE__ */ jsx("span", { className: "status-dot" }),
      "Beograd i cela Srbija",
      /* @__PURE__ */ jsx("span", { className: "announcement-divider", children: "/" }),
      "Besplatna procena. Bez obaveze.",
      /* @__PURE__ */ jsx(ArrowUpRight, { size: 12 })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ jsxs("a", { className: "brand", href: "#", "aria-label": "Otkup stilskog nameštaja — početna", children: [
        /* @__PURE__ */ jsx("span", { className: "brand-icon", children: /* @__PURE__ */ jsx(Armchair, { size: 28, strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("span", { className: "brand-wordmark", children: [
          "otkup",
          /* @__PURE__ */ jsx("span", { children: "." }),
          /* @__PURE__ */ jsx("small", { children: "STILSKOG NAMEŠTAJA" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: menuOpen ? "main-nav is-open" : "main-nav", "aria-label": "Glavna navigacija", children: [
        /* @__PURE__ */ jsx("a", { href: "#o-nama", onClick: () => setMenuOpen(false), children: "O nama" }),
        /* @__PURE__ */ jsx("a", { href: "#sta-otkupljujemo", onClick: () => setMenuOpen(false), children: "Šta otkupljujemo" }),
        /* @__PURE__ */ jsx("a", { href: "#kako-radimo", onClick: () => setMenuOpen(false), children: "Kako radimo" }),
        /* @__PURE__ */ jsx("a", { href: "#kontakt", onClick: () => setMenuOpen(false), children: "Kontakt" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header-actions", children: [
        /* @__PURE__ */ jsxs("button", { className: "button button-dark header-cta", onClick: openAssessment, children: [
          "Besplatna procena",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "icon-button menu-toggle", "aria-label": menuOpen ? "Zatvorite meni" : "Otvorite meni", "aria-expanded": menuOpen, onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { id: "sadrzaj", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero container", "aria-labelledby": "hero-heading", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
            /* @__PURE__ */ jsx("span", {}),
            "VREDNOST KOJA TRAJE",
            /* @__PURE__ */ jsx("span", {})
          ] }),
          /* @__PURE__ */ jsxs("h1", { id: "hero-heading", children: [
            "Dobar nameštaj.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "Zaslužuje novu priču." })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "hero-description", children: [
            "Otkup polovnog i stilskog nameštaja u Beogradu i celoj Srbiji.",
            /* @__PURE__ */ jsx("br", { className: "desktop-break" }),
            " Fer procena. Brza isplata. Novi život za vaše vredne komade."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ jsxs("button", { className: "button button-green", onClick: openAssessment, children: [
              "Zatražite besplatnu procenu",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "text-link", href: `tel:${phone}`, children: [
              /* @__PURE__ */ jsx(Phone, { size: 15 }),
              "062 788 984"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-image", children: [
          /* @__PURE__ */ jsx(Picture, { piece: pieces[0], hero: true }),
          /* @__PURE__ */ jsx("div", { className: "hero-image-shade" }),
          /* @__PURE__ */ jsxs("div", { className: "hero-caption", children: [
            /* @__PURE__ */ jsx("span", { children: "NEKI KOMADI SU VIŠE OD NAMEŠTAJA." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Sačuvajmo ono",
              /* @__PURE__ */ jsx("br", {}),
              "što ima vrednost."
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { className: "image-scroll", href: "#sta-otkupljujemo", "aria-label": "Pogledajte šta otkupljujemo", children: /* @__PURE__ */ jsx(ArrowDown, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { className: "hero-image-label", children: [
            /* @__PURE__ */ jsx("span", { className: "status-dot" }),
            "NOVI ŽIVOT. ISTI KARAKTER."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trust-strip", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(BadgeCheck, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("span", { children: "Besplatna procena" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ShieldCheck, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("span", { children: "Fer i transparentan dogovor" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Truck, { size: 21, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("span", { children: "Prevoz je naša briga" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("span", { children: "Isplata na licu mesta" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "collection container section-space", id: "sta-otkupljujemo", "aria-labelledby": "collection-heading", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "PAŽLJIVO BIRAMO. POŠTENO CENIMO." }),
            /* @__PURE__ */ jsxs("h2", { id: "collection-heading", children: [
              "Stil se menja.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { children: "Vrednost ostaje." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Od omiljene fotelje do cele stilske garniture.",
            /* @__PURE__ */ jsx("br", {}),
            "Prepoznajemo kvalitet, zanat i priču",
            /* @__PURE__ */ jsx("br", { className: "desktop-break" }),
            " koju svaki komad nosi."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "collection-toolbar", children: [
          /* @__PURE__ */ jsx("div", { className: "category-tabs", "aria-label": "Filtrirajte galeriju", children: categories.map((item) => /* @__PURE__ */ jsx("button", { "aria-pressed": category === item, className: category === item ? "category-tab active" : "category-tab", onClick: () => {
            setCategory(item);
            setShowAll(false);
          }, children: item }, item)) }),
          /* @__PURE__ */ jsx("span", { className: "collection-note", children: "KOMADI KOJE OTKUPLJUJEMO" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "piece-grid", children: visiblePieces.map((piece) => /* @__PURE__ */ jsxs("button", { className: "piece-card", onClick: () => setSelectedPiece(piece), "aria-label": `Pogledajte: ${piece.name}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "piece-image", children: [
            /* @__PURE__ */ jsx(Picture, { piece }),
            /* @__PURE__ */ jsx("span", { className: "piece-open", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "piece-description", children: [
            /* @__PURE__ */ jsx("h3", { children: piece.name }),
            /* @__PURE__ */ jsx("p", { children: piece.description })
          ] })
        ] }, piece.name)) }),
        /* @__PURE__ */ jsxs("div", { className: "collection-bottom", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Imate nešto drugačije? ",
            /* @__PURE__ */ jsx("button", { className: "inline-link", onClick: openAssessment, children: "Rado ćemo pogledati." })
          ] }),
          filteredPieces.length > 4 && /* @__PURE__ */ jsxs("button", { className: "text-link", onClick: () => setShowAll(!showAll), children: [
            showAll ? "Prikažite manje" : "Pogledajte sve komade",
            /* @__PURE__ */ jsx(ArrowRight, { size: 17 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "process-section", id: "kako-radimo", "aria-labelledby": "process-heading", children: /* @__PURE__ */ jsxs("div", { className: "container process-inner", children: [
        /* @__PURE__ */ jsxs("div", { className: "process-intro", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "OD PRVE PORUKE DO NOVOG POČETKA" }),
          /* @__PURE__ */ jsxs("h2", { id: "process-heading", children: [
            "Tri koraka.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "Nula komplikacija." })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Vi imate nameštaj. Mi imamo iskustvo.",
            /* @__PURE__ */ jsx("br", {}),
            "Zajedno nalazimo pravi dogovor."
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "text-link", onClick: openAssessment, children: [
            "Započnimo razgovor",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "process-steps", children: [
          /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "01" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Pošaljite fotografije." }),
              /* @__PURE__ */ jsx("p", { children: "Dodajte fotografiju, kratak opis i lokaciju. Ili nas jednostavno pozovite." })
            ] }),
            /* @__PURE__ */ jsx(Upload, { size: 23, strokeWidth: 1.4 })
          ] }),
          /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "02" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Dobijte fer procenu." }),
              /* @__PURE__ */ jsx("p", { children: "Razmatramo stanje, materijal i izradu. Ponuda je jasna, a odluka je vaša." })
            ] }),
            /* @__PURE__ */ jsx(BadgeCheck, { size: 25, strokeWidth: 1.4 })
          ] }),
          /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "03" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Mi preuzimamo. Vi dobijate isplatu." }),
              /* @__PURE__ */ jsx("p", { children: "Dogovaramo dolazak, organizujemo prevoz i isplaćujemo vas na licu mesta." })
            ] }),
            /* @__PURE__ */ jsx(Truck, { size: 25, strokeWidth: 1.4 })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "about-section container section-space", id: "o-nama", "aria-labelledby": "about-heading", children: [
        /* @__PURE__ */ jsxs("div", { className: "about-image", children: [
          /* @__PURE__ */ jsx(Picture, { piece: pieces[2] }),
          /* @__PURE__ */ jsx("span", { className: "about-image-tag", children: "ZA STVARI KOJE VREDE." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "about-copy", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "VIŠE OD OTKUPA NAMEŠTAJA" }),
          /* @__PURE__ */ jsxs("h2", { id: "about-heading", children: [
            "Neko vidi staro.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "Mi vidimo posebno." })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Dobro izrađen nameštaj ne gubi svoju vrednost preko noći. U njegovim detaljima ostaju tragovi zanata, vremena i priča koje zaslužuju da se nastave." }),
          /* @__PURE__ */ jsx("p", { children: "Specijalizovani smo za otkup polovnog i stilskog nameštaja, antikviteta i vintage dekoracije. Iz Beograda dolazimo do vrednih komada širom Srbije — uz pažljivu procenu, iskren dogovor i profesionalan pristup." }),
          /* @__PURE__ */ jsxs("div", { className: "about-signature", children: [
            /* @__PURE__ */ jsx(Armchair, { size: 26, strokeWidth: 1.4 }),
            /* @__PURE__ */ jsx("span", { children: "Svaki komad zaslužuje novu šansu." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "faq-section container section-space", "aria-labelledby": "faq-heading", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "DOBRO JE ZNATI" }),
          /* @__PURE__ */ jsxs("h2", { id: "faq-heading", children: [
            "Imate pitanja.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { children: "Mi imamo odgovore." })
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: `tel:${phone}`, children: [
            "Razgovarajte sa nama",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "faq-list", children: questions.map((item) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            item.question,
            /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
          ] }),
          /* @__PURE__ */ jsx("p", { children: item.answer })
        ] }, item.question)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "contact-section container", id: "kontakt", "aria-labelledby": "contact-heading", children: [
        /* @__PURE__ */ jsxs("div", { className: "contact-topline", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "NOVO POGLAVLJE POČINJE RAZGOVOROM" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "status-dot" }),
            "BEOGRAD · CELA SRBIJA"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-main", children: [
          /* @__PURE__ */ jsxs("h2", { id: "contact-heading", children: [
            "Vaš nameštaj.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "Naša sledeća priča." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Saznajte koliko vredi ono što imate.",
              /* @__PURE__ */ jsx("br", {}),
              "Besplatno, jednostavno i bez obaveze."
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "button button-light", onClick: openAssessment, children: [
              "Zatražite besplatnu procenu",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-details", children: [
          /* @__PURE__ */ jsxs("a", { href: `tel:${phone}`, children: [
            /* @__PURE__ */ jsx(Phone, { size: 18 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("small", { children: "POZOVITE NAS" }),
              "062 788 984"
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:jelica1111@gmail.com", children: [
            /* @__PURE__ */ jsx(Mail, { size: 19 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("small", { children: "PIŠITE NAM" }),
              "jelica1111@gmail.com"
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(MapPin, { size: 20 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("small", { children: "TU SMO ZA VAS" }),
              "Beograd, Zvezdara · Cela Srbija"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "site-footer container", children: [
      /* @__PURE__ */ jsxs("a", { className: "brand", href: "#", children: [
        /* @__PURE__ */ jsx("span", { className: "brand-icon", children: /* @__PURE__ */ jsx(Armchair, { size: 26, strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("span", { className: "brand-wordmark", children: [
          "otkup",
          /* @__PURE__ */ jsx("span", { children: "." }),
          /* @__PURE__ */ jsx("small", { children: "STILSKOG NAMEŠTAJA" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Otkup stilskog nameštaja. Sva prava zadržana."
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "back-top", children: [
        "Nazad na vrh",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: assessmentOpen, close: () => setAssessmentOpen(false), title: "Besplatna procena nameštaja", className: "assessment-dialog", children: assessmentOpen && /* @__PURE__ */ jsx(AssessmentForm, { close: () => setAssessmentOpen(false) }) }),
    /* @__PURE__ */ jsx(Dialog, { open: !!selectedPiece, close: () => setSelectedPiece(null), title: selectedPiece?.name || "Galerija nameštaja", className: "gallery-dialog", children: selectedPiece && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "gallery-photo", children: /* @__PURE__ */ jsx("img", { src: imageUrl(selectedPiece.image, 1200), alt: selectedPiece.name, width: "1200", height: "1200" }) }),
      /* @__PURE__ */ jsxs("div", { className: "gallery-info", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: selectedPiece.category.toUpperCase() }),
        /* @__PURE__ */ jsx("h2", { children: selectedPiece.name }),
        /* @__PURE__ */ jsxs("p", { children: [
          selectedPiece.description,
          " Fotografija je ilustracija vrste komada koje otkupljujemo, a ne ponuda za prodaju."
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "button button-green", onClick: openAssessment, children: [
          "Ponudite nam sličan komad",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "gallery-navigation", children: [
          /* @__PURE__ */ jsxs("button", { className: "text-link", onClick: () => {
            const index = pieces.indexOf(selectedPiece);
            setSelectedPiece(pieces[(index - 1 + pieces.length) % pieces.length]);
          }, children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
            "Prethodni"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "text-link", onClick: () => {
            const index = pieces.indexOf(selectedPiece);
            setSelectedPiece(pieces[(index + 1) % pieces.length]);
          }, children: [
            "Sledeći",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
