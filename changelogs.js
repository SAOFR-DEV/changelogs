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
    date: "01/07/2026",
    label: { fr: "01 Juillet 2026", en: "July 1, 2026" },
    sections: [
      {
        type: "important",
        icon: "⚠️",
        title: { fr: "Important — Reset &amp; recalibrage XP + Compétences", en: "Important — XP &amp; Skills reset &amp; recalibration" },
        count: { fr: "À lire", en: "Read me" },
        content: {
          fr: `
          <ul>
            <li>🔄 <strong>Reset de l'XP</strong> des joueurs</li>
            <li>📊 L'<strong>XP donnée par les mobs</strong> a été recalibrée</li>
            <li>🆙 Les <strong>montants d'XP requis</strong> par niveau ont été ajustés</li>
            <li>📜 Les <strong>quêtes principales &amp; secondaires</strong> seront recalibrées prochainement</li>
            <li>⚔️ Les <strong>compétences sont de retour</strong>, toujours en peaufinage / équilibrage pour leur version finale</li>
          </ul>
          <div class="callout">⚠️ Évitez d'effectuer toute quête en dehors de celles requises pour le <strong>tutoriel</strong> !</div>`,
          en: `
          <ul>
            <li>🔄 Players' <strong>XP has been reset</strong></li>
            <li>📊 <strong>Mob XP rewards</strong> have been recalibrated</li>
            <li>🆙 The <strong>XP required per level</strong> has been adjusted</li>
            <li>📜 <strong>Main &amp; side quests</strong> will be recalibrated soon</li>
            <li>⚔️ <strong>Skills are back</strong>, still being fine-tuned / balanced toward their final version</li>
          </ul>
          <div class="callout">⚠️ Please avoid doing any quest other than those required for the <strong>tutorial</strong> !</div>`
        }
      },
      {
        type: "buff",
        icon: "🏹",
        title: { fr: "Refonte Archer", en: "Archer Rework" },
        count: { fr: "Grosse mise à jour", en: "Major update" },
        content: {
          fr: `
          <ul>
            <li>🌧️ <strong>Pluie de Flèches</strong> : flash de tir (muzzle) sur la 1ʳᵉ salve + VFX retravaillée</li>
            <li>☄️ <strong>Déluge Céleste</strong> : 1er coup garanti à 100 % dmg, puis 75 % dmg sur toutes les flèches — multi-hit + optimisation FPS</li>
            <li>💨 <strong>Flèches Rapides</strong> (refonte) : 10 flèches en visée libre (7×25 % + 3×100 %), ~1 s de charge (anim, effet &amp; sons d'énergie)</li>
            <li>🎯 <strong>Tir Évasif</strong> : touche mieux + cadence resserrée (3 flèches à 75 / 100 / 125 % dmg)</li>
            <li>🥷 <strong>Embuscade</strong> : 2,5 % dmg par flèche (max 25 % dmg), fenêtre de tir 3 s, cooldown 15 s</li>
            <li>📖 <strong>Descriptions (lore)</strong> des skills réécrites pour coller au comportement réel</li>
          </ul>`,
          en: `
          <ul>
            <li>🌧️ <strong>Arrow Rain</strong>: muzzle flash on the 1st volley + reworked VFX</li>
            <li>☄️ <strong>Celestial Deluge</strong>: 1st hit guaranteed at 100 % dmg, then 75 % dmg on all arrows — multi-hit + FPS optimization</li>
            <li>💨 <strong>Rapid Arrows</strong> (rework): 10 free-aim arrows (7×25 % + 3×100 %), ~1 s charge (animation, effect &amp; energy sounds)</li>
            <li>🎯 <strong>Evasive Shot</strong>: better accuracy + tighter fire rate (3 arrows at 75 / 100 / 125 % dmg)</li>
            <li>🥷 <strong>Ambush</strong>: 2.5 % dmg per arrow (max 25 % dmg), 3 s firing window, 15 s cooldown</li>
            <li>📖 Skill <strong>lore descriptions</strong> rewritten to match actual behavior</li>
          </ul>`
        }
      },
      {
        type: "adjust",
        icon: "⚔️",
        title: { fr: "Équilibrage Combat", en: "Combat Balancing" },
        count: { fr: "3 changements", en: "3 changes" },
        content: {
          fr: `
          <ul>
            <li>🗡️ <strong>+1 dégât d'attaque</strong> sur toutes les armes (13 types, P1 → P3)</li>
            <li>👊 <strong>Mains nues nerfées</strong> : dégâts réduits de 1 (elles ne font donc plus aucun dégât) — anti-autoclick</li>
            <li>📜 Mise à jour des <strong>descriptions de skills</strong> (assassin / guerrier / chaman / archer alignés sur le format mage)</li>
          </ul>`,
          en: `
          <ul>
            <li>🗡️ <strong>+1 attack damage</strong> on all weapons (13 types, T1 → T3)</li>
            <li>👊 <strong>Bare hands nerfed</strong>: damage reduced by 1 (so they now deal no damage) — anti-autoclick</li>
            <li>📜 Updated <strong>skill descriptions</strong> (assassin / warrior / shaman / archer aligned with the mage format)</li>
          </ul>`
        }
      },
      {
        type: "add",
        icon: "🗺️",
        title: { fr: "Donjons — Parchemins &amp; Archéologues", en: "Dungeons — Scrolls &amp; Archaeologists" },
        count: { fr: "3 changements", en: "3 changes" },
        content: {
          fr: `
          <div class="sub-header">🆕 Nouveautés</div>
          <ul>
            <li>📜 <strong>Parchemins d'Information</strong> de loot pour Araignées / Kobolds / Labyrinthe (P1) et Abeille / Nécro (P2)</li>
            <li>🧑‍🔬 Nouveaux <strong>PNJ Archéologues</strong> avec stations &amp; vitrines (consultation du butin des coffres)</li>
          </ul>
          <div class="sub-header">⚖️ Équilibrage</div>
          <ul>
            <li>De nombreux <strong>ajustements d'équilibrage</strong> du donjon <strong>Geldorack</strong></li>
          </ul>`,
          en: `
          <div class="sub-header">🆕 New</div>
          <ul>
            <li>📜 Loot <strong>Information Scrolls</strong> for Spiders / Kobolds / Labyrinth (T1) and Bee / Necro (T2)</li>
            <li>🧑‍🔬 New <strong>Archaeologist NPCs</strong> with stations &amp; display cases (browse chest loot)</li>
          </ul>
          <div class="sub-header">⚖️ Balancing</div>
          <ul>
            <li>Numerous <strong>balancing adjustments</strong> to the <strong>Geldorack</strong> dungeon</li>
          </ul>`
        }
      },
      {
        type: "adjust",
        icon: "🐗",
        title: { fr: "Mobs &amp; Divers", en: "Mobs &amp; Misc" },
        count: { fr: "6 changements", en: "6 changes" },
        content: {
          fr: `
          <ul>
            <li>🎨 <strong>Sanglier enragé</strong> : nouvelles textures + équilibrage</li>
            <li>👺 <strong>Gobelins</strong> (Donjon Memory Labyrinthe) : mise à jour en cours (équilibrage / IA)</li>
            <li>🎣 Correctifs <strong>Pêche</strong></li>
            <li>📦 Correctifs <strong>Collection</strong></li>
            <li>♻️ Ajout du <strong>Tissu Maudit</strong> chez le PNJ de revente de matériaux</li>
            <li>🔧 Correctifs sur l'<strong>arbalète</strong>, les <strong>recettes de craft</strong> et divers items</li>
          </ul>`,
          en: `
          <ul>
            <li>🎨 <strong>Enraged Boar</strong>: new textures + balancing</li>
            <li>👺 <strong>Goblins</strong> (Memory Labyrinth dungeon): update in progress (balancing / AI)</li>
            <li>🎣 <strong>Fishing</strong> fixes</li>
            <li>📦 <strong>Collection</strong> fixes</li>
            <li>♻️ Added <strong>Cursed Cloth</strong> to the materials-resale NPC</li>
            <li>🔧 Fixes to the <strong>crossbow</strong>, <strong>crafting recipes</strong> and various items</li>
          </ul>`
        }
      },
      {
        type: "fix",
        icon: "🌑",
        title: { fr: "Fractured Underworld", en: "Fractured Underworld" },
        count: { fr: "4 fixes", en: "4 fixes" },
        content: {
          fr: `
          <ul>
            <li>Correction des <strong>bugs de duplication</strong></li>
            <li>Correction de <strong>toutes les quêtes</strong> : le <strong>tutoriel est désormais 100 % fonctionnel</strong></li>
            <li>Correction du positionnement de <strong>Yui</strong> (elle fait désormais face aux joueurs)</li>
            <li>Correction d'un bug de <strong>migration</strong> qui, dans certains cas, provoquait une mauvaise migration des anciens items vers les nouveaux</li>
          </ul>`,
          en: `
          <ul>
            <li>Fixed <strong>duplication bugs</strong></li>
            <li>Fixed <strong>all quests</strong>: the <strong>tutorial is now 100 % functional</strong></li>
            <li>Fixed <strong>Yui</strong>'s positioning (she now faces the players)</li>
            <li>Fixed a <strong>migration bug</strong> that, in some cases, caused old items to migrate incorrectly to the new ones</li>
          </ul>`
        }
      }
    ]
  },
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
