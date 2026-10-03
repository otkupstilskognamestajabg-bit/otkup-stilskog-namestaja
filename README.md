# Otkup stilskog nameštaja

Minimalistički sajt na srpskom jeziku za otkup polovnog i stilskog nameštaja, antikviteta i dekoracije u Beogradu i celoj Srbiji. Redizajn je zasnovan na sadržaju, kontaktima i fotografijama originalnog WordPress sajta. Vizuelni pravac kombinuje velike naslove, prirodne zelene tonove, prozračan raspored i fotografije nameštaja.

## Tehnologije

TanStack Start i TanStack Router obezbeđuju serversko renderovanje i rutiranje. Interfejs koristi React 19, TypeScript, Lucide ikone i prilagođeni CSS uz Tailwind CSS 4. Vite i Netlify plugin pripremaju aplikaciju za objavljivanje. Netlify Image CDN optimizuje lokalne fotografije, a Netlify Forms čuva zahteve za procenu i priložene fotografije. Aplikaciji nije potrebna zasebna baza podataka.

## Lokalno pokretanje

Potrebni su Node.js 22 i pnpm.

```bash
pnpm install
pnpm dev
```

Razvojni sajt je dostupan na `http://localhost:3000`. Za Netlify okruženje koristite `netlify dev --port 8889`. Netlify Forms treba proveriti na objavljenom deploy preview-u; običan Vite server ne obrađuje Netlify forme niti Image CDN transformacije.

## Funkcionalnosti

Početna stranica sadrži filtriranu galeriju, pregled fotografija u dijalogu, opis procesa otkupa, informacije o poslovanju, pitanja i odgovore i direktne telefonske i email kontakte. Zahtev za besplatnu procenu prikuplja ime, telefon, grad, opis, opcioni email i jednu opcionu JPG, PNG ili WebP fotografiju do 7 MB. Obrazac ima saglasnost za kontakt, zaštitno honeypot polje, stanje slanja, potvrdu uspeha i prikaz greške. Zahtevi se nalaze u Netlify Forms panelu za obrazac `procena`.

## SEO i objavljivanje

Sajt uključuje srpski jezički atribut, opisne metapodatke, kanonsku adresu, Open Graph podatke bez sopstvene `og:image`, semantičke naslove, opise slika, lokalne poslovne podatke i FAQ JSON-LD, `robots.txt` i XML sitemap. Nisu dodavane izmišljene recenzije, ocene, adrese ili garantovana vremena dolaska.

Trenutna kanonska adresa je `https://grand-profiterole-c9a5c7.netlify.app`. Pri povezivanju sopstvenog domena ažurirajte adresu u `src/routes/__root.tsx`, `src/routes/index.tsx`, `public/robots.txt` i `public/sitemap.xml`. Prijavite konačni domen u Google Search Console i pošaljite sitemap. Uskladite adresu sajta i javne kontakt-podatke sa svojim Google Business Profile nalogom. Za migraciju sa WordPress-a podesite odgovarajuća preusmerenja u starom sistemu ako nalog to omogućava; ovaj projekat nema pristup starom WordPress nalogu.

SEO priprema nije garancija prve strane ili prve pozicije na Google-u. Pozicioniranje zavisi od konkurencije, kvaliteta sadržaja, reputacije domena i daljeg rada. Obrazac ne šalje automatski obaveštenja na email vlasnika dok ih ne podesite u Netlify podešavanjima: Project configuration → Notifications → Form submission notifications. Pre javnog korišćenja proverite prijem zahteva i obaveštenja.

## Fotografije

Fotografije u `public/img` preuzete su sa korisnikovog originalnog sajta i tretirane kao ilustracije vrsta komada za otkup, ne kao prodajni katalog. Originalni nameštaj je ostao vizuelna osnova redizajna. Panoramska naslovna fotografija `hero-modernized.webp` napravljena je preko Netlify AI Gateway-a modelom `gemini-3.1-flash-image`, uz originalnu fotografiju zelene garniture kao referencu. Izmenjeni su ambijent, svetlo i kadriranje; galerija zadržava izvorne fotografije. Nema AI funkcionalnosti dostupne posetiocima niti dodatnih AI poziva tokom korišćenja sajta. Sva upotreba fotografija na stranici ide preko Netlify Image CDN-a.

## Provera

Tokom implementacije nisu pokretani lokalni build, razvojni server ili testovi. Automatski Netlify pipeline instalira zavisnosti i proverava build.
