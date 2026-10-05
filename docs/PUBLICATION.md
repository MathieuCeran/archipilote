# Publication du site — comment ça marche réellement

Ce document décrit le chemin exact d'une modification jusqu'au visiteur. Il
existe parce que ce chemin n'est **pas** celui qu'on suppose par défaut sur un
projet Next.js hébergé chez Vercel, et que cette supposition a coûté une semaine
de confusion : des commits poussés sur GitHub sans effet visible, un dépôt qui ne
ressemblait plus au site en ligne, un outil de synchronisation qui tourne dans le
vide. Tout est expliqué ci-dessous. Rien n'est cassé — c'est le branchement qui
n'est pas celui attendu.

Rédigé le 09/09/2026, **mis à jour le même jour** après branchement de Vercel sur
GitHub (§2). À tenir à jour si l'un des trois branchements change.

---

## 1. Les trois briques

| Brique | Quoi | Où |
|---|---|---|
| **Code** | dépôt Git, branche `main` = la vérité | `github.com/yabouridasannier-cmyk/archi-pilote-renovation` (public) |
| **Hébergement** | Vercel, projet `global-renovation-maquette`, plan **Hobby** | équipe `yabouridasannier-1537s-projects` |
| **Domaine** | `archipiloterenovation.com`, enregistré chez **Hostinger**, DNS chez Hostinger | pointe vers Vercel (`76.76.21.21`) |

## 2. Comment le site est publié : un push sur `main` = un déploiement

**Depuis le 09/09/2026 (après-midi), Vercel est branché sur le dépôt GitHub**,
branche de production `main`. Chaque push sur `main` déclenche un build et une
mise en production automatiques. Un push sur une autre branche produit un
déploiement de prévisualisation (URL `*.vercel.app`, protégée par connexion
Vercel).

```bash
git pull                 # se mettre à jour
npm run build            # vérifier que ça construit (101 pages)
git push origin main     # → Vercel construit et publie, ~1 à 2 min
```

**Avant le 09/09, ce n'était pas le cas** : le projet n'avait aucun lien Git et
était déployé en ligne de commande (`vercel deploy --prod`) depuis un poste
local. Un push ne publiait rien. C'est ce qui a produit, début septembre, un
dépôt qui ne ressemblait plus au site (26 commits déployés non poussés d'un côté,
10 commits poussés non déployés de l'autre) et un outil de synchronisation qui
tournait dans le vide. Cette page existe à cause de cet épisode.

`vercel deploy --prod` fonctionne toujours, mais n'a plus de raison d'être : il
publierait l'état d'un poste local sans passer par GitHub, et recréerait la
divergence. **Ne plus l'employer.**

### Règles

1. **`main` sur GitHub est la référence, et ce qui y est poussé est en ligne.**
   Avant tout travail : `git pull`.
2. **Ce qu'on pousse sur `main` est publié.** Une modification qu'on ne veut pas
   voir en ligne se travaille sur une branche, jamais sur `main`.
3. **Vérifier le build localement avant de pousser** (`npm run build`) : un push
   qui casse le build laisse la production sur le déploiement précédent, mais
   bloque tout le monde jusqu'à correction.
4. Personne ne force-push sur `main`.

## 3. Qui a accès à quoi

| | GitHub | Vercel | Hostinger (domaine) |
|---|---|---|---|
| Yanis (`yabouridasannier-cmyk`) | admin | propriétaire (seul membre) | oui |
| Thibaut (`agencyinside`) | **écriture** (push) | **aucun — et plus nécessaire** : son push publie | non |

Le plan Hobby de Vercel n'accepte aucun membre supplémentaire. Depuis le
branchement Vercel↔GitHub (§2), un accès Vercel n'est plus utile pour publier :
pousser sur `main` suffit. Le tableau de bord Vercel (journaux de build,
rollback) reste accessible à Yanis seulement.

## 4. Le domaine — et pourquoi le site peut « disparaître » sans qu'on ait rien fait

Le domaine a été enregistré le 28/08/2026. L'ICANN impose de **vérifier l'e-mail
du titulaire sous 15 jours**, sinon le registrar suspend le domaine. C'est arrivé
le **09/09/2026** : les serveurs DNS ont été remplacés par
`ns1/ns2.verification-hold.dns-suspended.com`, et toute adresse du site renvoie
une page « Your domain is suspended ».

- Le site, lui, est intact sur Vercel. On peut le vérifier en forçant l'IP :
  `curl --resolve www.archipiloterenovation.com:443:76.76.21.21 https://www.archipiloterenovation.com/`
- **Déblocage** : Hostinger → Domaines → `archipiloterenovation.com` → « Vérifier
  l'e-mail » (ou le lien du mail Hostinger « Verify your contact information »).
  Retour en quelques minutes à quelques heures.
- Tant que le domaine est suspendu, **aucune vérification Search Console ne peut
  aboutir**, et les visiteurs ne voient rien. Ce point passe avant tout le reste.

Le `.fr` (`archipiloterenovation.fr`) est enregistré mais **ne résout pas** et
n'est pas configuré : ne pas l'employer dans un lien, une image ou un document.
Plusieurs infographies fournies par le client l'impriment en pied de page — c'est
une erreur à corriger à la source, pas dans le code.

## 5. Search Console

Deux moyens de vérification sont déployés (commits d'`agencyinside` du 08/09,
fusionnés et mis en ligne le 09/09) :

- le fichier `public/googleaf2a7616663faa24.html` → servi en HTTP 200 ;
- la balise `<meta name="google-site-verification">` via `verification.google`
  dans `app/layout.tsx` (deux jetons).

La vérification aboutira dès que le DNS sera rétabli (§4). `robots.txt` autorise
tout et déclare le sitemap ; `sitemap.ts` liste toutes les pages, articles
importés compris.

## 6. La synchronisation WhatsWrong

Depuis le 04/10/2026, les articles SEO viennent de **WhatsWrong** (agent Léa), qui
remplace Sedestral. WhatsWrong ne pousse rien : c'est le site qui tire.

Le workflow `.github/workflows/whatswrong-sync.yml` lance toutes les heures
`scripts/whatswrong-sync.mjs`, qui :

1. lit `GET /api/v1/lea/blog-articles?states=DRAFT&limit=20` (DRAFT = terminé et dû
   aujourd'hui : tout est publié) ;
2. copie couverture et images dans `public/uploads/whatswrong/<slug>/`, assainit le
   HTML, écrit dans `content/blog/generated.json` et garde l'id WhatsWrong dans
   `content/blog/_whatswrong-state.json` (jamais deux imports du même article) ;
3. **pousse sur `main`** → Vercel déploie ;
4. attend que la page soit réellement en ligne (15 min max, contrôle du contenu et
   pas seulement du code 200) ;
5. envoie `PATCH { state: PUBLISHED, url }` : c'est ce qui démarre le suivi SEO ;
6. si un article est retiré à la main de `generated.json`, renvoie `{ state: DRAFT }`.

Le commit d'état (`chore: … [skip ci]`) ne redéploie pas : `vercel.json` (`ignoreCommand`)
annule le build Vercel dès que le message de commit contient `[skip ci]`.

La clé d'API est le secret GitHub `WW_API_KEY` (Settings → Secrets and variables →
Actions). Sur une erreur 429 (60 appels/min), le run s'arrête et le suivant reprend.

Les articles déjà importés depuis Sedestral restent en ligne, inchangés
(`sedestralId` dans `generated.json`, images sous `public/uploads/sedestral/`).

Le bot publie sans relecture humaine : il assainit le HTML mais ne juge ni la
cohérence image/titre ni la véracité des affirmations.

## 7. Commandes de référence

```bash
# se mettre à jour avant tout
git pull

# construire et vérifier localement
npm run build
npx tsc --noEmit

# publier = pousser (Vercel construit et met en ligne, ~1-2 min)
git push origin main

# suivre le build : https://vercel.com (compte Yanis), ou attendre puis vérifier le site

# outils de contrôle propres au projet (images)
python3 scripts/verif-integration.py     # cadres, provenance, surexposition
python3 scripts/fichiers-identiques.py   # même fichier sous deux noms
python3 scripts/surexposition.py         # une image vue sur trop de pages
```

Le projet Vercel appartient au compte de Yanis. `.vercel/project.json` (non
versionné) lie le dossier local au projet pour la CLI ; il n'est plus nécessaire
pour publier.

<!-- test de déploiement — 09/09 -->
