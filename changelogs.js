// ============================================================
// CHANGELOGS DATA — Extension Fractured Underworld
// Pour ajouter un nouveau changelog, ajouter un objet au DEBUT du tableau.
// Le premier element du tableau sera affiche en premier.
//
// Structure d'une section :
//   { type, icon, title, count, content }
//
// Types disponibles : important, event, add, buff, nerf, fix, adjust, staff
//
// Le champ "content" est du HTML libre (listes, stat-blocks, callouts, etc.)
// ============================================================

const CHANGELOGS = [
  {
    date: "29/06/2026",
    label: "Beta 1 — 29 Juin 2026",
    sections: [
      {
        type: "important",
        icon: "🌑",
        title: "Patch Note Beta 1",
        count: "Fractured Underworld",
        content: `
          <ul>
            <li>Première mise à jour <strong>Beta</strong> de l'extension <strong>Fractured Underworld</strong></li>
            <li>Merci de votre patience et de vos retours durant cette phase de test</li>
          </ul>`
      },
      {
        type: "add",
        icon: "🎣",
        title: "Pêche",
        count: "7 changements",
        content: `
          <div class="sub-header">🆕 Nouveautés</div>
          <ul>
            <li>Ajout des <strong>PNJ vendeurs d'outils</strong> et de leurs boutiques en <strong>Ville de Départ</strong></li>
          </ul>
          <div class="sub-header">📈 Équilibrage</div>
          <ul>
            <li>Augmentation de la <strong>durabilité de la canne à pêche</strong> (palier 1) ainsi que des outils associés</li>
            <li>Rééquilibrage des <strong>zones et pools de pêche</strong> (rareté &amp; répartition des prises)</li>
          </ul>
          <div class="sub-header">🔧 Corrections</div>
          <ul>
            <li>L'<strong>hologramme</strong> de la zone tuto s'affiche de nouveau</li>
            <li>Les <strong>bons poissons</strong> sont désormais pêchés</li>
            <li>Correction du bug de <strong>canne à pêche</strong> et du <strong>mini-jeu</strong> lorsque la canne casse</li>
            <li>Corrections de <strong>traduction</strong> (items et zones)</li>
          </ul>`
      },
      {
        type: "add",
        icon: "⚒️",
        title: "Forge &amp; Craft",
        count: "5 changements",
        content: `
          <div class="sub-header">🆕 Nouveautés</div>
          <ul>
            <li>Nouvelles <strong>recettes</strong> et <strong>stations de craft</strong></li>
            <li>Nouvelles <strong>stations de recyclage</strong> (armes &amp; accessoires)</li>
          </ul>
          <div class="sub-header">⚙️ Ajustements</div>
          <ul>
            <li>Les recettes de <strong>lingots</strong> (fer, bauxite, onyx, améthyste, cuivre granuleux, fer acier) coûtent désormais <strong>1 point de skill</strong></li>
            <li>Les armes « <strong>d'Entraînement</strong> » sont maintenant <strong>garanties au craft</strong></li>
          </ul>
          <div class="sub-header">🔧 Corrections</div>
          <ul>
            <li>La <strong>forge</strong> ne disparaît plus</li>
          </ul>`
      },
      {
        type: "fix",
        icon: "⚔️",
        title: "Mobs &amp; Donjons — Ruines Maudites",
        count: "5 fixes",
        content: `
          <ul>
            <li>👑 <strong>Narax</strong> (Roi-Liche) : son <strong>ombre de téléportation</strong> fonce désormais vers vous au lieu de rester figée ; ses <strong>faux et tornades</strong> ne se bloquent plus en vol</li>
            <li>🐗 <strong>Pumba</strong> (sanglier enragé) : se défend à nouveau (portée de mêlée adaptée à sa taille)</li>
            <li>💀 Correction des <strong>drops des squelettes mage</strong></li>
            <li>🔥 <strong>Squelettes de Feu</strong> : optimisation — <strong>4× moins de lag réseau</strong></li>
            <li>🐉 <strong>Monture Dragon</strong> de donjon : correction du modèle</li>
          </ul>`
      },
      {
        type: "buff",
        icon: "🏹",
        title: "Classes",
        count: "Archer",
        content: `
          <div class="sub-header">🎯 Archer</div>
          <ul>
            <li>Le <strong>combo à l'arbalète</strong> touche enfin les <strong>gros mobs</strong></li>
          </ul>
          <div class="stat-block">
            Dispersion <span class="arrow">→</span> <span class="val-new">−25 %</span>
          </div>`
      },
      {
        type: "fix",
        icon: "🏝️",
        title: "Skyblock",
        count: "3 correctifs",
        content: `
          <div class="sub-header">🔧 Corrections</div>
          <ul>
            <li>Correction de la <strong>duplication des PNJ</strong> qui rendait l'interaction difficile</li>
            <li>Correction de la <strong>duplication des ressources</strong> (charbon, bois, etc.)</li>
          </ul>
          <div class="sub-header">🗺️ Journeymap</div>
          <ul>
            <li>Ajout du <strong>plugin de gestion de Journeymap</strong> — vos cartes ne devraient plus disparaître en Skyblock</li>
          </ul>
          <div class="callout">💡 N'hésitez pas à activer le <strong>support multimonde</strong> dans les paramètres de Journeymap</div>`
      },
      {
        type: "adjust",
        icon: "🧩",
        title: "Divers",
        count: "4 changements",
        content: `
          <div class="sub-header">📦 SAOCollection</div>
          <ul>
            <li>Ajout des <strong>téléportations</strong>, dont le <strong>tp des Ruines Squelettes</strong></li>
          </ul>
          <div class="sub-header">🔧 Correctifs</div>
          <ul>
            <li>Correction de la <strong>duplication du Cardinal Relay</strong> lors du level up</li>
            <li><strong>Parchemin de quête</strong> : il est de nouveau possible de se <strong>re-téléporter au Skeleton</strong> après être mort</li>
          </ul>
          <div class="sub-header">🙏 Configuration</div>
          <ul>
            <li>Ajustements de la <strong>configuration SAO-Blessing</strong></li>
          </ul>`
      }
    ]
  }
];
