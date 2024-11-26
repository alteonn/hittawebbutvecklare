import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Hur du väljer rätt webbutvecklare för ditt projekt',
    excerpt: 'En guide till att hitta den perfekta utvecklaren som matchar dina behov och projektets krav.',
    author: 'Anna Andersson',
    date: '2024-03-15',
    category: 'Guide',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    content: `
      Att välja rätt webbutvecklare för ditt projekt är ett avgörande beslut som kan påverka både projektets framgång och din verksamhets digitala närvaro. Här är en omfattande guide som hjälper dig genom urvalsprocessen.

      ## 1. Definiera dina projektbehov

      Innan du börjar söka efter en webbutvecklare är det viktigt att ha en tydlig bild av vad du vill uppnå. Överväg följande aspekter:

      - Projektets omfattning och komplexitet
      - Specifika tekniska krav
      - Budget och tidsram
      - Långsiktiga underhållsbehov

      ## 2. Utvärdera kompetens och erfarenhet

      När du har definierat dina behov, leta efter utvecklare med relevant erfarenhet:

      - Granska tidigare projekt och portfolio
      - Kontrollera tekniska färdigheter
      - Läs kundrecensioner och rekommendationer

      ## 3. Kommunikation och tillgänglighet

      En framgångsrik relation med din webbutvecklare bygger på god kommunikation. Säkerställ att utvecklaren:

      - Är lyhörd och tillgänglig
      - Kan förklara tekniska koncept på ett begripligt sätt
      - Har en tydlig process för projekthantering

      ## 4. Kostnader och avtalsvillkor

      Var noga med att diskutera och dokumentera:

      - Total projektkostnad och betalningsplan
      - Vad som ingår i priset
      - Support och underhåll efter lansering
      - Garantier och ansvar

      ## 5. Ta referenser

      Innan du fattar ditt slutgiltiga beslut:

      - Kontakta tidigare kunder
      - Be om att få se liknande projekt
      - Verifiera utvecklarens erfarenhet

      ## Sammanfattning

      Genom att noggrant överväga dessa aspekter ökar du dina chanser att hitta rätt webbutvecklare för ditt projekt. Kom ihåg att det billigaste alternativet inte alltid är det bästa - fokusera på att hitta en utvecklare som kan leverera kvalitet och värde för din investering.
    `
  },
  {
    id: 2,
    title: 'Trender inom webbutveckling 2024',
    excerpt: 'De senaste trenderna och teknologierna som formar framtidens webbutveckling.',
    author: 'Erik Eriksson',
    date: '2024-03-10',
    category: 'Trender',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    content: `
      ## Webbutvecklingens framtid

      2024 har varit ett spännande år för webbutveckling med flera nya trender och teknologier som formar hur vi bygger moderna webbapplikationer.

      ## Viktiga trender

      - AI-driven utveckling
      - WebAssembly
      - Edge Computing
      - Serverless Arkitektur
    `
  },
  {
    id: 3,
    title: 'Framgångsrika projekt: Från idé till lansering',
    excerpt: 'Lär dig av framgångsrika projekt och hur de navigerade genom utvecklingsprocessen.',
    author: 'Maria Nilsson',
    date: '2024-03-05',
    category: 'Fallstudie',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    content: `
      ## Framgångsrika webbprojekt

      I denna artikel tittar vi närmare på några framgångsrika webbprojekt och analyserar vad som gjorde dem lyckade.

      ## Nyckelfaktorer

      - Tydlig projektplanering
      - Agilt arbetssätt
      - Kontinuerlig kommunikation
      - Kvalitetssäkring
    `
  },
  {
    id: 4,
    title: 'Säkerhet i moderna webbapplikationer',
    excerpt: 'Bästa praxis för att säkra din webbapplikation mot moderna säkerhetshot.',
    author: 'Johan Johansson',
    date: '2024-03-01',
    category: 'Säkerhet',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    content: `
      ## Webbsäkerhet 2024

      Säkerhet är en kritisk aspekt av moderna webbapplikationer. Här är de viktigaste säkerhetsaspekterna att tänka på.

      ## Viktiga säkerhetsåtgärder

      - HTTPS implementation
      - Säker autentisering
      - XSS prevention
      - CSRF skydd
    `
  }
];