/* ============================================================
   ARCHI PILOTE RÉNOVATION — Contenu central
   Marque exploitée par IA RENOV (SASU), La Garenne-Colombes.
   Territoire : maison & pavillon en Île-de-France (92, 78, 91, 95, 77),
   gros œuvre en tête. Registre lexical strict : la marque pilote et
   accompagne, elle n'exécute ni ne facture aucun lot. Les entreprises
   partenaires contractent directement avec le client.
   ============================================================ */

export const SITE = {
  nom: "ARCHI PILOTE RÉNOVATION",
  baseline: "Rénovation tous corps d'état — Île-de-France",
  zone: "Île-de-France",
  structure: "ARCHI PILOTE RÉNOVATION est piloté par IA RENOV (SASU), RCS 889 976 387 Nanterre, 8 bis rue Gabriel Péri, 92250 La Garenne-Colombes.",
  tel: "+33 6 67 11 79 75",
  telAffiche: "06 67 11 79 75",
  whatsapp: "https://wa.me/33667117975", // même numéro que le tel — à confirmer si un numéro WhatsApp distinct existe
  email: "archipiloterenovation@gmail.com",
  horaires: [
    { jours: "Lundi — Vendredi", heures: "08h30 – 19h00" },
    { jours: "Samedi", heures: "Sur rendez-vous" },
  ],
  /* 05/09/2026 — FICHE TRUSTPILOT, ouverte par le client ce jour.
     L'URL a été VÉRIFIÉE en la chargeant, pas déduite du nom de domaine : la page
     répond 200, son titre est « Evaluer Archipiloterenovation » et elle renvoie
     identifyingName = "archipiloterenovation.com". C'est bien la fiche du client.
     Le prédécesseur de ce lien pointait vers .../archipiloterenovation.fr — un
     domaine que le client ne possède pas, qui ne résout pas, et dont l'URL
     Trustpilot répond 404. Il avait été retiré pour cette raison le 04/09 ;
     contrôle refait aujourd'hui, le .fr renvoie toujours 404.
     ⚠️ La fiche compte ZÉRO avis à ce jour. Aucune note, aucun nombre d'avis et
     aucune donnée structurée AggregateRating ne doivent donc apparaître sur le
     site : ce serait inventer une réputation. Seule l'invitation à déposer un avis
     est affichée. */
  trustpilotAvis: "https://fr.trustpilot.com/evaluate/archipiloterenovation.com",
  /* 07/09 — URL DE LA FICHE PUBLIQUE, enfin établie sur une base solide.

     Elle avait été écartée le 05/09 parce qu'invérifiable : Trustpilot protège tout son
     site par un pare-feu AWS et répond 403 sur /review/ pour n'importe quel domaine, y
     compris un domaine inventé de toutes pièces, testé pour s'en assurer. Impossible donc,
     par cette voie, de distinguer « la fiche existe » de « la fiche n'existe pas ».

     Ce qui a changé n'est pas l'accès à /review/ — il répond toujours 403 — mais la PREUVE
     que la fiche existe et sous quel nom. La page publique de dépôt d'avis, elle, répond
     200, et son JSON donne :
         identifyingName : "archipiloterenovation.com"
         businessId      : "6a9bdfd6294e62e75676d053"
         displayName     : "Archipiloterenovation"
     Or sur Trustpilot l'adresse d'une fiche publique est construite à partir de
     l'identifyingName : /review/<identifyingName>. L'URL ci-dessous n'est donc plus déduite
     du NOM DE LA MARQUE — c'est cette déduction-là qui avait produit le lien mort vers le
     .fr — mais reprise de l'identifiant que Trustpilot renvoie lui-même pour cette fiche.
     La marque sœur renovinterieurs.fr emploie exactement le même schéma d'URL.

     RÉSERVE MAINTENUE SUR LES DONNÉES STRUCTURÉES : cette URL n'entre PAS dans le `sameAs`
     du JSON-LD. Le sameAs est une déclaration d'identité auprès de Google, et il demande
     d'avoir constaté la page de ses yeux, ce que le pare-feu empêche toujours. Un lien
     qu'un visiteur peut suivre et un lien qu'on déclare à un moteur n'engagent pas la même
     chose. */
  trustpilotFiche: "https://fr.trustpilot.com/review/archipiloterenovation.com",
};

export const STATS = [
  { valeur: 48, prefixe: "", suffixe: "h", label: "pour recevoir les devis des entreprises", detail: "après la visite technique, sans attendre" },
  { valeur: 5, prefixe: "", suffixe: " j", label: "délai de visite technique", detail: "un pilote de projet se déplace vite" },
  { valeur: 8, prefixe: "", suffixe: "", label: "corps de métier pilotés", detail: "un seul interlocuteur, des entreprises qui contractent directement avec vous" },
  { valeur: 12, prefixe: "", suffixe: " mois", label: "de suivi après réception", detail: "en plus des garanties légales portées par chaque entreprise" },
];

/* ─── Fourchettes de prix — repères IDF 2026 (base de l'estimateur) ───
   "inclus" liste les options déjà comprises dans la gamme, pour éviter
   qu'un visiteur les paie une seconde fois en les cochant. */
export type Gamme = { id: string; nom: string; prixMin: number; prixMax: number; accroche: string; description: string; inclus: string[] };

export const GAMMES: Gamme[] = [
  { id: "rafraichissement", nom: "Rafraîchissement", prixMin: 250, prixMax: 450, accroche: "Redonner un coup d'éclat", description: "Peinture, sols simples, petites finitions.", inclus: [] },
  { id: "partielle", nom: "Rénovation partielle", prixMin: 600, prixMax: 900, accroche: "Cibler l'essentiel", description: "1 à 2 pièces refaites, plomberie et électricité partielles.", inclus: [] },
  { id: "complete", nom: "Rénovation complète", prixMin: 1000, prixMax: 1500, accroche: "Tout reprendre à neuf", description: "Toutes pièces, plomberie et électricité refaites, cuisine et salle de bain neuves.", inclus: ["cuisine", "sdb"] },
  { id: "hautdegamme", nom: "Haut de gamme", prixMin: 1500, prixMax: 2500, accroche: "Matériaux et finitions d'exception", description: "Matériaux premium, design sur-mesure, finitions architecte.", inclus: ["cuisine", "sdb"] },
];

/* Options renommées "plutôt que standard" pour ne jamais facturer deux fois
   un poste déjà compris dans la gamme choisie (cf. audit T3 §3.3). */
export const PIECES_OPTIONS = [
  { id: "cuisine", nom: "Cuisine sur-mesure plutôt que standard", majoration: 6000 },
  { id: "sdb", nom: "Étanchéité renforcée et niches maçonnées", majoration: 4500 },
  { id: "beton-cire", nom: "Béton ciré, en remplacement des revêtements courants", majoration: 3000 },
  { id: "isolation", nom: "Sortie de passoire énergétique F/G", majoration: 5500 },
  { id: "parquet", nom: "Parquet point de Hongrie plutôt que contrecollé", majoration: 2800 },
];

export const SERVICES = [
  {
    marque: "I", slug: "second-oeuvre", titre: "Second œuvre tous corps d'état", accroche: "Un seul interlocuteur",
    texte: "Plomberie, électricité, plâtrerie, peinture, revêtements, menuiserie. Un pilote unique qui tient l'interface entre vous et chaque entreprise, du diagnostic à la réception.",
    photo: "chantierRenovation",
    details: ["Plomberie & électricité aux normes", "Plâtrerie, cloisons, doublages", "Peinture & revêtements muraux", "Menuiserie intérieure sur-mesure"],
  },
  {
    marque: "II", slug: "cuisine-sur-mesure", titre: "Cuisine sur-mesure", accroche: "Conception sur plan",
    texte: "Cuisine dessinée sur plan, ou caissons standards habillés de façades sur-mesure. L'espace pensé pour l'usage réel, pas pour le catalogue. Vous achetez les éléments en direct, sans marge intermédiaire.",
    photo: "cuisineSurMesure",
    details: ["Conception 3D sur plan", "Caissons standards + façades sur-mesure", "Plan de travail au choix (bois, béton ciré, quartz)", "Électroménager encastré intégré"],
  },
  {
    marque: "III", slug: "salle-de-bain", titre: "Salle de bain étanche", accroche: "Étanchéité contrôlée avant carrelage",
    texte: "Joints époxy et nattes d'étanchéité systématiquement prescrits au cahier des charges. Une solution dont les fabricants annoncent une durée de vie sans commune mesure avec celle des joints ciment.",
    photo: "salleBainBeton",
    details: ["Joints époxy systématiquement prescrits", "Nattes d'étanchéité sous carrelage", "Douche italienne ou baignoire", "Ventilation anti-humidité"],
  },
  {
    marque: "IV", slug: "beton-cire", titre: "Béton ciré", accroche: "Finition monobloc",
    texte: "Sols, murs, douches italiennes, plans de travail. Une matière contemporaine, sans joint, qui unifie l'espace — à condition que le support le permette, ce qui se vérifie à la visite technique.",
    photo: "betonCireDetail",
    details: ["Sols et murs sans joint", "Douches italiennes en béton ciré", "Plans de travail cuisine & salle de bain", "Finition mate ou satinée au choix"],
  },
  {
    marque: "V", slug: "isolation-dpe", titre: "Isolation & DPE", accroche: "Sortir de la passoire énergétique",
    texte: "Diagnostic, isolation, VMC double flux, remplacement du chauffage, accompagnement sur MaPrimeRénov' et les CEE. Objectif visé sur ce type de programme : gagner une ou plusieurs classes DPE selon l'état de départ.",
    photo: "chantierIsolation",
    details: ["Diagnostic énergétique complet", "Isolation murs, combles, sols", "VMC double flux", "Accompagnement MaPrimeRénov' & CEE"],
  },
  {
    marque: "VI", slug: "gros-oeuvre", titre: "Gros œuvre & surélévation", accroche: "Piloté de A à Z",
    texte: "Mur porteur, surélévation, extension, charpente et toiture : pilotés avec un architecte et un bureau d'études structure partenaires. Toutes les démarches administratives prises en charge.",
    photo: "grosOeuvre",
    details: ["Ouverture de mur porteur", "Surélévation & extension", "Architecte & bureau d'études partenaires", "Démarches administratives incluses"],
  },
];

export const PROCESS = [
  { numero: "01", titre: "Premier échange", accroche: "Téléphone ou WhatsApp", texte: "Vous décrivez votre projet, votre budget et votre commune. On identifie tout de suite ce qui est faisable et ce qu'il faut vérifier sur place." },
  { numero: "02", titre: "Visite technique", accroche: "Sur place", texte: "Nous nous déplaçons, relevons les dimensions et identifions les contraintes réelles : structure, réseaux, copropriété, autorisations à prévoir." },
  { numero: "03", titre: "Devis des entreprises", accroche: "Sous 48h", texte: "Chaque entreprise partenaire vous remet son devis en son nom, poste par poste. Vous savez exactement ce qui est inclus avant de signer — et vous signez avec elle, directement." },
  { numero: "04", titre: "Chantier piloté", accroche: "Point d'avancement hebdomadaire", texte: "Tous les corps de métier sont pilotés par le même interlocuteur. Vous recevez un point d'avancement écrit chaque semaine, avec photos datées." },
  { numero: "05", titre: "Réception & suivi", accroche: "12 mois", texte: "Vous prononcez la réception, nous vous accompagnons ce jour-là et suivons les levées de réserves auprès des entreprises. Puis 12 mois de suivi, en plus des garanties légales." },
];

/* Ce sur quoi la marque s'engage — remplace un ancien bloc d'avis clients
   fictifs, incompatible avec une marque qui n'a pas encore de chantier réel
   (cf. audit T3 §3.1 : un faux avis contredisait la page réalisations). */
export const ENGAGEMENTS = [
  { titre: "Aucune marge sur vos matériaux", texte: "Vous achetez carrelage, parquet, robinetterie, appareillage et cuisine en direct, à votre nom, avec votre facture. Rien ne transite par nous." },
  { titre: "Les attestations avant le premier coup de marteau", texte: "Chaque entreprise vous remet son attestation d'assurance décennale en cours de validité avant démarrage. Nous vous indiquons quoi y vérifier." },
  { titre: "Nous n'émettons aucun devis de travaux", texte: "Les devis viennent des entreprises, en leur nom. Vous contractez avec elles, vous les payez directement. Notre rémunération est versée par elles, jamais par vous." },
];

export const FAQ = [
  { question: "Combien coûtent des travaux de rénovation en Île-de-France ?", reponse: "Comptez 250-450 €/m² pour un rafraîchissement, 600-900 €/m² pour une rénovation partielle, 1000-1500 €/m² pour une rénovation complète, 1500-2500 €/m² pour du haut de gamme. Fourchettes indicatives de marché observées en Île-de-France, arrêtées à août 2026 — le prix contractuel reste celui du devis remis par chaque entreprise partenaire. Notre estimateur en ligne donne une première fourchette adaptée à votre projet." },
  { question: "Combien de temps dure une rénovation complète de maison ?", reponse: "Pour une maison de 100 à 150 m² sans reprise de structure lourde, comptez généralement quatre à six mois de travaux, précédés d'un à trois mois de préparation. Dès qu'il y a extension, surélévation ou permis de construire, la phase administrative allonge le calendrier de plusieurs mois avant la première benne." },
  { question: "Pourquoi des joints époxy plutôt que des joints classiques ?", reponse: "Les joints ciment noircissent en quelques mois et se fissurent. Les joints époxy, systématiquement prescrits en salle de bain et cuisine, sont étanches, ne noircissent pas et affichent, selon les fabricants, une durée de vie sans commune mesure avec celle des joints ciment." },
  { question: "Pilotez-vous la rénovation de maisons classées DPE F ou G ?", reponse: "Oui, c'est l'une de nos spécialités. Nous pilotons le traitement des passoires énergétiques de bout en bout : diagnostic, isolation, VMC double flux, remplacement du chauffage, accompagnement MaPrimeRénov' et CEE. L'objectif est de gagner une ou plusieurs classes DPE selon l'état de départ." },
  { question: "Qui garantit les travaux, et pendant combien de temps ?", reponse: "Chaque entreprise partenaire porte les assurances correspondant aux activités qu'elle exécute : garantie décennale (10 ans), garantie biennale (2 ans sur les équipements), garantie de parfait achèvement (1 an). Les attestations sont vérifiées et remises avant tout démarrage de chantier." },
  { question: "Qui signe les devis de travaux, et qui je paie ?", reponse: "Chaque entreprise partenaire remet et signe son propre devis. Vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier — notre rôle est le pilotage et l'accompagnement du projet." },
  { question: "Comment se déroule un projet avec ARCHI PILOTE RÉNOVATION ?", reponse: "Cinq étapes : premier échange par téléphone ou WhatsApp, visite technique du bien, consultation des entreprises partenaires et mise en comparaison de leurs devis sur un périmètre commun, arbitrage du budget poste par poste, puis pilotage du chantier jusqu'à la levée des réserves. Les délais de remise des devis restent ceux de chaque entreprise consultée." },
];

/* 05/09 : « Devis entreprises sous 48 h » retiré du bandeau, et le délai de remise des
   devis retiré de la FAQ ci-dessus. Motif : ce délai n'est pas celui d'ARCHI PILOTE mais
   celui d'entreprises TIERCES, qui établissent leurs chiffrages selon leur propre charge de
   travail. La marque ne peut pas s'engager sur un fait qui ne dépend pas d'elle — et le
   visiteur, lui, lit un engagement. Le délai de réponse propre à la marque (« étude de
   projet sous 48 heures ouvrées ») est conservé ailleurs : celui-là, elle le tient. */
export const MARQUEE_ITEMS = ["Second œuvre", "Cuisine sur-mesure", "Salle de bain étanche", "Béton ciré", "Isolation & DPE", "Gros œuvre", "Surélévation", "Devis rendus comparables"];

/* Avant/après illustratif — nouvelle marque, pas de vrai chantier disponible.
   Territoire maison/pavillon : plus de vocabulaire "appartement" ni
   "haussmannien", qui appartient au territoire d'ARCHI RENOV. */
export const AVANT_APRES = [
  { id: "sejour", titre: "L'ampleur d'une transformation", avantLabel: "Avant — illustration (autre bien)", apresLabel: "Après — illustration (autre bien)", avant: "sejourAvant", apres: "sejourApres", texte: "Deux intérieurs d'illustration, pas un même chantier : ils montrent l'ampleur qu'un projet piloté peut viser. Cloisons, réseaux, sols et finitions se décident dans le bon ordre — c'est ce qui coûte le moins cher et ce qu'on rate le plus souvent." },
];

/* Articles de blog — contenu ORIGINAL écrit pour ARCHI PILOTE RÉNOVATION, territoire maison/pavillon. */
/* `schema: true` → l'image d'en-tête est un schéma pédagogique, pas une photo de chantier.
   Conséquence sur le rendu : elle est affichée EN ENTIER (object-contain) au lieu d'être
   recadrée au format du cadre, sinon le titre du schéma est coupé. Conséquence sur le
   fond : une mention « Schéma pédagogique » est affichée, pour qu'un dessin ne soit
   jamais pris pour une preuve de chantier. */
export type Article = { slug: string; titre: string; date: string; dateISO: string; excerpt: string; categorie: string; photo: string; schema?: true; corps: string[]; img2?: string; img2Caption?: string; img3?: string; img3Caption?: string };

export const ARTICLES: Article[] = [
  /* 03/09 : six articles ajoutés au titre du plan éditorial du dossier client
     (30 articles prévus, 12 en ligne) — n° 2, 3, 8, 14, 16 et 22. Aucune image
     nouvelle : uniquement des clés déjà déclarées dans lib-photos.ts, ouvertes
     une par une avant d'écrire leur légende. */
  /* 03/09 (2e lot) : six articles de plus — n° 6, 7, 10, 13, 23 et 25 du plan,
     ce qui porte le blog à 24 des 30 articles prévus. Mêmes règles : clés déjà
     déclarées, chaque image ouverte avant d'écrire sa légende, et vérification
     dHash de chaque candidate contre TOUTES les images déjà employées dans le
     blog. Trois candidates ont été écartées à ce titre :
       - chPoteauAcierPlatinePied  ≡ chPoteauAcierScelleGravats (d=0, img2 de
         « signes-mur-porteur ») — c'était pourtant la seule photo d'un pied de
         poteau, donc le meilleur visuel possible pour l'article surélévation ;
       - chRavalementArdoise ≡ chFacadeRavalementEchafaudage2 (d=3, img3 de
         « coproprietaire-autorisations ») — seule vue serrée d'une couverture
         ardoise du fonds, remplacée par la vue de rue du même chantier ;
       - chPortiqueAcierAngleGaine ≡ chPoutreAcierAngleSoudeVue1 (d=12, img2 de
         « ouvrir-mur-porteur »), lui-même identique à chPortiqueAcierAngleMurDegarni2.
     Articles sans img2/img3 : « isolation-interieure-erreurs-humidite » — les
     quatre autres photos de cette salle de bains sont soit déjà employées
     (chIsolationLaineUrsaVarioSdb sur l'article aides, chParVapeurSopremaMuralSdb
     en hero de l'article VMC), soit des recadrages de celles-ci. */
  /* 04/09 : les six derniers articles du plan éditorial du dossier client (30 articles
     prévus, 24 en ligne). Sujets restants : budget d'extension, ordre des travaux
     énergétiques, écart entre deux devis, achat direct des matériaux, projets refusés,
     dossier de fin de chantier. Tous administratifs ou méthodologiques : aucune photo
     du fonds ne les illustre honnêtement — les 244 clichés de chantier sont déjà tous
     employés et le fonds compte 75 groupes de quasi-doublons (docs/DOUBLONS-VISUELS.md).
     Chacun reçoit donc un schéma pédagogique dédié, dessiné pour l'article, en héros.
     Le héros n'a pas de figcaption dans app/blog/[slug]/page.tsx : la nature « schéma
     pédagogique » de ces images est portée par leur déclaration dans lib-photos.ts.
     Aucun de ces six articles ne porte d'img2/img3 : les seules photos réelles encore
     libres du fonds sont des ouvrages de menuiserie et deux chantiers ruraux (charpente
     de grange, livraison de coque de piscine) sans rapport avec ces sujets. */
  /* 07/09 — REPRISE DE CE CONSTAT. Il était faux : 86 photos déclarées dans lib-photos.ts
     n'étaient citées par AUCUNE page du site. Dix d'entre elles entrent aujourd'hui dans le
     blog, plus l'infographie de marque schemaNatureDesMurs, jamais employée elle non plus.
     Chaque image a été ouverte avant que sa légende soit écrite — les noms de fichiers
     mentent régulièrement dans ce fonds (chLivraisonPanneauPrefabGrue est une coque de
     piscine, chVasqueMarbreVanite n'a pas de marbre, refSalleBainMarbreNoir est une
     chambre, chArmoireVitreeVerreDepoli est stockée pivotée de 90°).
     Ce qui a été écarté et pourquoi — visages, enseignes, marques au premier plan,
     construction neuve, hors périmètre, doublons stricts d'images déjà en ligne — est
     détaillé dans le rapport de passe. Les emplacements restés vides le sont faute
     d'image honnête, pas faute d'avoir cherché : les articles administratifs
     (aides, DPE, autorisations, fondations, ordre énergétique, VMC, extension) n'ont
     aucune photo correspondante dans le fonds, et les seules photos d'acier, de façade
     et de démolition encore libres sont des recadrages de clichés déjà publiés. */
  {
    slug: "dossier-fin-de-chantier-pieces-a-reunir",
    titre: "Le dossier de fin de chantier : les pièces à réunir pendant les travaux",
    date: "3 septembre 2026", dateISO: "2026-09-03",
    categorie: "Réception",
    excerpt: "Ce dossier ne se constitue pas après la réception : chaque pièce se récupère au moment où elle existe, sans quoi elle devient introuvable.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaDossierFinChantier",
    schema: true,
    /* 07/09 : les deux emplacements laissés vides le 04/09 sont pourvus. Le constat de
       l'époque — « les 244 clichés de chantier sont déjà tous employés » — était faux :
       86 photos déclarées dans lib-photos.ts n'étaient citées par aucune page. Les deux
       retenues ici ont été ouvertes avant d'être légendées et répondent chacune à une
       ligne du texte : la nourrice pour « photographies des réseaux prises avant fermeture
       des murs », le caisson pour « références des matériaux, des teintes et de la
       quincaillerie ». */
    img2: "chNourriceLaitonVanneGenerale",
    img2Caption: "Nourrice de distribution en laiton fixée sur une plaque hydrofuge : chaque départ porte son étiquette et sa propre vanne d'isolement, la rouge commandant l'ensemble. C'est l'image à prendre avant que le doublage ne referme le mur. Chantier réel des équipes partenaires.",
    img3: "chCaissonTiroirsBoisAngle",
    img3Caption: "Intérieur d'un caisson sur mesure en panneau brut, tablettes et tiroirs sortis, charnières apparentes : les références de quincaillerie se relèvent à ce moment-là, pas trois ans plus tard. Chantier réel des équipes partenaires.",
    corps: [
      "Sur un chantier de particulier, aucun texte n'impose au maître d'ouvrage de constituer un dossier de fin de chantier : c'est une pratique, pas une formalité. Elle se justifie par une observation simple — les documents utiles trois ans plus tard sont ceux que personne ne pense à demander pendant que le chantier tourne. Une attestation d'assurance se réclame avant le démarrage d'une entreprise, pas après son départ. Une référence de teinte se relève sur le pot avant qu'il ne parte à la benne. Un plan des réseaux se photographie avant le doublage. Constituer ce dossier consiste donc moins à archiver qu'à récupérer chaque pièce au moment exact où elle existe encore.",
      "Quatre familles composent ce dossier. L'administratif d'abord : devis signés de chaque entreprise, avenants, factures et échéanciers, autorisations d'urbanisme délivrées le cas échéant, et, en copropriété, la décision d'assemblée générale et les échanges avec le syndic. Le technique ensuite : plans et relevés remis à jour de ce qui a réellement été exécuté, photographies des réseaux et des ouvrages prises avant fermeture des murs et des planchers, notes de calcul et pièces d'études lorsqu'un bureau d'études est intervenu, procès-verbaux d'essais et de mise en service quand ils existent. Les assurances ensuite : l'attestation de garantie décennale de chaque entreprise, en cours de validité à la date d'ouverture du chantier, et le contrat de dommages-ouvrage s'il a été souscrit. L'exploitation enfin : notices, certificats de garantie des équipements, références des matériaux, des teintes et de la quincaillerie, et les coordonnées des entreprises intervenues, lot par lot.",
      "S'y ajoutent les pièces produites le jour même : le procès-verbal de réception signé, la liste des réserves et, plus tard, l'écrit qui constate leur levée. Ces documents portent une date qui compte, puisque c'est la réception qui fait courir les garanties — parfait achèvement pendant un an, biennale sur les équipements dissociables pendant deux ans, décennale pendant dix ans. Sur un chantier où chaque entreprise contracte directement avec vous, le dossier se tient donc par lot : un intercalaire par entreprise, avec son devis, ses avenants, ses attestations, son procès-verbal et ses réserves. Le reste tient à la discipline : nommer les fichiers de façon lisible, dater les photos, conserver une copie numérique en plus du papier. Ce dossier sert ensuite à trois moments précis — une panne ou un désordre, où il faut retrouver qui a posé quoi et sous quelle garantie ; un chantier ultérieur, où percer sans le plan des réseaux revient à travailler à l'aveugle ; une revente, où il documente ce qui a réellement été fait.",
    ],
  },
  {
    slug: "reception-chantier-preparer-les-reserves",
    titre: "Réception de chantier : préparer les réserves sans improviser",
    date: "2 septembre 2026", dateISO: "2026-09-02",
    categorie: "Réception",
    excerpt: "La réception se prépare bien avant le jour J : une réserve utile désigne un emplacement et un défaut précis, jamais une impression générale.",
    photo: "chRangementChantierEncombre",
    img2: "chDetailTiroirMainOuverture",
    img2Caption: "Essai d'un tiroir pendant la pose : chaque ouvrant se manœuvre au fil du chantier, sinon il sera manœuvré pour la première fois le jour de la réception. Chantier réel des équipes partenaires.",
    img3: "chNicheArrondieRubanBleu",
    img3Caption: "Meuble d'entrée refermant le compteur et le tableau électrique, portes ouvertes en cours de pose : l'accès aux organes de coupe se vérifie avant que la menuiserie ne le referme. Chantier réel des équipes partenaires.",
    corps: [
      "La réception est l'acte par lequel vous acceptez l'ouvrage, avec ou sans réserves. Elle est écrite, datée, signée, et elle fait courir les garanties : parfait achèvement pendant un an, garantie biennale sur les équipements dissociables pendant deux ans, décennale pendant dix ans. Sur un chantier où chaque entreprise contracte directement avec vous, elle se prononce avec chacune d'elles, lot par lot, et non par une signature globale en fin de travaux.",
      "La préparation commence bien avant la visite. Relire le devis signé et ses avenants, rassembler les plans et les décisions prises en cours de chantier, et tenir depuis le premier jour une liste des points restés ouverts : c'est cette liste, et non la mémoire, qui évite d'en découvrir douze le jour J. La visite se fait de préférence à la lumière du jour, protections retirées et matériel replié, en testant réellement les équipements — ouvrants, robinetterie, écoulements, prises, éclairages, ventilation, chauffage. Les finitions se regardent sous plusieurs angles, en lumière rasante : c'est ainsi qu'apparaissent les défauts d'alignement, les reprises d'enduit et les manques de peinture.",
      "Une réserve utile décrit un emplacement et un défaut. « Rayure sur le montant droit du placard de la chambre 2, à hauteur de poignée » se lève ; « peinture à revoir » se discute pendant des mois. Chaque réserve gagne à être photographiée et assortie d'un délai de levée convenu par écrit. Il faut aussi distinguer la réserve de ce qui n'a jamais été commandé : un poste absent du devis n'est pas un défaut, c'est un avenant. Enfin, la réception est le bon moment pour récupérer ce qui devient introuvable ensuite — notices et garanties des équipements, références des matériaux et des teintes, attestations d'assurance des entreprises, et les photos des ouvrages prises avant fermeture des murs.",
    ],
  },
  {
    slug: "ordre-intervention-lots-renovation-complete",
    titre: "Rénovation complète : dans quel ordre faire intervenir les lots ?",
    date: "1 septembre 2026", dateISO: "2026-09-01",
    categorie: "Organisation de chantier",
    excerpt: "L'ordre des lots ne relève pas de l'habitude : on descend du plus destructif vers le plus fragile, et rien ne se referme avant que les réseaux soient posés.",
    photo: "chPlancherSolivesBeton1",
    img2: "chSousCouchePanneauxOSB",
    img2Caption: "Panneaux OSB posés en support de sol dans un appartement mis à nu, une gaine encore en attente au sol : le revêtement final ne vient qu'après les réseaux. Chantier réel des équipes partenaires.",
    img3: "chCouloirParquetChevronsPortesOuvertes",
    img3Caption: "Dernier lot en place : parquet posé à chevrons et portes peintes, une fois les murs, les réseaux et les enduits terminés. Chantier réel des équipes partenaires.",
    corps: [
      "L'ordre d'intervention des lots suit une règle simple : on descend du plus destructif vers le plus fragile, et on ne referme jamais un ouvrage avant que ce qui doit passer dedans soit posé. Une rénovation complète qui dérape ne dérape que rarement sur la technique — elle dérape sur l'enchaînement. Une cloison fermée trop tôt, un carrelage posé avant qu'une évacuation soit arrêtée, une cuisine choisie après le passage du plombier coûtent chacun une reprise que personne n'avait chiffrée.",
      "La séquence commence par les études et les repérages : relevé de l'existant, diagnostics, et repérage amiante avant travaux dans les bâtiments concernés. Viennent ensuite l'installation de chantier et les protections, puis la démolition et les déposes, la structure — ouvertures, reprises de charge, étaiement —, et la mise hors d'eau et hors d'air lorsque l'enveloppe est touchée. Les réseaux suivent : évacuations, alimentations, électricité, ventilation, chauffage. C'est seulement là que l'on referme, avec l'isolation, les doublages, les cloisons et les plafonds. Arrivent alors les chapes et ragréages, l'étanchéité des pièces humides, le carrelage, les enduits et sous-couches, puis les menuiseries intérieures, la cuisine, les sanitaires et l'appareillage. Sols fragiles, peintures de finition et plinthes ferment la marche, avant nettoyage, mise en service et réception.",
      "Ce qui casse cet ordre se décide presque toujours en amont, pas sur le chantier. Le plan de cuisine et le calepinage de la salle de bain doivent être arrêtés avant le passage des réseaux, faute de quoi on repique dans des murs déjà fermés. Les commandes à long délai — menuiseries sur mesure, cuisine, carrelage, appareils — se lancent bien avant leur date de pose. Et certains temps ne se compriment pas : séchage d'une chape, séchage d'un enduit, instruction d'une autorisation. Tenir un planning consiste moins à presser les entreprises qu'à tenir ces jalons-là, en gardant l'interface entre des entreprises qui contractent chacune directement avec vous.",
    ],
  },
  {
    slug: "ipn-hea-heb-choix-profile",
    titre: "IPN, HEA ou HEB : ce que change réellement le choix du profilé",
    date: "31 août 2026", dateISO: "2026-08-31",
    categorie: "Structure",
    excerpt: "Le profilé ne se choisit pas au catalogue mais au calcul. Ce que vous voyez changer, c'est la retombée sous plafond, les appuis et le travail de reprise autour.",
    photo: "chPoutreAcierProfilVueLongue",
    img2: "chPoutreAcierMurDegarni",
    img2Caption: "Tête de poteau et platine soudée sous la poutre, maçonnerie mise à nu autour de l'appui : c'est l'appui, et pas la poutre seule, qui décide de la descente de charges. Chantier réel des équipes partenaires.",
    img3: "chPortiqueAcierAngleFenetre",
    img3Caption: "Portique acier en place dans l'angle d'une pièce, poutre en tête et poteau en descente, avant habillage et finitions. Chantier réel des équipes partenaires.",
    corps: [
      "IPN, HEA et HEB désignent trois familles de profilés en acier laminé, pas trois niveaux de qualité. Dans le langage courant, « IPN » est devenu le nom générique de toute poutre métallique posée au-dessus d'une ouverture, y compris quand la pièce réellement mise en œuvre n'en est pas un. Le profilé adapté à votre ouverture est le résultat d'un calcul mené par un bureau d'études structure, à partir de la portée, des charges reprises et de la déformation admissible. Il ne se choisit ni sur l'habitude d'une entreprise, ni sur un forum.",
      "Ce qui distingue ces familles tient à la forme de la section. L'IPN est un profil en I aux ailes inclinées, hérité des séries anciennes ; l'IPE reprend la même silhouette avec des ailes parallèles. Les HEA, HEB et HEM forment la famille des profils en H, à ailes larges et parallèles, avec une matière répartie autrement. À hauteur égale, un HEB est plus massif qu'un HEA et reprend davantage de charge, mais il pèse plus lourd, se manipule plus difficilement et coûte plus cher à mettre en œuvre. Deux contraintes tranchent presque toujours : la portée et les charges à reprendre d'un côté, la hauteur disponible sous plafond de l'autre. C'est cette seconde contrainte qui explique qu'on préfère parfois un profil large et bas à une poutre haute qui mangerait la hauteur de passage.",
      "Le profilé n'est qu'une pièce d'un système. Se vérifient avec au moins autant d'attention : les appuis — poteaux, platines, semelles de répartition —, la descente de charges jusqu'à un support capable de la reprendre, l'étaiement pendant la dépose du mur, et le calage en tête de poutre, qui conditionne le transfert réel des charges de la maçonnerie vers l'acier. Un profil correctement dimensionné mais mal appuyé reste un mauvais système. Tout cela disparaît ensuite sous l'habillage : la note de calcul, les références des pièces et les photos datées de la pose se conservent, parce qu'elles ne seront plus vérifiables une fois le plâtre refermé.",
    ],
  },
  {
    slug: "photos-techniques-avant-de-fermer-les-murs",
    titre: "Les photos techniques à conserver avant de fermer les murs",
    date: "30 août 2026", dateISO: "2026-08-30",
    categorie: "Suivi de chantier",
    excerpt: "Une fois le doublage refermé, tout ce qui passe derrière devient invisible. Quelques minutes de photos par pièce évitent de percer au hasard pendant des années.",
    photo: "chPlomberieMulticoucheDistributionMurale",
    img2: "chElectriciteFauxPlafondFaisceaux",
    img2Caption: "Faisceaux de gaines et de conducteurs regroupés le long d'un mur, ossature de faux plafond déjà en place : cet état ne sera plus visible une fois les plaques posées. Chantier réel des équipes partenaires.",
    img3: "chNourriceManometreEvacuationPvc",
    img3Caption: "Nourrice de distribution équipée d'un manomètre et réseau d'évacuation en PVC monté à côté : c'est sur ce montage que se fait l'essai de mise en pression, et c'est à ce moment-là qu'il faut le photographier. Chantier réel des équipes partenaires.",
    corps: [
      "Une fois les plaques posées, la chape coulée, le carrelage collé et les peintures faites, tout ce qui passe dans les murs et les planchers disparaît. Le jour où quelqu'un perce pour fixer un radiateur, un miroir, une patère ou un support de téléviseur, la seule information fiable est une photo prise avant fermeture. Il en va de même à la revente, en cas de sinistre, ou lorsqu'une autre entreprise reprend un lot des années plus tard. Ces images ne sont pas des souvenirs de chantier : ce sont des documents, et elles ne coûtent rien tant qu'on les prend au bon moment.",
      "Encore faut-il qu'elles soient exploitables. Procédez pièce par pièce et mur par mur, toujours dans le même ordre, avec d'abord une vue d'ensemble du mur — pour pouvoir se situer — puis les détails. Chaque photo doit contenir une référence de mesure : un mètre déroulé depuis un point fixe, une règle posée le long du réseau, un trait de niveau. Une photo sans repère ne donne aucune distance et ne sert à rien. Précisez ce point fixe dans le nom du fichier ou sur un croquis joint — « depuis l'angle gauche », « depuis le sol brut » —, car le niveau du sol fini n'existe pas encore au moment de la prise de vue. Nommez et datez : pièce, mur, lot. Et prenez-les en lumière du jour ou avec un éclairage de chantier, sans ombre portée en travers du mur.",
      "Ce qu'il faut photographier, sans prétendre à l'exhaustivité : les alimentations d'eau chaude et froide, leur nature — cuivre, multicouche, PER — et leur tracé ; les nourrices, leurs départs et ce que chaque vanne isole ; les évacuations avec leurs diamètres, leurs piquages et leurs tampons de visite avant qu'ils ne soient recouverts ; l'électricité, c'est-à-dire les gaines, les boîtes d'encastrement, les boîtes de dérivation — dont l'emplacement doit rester accessible —, les circuits spécialisés et le tableau, rangée par rangée ; le réseau de ventilation et l'emplacement de sa trappe de visite ; les renforts et fixations posés dans la cloison en prévision d'un meuble suspendu, d'une barre d'appui ou d'un écran ; l'ouvrage d'étanchéité des pièces humides avec ses points singuliers, avant carrelage ; enfin la chape, son épaisseur et, s'il existe, le tracé du plancher chauffant — celui-là n'est pas négociable. L'essai de mise en pression des réseaux mérite sa propre photo, manomètre lisible. Rassemblez le tout, avec les fiches techniques et les attestations d'assurance, dans le dossier de fin de chantier : c'est la seule version des réseaux qui sera encore vraie longtemps après la réception.",
    ],
  },
  {
    slug: "extension-ou-surelevation-maison",
    titre: "Extension ou surélévation : comment choisir selon votre terrain",
    date: "29 août 2026", dateISO: "2026-08-29",
    categorie: "Extension",
    excerpt: "Deux façons de gagner de la surface sans déménager, mais deux logiques de faisabilité radicalement différentes : le terrain tranche avant le budget.",
    photo: "chCharpenteMaisonEchafaudage",
    img2: "chSurelevationBrique",
    img2Caption: "Élévation en briques monomur, plancher bois de l'étage posé et isolation de rampant en cours. Chantier réel des équipes partenaires.",
    img3: "chCharpenteParpaingConstruction",
    img3Caption: "Extension en parpaings, charpente bois posée avant couverture. Chantier réel des équipes partenaires.",
    corps: [
      "Agrandir une maison sans déménager passe par deux voies très différentes : construire au sol, en extension, ou construire en hauteur, en surélévation. Le choix ne se décide pas sur un coup de cœur esthétique : il dépend d'abord de ce que le terrain et le bâti existant permettent réellement.",
      "L'extension exige une emprise au sol disponible et compatible avec le plan local d'urbanisme, ainsi qu'une étude de sol préalable pour dimensionner des fondations adaptées. La surélévation, elle, dispense de terrain supplémentaire mais impose un diagnostic de portance des murs existants par un ingénieur structure : un mur construit pour porter une toiture ne porte pas automatiquement un étage habitable de plus.",
      "Dans les deux cas, une déclaration préalable ou un permis de construire est nécessaire selon la surface créée, et le délai administratif — souvent sous-estimé — conditionne le calendrier bien avant le premier coup de pioche. Le diagnostic de faisabilité, réalisé en amont avec un architecte ou un ingénieur structure partenaire, évite d'engager un budget sur un projet qui ne passera pas l'instruction du dossier.",
    ],
  },
  {
    slug: "isolation-interieure-erreurs-humidite",
    titre: "Isolation intérieure : les erreurs qui créent humidité et inconfort",
    date: "28 août 2026", dateISO: "2026-08-28",
    categorie: "Isolation & DPE",
    excerpt: "Une isolation par l'intérieur mal posée ne se voit pas davantage qu'une bonne. Ce sont toujours les mêmes points — continuité, points singuliers, ventilation — qui produisent condensation et parois froides.",
    photo: "chPlacoHydroSopremaFenetreSdb",
    corps: [
      "Isoler par l'intérieur déplace la température dans l'épaisseur du mur : la maçonnerie, désormais placée du côté froid de l'isolant, reste froide toute la saison de chauffe. La vapeur d'eau produite dans le logement — cuisine, douches, respiration, linge qui sèche — ne doit donc pas pouvoir l'atteindre. Deux conditions le permettent : une gestion continue de la vapeur et de l'air côté chaud, assurée par un pare-vapeur ou une membrane frein-vapeur selon le système retenu, et une ventilation qui évacue réellement cette vapeur. Si l'une des deux manque, la condensation se produit à l'intérieur de la paroi, là où personne ne la voit — jusqu'à ce que des traces apparaissent en plinthe, dans les angles ou derrière un meuble.",
      "Les erreurs se répètent d'un chantier à l'autre. Isoler sans ventiler, ou supprimer les entrées d'air en changeant les menuiseries, arrive en tête. Vient ensuite la membrane discontinue : lés non recouverts, adhésif qui n'est pas celui du système, absence de collage périphérique en pied, en tête, dans les angles et autour des menuiseries. Puis les traversées non traitées — boîtiers électriques, gaines, canalisations, points de fixation — alors qu'un vide technique entre la membrane et la plaque permet de faire passer l'électricité sans jamais la percer. Les ponts thermiques oubliés produisent le même symptôme : isoler la partie courante et laisser nus les tableaux de fenêtres, les coffres de volets, les appuis, les seuils, les retours de refends ou les rives de plancher crée une bande froide exactement là où la condensation se dépose. S'y ajoutent l'isolant mal rempli — laine tassée, joints ouverts, lame d'air parasite derrière le panneau — et le cas le plus coûteux : doubler un mur déjà humide. Une remontée capillaire, une infiltration en façade ou une descente d'eau pluviale défectueuse ne s'arrêtent pas parce qu'on a posé un isolant devant ; elles sont simplement enfermées. La cause se traite avant, pas après. Sur un mur ancien perspirant — pierre, brique pleine, torchis —, la capacité de la paroi à sécher fait partie du choix du système et se vérifie avec un professionnel compétent, plutôt qu'en transposant une solution vue ailleurs.",
      "L'ordre des opérations résume presque tout : traiter les causes d'humidité, vérifier la ventilation, puis seulement isoler et refermer. Pendant la pose, la séquence est tout aussi stricte — isolant en remplissage, membrane, adhésifs et collages du même système, réservations électriques, puis fermeture. Avant de poser la plaque, photographiez la membrane, les recouvrements et chaque traversée traitée : ce sont précisément les points qui ne seront plus contrôlables. Conservez les références du système complet ainsi que les fiches techniques. Enfin, le résultat se juge honnêtement au premier hiver et pas en juin : parois froides au contact, condensation sur les vitrages, traces dans les angles, air qui stagne dans une pièce. Ces signes-là se lisent au moment le plus froid, et ils indiquent presque toujours l'un des points de la liste ci-dessus.",
    ],
  },
  {
    slug: "ouvrir-mur-porteur-copropriete-assemblee",
    titre: "Ouvrir un mur porteur en copropriété : les pièces à préparer avant l'assemblée",
    date: "27 août 2026", dateISO: "2026-08-27",
    categorie: "Copropriété",
    excerpt: "En immeuble, la structure ne relève pas de votre seule décision : ce qui fait avancer le dossier, c'est son contenu, remis au syndic avant l'envoi de la convocation.",
    /* 03/09 : le héros était chDemolitionLattisPlatreOuverture — c'est LE MÊME CLICHÉ que
       le héros de « signes-mur-porteur-avant-travaux » (chDemolitionGravatsChantier) :
       même perforateur au même endroit sur les gravats, même câble enroulé, même papier
       peint, l'un simplement plus large que l'autre. Les deux articles s'affichaient sur
       la même ligne de la grille du blog. Le contrôle dHash ne les rapproche pas (d=33,
       le recadrage fausse l'empreinte) : c'est la comparaison à l'œil qui a tranché.
       Le portique acier passe en héros — il illustre mieux le sujet, l'ouvrage tel
       qu'autorisé puis exécuté — et la photo de démolition sort de cet article. */
    photo: "chPoutreAcierAngleSoudeVue1",
    corps: [
      "Un mur porteur situé à l'intérieur d'un lot privatif reste, dans la plupart des règlements de copropriété, un élément de structure rattaché aux parties communes. Son ouverture n'est donc pas une décision privée : elle demande une autorisation votée en assemblée générale. Ce qui fait avancer un dossier n'est pas l'insistance auprès du syndic, mais sa complétude — un dossier incomplet est renvoyé à l'assemblée suivante, c'est-à-dire le plus souvent à l'année suivante.",
      "Les pièces attendues varient d'un règlement et d'un syndic à l'autre : la première démarche consiste à en demander la liste par écrit. Reviennent presque toujours les plans de l'existant et du projet, un descriptif technique de l'ouverture précisant la méthode, l'étaiement et le phasage, l'étude d'un bureau d'études structure avec la descente de charges et le profilé retenu, les attestations d'assurance décennale et de responsabilité civile des entreprises appelées à intervenir, le planning et les horaires envisagés, enfin les modalités d'accès, de protection des parties communes et d'évacuation des gravats. Certaines copropriétés demandent en plus l'intervention d'un contrôleur technique, ou l'engagement de remettre un rapport en fin de travaux. La majorité applicable au vote dépend de la nature exacte des travaux et se vérifie avec le syndic, jamais sur une règle générale trouvée en ligne.",
      "Le calendrier se lit à l'envers. La demande doit parvenir au syndic assez tôt pour être inscrite à l'ordre du jour, lui-même arrêté avant l'envoi de la convocation, dont le délai est encadré par la loi. Transmise après cet envoi, elle ne sera pas examinée : il faudra attendre l'assemblée suivante, ou en provoquer une extraordinaire — dont les frais retombent généralement sur le demandeur. D'ici là, rien ne se commande et rien ne se démolit. Une fois l'autorisation obtenue, le procès-verbal rejoint le dossier de chantier avec l'étude de structure et les photos de l'ouvrage avant habillage : ce sont exactement les pièces qu'on vous redemandera des années plus tard, à la revente comme en cas de sinistre.",
    ],
  },
  {
    slug: "planning-chantier-commandes-a-lancer-en-premier",
    titre: "Planning : quelles commandes lancer en premier ?",
    date: "26 août 2026", dateISO: "2026-08-26",
    categorie: "Organisation de chantier",
    excerpt: "Un planning ne tient pas parce qu'on presse les entreprises, mais parce que les décisions à long délai ont été prises assez tôt. Voici lesquelles, et dans quel ordre.",
    photo: "chElectriciteFauxPlafondRailsCablage",
    img2: "chDressingNoyerCarcassesVides",
    img2Caption: "Caissons plaqués noyer montés dans une pièce moulurée, portes et panneaux encore posés au sol : la menuiserie sur mesure se fabrique en atelier pendant que le chantier avance — à condition d'avoir été commandée à temps. Chantier réel des équipes partenaires.",
    img3: "chParquetChevronsCacheRadiateur",
    img3Caption: "Parquet chêne à chevrons posé et cache-radiateur à lames en place : un sol de ce type se commande longtemps avant sa date de pose, et se pose parmi les tout derniers lots. Chantier réel des équipes partenaires.",
    corps: [
      "Sur une rénovation, ce qui arrête un chantier est rarement la main-d'œuvre : c'est ce qui n'est pas encore arrivé, ou ce qui n'est pas encore décidé. Deux horloges tournent en parallèle. Celle des travaux — démolition, structure, réseaux, cloisons, finitions — et celle des approvisionnements : études, validation, fabrication, livraison. La méthode consiste à remonter le temps depuis chaque date de pose : on retranche le délai de fabrication et de livraison annoncé, on ajoute une marge, et on obtient une date limite de décision. Tout ce qui est arrêté après cette date décale le chantier, quel que soit le nombre de compagnons présents.",
      "Les commandes se classent donc par date limite de décision, et non par ordre de pose. En premier viennent les études et les autorisations : bureau d'études structure, déclaration préalable ou permis, et en copropriété l'inscription à l'ordre du jour d'une assemblée — elles conditionnent tout le reste. Viennent ensuite les ouvrages qui se mesurent sur place puis se fabriquent : menuiseries extérieures sur mesure, structure métallique, escalier, verrière. Troisième famille, moins évidente : le plan de cuisine et le calepinage de la salle de bain. Ils ne se posent pas tôt, mais l'implantation des réseaux en dépend ; les arrêter tard oblige à repiquer dans un mur déjà fermé. Suivent les menuiseries intérieures, dressings et agencements sur mesure, dont le temps d'atelier est réel. Puis les revêtements — carrelage, pierre, parquet — pour lesquels comptent la disponibilité de la référence, l'homogénéité des lots et des bains de teinte, et une quantité calculée chutes comprises : une référence arrêtée par le fabricant en cours de chantier est un classique. Enfin les appareils — électroménager, sanitaires, robinetterie, radiateurs, groupe de ventilation : l'appareil lui-même peut arriver tard, mais sa fiche technique doit être connue avant le passage des réseaux, faute de quoi on pose des attentes au mauvais endroit.",
      "Tenir tout cela suppose une seule liste, tenue à jour avec le chantier et pas à côté. Pour chaque poste : la référence exacte, le fournisseur, le délai annoncé, la date limite de décision, la date de livraison confirmée et le lieu de stockage. Ce dernier point se sous-estime : ce qui arrive trop tôt doit être stocké au sec, à plat, à l'abri des chocs et du vol — et dans un logement occupé, la place manque presque toujours. Prévoyez aussi qui réceptionne les marchandises, qui les contrôle à l'arrivée et sous quel délai les réserves de transport doivent être émises : un panneau livré rayé se conteste dans les heures qui suivent, pas trois semaines plus tard. Certains temps, enfin, ne se compriment jamais — séchage d'une chape, séchage des enduits, acclimatation d'un parquet bois avant pose, instruction d'une autorisation. Un planning honnête les affiche au lieu de faire semblant de les absorber.",
    ],
  },
  {
    slug: "signes-mur-porteur-avant-travaux",
    titre: "Mur porteur : les signes qui doivent alerter avant travaux",
    date: "25 août 2026", dateISO: "2026-08-25",
    categorie: "Structure",
    excerpt: "Aucun indice ne suffit seul pour juger si un mur porte le bâtiment : voici ceux qu'il faut recouper avant de valider un devis d'ouverture.",
    /* 07/09 : l'en-tête passe au SCHÉMA DE MARQUE « Vérifier la nature des murs avant tout
       devis », qui était déclaré dans lib-photos.ts sans être employé nulle part. Motif :
       son sous-titre est mot pour mot la thèse du premier paragraphe — « un mur épais n'est
       pas toujours porteur, un mur fin peut avoir un rôle structurel » — et son encart
       ATTENTION dit « l'épaisseur et le son au tapotement sont des indices, pas des
       preuves », c'est-à-dire le titre de l'article. La photo de cloison ouverte n'est pas
       perdue : elle descend en img3, l'emplacement laissé vide le 05/09. L'article gagne
       donc une image au lieu d'en changer une. */
    photo: "schemaNatureDesMurs",
    schema: true,
    /* 05/09 : ...ScelleGravats est le MÊME FICHIER que chPoteauAcierPlatinePied. */
    img2: "chPoteauAcierPlatinePied",
    img2Caption: "Pied de poteau acier sur platine, scellé dans le sol ouvert pour la reprise de charge. Chantier réel des équipes partenaires.",
    /* 05/09 : img3 (chDemolitionLattisPlatreChantier1) retirée. Deux raisons, vérifiées
       image ouverte : c'est le MÊME mur en pan de bois que l'en-tête de cet article
       (chDemolitionGravatsChantier en est un cadrage plus serré), et c'est le MÊME
       fichier que l'img2 de « coproprietaire-autorisations-avant-travaux », qui le
       montre sous le nom chDemolitionOuvertureCouloir. Trois vues d'une seule cloison
       sur deux articles : c'est exactement la répétition signalée par le client.
       Aucune autre photo du fonds ne documente un sondage de mur — voir rapport.
       07/09 : l'emplacement est repris par chDemolitionGravatsChantier elle-même,
       descendue de l'en-tête. Le constat du 05/09 tient toujours — cette cloison n'existe
       qu'en un seul exemplaire utilisable —, elle occupe simplement l'autre place. */
    img3: "chDemolitionGravatsChantier",
    img3Caption: "Cloison ouverte jusqu'à son ossature : lattis et bois de structure apparaissent sous le plâtre tombé au sol. C'est seulement à ce moment-là que la nature réelle du mur se lit. Chantier réel des équipes partenaires.",
    corps: [
      "Un mur épais n'est pas automatiquement porteur, et un mur fin en briques ou en carreaux de plâtre n'est pas automatiquement sans rôle structurel. C'est l'erreur la plus fréquente chez qui juge « à l'œil » avant travaux.",
      "Quatre indices se recoupent : l'épaisseur du mur, son alignement vertical avec un mur de l'étage du dessous ou du dessus, le sens de pose des solives ou poutrelles du plancher, et sa position par rapport aux façades et aux refends principaux du bâtiment. Pris isolément, chacun n'est qu'une présomption ; ensemble, ils orientent un diagnostic fiable.",
      "Quand le doute persiste, un sondage ponctuel dans une cloison ou un doublage permet d'observer la maçonnerie réelle sans engager une ouverture complète. Pour tout ouvrage engageant la stabilité de plusieurs niveaux, l'avis d'un ingénieur structure partenaire indépendant est sollicité avant toute validation de devis — cette étape, perçue comme une dépense évitable, protège en réalité le budget global du chantier.",
    ],
  },
  {
    slug: "renovation-toiture-reparer-traiter-remplacer",
    titre: "Rénovation de toiture : réparer, traiter ou remplacer ?",
    date: "24 août 2026", dateISO: "2026-08-24",
    categorie: "Toiture",
    excerpt: "Trois réponses possibles à la même fuite. Ce qui tranche n'est pas l'âge de la couverture, mais l'état du support et de la charpente sous les ardoises ou les tuiles.",
    /* 05/09 : l'en-tête était chFacadeRavalementVillage — une FAÇADE sous échafaudage,
       pour un article qui traite de la TOITURE. La remplaçante montre le sujet réel :
       une couverture en ardoise en cours de réfection, souches de cheminée et fenêtre de
       toit visibles, échafaudage monté jusqu'à l'égout du toit. Elle n'était affichée
       nulle part, et son retrait ramène au passage chFacadeRavalementVillage de trois
       pages à deux. */
    photo: "chRavalementArdoise",
    img2: "chCharpenteInterieur",
    /* 05/09 : légende reprise après ouverture de l'image. Le bois y est visiblement NEUF
       (clair, sans altération, assemblages frais) : écrire « charpente ancienne » à côté
       aurait laissé croire que la photo montrait le diagnostic dont parle le paragraphe.
       La légende dit maintenant ce qu'on voit, et fait le lien explicitement. */
    img2Caption: "Charpente en bois massif neuve, encore entièrement apparente : poteaux, contrefiches, pannes et solives. Sur une charpente ancienne, ce sont ces mêmes pièces que le diagnostic examine une par une. Chantier réel des équipes partenaires.",
    corps: [
      "Trois niveaux d'intervention répondent au même symptôme. La réparation ponctuelle traite ce qui est identifié et limité : quelques ardoises ou tuiles cassées ou glissées, un solin, une reprise en pied de souche, une gouttière percée. L'entretien et le traitement portent sur l'ensemble sans déposer la couverture : nettoyage et démoussage, reprise des points singuliers, traitement de la charpente contre les insectes à larves xylophages ou les champignons lignivores lorsque le diagnostic le justifie. Le remplacement, enfin, consiste à déposer la couverture, à réviser ou changer le support — liteaux, voliges —, à poser un écran de sous-toiture, éventuellement à isoler, puis à recouvrir. La question n'est donc pas « la toiture a-t-elle un certain âge » mais « par où l'eau entre-t-elle, depuis quand, et qu'a-t-elle déjà abîmé ».",
      "Le diagnostic commence par l'intérieur, parce que c'est là que les dégâts se lisent. Sous combles, en lumière rasante : traces d'écoulement sur la charpente et sur l'isolant, auréoles, bois noirci, sciure au pied des pièces, échauffures. Le bois se sonde à la pointe : une pièce saine résiste, une pièce attaquée s'enfonce. On regarde ensuite l'état des liteaux et des fixations — une couverture ne tient que par ce sur quoi elle est clouée ou crochetée. L'extérieur vient après, depuis un accès sûr : état des ardoises ou des tuiles (délitement, gélivure, glissement), faîtage, arêtiers, noues, rives, égout, solins et souches de cheminée, châssis de toit, chéneaux et descentes. Une couverture cède presque toujours par ses points singuliers avant de céder en partie courante. Le verdict en découle : couverture globalement saine et charpente en bon état, on répare ; matériau en fin de vie ou support qui ne tient plus les fixations, on remplace, car reposer une couverture neuve sur un support fatigué revient à payer deux fois le même échafaudage.",
      "Plusieurs éléments extérieurs à la technique pèsent sur la décision. En copropriété, la toiture est une partie commune : les travaux relèvent d'une décision collective, dont les modalités se vérifient avec le syndic. L'urbanisme peut imposer le matériau, la teinte, la pente ou le type de châssis, et un avis de l'architecte des Bâtiments de France peut être requis en secteur protégé — une couverture en ardoise ne se remplace pas par autre chose sans l'avoir vérifié. L'accès est un poste à part entière : échafaudage, protections, parfois autorisation d'occupation du domaine public, et pour un immeuble de rue, la gestion des passants. Le calendrier compte aussi : on n'ouvre pas une toiture sans plan de mise hors d'eau ni fenêtre météo. Enfin, si la couverture est déposée, c'est le moment — et souvent le seul — de trancher l'isolation des rampants, la ventilation de la sous-face et la reprise des souches : y revenir plus tard, c'est remonter un échafaudage. Photos avant et après, factures et attestation d'assurance décennale du couvreur se rangent avec le dossier : pour une toiture, ce sont exactement les pièces qu'on vous redemandera.",
    ],
  },
  {
    slug: "deux-devis-meme-chantier-ecart-de-prix",
    titre: "Deux devis pour le même chantier : d'où vient réellement l'écart",
    date: "23 août 2026", dateISO: "2026-08-23",
    categorie: "Devis",
    excerpt: "Un écart entre deux devis ne dit rien du sérieux des entreprises tant qu'on n'a pas identifié ce que chacune a réellement chiffré.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaDeuxDevisEcart",
    schema: true,
    /* 07/09 : deux photos libres du fonds viennent illustrer les deux causes d'écart que
       le texte cite nommément — la gamme des fournitures, et un poste présent d'un côté
       et absent de l'autre. Les deux ont été ouvertes avant d'être légendées. */
    img2: "chCuisineNoireSkylightFinie",
    img2Caption: "Cuisine achevée sous rampant : façades claires, plan de travail sombre, îlot central et fenêtre de toit. La gamme des fournitures retenue pèse à elle seule une part de l'écart entre deux chiffrages. Chantier réel des équipes partenaires.",
    img3: "chVerriereInterieurePentagonale",
    img3Caption: "Verrière intérieure à cadre bois ouverte dans une cloison, pots de peinture encore au sol : un poste comme celui-ci peut figurer dans un devis et pas dans l'autre — deux totaux cessent alors d'être comparables. Chantier réel des équipes partenaires.",
    corps: [
      "Deux entreprises visitent le même logement, entendent la même demande, et rendent deux chiffrages qui ne se ressemblent pas. Le réflexe est de conclure que l'une est chère et l'autre honnête. C'est rarement la bonne lecture : dans la majorité des cas, les deux devis ne portent pas sur le même ouvrage. Comparer deux totaux n'a de sens qu'après avoir vérifié que le périmètre, les hypothèses techniques et les fournitures sont identiques de part et d'autre — c'est-à-dire après avoir reconstitué, ligne à ligne, ce que chacun a mis dedans et ce qu'il a laissé dehors.",
      "Le premier écart tient au périmètre. Les postes qui disparaissent le plus souvent d'un chiffrage sont ceux qui ne se voient pas sur le résultat : dépose et évacuation en déchèterie, protections des ouvrages conservés et des parties communes, installation de chantier, reprises et raccords autour de l'ouvrage, nettoyage de fin de chantier, et parfois l'échafaudage ou la nacelle. Le deuxième tient aux hypothèses techniques. Sur une même salle de bain, l'un prévoit la dépose complète du support et un ragréage, l'autre pose sur l'existant ; l'un chiffre un système d'étanchéité sous carrelage, l'autre s'en tient à un carrelage collé ; l'un reprend le tableau électrique, l'autre repique sur le circuit en place. Ces choix ne se lisent pas dans le total, seulement dans le descriptif. Le troisième tient aux fournitures : gamme et provenance retenues, et surtout la mention « fourniture et pose » ou « pose seule », qui suffit à elle seule à expliquer un écart considérable entre deux propositions.",
      "Restent trois causes moins visibles. Les aléas provisionnés : une entreprise qui a déjà ouvert des planchers dans le même type d'immeuble intègre une part d'inconnu que son concurrent découvrira en cours de chantier, sous forme d'avenant. Le montage : intervention en direct ou recours à la sous-traitance, chacun avec ses assurances propres, ce que l'attestation de décennale permet de vérifier avant signature. Et le régime fiscal : le taux de TVA applicable dépend de la nature des travaux et du logement, il se vérifie au cas par cas et doit apparaître clairement sur chaque devis. La méthode qui rend les devis comparables est donc en amont : remettre à toutes les entreprises consultées le même descriptif écrit, avec les mêmes quantités et les mêmes hypothèses, puis demander à chacune de compléter les lignes manquantes plutôt que d'arbitrer sur le total. Un devis moins cher parce qu'il oublie un poste ne fait pas économiser : il reporte la dépense au milieu du chantier, au moment où la comparaison n'est plus possible.",
    ],
  },
  {
    slug: "surelevation-etude-des-fondations",
    titre: "Surélévation : pourquoi l'étude des fondations vient avant le dessin",
    date: "22 août 2026", dateISO: "2026-08-22",
    categorie: "Gros œuvre",
    excerpt: "Une surélévation ne se dessine pas puis se vérifie : c'est l'inverse. Tant que le chemin des charges n'est pas connu jusqu'au sol, un plan n'engage rien.",
    /* 05/09 : l'en-tête était chDemolitionDegagementVersSejour — un couloir d'appartement
       en démolition, sans le moindre rapport avec une surélévation. Signalé par le client
       (« pas cohérent par rapport au titre »). Remplacé par le schéma qu'il a fourni, qui
       montre précisément le sujet de l'article : la descente des charges de la surélévation
       projetée jusqu'au sol porteur, et les quatre contrôles préalables. */
    photo: "schemaSurelevationFondations",
    schema: true,
    img2: "chPlancherSolivesBeton2",
    img2Caption: "Plancher mis à nu : solives, remplissage entre solives et planches de circulation posées pour travailler dessus. Un niveau supplémentaire charge d'abord ces planchers, avant les murs, puis les fondations. Chantier réel des équipes partenaires.",
    corps: [
      "Une surélévation ajoute une charge permanente à un bâtiment qui n'a pas été conçu pour la recevoir. Cette charge ne s'arrête pas au plafond du dernier niveau : elle traverse les planchers, descend dans les murs porteurs, les refends et les pignons, atteint les fondations, puis le sol. Chaque maillon de cette chaîne doit pouvoir la reprendre, et c'est le maillon le plus faible qui décide. D'où un ordre qui ne s'inverse pas : relevé de l'existant, diagnostic de structure et reconnaissance du sol d'abord, dessin ensuite. Un plan produit avant sera redessiné — ou, plus coûteux encore, il masquera un renforcement que personne n'a chiffré.",
      "L'étude ne se limite pas à un calcul. Elle commence par un relevé de l'existant — épaisseurs réelles des murs, position des refends, sens de portée des planchers — et par l'identification de la maçonnerie : pierre, brique, meulière, parpaing ou béton, et surtout son état réel, qui n'apparaît qu'une fois les enduits et les doublages déposés. Viennent ensuite les fondations : leur type, leur profondeur, leur largeur. Sur un bâtiment ancien, ces informations n'existent le plus souvent nulle part ; elles s'obtiennent par sondage, en dégageant un pied de mur. Le sol, enfin, relève d'une étude géotechnique : nature des terrains, portance, argiles sensibles au retrait-gonflement, niveau d'eau, et selon les secteurs d'Île-de-France, anciennes carrières ou dissolution du gypse. Ces aléas se vérifient parcelle par parcelle, jamais par analogie avec le chantier d'à côté.",
      "Le résultat de l'étude n'est pas un feu vert ou un feu rouge : c'est un cahier de contraintes. Il indique ce que la structure existante peut reprendre, où les charges doivent atterrir, ce qu'il faut renforcer, et parfois qu'il faut alléger le projet — ossature bois ou structure acier plutôt que maçonnerie — pour rester dans ce que le bâtiment sait porter. Lorsque les fondations ne suffisent pas, les solutions existent : élargissement de semelles, reprise en sous-œuvre, micropieux. Elles s'exécutent avant le reste et pèsent lourd dans une enveloppe, ce qui est exactement l'information qu'on veut détenir avant de s'attacher à un plan. S'y ajoutent les règles d'urbanisme — hauteur, emprise, aspect, servitudes, prospect — et, en copropriété, une autorisation d'assemblée générale dont la majorité applicable dépend de la nature exacte des travaux et se vérifie avec le syndic. Les pièces produites — sondages, étude géotechnique, note de calcul, plans d'exécution — restent établies et signées par les professionnels compétents ; elles se conservent avec les photos des ouvrages avant habillage, parce que plus rien ne sera vérifiable ensuite.",
    ],
  },
  {
    slug: "vmc-renovation-verifier-au-dela-du-debit",
    titre: "VMC en rénovation : ce qu'il faut vérifier au-delà du débit",
    date: "21 août 2026", dateISO: "2026-08-21",
    categorie: "Ventilation",
    excerpt: "Le débit est la donnée la plus citée et la moins suffisante : une ventilation ne fonctionne que si l'air dispose d'un chemin complet, de l'entrée jusqu'au rejet.",
    /* 06/09 — RÉSOLU. L'en-tête montrait un PARE-VAPEUR (membrane Soprema agrafée sur un
       doublage de salle de bain) : de l'isolation, pas de la ventilation. Le grief tenait
       depuis le 05/09 faute d'image de VMC dans le fonds. schemaVmcCircuitAir, ajoutée
       depuis, est exactement le sujet de l'article : coupe de pavillon où l'air neuf entre
       en bleu par les menuiseries du séjour et des chambres, circule sous les portes, est
       extrait en orange en cuisine, salle de bains et WC, rejoint le caisson posé en comble
       isolé et sort en toiture. Image OUVERTE et vérifiée avant écriture : les quatre
       repères numérotés et les quatre « bons réflexes » y sont bien lisibles.
       C'est un dessin, pas une photo : `schema: true` l'affiche ENTIÈRE (object-contain,
       native en 1536×1024 dans un cadre 16/8) et affiche la mention « Schéma pédagogique ».
       chParVapeurSopremaMuralSdb est libérée par ce remplacement. */
    photo: "schemaVmcCircuitAir",
    schema: true,
    img2: "chGrilleAerationMdfSurMesure",
    img2Caption: "Panneau ajouré taillé sur mesure à l'atelier : les passages d'air se dessinent avec la menuiserie, pas une fois les ouvrages posés. Chantier réel des équipes partenaires.",
    corps: [
      "Une VMC ne se juge pas au seul débit annoncé aux bouches. C'est un circuit complet : l'air doit pouvoir entrer quelque part, traverser le logement, être extrait dans les pièces humides, puis être rejeté à l'extérieur. Si un maillon manque, le débit réellement obtenu s'effondre quelles que soient les performances du caisson. En rénovation, le maillon manquant est presque toujours l'entrée d'air.",
      "Trois vérifications passent avant la fiche technique. Les entrées d'air d'abord : remplacer les menuiseries sans conserver ni recréer d'entrées rend le logement plus étanche que le système ne le suppose, et l'extraction se met à tirer sur les défauts d'étanchéité du bâti au lieu d'un air neuf maîtrisé. Les transferts entre pièces ensuite : sans détalonnage des portes ni grille de passage, l'air n'atteint jamais la bouche d'extraction. Le réseau enfin — sa longueur, le nombre de coudes, la section retenue, les gaines souples écrasées derrière un doublage, et l'isolation des conduits qui traversent un volume froid, faute de quoi la condensation s'installe dans les combles. En immeuble, le point de rejet en façade ou en toiture relève en plus du règlement de copropriété.",
      "Restent deux critères qu'on découvre trop tard. Le bruit : la position du caisson, sa suspension et la vitesse de l'air dans les conduits décident du confort réel, et un groupe posé au-dessus d'une chambre finit débranché. L'entretien : bouches démontables, filtres accessibles sur une double flux, trappe de visite prévue au moment du plafond et non après coup. Le choix entre simple flux et double flux se pose d'ailleurs dans cet ordre — une double flux ne donne sa mesure que dans une enveloppe suffisamment étanche à l'air, avec la place nécessaire à son réseau et un entretien réellement tenu. À la réception, un débit se mesure aux bouches : c'est la seule vérification qui ne se discute pas.",
    ],
  },
  {
    slug: "vivre-dans-l-immeuble-pendant-les-travaux",
    titre: "Vivre dans l'immeuble pendant les travaux : protections, horaires et voisinage",
    date: "20 août 2026", dateISO: "2026-08-20",
    categorie: "Copropriété",
    excerpt: "Un chantier privatif se juge aussi sur ce que les voisins ne voient pas : un hall protégé, des livraisons préparées, des phases bruyantes annoncées à l'avance.",
    /* 05/09 : reproche client — « un immeuble illustré par une maison ». Vérifié image
       ouverte : chEncadrementBoisPorteMiroirAtelier est bien un pavillon (jardin derrière
       les fenêtres, arche en chêne, pots de peinture au sol) ; elle part sur l'article
       prix-renovation-maison-2026, dont c'est le sujet. Ici l'en-tête montre désormais un
       immeuble entier ceinturé d'un échafaudage, vu depuis la rue, avec les maisons
       voisines et une voiture stationnée — c'est-à-dire les trois mots du titre :
       l'immeuble, la rue, le voisinage. Elle est native en 1600×1200 et passe de deux
       pages à trois, la limite fixée. */
    photo: "chFacadeRavalementVillage",
    img2: "chArcheEncadrementBoisChantier",
    img2Caption: "Habillage en arche posé dans un logement en travaux, sol couvert de bâches et panneaux stockés dans la pièce voisine : un ouvrage livré reste protégé jusqu'au nettoyage final. Chantier réel des équipes partenaires.",
    /* 07/09 : img3 pourvue par une photo libre du fonds, ouverte avant légende. Vue
       intérieure volontairement : le reproche du 05/09 portait sur une MAISON employée
       pour illustrer un immeuble, et rien ici ne désigne un type de bâtiment. Ce qu'elle
       montre — l'emprise d'un ouvrage sur une pièce entière — est le sujet du troisième
       paragraphe. */
    img3: "chEtagereChantierEchelle",
    img3Caption: "Une pièce entière transformée en atelier le temps de la pose : tréteaux, scie posée au sol, ampoule provisoire au plafond et sol entièrement recouvert. C'est cette emprise-là qu'il faut annoncer avant le premier jour. Chantier réel des équipes partenaires.",
    corps: [
      "Même strictement privatifs, des travaux en immeuble se déroulent au milieu de la vie des autres : circulations, bruit, livraisons, gravats, ascenseur. La logistique se règle avant le premier jour, pas le matin où une palette arrive sur le trottoir. Quatre questions doivent avoir une réponse écrite : par où montent les matériaux, par où descendent les gravats, l'ascenseur peut-il être utilisé et comment est-il protégé, et quelles parties communes — hall, escalier, palier, porte cochère, sols et angles de murs — doivent être protégées. S'y ajoute le stationnement d'une benne ou d'un big-bag, qui suppose le plus souvent une autorisation d'occupation du domaine public à demander en amont auprès de la commune.",
      "Le bruit se gère par le calendrier autant que par les outils. Les horaires applicables sont fixés localement par arrêté et fréquemment resserrés par le règlement de copropriété ; ils diffèrent selon les jours de semaine, le samedi, le dimanche et les jours fériés, et se vérifient donc commune par commune et immeuble par immeuble, jamais sur une règle générale. Le principe utile est simple : regrouper les phases bruyantes — démolition, carottage, saignées, rainurage — plutôt que de les étaler sur des semaines, les annoncer par écrit au syndic et aux voisins avec des dates, et laisser un contact joignable. La plainte ne porte presque jamais sur l'heure la plus bruyante ; elle porte sur celle qui n'avait pas été annoncée.",
      "Reste la propreté, et elle se prépare comme un ouvrage. Photographiez les parties communes avant la première livraison — hall, escalier, cabine d'ascenseur, palier, portes : c'est ce qui distinguera plus tard une trace préexistante d'une dégradation de chantier. Prévoyez ensuite les protections : plaques ou bâches au sol, protections d'angles, cabine d'ascenseur habillée, sas ou rideau de poussière à l'entrée du logement, et un passage de balai en fin de journée dans les circulations empruntées. Les déchets suivent une filière d'évacuation identifiée — jamais les conteneurs de l'immeuble. Enfin, la question de rester chez soi mérite une réponse franche : une rénovation complète touchant la plomberie, l'électricité et les sanitaires, avec la poussière que cela suppose, est rarement compatible avec une occupation confortable — plus d'eau, plus de sanitaires, plus de cuisine pendant des semaines. Si un relogement s'impose, il entre dans le budget dès le départ et non au milieu du chantier. À la fin, un tour contradictoire des parties communes avec le syndic ou le conseil syndical, photos datées à l'appui, clôture le sujet aussi proprement qu'il a été ouvert.",
    ],
  },
  {
    slug: "extension-maison-postes-oublies-budget",
    titre: "Extension de maison : les postes absents des premiers budgets",
    date: "19 août 2026", dateISO: "2026-08-19",
    categorie: "Extension",
    excerpt: "Un budget d'extension se construit rarement faux sur le gros œuvre. Il se construit faux sur ce qui l'entoure : terrassement, réseaux, accès et raccords.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaExtensionCoutsOublies",
    schema: true,
    corps: [
      "Un premier budget d'extension se fabrique presque toujours de la même manière : une surface, un prix au mètre carré trouvé en ligne, une multiplication. Le résultat n'est pas absurde — il décrit assez bien la construction du volume neuf. Il ne décrit rien de ce qui l'entoure, et c'est précisément là que se logent les écarts constatés plus tard. Une extension n'est pas un bâtiment posé à côté d'une maison : c'est un ouvrage qui doit être creusé, raccordé, approché, greffé sur l'existant, puis raccordé aux finitions des pièces qu'il prolonge. Chacune de ces cinq opérations a un coût, et aucune n'entre dans un prix au mètre carré.",
      "Le terrassement vient en premier, avec une donnée que personne n'anticipe : les terres extraites doivent partir. Leur volume, la possibilité ou non de les stocker sur la parcelle, et la filière d'évacuation pèsent bien plus que le creusement lui-même. Les fondations, ensuite, dépendent du sol : leur type et leur profondeur découlent d'une étude géotechnique, qui se mène parcelle par parcelle et non par analogie avec la maison voisine. Les réseaux suivent : alimentation en eau, évacuations d'eaux usées et d'eaux pluviales avec leur pente et leur point de rejet, électricité et éventuel renforcement du branchement, gaz, télécommunications. Selon les cas, il s'agit d'étendre un réseau intérieur, de modifier un branchement auprès du concessionnaire, ou d'ouvrir des tranchées à travers un jardin qu'il faudra remettre en état. L'accès enfin : livraisons, portage, levage, protection des sols du terrain et emplacement de stockage. Une parcelle en fond de rue ou une maison mitoyenne sans passage latéral change la logistique, donc les moyens, donc le prix.",
      "Reste ce qui touche à l'existant, la partie la plus régulièrement absente. Ouvrir la façade pour relier les deux volumes suppose une reprise de charge étudiée, avec les mêmes exigences qu'une ouverture de mur porteur. Le raccord de couverture, le traitement de l'étanchéité à la jonction et la reprise de l'enduit ou du bardage sur la façade existante s'ajoutent au neuf. Les équipements suivent le même chemin : le réseau de chauffage doit être étendu et sa production réexaminée, le tableau électrique repris, la ventilation revue pour l'ensemble du logement et non pour la seule pièce nouvelle. À cela s'ajoutent les études, diagnostics et assurances, l'autorisation d'urbanisme et son délai d'instruction, et le recours à un architecte lorsque le seuil de surface l'impose — un point qui se vérifie au cas par cas, avec le service urbanisme de la commune. Les finitions ferment la liste : sols, plinthes et peintures ne s'arrêtent pas à la limite du neuf, ils se raccordent aux pièces adjacentes, parfois sur toute leur surface lorsque le revêtement d'origine n'existe plus au catalogue.",
    ],
  },
  {
    slug: "prix-renovation-maison-2026",
    titre: "Combien coûtent des travaux de rénovation de maison en 2026 ?",
    date: "18 août 2026", dateISO: "2026-08-18",
    categorie: "Budget",
    excerpt: "Les fourchettes observées sur les projets accompagnés en Île-de-France, poste par poste, pour ne plus avancer à l'aveugle sur votre budget.",
    /* 03/09 : le hero était une cuisine blanche standard, appareils encore sous film et
       étiquettes en place — signalé par le client comme « une catastrophe ». Remplacé par
       une pièce à vivre réellement livrée par les équipes. La fourchette milieu de gamme
       reste illustrée plus bas par la cuisine anthracite (img3) : l'article ne montre pas
       QUE du haut de gamme. */
    /* 05/09 : reproche client — l'article s'intitule « rénovation de MAISON » et son
       en-tête montrait un salon d'APPARTEMENT haussmannien livré (moulures, cheminée de
       marbre, parquet à chevrons). Remplacé par une maison réellement en travaux :
       arche en chêne posée entre deux pièces, sols bâchés, pots de peinture et escabeau,
       jardin visible par les fenêtres. Pour un article de budget, un chantier en cours
       dit plus juste qu'un intérieur fini. Les deux images du corps restent des
       appartements : leurs légendes décrivent une salle de bain et une cuisine, elles
       n'affirment pas de maison. */
    photo: "chEncadrementBoisPorteMiroirAtelier",
    img2: "chHdgSdbMarbreNoirDoubleVasque",
    img2Caption: "Gamme haut de gamme : marbre sombre veiné du sol au plafond, baignoire îlot et robinetterie en laiton, double vasque monolithe, cheminée de marbre d'origine conservée. Chantier réel des équipes partenaires.",
    img3: "chCuisineAnthraciteGalerie",
    img3Caption: "Cuisine anthracite livrée : plan de travail noir, carreaux de ciment au sol et parquet à chevrons dans la pièce voisine. Chantier réel des équipes partenaires.",
    corps: [
      "Le prix d'une rénovation dépend d'abord de son ampleur, bien plus que de la surface seule. Un rafraîchissement (peinture, sols simples) se situe entre 250 et 450 €/m². Une rénovation partielle, qui touche une ou deux pièces avec de la plomberie et de l'électricité, grimpe à 600-900 €/m². Une rénovation complète — toutes les pièces refaites, cuisine et salle de bain neuves — se chiffre entre 1000 et 1500 €/m². Le haut de gamme, avec des matériaux premium et des finitions d'architecte, démarre à 1500 €/m² et peut dépasser 2500 €/m².",
      "Ces fourchettes restent indicatives : seul un devis détaillé après visite technique, remis par l'entreprise qui réalisera les travaux, donne un chiffrage fiable poste par poste. C'est pour cette raison que la visite technique précède le chiffrage et que les devis des entreprises partenaires sont sollicités dans la foulée : vous devez pouvoir comparer et décider sur des chiffres réels, et non sur des estimations vagues. Les délais de remise restent ceux de chaque entreprise consultée.",
      "Un point souvent oublié : la TVA. Elle est réduite à 10 % sur les travaux d'amélioration d'un logement de plus de 2 ans, et descend à 5,5 % sur les travaux d'amélioration énergétique éligibles. Sur un chantier de 60 000 €, la différence entre 20 % et 10 % de TVA représente 6 000 € — un budget qui peut financer une cuisine entière. Ce taux s'applique aux travaux facturés par l'entreprise ; les matériaux achetés en direct par le client relèvent du taux standard.",
    ],
  },
  {
    slug: "renovation-energetique-ordre-des-travaux",
    titre: "Rénovation énergétique : pourquoi changer le chauffage en premier est risqué",
    date: "16 août 2026", dateISO: "2026-08-16",
    categorie: "Rénovation énergétique",
    excerpt: "Un générateur choisi avant l'isolation est dimensionné pour un logement qui n'existera plus. L'ordre des travaux n'est pas une préférence, c'est une conséquence du calcul.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaOrdreRenovationEnergetique",
    schema: true,
    corps: [
      "La chaudière est l'équipement le plus visible d'un logement mal isolé : elle tourne, elle fait du bruit, elle coûte. C'est aussi celui qu'on remplace en premier, et c'est l'ordre le plus coûteux. La raison est arithmétique : la puissance nécessaire à un logement découle de ses déperditions. Isoler l'enveloppe les réduit, donc réduit la puissance à installer. Un générateur choisi avant les travaux d'isolation est dimensionné pour un bâtiment qui va disparaître ; installé, il fonctionnera en cycles courts, s'usera plus vite et régulera moins bien qu'un appareil correctement dimensionné. Le surcoût est double : l'appareil a été payé trop gros, et il travaille dans de mauvaises conditions pendant toute sa durée de vie.",
      "L'ordre technique est stable, quel que soit le logement. Un état des lieux d'abord : repérage des déperditions, examen de l'existant, et audit énergétique lorsque le projet le justifie ou qu'un dispositif d'aide l'exige. L'enveloppe ensuite, en commençant par là où les pertes sont les plus fortes — toiture et combles, murs, planchers bas, puis menuiseries — avec un soin particulier porté aux points singuliers et aux jonctions, qui décident du résultat autant que l'épaisseur d'isolant. La ventilation immédiatement après : un logement rendu étanche doit disposer d'un chemin d'air complet, sans quoi l'humidité produite à l'intérieur reste dedans et se dépose sur les parois. Les émetteurs enfin, avant le générateur : c'est leur température de fonctionnement qui conditionne le choix, en particulier lorsqu'une pompe à chaleur est envisagée, car un réseau conçu pour de la haute température ne donne rien à basse température. Le générateur vient en dernier, dimensionné sur le logement tel qu'il sera, pas tel qu'il est.",
      "Reste le cas réel : une chaudière en panne au mois de janvier ne se remplace pas dans deux ans. Là, l'ordre ne s'inverse pas, il s'aménage — on remplace, mais en dimensionnant l'appareil sur le logement isolé à venir, et en choisissant un modèle et un réseau compatibles avec les travaux prévus. C'est aussi la raison pour laquelle un programme énergétique se pose en une fois et s'exécute par étapes, plutôt que de s'improviser équipement par équipement. Deux points enfin, à traiter avant de signer quoi que ce soit : les dispositifs d'aide comportent leurs propres conditions — nature des travaux, performance atteinte, qualification de l'entreprise, ordre et antériorité de la demande — et ces règles évoluent, ce qui impose de les vérifier au cas par cas auprès des organismes officiels avant l'engagement. Et l'ensemble des pièces produites au fil des travaux — factures, fiches techniques, photographies des ouvrages avant fermeture — se conserve : c'est ce qui permettra, plus tard, de prouver ce qui a été posé.",
    ],
  },
  {
    slug: "devis-travaux-lignes-a-verifier",
    titre: "Devis de travaux : les lignes à vérifier avant de signer",
    date: "14 août 2026", dateISO: "2026-08-14",
    categorie: "Devis",
    excerpt: "Un devis forfaitaire de trois lignes ne se compare à rien. Voici ce qu'un devis détaillé doit préciser pour être réellement comparable.",
    /* 05/09 : l'en-tête était chDetailPoigneePorteMain1, un gros plan de dormant de porte
       — hors sujet pour un article sur la lecture d'un devis, et par ailleurs la photo la
       plus floue du site (piqué mesuré à 21, cf. scripts/qualite-photos.py). Remplacée par
       le schéma fourni par le client, qui montre un devis ligne à ligne et la liste des
       sept points à contrôler. */
    photo: "schemaDevis7Lignes",
    schema: true,
    img2: "chHdgSdbMarbreProfilesLaitonPose",
    img2Caption: "Pose en cours : plan vasque en pierre massive dont la découpe de cuve est encore ouverte, parois en pierre grand format et profilés laiton en jonction des angles. Chantier réel des équipes partenaires.",
    img3: "chPlacagesNoyerEnAttente",
    img3Caption: "Panneaux plaqués noyer livrés sur chantier, étiquette de référence encore collée, sol protégé avant pose. Chantier réel des équipes partenaires.",
    corps: [
      "Deux devis affichant le même total peuvent recouvrir des prestations très différentes. Le premier réflexe consiste à vérifier que le devis détaille des quantités réelles — mètres carrés, mètres linéaires, unités — et non un forfait global impossible à décomposer.",
      "Trois points méritent une attention particulière : les exclusions écrites noir sur blanc (évacuation des gravats, protection des sols, reprise de peinture après un autre lot), la marque et la référence exacte des matériaux prévus plutôt qu'une simple catégorie, et le délai d'exécution engagé, pas seulement une date de début.",
      "Un devis qui ne mentionne aucune de ces précisions n'est pas nécessairement malhonnête, mais il ne permet pas de comparer objectivement deux entreprises. Faire reformuler ces points avant signature coûte un échange de plus et évite le risque d'un avenant surprise en cours de chantier.",
    ],
  },
  {
    slug: "etancheite-sous-carrelage-points-singuliers",
    titre: "Étanchéité sous carrelage : les points singuliers à documenter",
    date: "12 août 2026", dateISO: "2026-08-12",
    categorie: "Salle de bain",
    excerpt: "Un carrelage n'est pas une étanchéité. Ce qui protège le plancher se joue dessous, sur quelques points précis — et n'est plus vérifiable une fois la pose faite.",
    /* 07/09 : `schema: true` ajouté. Ces deux images vivent dans public/photos/pedagogie/,
       pas dans public/photos/chantiers/ : ce ne sont pas des clichés des équipes
       partenaires mais des visuels d'illustration. Sans le drapeau, l'en-tête était
       recadrée et affichée exactement comme une preuve de chantier. Le drapeau la pose
       entière et affiche la mention. La légende de l'img2 le dit désormais en toutes
       lettres, « Photo pédagogique » restant ambigu. */
    photo: "pedaEtancheiteAngleDouche",
    schema: true,
    img2: "pedaEtancheitePassageCanalisation",
    img2Caption: "Illustration pédagogique : traversée de canalisation traitée par une collerette noyée dans le système d'étanchéité, et non par un simple joint appliqué en surface. Image de principe, pas un chantier des équipes partenaires.",
    img3: "chHdgDoucheMarbreLaitonProtection",
    img3Caption: "Douche en pierre grand format, chantier encore en cours, film de protection au sol : une fois la pierre posée, l'ouvrage d'étanchéité placé dessous n'est plus ni visible ni contrôlable. Chantier réel des équipes partenaires.",
    corps: [
      "Un carrelage, aussi bien posé soit-il, n'est pas une barrière étanche : l'eau passe par les joints, les micro-fissures et les jonctions. L'étanchéité est un ouvrage distinct, placé sous le carrelage — système d'étanchéité liquide appliqué au rouleau, ou natte membrane collée —, mis en œuvre selon son avis technique et choisi en fonction du classement d'exposition à l'eau de la pièce. C'est cet ouvrage invisible à la livraison qui protège le plancher, les cloisons et, en immeuble, le logement du dessous.",
      "Une étanchéité ne cède presque jamais en pleine surface : elle cède sur les points singuliers. Ce sont les angles rentrants et sortants, renforcés par des bandes d'armature ; la jonction entre le sol et les murs ; les traversées de canalisations, traitées par manchette et non par un cordon de mastic ; la platine de bonde ou le corps de caniveau, dont la collerette doit être noyée dans le système ; les pieds de cloison et les seuils, où l'étanchéité doit s'arrêter proprement en remontant assez haut. Deux conditions en amont ne se rattrapent pas ensuite : un support plan, propre, stable et compatible avec le système retenu, et des pentes réalisées avant l'étanchéité — une pente ne se corrige pas à la colle.",
      "Une fois le carrelage posé, plus rien de tout cela ne se vérifie sans démolir. D'où la règle : documenter avant de recouvrir. Photos datées de chaque point singulier, référence exacte du système employé — primaire, bandes et mastic de la même famille, plutôt qu'un assemblage de marques —, respect des temps de séchage entre couches, et, lorsque la configuration le permet, essai de mise en eau avant carrelage. Ces pièces se rangent avec le dossier de fin de chantier. Elles ne servent à rien tant que tout va bien, et deviennent la seule preuve exploitable le jour où une trace apparaît au plafond du voisin.",
    ],
  },
  {
    slug: "joints-epoxy-vs-ciment",
    titre: "Joints époxy ou joints classiques : pourquoi le choix compte",
    date: "10 août 2026", dateISO: "2026-08-10",
    categorie: "Matériaux",
    excerpt: "Les joints ciment noircissent en quelques mois. Voici pourquoi les entreprises partenaires privilégient largement l'époxy en salle de bain et cuisine.",
    /* 07/09 : `schema: true` ajouté, même motif que sur l'article étanchéité — ces deux
       macros sont rangées dans public/photos/pedagogie/ et ne sont pas des chantiers des
       équipes partenaires. La mention « Photo pédagogique » laissait croire l'inverse. */
    photo: "pedaJointEpoxyMacro",
    schema: true,
    img2: "pedaJointCimentMacro",
    img2Caption: "Illustration pédagogique : joint ciment en zone humide, noirci par la moisissure jusque dans le croisement des carreaux. Image de principe, pas un chantier des équipes partenaires.",
    img3: "chSdbCarreauxCiment",
    /* 05/09 : légende reprise après ouverture de l'image. Elle annonçait « un joint entre
       chaque carreau, dans le receveur comme sur les parois » : le receveur photographié
       est un bac blanc d'une seule pièce, sans aucun carreau ni joint. La légende décrit
       maintenant ce qu'on voit — un carrelage mural de carreaux de ciment, donc un linéaire
       de joints considérable en zone de projection d'eau, ce qui est bien le sujet. */
    img3Caption: "Douche en carreaux de ciment : sur les parois, un joint entre chaque carreau — soit un linéaire de joints considérable en zone d'eau. Le receveur, lui, est un bac d'une seule pièce. Chantier réel des équipes partenaires.",
    corps: [
      "Un joint ciment classique est poreux. En quelques mois, il absorbe l'humidité, les moisissures s'y installent, et il noircit — quel que soit le sérieux du nettoyage. Au bout de deux ou trois ans, il se fissure et laisse passer l'eau, avec le risque de dégâts derrière le carrelage.",
      "Le joint époxy est une résine, pas du ciment. Il est non poreux et ne noircit pas — parce qu'il n'y a rien pour les moisissures à quoi s'accrocher. Les fabricants annoncent une durée de vie de 15 à 20 ans, contre 3 à 5 ans pour un joint ciment classique en zone humide.",
      "La pose demande plus de savoir-faire et coûte un peu plus cher à l'installation. Mais rapporté à la durée de vie, le coût annuel réel d'un joint époxy est inférieur à celui d'un joint ciment qu'il faut reprendre tous les 3 ans. C'est pour cette raison qu'il est systématiquement prescrit au cahier des charges des entreprises partenaires en salle de bain et en cuisine — sans supplément caché, c'est le standard, pas une option premium.",
    ],
  },
  {
    slug: "cuisine-sur-mesure-ou-caissons-standards",
    titre: "Cuisine sur mesure ou caissons standards : où se joue vraiment l'économie",
    date: "7 août 2026", dateISO: "2026-08-07",
    categorie: "Cuisine & agencement",
    excerpt: "Le caisson disparaît derrière la façade une fois la cuisine posée : voici pourquoi l'écart de prix ne se voit presque jamais sur le résultat.",
    photo: "chHdgCuisineOnyxParquetVersailles",
    img2: "chHdgSejourCuisineOnyxBanquette",
    img2Caption: "Cuisine ouverte sur le séjour : colonnes en bois clair sans poignée, plan de travail et crédence en onyx, retour de plan arrondi, parquet en panneaux de Versailles. Chantier réel des équipes partenaires.",
    img3: "chCuisineBleuCanardBrillante",
    img3Caption: "Cuisine bleu canard en cours de pose, caissons ouverts sans façade à côté des éléments finis. Chantier réel des équipes partenaires.",
    corps: [
      "Une cuisine intégralement sur mesure coûte cher parce que chaque caisson est fabriqué à l'unité. Or le caisson est invisible une fois la cuisine posée : il n'intervient ni dans l'esthétique ni dans la perception de la qualité par un visiteur.",
      "L'alternative consiste à conserver des caissons standards de bonne facture, aux dimensions normalisées et aux quincailleries fiables, et à faire fabriquer sur mesure uniquement ce qui se voit et se touche : façades, plan de travail, plinthes et joues d'habillage contre les murs biais, fréquents en logement ancien.",
      "L'écart entre les deux approches se concentre sur le poste mobilier, et il n'y est pas marginal : c'est là que se joue la comparaison de deux devis de cuisine. Il ne se lit pourtant pas sur le résultat livré. La question à poser avant de chiffrer une cuisine n'est donc pas « sur mesure ou standard », mais « qu'est-ce qui doit vraiment être sur mesure » — l'ampleur de l'écart, elle, se mesure devis en main, projet par projet.",
    ],
  },
  {
    slug: "achat-direct-materiaux-erreurs-a-eviter",
    titre: "Acheter ses matériaux en direct : les erreurs qui annulent l'économie",
    date: "5 août 2026", dateISO: "2026-08-05",
    categorie: "Matériaux",
    excerpt: "Acheter soi-même ses fournitures change qui commande, qui contrôle et qui supporte l'erreur. Cinq points décident si l'économie tient jusqu'à la pose.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaAchatDirectMateriaux",
    schema: true,
    /* 07/09 : deux photos libres du fonds, ouvertes avant légende, pour les deux erreurs
       « avant livraison » du texte : la référence non validée par le poseur (les découpes
       présentées contre la cloison) et les cotes à figer avant de commander (le caisson
       monté, tiroirs sortis). */
    img2: "chNicheArrondieBoisEclairage",
    img2Caption: "Pièces découpées sur mesure — un arrondi et un disque en panneau — présentées contre la cloison avant fixation, boîtiers électriques encore apparents : format et calepinage se valident avec le poseur avant la commande. Chantier réel des équipes partenaires.",
    img3: "chDressingOuvertTiroirsEntrouverts",
    img3Caption: "Rangement sur mesure monté en panneau brut, tablettes et tiroirs sortis pour contrôle, pièce encore protégée au sol : ce sont ces cotes-là qu'il faut avoir validées avant de commander la quincaillerie. Chantier réel des équipes partenaires.",
    corps: [
      "Acheter ses matériaux en direct consiste à commander soi-même, à son nom et avec sa facture, les fournitures que l'entreprise se contente ensuite de poser. La ligne de partage n'est pas budgétaire, elle est juridique : ce qui engage la garantie décennale de l'entreprise qui le met en œuvre reste fourni par elle — systèmes d'étanchéité, colles et mortiers techniques, isolants, ossatures, câbles et canalisations, éléments de structure. Le reste peut s'acheter en direct : carrelage et faïence, robinetterie et sanitaires, parquet, cuisine, menuiseries d'agencement, luminaires et quincaillerie de finition. Ce que ce transfert change n'est pas seulement le prix payé : il déplace vers vous la responsabilité de la référence, de la quantité et du délai. C'est là que l'économie se gagne ou se perd.",
      "Trois erreurs se produisent avant la livraison. La première est de commander une référence que le poseur n'a pas validée. Format, épaisseur, classement d'usage, caractère rectifié ou non, compatibilité avec le support et avec le système de pose retenu : ces critères se vérifient sur la fiche technique, par écrit, avant la commande. Un matériau livré puis refusé à la pose coûte un retour, un délai et une équipe immobilisée. La deuxième est de commander la quantité exacte relevée sur le plan. Toute pose consomme davantage : chutes de coupe, casse, calepinage particulier — un point de Hongrie ou un appareillage en diagonale consomment plus qu'une pose droite. La réserve se calcule avec l'entreprise, et elle se commande dans la même livraison, car un complément passé plus tard arrive fréquemment d'un autre lot de fabrication, avec une nuance visible sur le mur fini. La troisième est de commander sans caler la date sur le planning : livré trop tôt, le matériau encombre et s'abîme ; livré trop tard, il arrête l'équipe qui devait le poser.",
      "Deux erreurs se produisent ensuite. À la réception de la marchandise, le contrôle doit être fait avant déballage complet et avant que l'équipe ne commence : quantités, références, teintes et lots de fabrication, état des colis. Les réserves se portent sur le bon de livraison, immédiatement, car les délais de recours auprès du fournisseur sont courts et se ferment vite. Puis vient la question que personne ne pose au moment d'acheter : en cas de casse, de manquant ou de vice constaté en cours de pose, qui recommande, qui paie le transport et qui supporte l'immobilisation de l'équipe. Sur une fourniture achetée en direct, ce n'est plus l'entreprise, c'est vous — d'où l'intérêt d'une marge de manœuvre prévue dès la commande. L'économie réelle se mesure donc à la fin, pas au moment du bon de commande : elle est ce qui reste une fois comptés les reliquats, les retours, le temps passé à commander et à réceptionner, et les éventuelles reprises. Sur les postes bien cadrés, elle est réelle ; sur ceux qui touchent à la mise en œuvre, elle disparaît avec la garantie.",
    ],
  },
  {
    slug: "sortir-passoire-energetique",
    titre: "DPE F ou G : comment sortir de la passoire énergétique",
    date: "2 août 2026", dateISO: "2026-08-02",
    categorie: "Isolation & DPE",
    excerpt: "Diagnostic, isolation, ventilation, chauffage, aides financières : l'ordre des étapes qui décide du gain de classes, sans se perdre dans les démarches.",
    /* 03/09 : les trois visuels précédents (plancher mis à nu, granulés d'isolation
       PHONIQUE entre solives, sous-couche OSB) illustraient un plancher intérieur,
       pas la thermique dont parle l'article — deux légendes annonçaient même de
       l'isolation phonique dans un article DPE. Remplacés par la seule photo
       d'isolation THERMIQUE disponible dans lib-photos.ts ; img2/img3 retirées
       faute d'image honnête (voir rapport : laine + pare-vapeur et chaudière
       existent dans public/photos/chantiers/ mais ne sont pas déclarées). */
    /* 05/09 : reproche client — chIsolationCombles est une CONSTRUCTION NEUVE. Vérifié
       image ouverte : briques monomur rouges encore nues, charpente neuve, laine posée
       dans un rampant neuf, aucun ouvrage existant. Or un logement classé F ou G est par
       définition un bâtiment existant : l'en-tête contredisait le titre. Remplacé par la
       seule photo d'isolation thermique sur bâti EXISTANT du fonds — laine minérale entre
       montants et bandes d'étanchéité à l'air sur chaque ossature. Elle était employée en
       img2 de l'article MaPrimeRénov'/CEE : elle en est retirée pour ne pas paraître deux
       fois dans le blog, et son décompte de pages reste inchangé (trois). */
    /* 05/09 (2e passe) : l'en-tête passe de la photo d'isolation au schéma DPE, qui
       existait sur le disque mais n'était déclaré nulle part. Motif : l'article traite du
       CLASSEMENT énergétique et de l'ordre des travaux qui le fait bouger, pas d'un geste
       d'isolation isolé. Le schéma montre exactement cela — la coupe du bâtiment avec les
       cinq postes repérés, et l'échelle A à G avec ses seuils. Il rend au passage la photo
       d'isolation à l'article MaPrimeRénov', où elle manquait. */
    photo: "schemaDpePassoire",
    schema: true,
    corps: [
      "Un logement classé F ou G n'est pas seulement une facture de chauffage élevée : depuis 2025, ces logements sont progressivement interdits à la location. Sortir de la passoire énergétique est donc devenu un sujet patrimonial autant qu'un sujet de confort.",
      "La méthode commence toujours par un diagnostic complet, qui identifie les postes de déperdition réels — souvent les combles et les murs avant les fenêtres, contrairement à l'intuition. Vient ensuite l'isolation proprement dite, la pose d'une VMC double flux pour éviter les problèmes d'humidité une fois le logement étanche, puis le remplacement du système de chauffage si nécessaire — dimensionné après les travaux d'isolation, pas avant.",
      "Les aides existent et se cumulent souvent : MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) peuvent financer une part significative des travaux selon les revenus du foyer et le gain énergétique obtenu. Les règles évoluent régulièrement et doivent être vérifiées au moment du projet. L'accompagnement dans ces démarches administratives fait partie du pilotage d'un chantier d'isolation bien mené — le gain de classe DPE ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
  {
    slug: "projets-qu-un-pilote-de-travaux-refuse",
    titre: "Les projets qu'un pilote de travaux refuse, et pourquoi",
    date: "31 juillet 2026", dateISO: "2026-07-31",
    categorie: "Méthode",
    excerpt: "Refuser un projet n'est pas un manque d'ambition : c'est reconnaître qu'aucune organisation ne rattrapera une donnée manquante ou un délai impossible.",
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaProjetsRefuses",
    schema: true,
    /* 07/09 : une photo libre du fonds, ouverte avant légende, pour la sortie du schéma —
       « projet cadré, ou réorienté ». Pas d'img3 : aucune autre image du fonds ne
       documente honnêtement un refus ou un sondage refusé. */
    img2: "chBibliothequeNicheGrisTaupe",
    img2Caption: "Bibliothèque sur mesure achevée et déjà occupée, contre un mur de pierre conservé : c'est ce que produit un projet engagé une fois ses conditions réunies. Chantier réel des équipes partenaires.",
    corps: [
      "Un pilote de travaux ne pose aucun lot et n'émet aucun devis : il prépare les décisions, consulte les entreprises, tient l'enchaînement et suit l'exécution jusqu'à la réception. Ce rôle a une portée réelle, et il a des limites nettes. Il ne remplace ni un bureau d'études structure, ni un architecte, ni une autorisation administrative. Il ne crée pas de budget, et il ne raccourcit pas un temps de séchage. Accepter un projet dont l'une de ces conditions manque revient à s'engager sur un résultat que rien ne permet de tenir : le chantier ne s'arrête pas au démarrage, il s'arrête au milieu, quand les travaux sont ouverts et que la marche arrière coûte le plus cher.",
      "Cinq situations conduisent à ne pas engager un projet en l'état. Une reprise de structure qu'aucune étude ne peut appuyer : lorsque l'accès aux fondations, le sondage d'un mur ou le dégagement d'un appui sont refusés, personne ne peut dire ce que le bâtiment porte, et un calcul fait sur des hypothèses non vérifiées n'engage rien. Une autorisation d'urbanisme absente, en cours d'instruction ou déjà refusée, alors que le projet la requiert : commencer avant expose le maître d'ouvrage, pas l'entreprise. Une copropriété non consultée quand les travaux touchent une partie commune, la façade, la structure ou un plancher : la décision d'assemblée générale conditionne le chantier, et sa majorité applicable dépend de la nature exacte des travaux, ce qui se vérifie avec le syndic. Un programme sans rapport avec le budget annoncé, où l'écart ne se comble ni par la négociation ni par l'organisation. Et un délai imposé incompatible avec des temps qui ne se compriment pas : séchage d'une chape ou d'un enduit, délai de fabrication d'une menuiserie sur mesure, instruction d'une autorisation.",
      "Dans la plupart de ces cas, refuser en l'état ne signifie pas refuser tout court : il s'agit de réorienter. Réduire le périmètre, phaser en deux temps, remplacer une reprise de structure par une solution qui ne touche pas au porteur, ou repousser le démarrage jusqu'à l'obtention d'une pièce manquante sont des issues fréquentes et honnêtes. Deux situations, en revanche, ne se réorientent pas : celle où l'on demande de démarrer sans devis signés, sans attestation de décennale en cours de validité, ou sans déclarer ce qui doit l'être ; et celle où aucun écrit n'est accepté, ni descriptif, ni compte rendu, ni réserve. Le seul avantage réel d'un chantier piloté est la traçabilité : sans écrit, il ne reste rien à piloter. Dire non à ce moment-là coûte une affaire ; ne pas le dire coûte un chantier ouvert que personne ne peut refermer.",
    ],
  },
  {
    slug: "coproprietaire-autorisations-avant-travaux",
    titre: "Copropriété : les autorisations à obtenir avant de lancer un chantier",
    date: "28 juillet 2026", dateISO: "2026-07-28",
    categorie: "Copropriété",
    excerpt: "Un chantier qui touche une partie commune ou l'aspect extérieur du bâtiment ne se lance pas sans passer par le syndic — parfois bien avant le premier devis.",
    photo: "chFacadeRavalementEchafaudage1",
    img2: "chDemolitionOuvertureCouloir",
    img2Caption: "Démolition d'une cloison dans le couloir d'un appartement occupé, pièce voisine protégée sous bâches : la phase la plus bruyante pour l'immeuble. Chantier réel des équipes partenaires.",
    /* 03/09 : le diptyque salon livré + balcon a été retiré. Un salon décoré
       n'illustre pas une autorisation de copropriété, et sa légende devait
       expliquer au lecteur pourquoi l'image était là — signe qu'elle n'y était
       pas à sa place. Remplacé par des travaux qui touchent réellement l'aspect
       extérieur, donc l'accord de la copropriété. */
    /* 05/09 : img3 (chFacadeRavalementEchafaudage2) retirée. Les deux fichiers ont été
       ouverts côte à côte : c'est le même cliché que l'en-tête de l'article
       « renovation-toiture-reparer-traiter-remplacer » (chRavalementArdoise) — même angle
       d'immeuble, mêmes deux souches de brique, même olivier à droite, même ciel gris.
       L'article gardait par ailleurs deux vues du même ravalement, en-tête comprise. */
    corps: [
      "En copropriété, le règlement encadre toute intervention touchant les éléments communs, la structure porteuse commune ou l'aspect extérieur du bâtiment. Selon la nature exacte des travaux, une simple information écrite au syndic peut suffire, ou au contraire une autorisation formelle votée en assemblée générale devient nécessaire avant tout démarrage.",
      "C'est notamment le cas d'une ouverture touchant un mur porteur mitoyen d'une partie commune, du remplacement d'une fenêtre visible depuis la rue, ou de la création d'une sortie de ventilation en façade. Ces dossiers doivent être présentés en amont, avec un descriptif technique précis, pour être inscrits à l'ordre du jour de la prochaine assemblée générale — dont la fréquence, généralement annuelle, doit être anticipée dans le calendrier du projet.",
      "En immeuble occupé, les horaires des phases bruyantes comme la démolition ou le carottage sont généralement encadrés par arrêté municipal, et une information écrite préalable des voisins limite les tensions pendant le chantier. Ignorer ces étapes administratives ne fait pas gagner de temps : cela expose au contraire à un arrêt de chantier ordonné en cours de travaux.",
    ],
  },
  {
    slug: "parquet-massif-contrecolle-stratifie",
    titre: "Parquet massif, contrecollé ou stratifié : quel revêtement pour quel usage",
    date: "22 juillet 2026", dateISO: "2026-07-22",
    categorie: "Matériaux",
    excerpt: "Les trois solutions se ressemblent une fois posées, mais leur épaisseur de bois réel change tout pour la durée de vie et les rénovations futures.",
    photo: "chParquetChevronsPosePiece",
    img2: "chHdgEntreeCouloirCuisineOnyx",
    img2Caption: "Parquet en panneaux de Versailles posé en enfilade, de l'entrée à la pièce de vie, autour d'un radiateur en fonte conservé. Chantier réel des équipes partenaires.",
    img3: "chParquetVitrifie",
    img3Caption: "Ancien parquet à lames droites, poncé puis vitrifié, cheminée d'origine conservée. Chantier réel des équipes partenaires.",
    corps: [
      "Le parquet massif est en bois plein sur toute son épaisseur, généralement 14 à 22 mm. Il se ponce et se rénove plusieurs fois sur des décennies, ce qui en fait la solution la plus durable — et la plus chère à l'achat comme à la pose, notamment en pose traditionnelle à bâtons rompus ou point de Hongrie.",
      "Le parquet contrecollé associe une fine couche de bois noble, en général 2 à 6 mm, collée sur un support en contreplaqué ou en fibres de bois. Il coûte nettement moins cher que le massif et se ponce une à deux fois selon l'épaisseur de la couche d'usure — un compromis pertinent pour la plupart des chantiers de rénovation.",
      "Le stratifié, enfin, n'est pas du bois mais un décor imprimé sur un support en fibres à haute densité. Il ne se ponce ni ne se rénove : rayé ou abîmé, il se remplace lame par lame ou intégralement. Sa résistance à l'usure quotidienne en fait un choix pertinent dans une pièce à fort passage, sous réserve d'accepter cette limite plutôt que d'y voir une alternative économique au bois véritable.",
    ],
  },
  {
    slug: "maprimerenov-cee-2026",
    titre: "MaPrimeRénov' et CEE : ce qu'il faut vérifier avant de compter sur une aide",
    date: "15 juillet 2026", dateISO: "2026-07-15",
    categorie: "Aides financières",
    excerpt: "Les aides à la rénovation énergétique se cumulent parfois, mais leurs règles et leurs montants évoluent d'une année sur l'autre : ce qui ne change pas, c'est l'ordre dans lequel les vérifier.",
    /* 03/09 : img3 (cloisons en plaques hydrofuges sur ossature, dans un bâtiment
       béton) n'avait aucun rapport avec l'isolation, la ventilation ou le chauffage
       dont parle l'article, et sa légende affirmait un « avant isolation » que la
       photo ne montre pas. img2 (isolation en laine) a été rendue à l'article DPE,
       dont c'est le sujet central, pour ne pas répéter la même photo d'un article
       à l'autre. Rien d'honnête à mettre à la place ici — voir rapport. */
    /* 03/09 : le hero était une charpente de construction NEUVE sous la neige — hors sujet
       pour des aides qui ne financent que la rénovation. Remplacé par un schéma pédagogique
       qui reprend l'intitulé de l'article (demande du client). Aucun logo officiel, aucun
       montant chiffré : les règles et barèmes changent chaque année. */
    /* 05/09 : en-tête = SCHÉMA dessiné (public/photos/pedagogie/), pas une photo.
       Sans `schema: true`, la mention « Schéma pédagogique » n'était pas affichée :
       un dessin pouvait être lu comme une preuve de chantier. Le rendu ne change pas
       (l'image est native en 2:1, exactement le format du cadre). */
    photo: "pedaMaPrimeRenovCee",
    schema: true,
    /* 05/09 : img2 (chIsolationLaineUrsaVarioSdb) rendue à « sortir-passoire-energetique »,
       dont l'isolation d'un bâti existant est le sujet central et dont l'en-tête était une
       construction neuve. La garder ici l'aurait affichée deux fois dans le blog. Aucune
       autre photo honnête à mettre à la place : les deux autres vues d'isolation déclarées
       (chIsolationFenetreSdbLaineVario, chParVapeurSopremaFenetreSdb) sont le MÊME mur de
       la MÊME salle de bain, à un cadrage ou une étape près — emplacement à pourvoir,
       voir rapport. L'article conserve son schéma d'en-tête et la photo de chaudière. */
    img3: "chChaudiereMuraleSaunierDuval",
    img3Caption:
      "Remplacement d'un appareil de chauffage : chaudière murale raccordée, vannes d'isolement et filtre posés sur le retour. Chantier réel des équipes partenaires.",
    corps: [
      "MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) sont les deux dispositifs les plus mobilisés pour financer une part des travaux d'isolation, de ventilation ou de remplacement de chauffage. Leurs montants dépendent des revenus du foyer et du gain énergétique obtenu, et leurs règles d'éligibilité sont révisées régulièrement — parfois en cours d'année.",
      "Avant de compter sur l'une de ces aides dans un budget, trois vérifications s'imposent : la date exacte des barèmes en vigueur au moment du dépôt de dossier, la nécessité de faire réaliser les travaux par une entreprise certifiée RGE (Reconnu Garant de l'Environnement), sans laquelle aucune aide n'est versée, et l'ordre des démarches — la demande doit généralement être déposée avant la signature du devis, jamais après le début des travaux.",
      "Un projet mal séquencé peut perdre le bénéfice d'une aide pour une simple question de date de dossier, même si les travaux réalisés étaient parfaitement éligibles sur le fond. L'accompagnement dans ces démarches fait partie du pilotage d'un chantier d'isolation : le gain de classe énergétique ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
  {
    slug: "escalier-bois-massif-structure-ouverte-fermee",
    titre: "Escalier : bois massif, structure ouverte ou fermée, quel choix pour quel budget",
    date: "8 juillet 2026", dateISO: "2026-07-08",
    categorie: "Menuiserie",
    excerpt: "Un escalier n'est pas qu'un accès entre deux niveaux : sa structure, son limon et son parement pèsent directement sur le budget et sur l'aspect final.",
    photo: "chEscalierOuvertConstruction",
    img2: "chEscalierBoisFlottantVueBas",
    img2Caption: "Escalier en cours de finition : marches et contremarches en contreplaqué à chant apparent, portées par un limon maçonné. Chantier réel des équipes partenaires.",
    /* 07/09 : img3 pourvue par une photo libre du fonds, ouverte avant légende. L'escalier
       n'y occupe que la partie droite du cadre — la légende le dit, plutôt que d'annoncer
       un escalier plein cadre. */
    img3: "chDressingEscalierArriereplan2",
    img3Caption: "Deux ouvrages de menuiserie dans la même pièce : des rangements en panneau brut, portes ouvertes sur leurs tablettes, et à droite l'escalier bois avec ses marches et son garde-corps à barreaux. Chantier réel des équipes partenaires.",
    corps: [
      "Un escalier se définit d'abord par sa structure porteuse, pas par son revêtement final. Un limon central en acier ou en bois massif, une structure à crémaillère apparente ou un escalier fermé sur deux limons latéraux ne répondent pas au même budget ni au même rendu visuel.",
      "L'escalier à structure ouverte (marches suspendues, sans contremarche) dégage de la lumière et allège visuellement un volume, mais impose un calcul de structure plus poussé et un garde-corps conforme à la réglementation sur toute la hauteur de chute. Un escalier fermé classique reste la solution la plus économique et la plus simple à sécuriser, notamment en présence de jeunes enfants.",
      "Le choix du bois — massif, contrecollé, ou une structure métallique habillée de marches bois — dépend de l'usage, du budget et du style recherché. Un escalier reste un ouvrage structurel avant d'être un objet de décoration : sa fixation au plancher et au mur engage la même rigueur qu'une reprise de charge classique.",
    ],
  },
  {
    slug: "amenagement-local-commercial-difference-logement",
    titre: "Aménager un local commercial : ce qui change par rapport à un logement",
    date: "1 juillet 2026", dateISO: "2026-07-01",
    categorie: "Local commercial",
    excerpt: "Accueil du public, vitrine, normes ERP : l'agencement d'un local commercial obéit à des règles différentes de celles d'un logement, dès la phase de conception.",
    /* 05/09 : ...Brute2 est le MÊME FICHIER que ...Brute (empreinte identique), déjà
       employée sur /menuiserie-agencement-sur-mesure. On unifie sur un seul nom pour que
       le doublon soit comptabilisé — cf. scripts/fichiers-identiques.py. */
    photo: "chOptiqueComptoirCarcasseBrute",
    img2: "chOptiqueComptoirAccueilFini",
    img2Caption: "Comptoir d'accueil livré dans un magasin d'optique : plan de travail bois, soubassement en tasseaux et liseré laiton. Chantier réel des équipes partenaires.",
    img3: "chOptiquePresentoirsMuraux",
    img3Caption: "Présentoirs muraux sur mesure pour montures : réglettes aluminium fixées sur un mur de tasseaux, meubles à tiroirs en pied. Chantier réel des équipes partenaires.",
    corps: [
      "Un local recevant du public (ERP) répond à des règles distinctes d'un logement : accessibilité PMR, largeur de circulation, issues de secours et parfois classement au titre de la sécurité incendie selon la surface et l'activité. Ces contraintes se vérifient avant de dessiner l'agencement, pas après.",
      "L'aménagement d'un comptoir d'accueil, d'une vitrine ou de présentoirs muraux sur mesure suit la même logique que la menuiserie résidentielle — relevé du volume réel, dessin coté, fabrication en atelier — mais avec des contraintes d'usage intensif : résistance à l'abrasion, entretien facilité et parfois éclairage technique intégré au mobilier.",
      "Les réseaux électriques et de climatisation d'un local commercial sont généralement plus denses que dans un logement, en particulier pour l'éclairage d'exposition et les équipements spécifiques à l'activité. Le séquencement des lots — réseaux d'abord, agencement ensuite — reste la même règle que pour tout chantier bien piloté.",
    ],
  },
];

/* Galerie réalisations — illustrative (nouvelle marque, pas de vrai chantier
   photographié). Réduite à 6 visuels et légendée en langage de matière plutôt
   qu'en langage de projet, pour ne jamais affirmer une réalisation qui n'existe
   pas (cf. audit T3 §3.2). Catégorie "appartement" supprimée : hors territoire. */
export type Categorie = "cuisine" | "sdb" | "sejour" | "chambre" | "menuiserie" | "chantier";
export const GALERIE_CATEGORIES: { id: Categorie; label: string }[] = [
  { id: "cuisine", label: "Cuisine" },
  { id: "sdb", label: "Salle de bain" },
  { id: "menuiserie", label: "Menuiserie sur-mesure" },
  { id: "chantier", label: "Chantier en cours" },
  { id: "sejour", label: "Séjour" },
  { id: "chambre", label: "Chambre" },
];

/* Photos « · chantier des équipes partenaires » = RÉELLES, fournies par le
   client le 27/08 et vérifiées image par image (registre docs/REGISTRE-MEDIAS.md).
   Les entrées « · illustration » restent des visuels de niveau de finition.
   ⚠ Ne jamais se fier au nom de fichier : les labels décrivent les pixels. */
export const GALERIE = [
  { src: "chCuisineSauge", label: "Cuisine vert sauge, crédence en pierre verte · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  { src: "chCuisineCremeIlot", label: "Cuisine crème, îlot central et plans noirs · chantier des équipes partenaires", cat: "cuisine", portrait: false },
  { src: "chCuisineTerracotta", label: "Cuisine terracotta et blanc sous corniches d'époque · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  { src: "chCuisineBlancheU", label: "Cuisine blanche en U, plans bois · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  /* 05/09 : chSdbCarreauxCiment retirée de la galerie. Cette douche était affichée sur
     cinq pages — deux articles de blog, /renovation-salle-de-bain-maison (sous la clé
     alias salleBainBeton), /tendances-materiaux-francais et ici. La galerie conserve
     chSdbBaignoireTeck pour la catégorie salle de bain, juste en dessous. */
  { src: "chSdbBaignoireTeck", label: "Baignoire îlot et meuble teck, fin de pose · chantier des équipes partenaires", cat: "sdb", portrait: false },
  { src: "chBibliotheque", label: "Bibliothèque toute hauteur contre mur en pierre · chantier des équipes partenaires", cat: "menuiserie", portrait: true },
  { src: "chLitCabane", label: "Lit cabane et rangements d'enfant, en fabrication · chantier des équipes partenaires", cat: "menuiserie", portrait: true },
  { src: "chMenuiserieClaustra", label: "Mur de tasseaux et porte intégrée, en pose · chantier des équipes partenaires", cat: "menuiserie", portrait: false },
  { src: "chCharpenteLevee", label: "Charpente bois levée avant couverture · chantier des équipes partenaires", cat: "chantier", portrait: false },
  { src: "chSurelevationBrique", label: "Élévation briques grande hauteur, échafaudage intérieur · chantier des équipes partenaires", cat: "chantier", portrait: false },
  /* 05/09 : chIsolationCombles retirée de la galerie. Elle reste employée à deux
     endroits seulement — l'article « sortir-passoire-energetique » et /extension-maison,
     où une isolation de construction neuve est cohérente puisqu'une extension EST du
     neuf. Partout ailleurs elle laissait croire qu'un chantier neuf était une rénovation. */
  { src: "chParquetVitrifie", label: "Parquet ancien poncé et vitrifié, cheminée conservée · chantier des équipes partenaires", cat: "sejour", portrait: false },
  { src: "refCuisineSejour", label: "Séjour et salle à manger, table en marbre · illustration", cat: "sejour", portrait: false },
  { src: "refSalleBainMarbreClair", label: "Salle d'eau, douche et vasque en pierre claire · illustration", cat: "sdb", portrait: true },
  { src: "refChambreTeteLitVelours", label: "Chambre, balcons haussmanniens sur rue · illustration", cat: "chambre", portrait: true },
] as const;
