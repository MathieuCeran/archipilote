import Link from "next/link";
import { Tirage } from "../components/tirage";

/* ============================================================================
   HERO — l’unique moment appuyé du site.

   Ce que l’on montre en premier n’est ni un slogan ni un chiffre : c’est le
   geste même du métier. Une pièce livrée, et par-dessus, la couche
   d’annotation technique qui se dessine une fois au chargement. Le trait, puis
   la matière. En six secondes, le visiteur a compris que cette entreprise lit
   un bâtiment avant de le chiffrer — ce qu’aucune phrase d’accroche ne fait
   aussi vite.

   Alignement du calque sur la photo : le SVG utilise `preserveAspectRatio
   ="xMidYMid slice"`, qui recadre exactement comme `object-fit: cover`. Les
   repères restent donc collés aux éléments qu’ils désignent à toutes les
   tailles d’écran, sans une ligne de JavaScript.

   Les trois annotations couvrent les trois registres de la maison :
   patrimoine (ce qui se conserve), administratif (ce qu’il faut obtenir),
   technique (ce qui se mesure). Une seule est en orange de repérage — c’est
   la convention de leurs propres axonométries pour cercler le point critique,
   et c’est la seule tache de cette couleur à l’écran.
   ============================================================================ */

type Etiquette = {
  x: number;
  y: number;
  w: number;
  texte: string;
  critique?: boolean;
  delai: number;
};

/* ⚠️ CES COORDONNÉES NE SE DEVINENT PAS.

   Trois versions ont été posées à l’estime, et les trois visaient à côté : la
   corniche désignait un pan de plafond nu, le cercle orange un mur blanc entre
   deux fenêtres, le parquet le tapis.

   Méthode qui a fini par marcher : masquer la couche, poser une grille de
   points numérotés aux coordonnées du dessin, prendre une capture, et lire
   directement quel point tombe sur quoi. Sans calcul, donc sans erreur
   d’échelle — la capture d’écran est réduite par rapport à la fenêtre réelle,
   ce qui avait faussé les deux tentatives précédentes.

   IL N’Y A QUE DEUX REPÈRES, ET C’EST UN CHOIX.
   Le troisième annonçait « parquet chêne à chevrons ». Or le sol de cette
   photographie est presque entièrement couvert par un tapis : le parquet n’y
   est visible que dans les coins, là où le recadrage le mange. Un repère qui
   désigne un tapis en le nommant parquet est pire que pas de repère. Les deux
   restants portent les deux registres qui comptent : ce qui se conserve, et ce
   qu’il faut obtenir. */
/* `w` est la LARGEUR RÉELLE DU TEXTE, en unités du viewBox — relevée au
   getBBox() dans le navigateur, pas estimée. Le cartouche vaut w + 36 :
   dix-huit unités de blanc de chaque côté. Les valeurs posées à l'estime
   (372 et 404) donnaient un bandeau 43 unités trop large pour le premier, et
   25 trop court pour le second, dont la dernière lettre sortait du verre.
   Si l'on change un libellé, il faut relever la nouvelle largeur. */
const ETIQUETTES: Etiquette[] = [
  { x: 1122, y: 252, w: 329, texte: "Corniche et panneautage conservés", delai: 1.25 },
  { x: 1265, y: 662, w: 429, texte: "Menuiseries et garde-corps : avis ABF à obtenir", critique: true, delai: 1.7 },
];

export function HeroRefonte() {
  return (
    <section className="rf-hero">

      <div className="rf-hero-media">
      <img
        src="/photos/maquette/hero-renovation.jpg"
        alt="Séjour d’un appartement haussmannien livré : panneautage mouluré, corniche ornée, parquet chêne à chevrons et hautes fenêtres ouvrant sur balcon"
        fetchPriority="high"
        width={1920}
        height={1088}
        className="rf-hero-photo"
      />
      <div className="rf-hero-voile" aria-hidden />


      {/* Couche d’annotation — décorative pour un lecteur d’écran : tout ce
          qu’elle dit est repris en clair dans le bandeau qui suit. */}
      <svg
        /* xl et non lg : à 1024 px — le seuil précédent — le second cartouche
           sortait de l’écran par la droite et passait sur le titre. Mesuré aux
           cinq largeurs de 1024 à 2560 ; à partir de 1280 la gouttière droite
           est assez large pour les deux bandeaux. */
        className="rf-calque hidden xl:block"
        viewBox="0 0 1920 1088"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        focusable="false"
      >
        {/* Le verre du cartouche. Un dégradé plutôt qu'un aplat : le haut,
            sous le filet, est un peu plus dense — c'est ce qui donne au
            bandeau son épaisseur sans lui donner de poids. `backdrop-filter`
            n'existe pas dans un SVG ; ce dégradé en tient lieu. */}
        <defs>
          <linearGradient id="rf-verre" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d1113" stopOpacity="0.82" />
            <stop offset="1" stopColor="#0d1113" stopOpacity="0.66" />
          </linearGradient>
        </defs>

        {/* A · Corniche et panneautage — ce qui se conserve */}
        <circle className="rf-cible" cx={1122} cy={184} r={9} style={{ "--d": "1.1s" } as React.CSSProperties} />
        <path
          className="rf-trait"
          pathLength={1}
          d="M1122 193 L1122 250"
          style={{ "--d": "1.1s" } as React.CSSProperties}
        />

        {/* B · Garde-corps et menuiseries — le point critique, cerclé */}
        <circle className="rf-critique" cx={1265} cy={546} r={46} style={{ "--d": "1.55s" } as React.CSSProperties} />
        <path
          className="rf-trait"
          pathLength={1}
          d="M1265 592 L1265 660"
          style={{ "--d": "1.55s" } as React.CSSProperties}
        />

        {/* L’ÉTIQUETTE A ÉTÉ REFAITE DEUX FOIS. C’EST LA TROISIÈME VERSION.

            Version 1 : deux pavés pleins — l’un noir à 90 %, l’autre orange à
            94 % — sur la plus belle photographie du site. Lisible, mais c’était
            la chose la plus bruyante de la page, et c’était du décor.

            Version 2 : plus d’aplat du tout, seulement un filet et deux ombres
            portées. Élégant sur le papier ; illisible en vrai. Cette
            photographie est presque blanche sur les deux tiers de sa hauteur,
            et une ombre portée ne crée pas de contraste, elle le suggère.
            Mesuré : du #f4f1ea sur ce fond ne dépasse pas 1,4:1.

            Version 3, ici : un cartouche de verre. Un dégradé sombre à 82 →
            66 %, couronné du filet — bleu pour ce qui se conserve, orange pour
            le point à obtenir. Ces deux valeurs ne sont pas choisies à l’œil :
            la photographie a été échantillonnée au canvas sous chaque bandeau,
            le verre composé par-dessus, et le contraste mesuré sur le point le
            plus clair. À 74 → 56 % le premier tombait à 4,22:1, sous le seuil.
            Le bandeau reste transparent : la photographie se lit à travers.
            C’est la légende d’une planche, pas une pastille d’interface. */}
        {ETIQUETTES.map((e) => (
          <g
            key={e.texte}
            className={`rf-etiquette${e.critique ? " rf-etiquette--critique" : ""}`}
            style={{ "--d": `${e.delai}s` } as React.CSSProperties}
          >
            <rect
              className="rf-etiquette-verre"
              x={e.x - 18}
              y={e.y}
              width={e.w + 36}
              height={54}
            />
            <path className="rf-etiquette-filet" d={`M${e.x - 18} ${e.y} H${e.x + e.w + 18}`} />
            <text x={e.x} y={e.y + 35}>
              {e.texte}
            </text>
          </g>
        ))}
      </svg>
      </div>

      {/* LE CACHE — et c’est lui qui bouge, PAS la photographie.

          Version précédente : la photographie elle-même était découpée au
          clip-path. Effet identique à l’œil, mais mesuré au
          PerformanceObserver, une image découpée à zéro n’est plus candidate
          au LCP : Chrome allait chercher un texte SVG invisible et rapportait
          un chiffre qui ne voulait rien dire.

          Ici la photographie est peinte ENTIÈRE dès le premier rendu — elle
          est simplement cachée par ce panneau, qui porte l’élévation et se
          retire vers la droite. Chrome ne teste pas l’occlusion : l’image
          compte comme peinte tout de suite, et c’est elle, la plus grande
          surface de la page, qui devient le LCP. Le geste à l’écran est le
          même ; la mesure, elle, redevient honnête. */}
      <div className="rf-hero-retrait" aria-hidden>
        <Tirage className="rf-tirage--ouverture-hero" />
      </div>

      {/* Le rail : la tranche gauche de l’écran, qui ne servait à rien.
          Il dit où l’on travaille et donne un numéro, en permanence, sans
          prendre une ligne à la composition. Il disparaît sous 1280 px, où
          cette gouttière n’existe plus. */}
      <p className="rf-rail">
        <span>Paris · Hauts-de-Seine · Île-de-France</span>
        <a href="tel:+33667117975">06 67 11 79 75</a>
      </p>

      <div className="rf-wrap relative pb-14 md:pb-20 pt-20">
        <div style={{ maxWidth: "min(100%, 46rem)" }}>
          <p
            className="rf-entree rf-hero-lieu"
            style={{ "--d": "0.3s" } as React.CSSProperties}
          >
            Paris, Hauts-de-Seine et Île-de-France
          </p>

          {/* LE CHAPÔ ÉTAIT DANS LE H1.
              Les deux blocs étaient deux <span> d’un même titre : le h1 de la
              page d’accueil faisait 205 signes, phrase d’accroche et chapô
              collés. Pour un moteur comme pour un lecteur d’écran, c’était un
              paragraphe annoncé comme un titre. Le h1 ne porte plus que la
              phrase ; le chapô est redevenu un paragraphe. */}
          <h1>
            <span className="rf-volet" style={{ "--d": "0.45s" } as React.CSSProperties}>
              <span className="rf-display">Écrit et chiffré avant d’être un chantier.</span>
            </span>
          </h1>

          <p className="rf-entree rf-hero-chapo" style={{ "--d": "0.95s" } as React.CSSProperties}>
            Rénovation complète et chantiers complexes à Paris et en Île-de-France : immeuble haussmannien, périmètre
            ABF, surélévation, extension, transformation de plateau.
          </p>

          <div className="rf-entree flex flex-wrap gap-3 mt-9" style={{ "--d": "1.15s" } as React.CSSProperties}>
            <Link href="/#contact" className="rf-btn rf-btn--clair">
              Décrire mon projet
            </Link>
            <Link href="/notre-methode" className="rf-btn rf-btn--fantome">
              Voir la méthode
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
