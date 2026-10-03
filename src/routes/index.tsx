import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Armchair, BadgeCheck, CheckCircle2, ChevronDown, Mail, MapPin, Menu, Phone, ShieldCheck, Truck, Upload, X } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

const phone = '+38162788984'
const categories = ['Sve', 'Nameštaj', 'Dekoracija', 'Antikviteti'] as const
type Category = (typeof categories)[number]

const pieces = [
  { name: 'Garniture i sofe', description: 'Klasika koja nikada ne izlazi iz stila.', image: '/img/original-5.jpeg', category: 'Nameštaj', position: 'center 60%' },
  { name: 'Fotelje i stolice', description: 'Karakter u svakom detalju.', image: '/img/original-6.png', category: 'Nameštaj', position: 'center' },
  { name: 'Komode i vitrine', description: 'Vrednost prirodnog drveta i ručnog rada.', image: '/img/original-7.png', category: 'Nameštaj', position: 'center' },
  { name: 'Antikviteti i dekoracija', description: 'Mali predmeti. Velike priče.', image: '/img/original-11.png', category: 'Antikviteti', position: 'center' },
  { name: 'Kreveti i spavaće sobe', description: 'Posebni komadi za novi početak.', image: '/img/original-8.png', category: 'Nameštaj', position: 'center' },
  { name: 'Regali i ormari', description: 'Prostor za tradiciju i kvalitet.', image: '/img/original-9.jpeg', category: 'Nameštaj', position: 'center' },
  { name: 'Ogledala', description: 'Lepota koja se ogleda u detaljima.', image: '/img/original-13.jpeg', category: 'Dekoracija', position: 'center' },
  { name: 'Satovi', description: 'Svedoci vremena koje cenimo.', image: '/img/original-12.png', category: 'Antikviteti', position: 'center' },
  { name: 'Porcelan i skulpture', description: 'Umetnost sa ličnom pričom.', image: '/img/original-14.png', category: 'Dekoracija', position: 'center' },
  { name: 'Stilske fotelje', description: 'Prepoznatljiv oblik. Trajna vrednost.', image: '/img/original-10.jpeg', category: 'Antikviteti', position: 'center' },
]
type Piece = (typeof pieces)[number]

const questions = [
  { question: 'Koji nameštaj otkupljujete?', answer: 'Otkupljujemo polovan i stilski nameštaj: garniture, sofe, fotelje, stolice, stolove, komode, vitrine, krevete, regale i ormare. Zainteresovani smo i za antikvitete, ogledala, satove, lampe, lustere, porcelan i skulpture. Pošaljite fotografije da proverimo mogućnost otkupa konkretnog komada.' },
  { question: 'Da li je procena zaista besplatna?', answer: 'Da. Početna procena na osnovu fotografija je besplatna i ne obavezuje vas na prodaju. Konačnu ponudu dogovaramo nakon što pogledamo stanje, materijal i detalje nameštaja.' },
  { question: 'Na kom području radite?', answer: 'Nalazimo se na Zvezdari u Beogradu, a otkup dogovaramo na području cele Srbije, uključujući Kragujevac i Niš. Mogućnost i termin dolaska zavise od lokacije i komada koje nudite.' },
  { question: 'Ko organizuje prevoz i kada dobijam novac?', answer: 'Mi organizujemo preuzimanje i prevoz otkupljenog nameštaja. Nakon što prihvatite ponudu, dogovaramo termin dolaska i isplatu na licu mesta, prilikom preuzimanja.' },
  { question: 'Kako da pripremim fotografije za procenu?', answer: 'Fotografišite ceo komad u dobrom svetlu, zatim detalje, eventualna oštećenja i oznake proizvođača. U poruci navedite približne dimenzije, stanje i grad u kojem se nameštaj nalazi. Za više fotografija možete nas kontaktirati i putem mejla.' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://grand-profiterole-c9a5c7.netlify.app/#business',
      name: 'Otkup stilskog nameštaja',
      url: 'https://grand-profiterole-c9a5c7.netlify.app/',
      description: 'Besplatna procena i otkup polovnog, stilskog nameštaja i antikviteta u Beogradu i celoj Srbiji. Organizovan prevoz i isplata pri preuzimanju.',
      telephone: phone,
      email: 'jelica1111@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Beograd', addressRegion: 'Zvezdara', addressCountry: 'RS' },
      areaServed: { '@type': 'Country', name: 'Srbija' },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Usluge otkupa', itemListElement: ['Otkup polovnog nameštaja', 'Otkup stilskog nameštaja', 'Otkup antikviteta'].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })) },
    },
    { '@type': 'FAQPage', mainEntity: questions.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  ],
}

function imageUrl(path: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=85`
}

function Picture({ piece, hero = false }: { piece: Piece; hero?: boolean }) {
  const photoPath = hero ? '/img/hero-modernized.webp' : piece.image
  return <img src={imageUrl(photoPath, hero ? 1600 : 600)} srcSet={`${imageUrl(photoPath, 480)} 480w, ${imageUrl(photoPath, 800)} 800w, ${imageUrl(photoPath, 1200)} 1200w, ${imageUrl(photoPath, 1600)} 1600w`} sizes={hero ? '(max-width: 1280px) 94vw, 1280px' : '(max-width: 600px) 90vw, (max-width: 900px) 45vw, 24vw'} alt={hero ? 'Zelena stilska garnitura od pliša — modernizovan prikaz zasnovan na originalnoj fotografiji' : piece.name + ' — primer komada za otkup'} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} width={hero ? 2048 : 1200} height={hero ? 869 : 1200} style={{ objectPosition: piece.position }} />
}

function Dialog({ open, close, title, children, className = '' }: { open: boolean; close: () => void; title: string; children: ReactNode; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
    if (open) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = previousOverflow }
    }
  }, [open])
  return <dialog ref={dialogRef} className={`dialog ${className}`} aria-label={title} onCancel={event => { event.preventDefault(); close() }} onClick={event => { if (event.target === event.currentTarget) close() }}>
    <div className="dialog-inner"><button className="icon-button dialog-close" onClick={close} aria-label="Zatvorite prozor"><X size={21} /></button>{children}</div>
  </dialog>
}

function AssessmentForm({ close }: { close: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const file = data.get('photo')
    if (file instanceof File && file.size > 7 * 1024 * 1024) {
      setError('Fotografija je prevelika. Izaberite fotografiju manju od 7 MB.')
      setStatus('error')
      return
    }
    if (file instanceof File && file.size > 0 && !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Izaberite JPG, PNG ili WebP fotografiju.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setError('')
    try {
      const response = await fetch('/procena-form.html', { method: 'POST', body: data })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
      setFileName('')
    } catch {
      setStatus('error')
      setError('Poruka nije poslata. Pokušajte ponovo ili nas pozovite na 062 788 984.')
    }
  }

  if (status === 'success') return <div className="form-success"><CheckCircle2 size={48} strokeWidth={1.3} /><p className="eyebrow">HVALA NA POVERENJU</p><h2>Vaša priča je stigla do nas.</h2><p>Primili smo zahtev za procenu. Kontaktiraćemo vas putem telefona ili mejla koji ste naveli.</p><button className="button button-dark" onClick={close}>Nazad na sajt <ArrowRight size={17} /></button></div>

  return <>
    <p className="eyebrow">BESPLATNO. BEZ OBAVEZE.</p><h2 id="form-heading">Otkrijte vrednost<br />svog nameštaja.</h2><p className="form-intro">Pošaljite nekoliko detalja i fotografiju. Za ostalo smo tu mi.</p>
    <form name="procena" method="POST" encType="multipart/form-data" onSubmit={submit} aria-labelledby="form-heading">
      <input type="hidden" name="form-name" value="procena" />
      <div hidden><label>Ostavite prazno<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-row"><label>Vaše ime<input name="name" autoComplete="name" maxLength={100} placeholder="Ime i prezime" required /></label><label>Telefon<input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="06x xxx xxxx" required /></label></div>
      <div className="form-row"><label>Email <span>(opciono)</span><input name="email" type="email" autoComplete="email" maxLength={200} placeholder="vas@email.com" /></label><label>Grad<input name="city" autoComplete="address-level2" maxLength={100} placeholder="Gde se nameštaj nalazi?" required /></label></div>
      <label>O vašem nameštaju<textarea name="message" rows={3} maxLength={3000} placeholder="Vrsta, približne dimenzije, stanje…" required /></label>
      <label className="upload-field"><Upload size={24} strokeWidth={1.5} /><strong>{fileName || 'Dodajte fotografiju nameštaja'}</strong><span>JPG, PNG ili WebP · do 7 MB · opciono</span><input name="photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={event => { setFileName(event.target.files?.[0]?.name || ''); setError('') }} /></label>
      <label className="consent"><input name="consent" type="checkbox" value="accepted" required /><span>Saglasan/na sam da me kontaktirate povodom procene. Podaci se koriste za obradu ovog zahteva.</span></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Šaljemo vaš zahtev…' : 'Pošaljite zahtev za procenu'}<ArrowRight size={17} /></button>
      <p className="form-note">Želite da razgovaramo? <a href={`tel:${phone}`}>062 788 984</a></p>
    </form>
  </>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [assessmentOpen, setAssessmentOpen] = useState(false)
  const [category, setCategory] = useState<Category>('Sve')
  const [showAll, setShowAll] = useState(false)
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)
  const filteredPieces = pieces.filter(piece => category === 'Sve' || piece.category === category)
  const visiblePieces = showAll ? filteredPieces : filteredPieces.slice(0, 4)
  const openAssessment = () => { setSelectedPiece(null); setMenuOpen(false); setAssessmentOpen(true) }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <a href="#sadrzaj" className="skip-link">Pređite na sadržaj</a>
    <div className="announcement"><span className="status-dot" />Beograd i cela Srbija<span className="announcement-divider">/</span>Besplatna procena. Bez obaveze.<ArrowUpRight size={12} /></div>
    <header className="site-header">
      <a className="brand" href="#" aria-label="Otkup stilskog nameštaja — početna"><span className="brand-icon"><Armchair size={28} strokeWidth={1.5} /></span><span className="brand-wordmark">otkup<span>.</span><small>STILSKOG NAMEŠTAJA</small></span></a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Glavna navigacija"><a href="#o-nama" onClick={() => setMenuOpen(false)}>O nama</a><a href="#sta-otkupljujemo" onClick={() => setMenuOpen(false)}>Šta otkupljujemo</a><a href="#kako-radimo" onClick={() => setMenuOpen(false)}>Kako radimo</a><a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a></nav>
      <div className="header-actions"><button className="button button-dark header-cta" onClick={openAssessment}>Besplatna procena<ArrowUpRight size={15} /></button><button className="icon-button menu-toggle" aria-label={menuOpen ? 'Zatvorite meni' : 'Otvorite meni'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>
    <main id="sadrzaj">
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-copy"><p className="eyebrow"><span />VREDNOST KOJA TRAJE<span /></p><h1 id="hero-heading">Dobar nameštaj.<br /><em>Zaslužuje novu priču.</em></h1><p className="hero-description">Otkup polovnog i stilskog nameštaja u Beogradu i celoj Srbiji.<br className="desktop-break" /> Fer procena. Brza isplata. Novi život za vaše vredne komade.</p><div className="hero-actions"><button className="button button-green" onClick={openAssessment}>Zatražite besplatnu procenu<ArrowUpRight size={17} /></button><a className="text-link" href={`tel:${phone}`}><Phone size={15} />062 788 984</a></div></div>
        <div className="hero-image"><Picture piece={pieces[0]} hero /><div className="hero-image-shade" /><div className="hero-caption"><span>NEKI KOMADI SU VIŠE OD NAMEŠTAJA.</span><p>Sačuvajmo ono<br />što ima vrednost.</p></div><a className="image-scroll" href="#sta-otkupljujemo" aria-label="Pogledajte šta otkupljujemo"><ArrowDown size={20} /></a><div className="hero-image-label"><span className="status-dot" />NOVI ŽIVOT. ISTI KARAKTER.</div></div>
        <div className="trust-strip"><div><BadgeCheck size={20} strokeWidth={1.5} /><span>Besplatna procena</span></div><div><ShieldCheck size={20} strokeWidth={1.5} /><span>Fer i transparentan dogovor</span></div><div><Truck size={21} strokeWidth={1.5} /><span>Prevoz je naša briga</span></div><div><CheckCircle2 size={20} strokeWidth={1.5} /><span>Isplata na licu mesta</span></div></div>
      </section>
      <section className="collection container section-space" id="sta-otkupljujemo" aria-labelledby="collection-heading">
        <div className="section-heading"><div><p className="eyebrow">PAŽLJIVO BIRAMO. POŠTENO CENIMO.</p><h2 id="collection-heading">Stil se menja.<br /><span>Vrednost ostaje.</span></h2></div><p>Od omiljene fotelje do cele stilske garniture.<br />Prepoznajemo kvalitet, zanat i priču<br className="desktop-break" /> koju svaki komad nosi.</p></div>
        <div className="collection-toolbar"><div className="category-tabs" aria-label="Filtrirajte galeriju">{categories.map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'category-tab active' : 'category-tab'} onClick={() => { setCategory(item); setShowAll(false) }}>{item}</button>)}</div><span className="collection-note">KOMADI KOJE OTKUPLJUJEMO</span></div>
        <div className="piece-grid">{visiblePieces.map(piece => <button key={piece.name} className="piece-card" onClick={() => setSelectedPiece(piece)} aria-label={`Pogledajte: ${piece.name}`}><div className="piece-image"><Picture piece={piece} /><span className="piece-open"><ArrowUpRight size={19} /></span></div><div className="piece-description"><h3>{piece.name}</h3><p>{piece.description}</p></div></button>)}</div>
        <div className="collection-bottom"><p>Imate nešto drugačije? <button className="inline-link" onClick={openAssessment}>Rado ćemo pogledati.</button></p>{filteredPieces.length > 4 && <button className="text-link" onClick={() => setShowAll(!showAll)}>{showAll ? 'Prikažite manje' : 'Pogledajte sve komade'}<ArrowRight size={17} /></button>}</div>
      </section>
      <section className="process-section" id="kako-radimo" aria-labelledby="process-heading"><div className="container process-inner"><div className="process-intro"><p className="eyebrow">OD PRVE PORUKE DO NOVOG POČETKA</p><h2 id="process-heading">Tri koraka.<br /><em>Nula komplikacija.</em></h2><p>Vi imate nameštaj. Mi imamo iskustvo.<br />Zajedno nalazimo pravi dogovor.</p><button className="text-link" onClick={openAssessment}>Započnimo razgovor<ArrowUpRight size={17} /></button></div><div className="process-steps"><article><span className="step-number">01</span><div><h3>Pošaljite fotografije.</h3><p>Dodajte fotografiju, kratak opis i lokaciju. Ili nas jednostavno pozovite.</p></div><Upload size={23} strokeWidth={1.4} /></article><article><span className="step-number">02</span><div><h3>Dobijte fer procenu.</h3><p>Razmatramo stanje, materijal i izradu. Ponuda je jasna, a odluka je vaša.</p></div><BadgeCheck size={25} strokeWidth={1.4} /></article><article><span className="step-number">03</span><div><h3>Mi preuzimamo. Vi dobijate isplatu.</h3><p>Dogovaramo dolazak, organizujemo prevoz i isplaćujemo vas na licu mesta.</p></div><Truck size={25} strokeWidth={1.4} /></article></div></div></section>
      <section className="about-section container section-space" id="o-nama" aria-labelledby="about-heading"><div className="about-image"><Picture piece={pieces[2]} /><span className="about-image-tag">ZA STVARI KOJE VREDE.</span></div><div className="about-copy"><p className="eyebrow">VIŠE OD OTKUPA NAMEŠTAJA</p><h2 id="about-heading">Neko vidi staro.<br /><em>Mi vidimo posebno.</em></h2><p>Dobro izrađen nameštaj ne gubi svoju vrednost preko noći. U njegovim detaljima ostaju tragovi zanata, vremena i priča koje zaslužuju da se nastave.</p><p>Specijalizovani smo za otkup polovnog i stilskog nameštaja, antikviteta i vintage dekoracije. Iz Beograda dolazimo do vrednih komada širom Srbije — uz pažljivu procenu, iskren dogovor i profesionalan pristup.</p><div className="about-signature"><Armchair size={26} strokeWidth={1.4} /><span>Svaki komad zaslužuje novu šansu.</span></div></div></section>
      <section className="faq-section container section-space" aria-labelledby="faq-heading"><div><p className="eyebrow">DOBRO JE ZNATI</p><h2 id="faq-heading">Imate pitanja.<br /><span>Mi imamo odgovore.</span></h2><a className="text-link" href={`tel:${phone}`}>Razgovarajte sa nama<ArrowUpRight size={16} /></a></div><div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<ChevronDown size={18} /></summary><p>{item.answer}</p></details>)}</div></section>
      <section className="contact-section container" id="kontakt" aria-labelledby="contact-heading"><div className="contact-topline"><p className="eyebrow">NOVO POGLAVLJE POČINJE RAZGOVOROM</p><span><span className="status-dot" />BEOGRAD · CELA SRBIJA</span></div><div className="contact-main"><h2 id="contact-heading">Vaš nameštaj.<br /><em>Naša sledeća priča.</em></h2><div><p>Saznajte koliko vredi ono što imate.<br />Besplatno, jednostavno i bez obaveze.</p><button className="button button-light" onClick={openAssessment}>Zatražite besplatnu procenu<ArrowUpRight size={18} /></button></div></div><div className="contact-details"><a href={`tel:${phone}`}><Phone size={18} /><span><small>POZOVITE NAS</small>062 788 984</span><ArrowUpRight size={17} /></a><a href="mailto:jelica1111@gmail.com"><Mail size={19} /><span><small>PIŠITE NAM</small>jelica1111@gmail.com</span><ArrowUpRight size={17} /></a><div><MapPin size={20} /><span><small>TU SMO ZA VAS</small>Beograd, Zvezdara · Cela Srbija</span></div></div></section>
    </main>
    <footer className="site-footer container"><a className="brand" href="#"><span className="brand-icon"><Armchair size={26} strokeWidth={1.5} /></span><span className="brand-wordmark">otkup<span>.</span><small>STILSKOG NAMEŠTAJA</small></span></a><p>© {new Date().getFullYear()} Otkup stilskog nameštaja. Sva prava zadržana.</p><a href="#" className="back-top">Nazad na vrh<ArrowUpRight size={15} /></a></footer>
    <Dialog open={assessmentOpen} close={() => setAssessmentOpen(false)} title="Besplatna procena nameštaja" className="assessment-dialog">{assessmentOpen && <AssessmentForm close={() => setAssessmentOpen(false)} />}</Dialog>
    <Dialog open={!!selectedPiece} close={() => setSelectedPiece(null)} title={selectedPiece?.name || 'Galerija nameštaja'} className="gallery-dialog">{selectedPiece && <><div className="gallery-photo"><img src={imageUrl(selectedPiece.image, 1200)} alt={selectedPiece.name} width="1200" height="1200" /></div><div className="gallery-info"><p className="eyebrow">{selectedPiece.category.toUpperCase()}</p><h2>{selectedPiece.name}</h2><p>{selectedPiece.description} Fotografija je ilustracija vrste komada koje otkupljujemo, a ne ponuda za prodaju.</p><button className="button button-green" onClick={openAssessment}>Ponudite nam sličan komad<ArrowUpRight size={17} /></button><div className="gallery-navigation"><button className="text-link" onClick={() => { const index = pieces.indexOf(selectedPiece); setSelectedPiece(pieces[(index - 1 + pieces.length) % pieces.length]) }}><ArrowLeft size={16} />Prethodni</button><button className="text-link" onClick={() => { const index = pieces.indexOf(selectedPiece); setSelectedPiece(pieces[(index + 1) % pieces.length]) }}>Sledeći<ArrowRight size={16} /></button></div></div></>}</Dialog>
  </>
}
