// ============================================================
// CHANGELOGS DATA — Extension Fractured Underworld
// Site bilingue FR / EN.
//
// Pour ajouter un nouveau changelog, ajouter un objet au DEBUT du tableau.
// Le premier element du tableau sera affiche en premier.
//
// Structure d'une section :
//   { type, icon, title, count, content }
//
// i18n : les champs traduisibles ("label", "title", "count", "content")
// sont des objets { fr, en }. Les champs partages ("date", "icon", "type")
// restent de simples chaines. Une chaine simple est affichee telle quelle
// dans les deux langues (pratique pour les noms propres, codes, etc.).
//
// Types disponibles : important, event, add, buff, nerf, fix, adjust, staff
//
// Le champ "content" est du HTML libre (listes, stat-blocks, callouts, etc.)
// ============================================================

const CHANGELOGS = [
  {
    date: "29/06/2026",
    label: { fr: "Beta 1 — 29 Juin 2026", en: "Beta 1 — June 29, 2026" },
    sections: [
      {
        type: "important",
        icon: "🌑",
        title: { fr: "Patch Note Beta 1", en: "Patch Note Beta 1" },
        count: { fr: "Fractured Underworld", en: "Fractured Underworld" },
        content: {
          fr: `
          <ul>
            <li>Première mise à jour <strong>Beta</strong> de l'extension <strong>Fractured Underworld</strong></li>
            <li>Merci de votre patience et de vos retours durant cette phase de test</li>
          </ul>`,
          en: `
          <ul>
            <li>First <strong>Beta</strong> update of the <strong>Fractured Underworld</strong> expansion</li>
            <li>Thank you for your patience and feedback during this testing phase</li>
          </ul>`
        }
      },
      {
        type: "add",
        icon: "🎣",
        title: { fr: "Pêche", en: "Fishing" },
        count: { fr: "7 changements", en: "7 changes" },
        content: {
          fr: `
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
          </ul>`,
          en: `
          <div class="sub-header">🆕 New</div>
          <ul>
            <li>Added <strong>tool vendor NPCs</strong> and their shops in the <strong>Starting Town</strong></li>
          </ul>
          <div class="sub-header">📈 Balancing</div>
          <ul>
            <li>Increased the <strong>fishing rod durability</strong> (tier 1) as well as the associated tools</li>
            <li>Rebalanced <strong>fishing zones and pools</strong> (rarity &amp; catch distribution)</li>
          </ul>
          <div class="sub-header">🔧 Fixes</div>
          <ul>
            <li>The tutorial zone <strong>hologram</strong> shows up again</li>
            <li>The <strong>correct fish</strong> are now caught</li>
            <li>Fixed the <strong>fishing rod</strong> and <strong>minigame</strong> bug when the rod breaks</li>
            <li><strong>Translation</strong> fixes (items and zones)</li>
          </ul>`
        }
      },
      {
        type: "add",
        icon: "⚒️",
        title: { fr: "Forge &amp; Craft", en: "Forge &amp; Crafting" },
        count: { fr: "5 changements", en: "5 changes" },
        content: {
          fr: `
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
          </ul>`,
          en: `
          <div class="sub-header">🆕 New</div>
          <ul>
            <li>New <strong>recipes</strong> and <strong>crafting stations</strong></li>
            <li>New <strong>recycling stations</strong> (weapons &amp; accessories)</li>
          </ul>
          <div class="sub-header">⚙️ Adjustments</div>
          <ul>
            <li><strong>Ingot</strong> recipes (iron, bauxite, onyx, amethyst, grainy copper, steel iron) now cost <strong>1 skill point</strong></li>
            <li>« <strong>Training</strong> » weapons are now <strong>guaranteed on craft</strong></li>
          </ul>
          <div class="sub-header">🔧 Fixes</div>
          <ul>
            <li>The <strong>forge</strong> no longer disappears</li>
          </ul>`
        }
      },
      {
        type: "fix",
        icon: "⚔️",
        title: { fr: "Mobs &amp; Donjons — Ruines Maudites", en: "Mobs &amp; Dungeons — Cursed Ruins" },
        count: { fr: "5 fixes", en: "5 fixes" },
        content: {
          fr: `
          <ul>
            <li>👑 <strong>Narax</strong> (Roi-Liche) : son <strong>ombre de téléportation</strong> fonce désormais vers vous au lieu de rester figée ; ses <strong>faux et tornades</strong> ne se bloquent plus en vol</li>
            <li>🐗 <strong>Pumba</strong> (sanglier enragé) : se défend à nouveau (portée de mêlée adaptée à sa taille)</li>
            <li>💀 Correction des <strong>drops des squelettes mage</strong></li>
            <li>🔥 <strong>Squelettes de Feu</strong> : optimisation — <strong>4× moins de lag réseau</strong></li>
            <li>🐉 <strong>Monture Dragon</strong> de donjon : correction du modèle</li>
          </ul>`,
          en: `
          <ul>
            <li>👑 <strong>Narax</strong> (Lich King): his <strong>teleportation shadow</strong> now charges toward you instead of staying frozen; his <strong>scythes and tornadoes</strong> no longer get stuck mid-air</li>
            <li>🐗 <strong>Pumba</strong> (enraged boar): defends itself again (melee range adapted to its size)</li>
            <li>💀 Fixed <strong>mage skeleton drops</strong></li>
            <li>🔥 <strong>Fire Skeletons</strong>: optimization — <strong>4× less network lag</strong></li>
            <li>🐉 Dungeon <strong>Dragon Mount</strong>: model fix</li>
          </ul>`
        }
      },
      {
        type: "buff",
        icon: "🏹",
        title: { fr: "Classes", en: "Classes" },
        count: { fr: "Archer", en: "Archer" },
        content: {
          fr: `
          <div class="sub-header">🎯 Archer</div>
          <ul>
            <li>Le <strong>combo à l'arbalète</strong> touche enfin les <strong>gros mobs</strong></li>
          </ul>
          <div class="stat-block">
            Dispersion <span class="arrow">→</span> <span class="val-new">−25 %</span>
          </div>`,
          en: `
          <div class="sub-header">🎯 Archer</div>
          <ul>
            <li>The <strong>crossbow combo</strong> finally hits <strong>large mobs</strong></li>
          </ul>
          <div class="stat-block">
            Spread <span class="arrow">→</span> <span class="val-new">−25 %</span>
          </div>`
        }
      },
      {
        type: "fix",
        icon: "🏝️",
        title: { fr: "Skyblock", en: "Skyblock" },
        count: { fr: "3 correctifs", en: "3 fixes" },
        content: {
          fr: `
          <div class="sub-header">🔧 Corrections</div>
          <ul>
            <li>Correction de la <strong>duplication des PNJ</strong> qui rendait l'interaction difficile</li>
            <li>Correction de la <strong>duplication des ressources</strong> (charbon, bois, etc.)</li>
          </ul>
          <div class="sub-header">🗺️ Journeymap</div>
          <ul>
            <li>Ajout du <strong>plugin de gestion de Journeymap</strong> — vos cartes ne devraient plus disparaître en Skyblock</li>
          </ul>
          <div class="callout">💡 N'hésitez pas à activer le <strong>support multimonde</strong> dans les paramètres de Journeymap</div>`,
          en: `
          <div class="sub-header">🔧 Fixes</div>
          <ul>
            <li>Fixed <strong>NPC duplication</strong> that made interaction difficult</li>
            <li>Fixed <strong>resource duplication</strong> (coal, wood, etc.)</li>
          </ul>
          <div class="sub-header">🗺️ Journeymap</div>
          <ul>
            <li>Added the <strong>Journeymap management plugin</strong> — your maps should no longer disappear in Skyblock</li>
          </ul>
          <div class="callout">💡 Feel free to enable <strong>multiworld support</strong> in the Journeymap settings</div>`
        }
      },
      {
        type: "adjust",
        icon: "🧩",
        title: { fr: "Divers", en: "Misc" },
        count: { fr: "4 changements", en: "4 changes" },
        content: {
          fr: `
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
          </ul>`,
          en: `
          <div class="sub-header">📦 SAOCollection</div>
          <ul>
            <li>Added <strong>teleports</strong>, including the <strong>Skeleton Ruins tp</strong></li>
          </ul>
          <div class="sub-header">🔧 Fixes</div>
          <ul>
            <li>Fixed <strong>Cardinal Relay duplication</strong> on level up</li>
            <li><strong>Quest scroll</strong>: you can once again <strong>teleport back to the Skeleton</strong> after dying</li>
          </ul>
          <div class="sub-header">🙏 Configuration</div>
          <ul>
            <li>Adjustments to the <strong>SAO-Blessing configuration</strong></li>
          </ul>`
        }
      }
    ]
  }
];
