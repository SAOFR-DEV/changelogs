// ============================================================
// CHANGELOGS DATA
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
    date: "26/03/2026",
    label: "26 Mars 2026",
    sections: [
      {
        type: "buff",
        icon: "📈",
        title: "Équilibrages",
        count: "5 classes / catégories",
        content: `
          <div class="sub-header">⚔️ Guerrier</div>
          <div class="skill-name">Hache Double Fer</div>
          <div class="stat-block">
            DMG : 17-19 <span class="arrow">→</span> <span class="val-new">21-24</span>
          </div>
          <div class="skill-name">Marteau Sylvestre</div>
          <div class="stat-block">
            DMG : 23 <span class="arrow">→</span> <span class="val-new">29</span><br>
            AS &nbsp;: 0.8 <span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Magical Hammer</div>
          <div class="stat-block">
            DMG : 25-30 <span class="arrow">→</span> <span class="val-new">31-38</span><br>
            AS &nbsp;: 0.8 &nbsp;<span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Halberd Fallen</div>
          <div class="stat-block">
            DMG : 35 <span class="arrow">→</span> <span class="val-new">44</span>
          </div>
          <div class="skill-name">Illfang Axe</div>
          <div class="stat-block">
            DMG : 60 <span class="arrow">→</span> <span class="val-new">75</span>
          </div>
          <div class="skill-name">Sentinel Mace</div>
          <div class="stat-block">
            DMG : 28 <span class="arrow">→</span> <span class="val-new">35</span><br>
            AS &nbsp;: AS <span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Double Hache Kazor</div>
          <div class="stat-block">
            DMG : 37 <span class="arrow">→</span> <span class="val-new">46</span><br>
            AS &nbsp;: 0.8 <span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Marteau Halloween</div>
          <div class="stat-block">
            DMG : 40 <span class="arrow">→</span> <span class="val-new">50</span><br>
            AS &nbsp;: 0.8 <span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Marteau Noël</div>
          <div class="stat-block">
            DMG : 40 <span class="arrow">→</span> <span class="val-new">50</span><br>
            AS &nbsp;: 0.8 <span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Marteau Abeille</div>
          <div class="stat-block">
            DMG : 35-40 <span class="arrow">→</span> <span class="val-new">44-50</span><br>
            AS &nbsp;: 0.8 &nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="skill-name">Lance Abeille</div>
          <div class="stat-block">
            DMG : 50 <span class="arrow">→</span> <span class="val-new">63</span>
          </div>
          <div class="skill-name">Marteau Nécro</div>
          <div class="stat-block">
            DMG : 45-55 <span class="arrow">→</span> <span class="val-new">56-69</span><br>
            AS &nbsp;: 0.8 &nbsp;<span class="arrow">→</span> <span class="val-new">0.7</span>
          </div>
          <div class="callout">🆕 Dégâts critique bonus ajouté sur les armes à deux mains</div>

          <div class="sub-header">🗡️ Assassin</div>
          <ul>
            <li><strong>[NOUVEAU]</strong> Chances critique de compétences bonus ajouté sur les armes à deux mains</li>
            <li><strong>[NOUVEAU]</strong> Stamina bonus ajouté sur les armes à deux mains</li>
          </ul>

          <div class="sub-header">🏹 Archer</div>
          <ul>
            <li><strong>[NOUVEAU]</strong> Chances critique de compétences bonus ajouté sur les arbalètes</li>
            <li><strong>[NOUVEAU]</strong> Stamina bonus ajouté sur les arbalètes</li>
          </ul>

          <div class="sub-header">🧙 Mage</div>
          <div class="skill-name">Bâton Nodachi</div>
          <div class="stat-block">
            AS : 1/s <span class="arrow">→</span> <span class="val-new">1.2/s</span>
          </div>

          <div class="sub-header">💍 Amulette</div>
          <div class="skill-name">Collier Runique</div>
          <div class="stat-block">
            Santé &nbsp;&nbsp;: 15 &nbsp;<span class="arrow">→</span> <span class="val-new">20</span><br>
            Défense : 2.5 <span class="arrow">→</span> <span class="val-new">3.5</span>
          </div>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "1 changement",
        content: `
          <ul>
            <li>Refonte du <strong>lore</strong> des accessoires, des armes, des catalyseurs et des sets</li>
          </ul>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "NerfS_",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            <em>Bon jeu à tous, merci de l'attente</em>
          </div>`
      }
    ]
  },
  {
    date: "24/03/2026",
    label: "24 Mars 2026",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "1 rappel",
        content: `
          <ul>
            <li><strong>RAPPEL</strong> — Comme dit dans les derniers changelog, l'évent de la faille est <strong>terminé</strong></li>
          </ul>`
      },
      {
        type: "add",
        icon: "✨",
        title: "Nouveautés",
        count: "2 ajouts",
        content: `
          <ul>
            <li>Un <strong>repreneur de butins</strong> est arrivé près du forgeron du donjon du Labyrinthe</li>
            <li>Un <strong>repreneur d'armes</strong> est arrivé à Hanaka</li>
          </ul>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "1 fix",
        content: `
          <ul>
            <li><strong>Nasgul</strong> effectue de nouveau sa seconde phase</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "1 changement",
        content: `
          <ul>
            <li>Le <strong>repreneur de butin de Virelune</strong> vous permet de vendre le venin d'araignée</li>
          </ul>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "NerfS_",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            <em>Bon jeu à tous, merci de votre confiance</em>
          </div>`
      }
    ]
  },
  {
    date: "23/03/2026",
    label: "23 Mars 2026",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "3 changements",
        content: `
          <div class="sub-header">🎁 Compensation World Boss</div>
          <ul>
            <li>La <strong>compensation</strong> suite à la première tentative avec le World Boss <em>(15/03)</em> est arrivée auprès d'Hagil — n'est plus disponible</li>
          </ul>
          <div class="sub-header">🗑️ Système Poubelle</div>
          <ul>
            <li>Il est désormais possible d'accéder à une <strong>interface de poubelle</strong> par le biais de la commande : <strong>/trash</strong></li>
          </ul>
          <div class="callout">🎁 Code : <strong>Deonata10</strong></div>
          <div class="sub-header">💝 Saint Valentin & Nouvel An Chinois</div>
          <ul>
            <li>Des PNJs vous permettant d'<strong>échanger vos anciennes ressources</strong> contre des clés et autres sont disponibles à la zone des crates</li>
          </ul>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "4 fixes",
        content: `
          <ul>
            <li>Les <strong>PNJ</strong> se voient refresh toutes les 6 secondes environ pour pallier aux problèmes d'inactivité</li>
            <li>La <strong>fusée lunaire</strong> ne fait plus aucun dégâts envers les autres joueurs</li>
            <li>Les <strong>bourses de la crate Overall</strong> offrent désormais bien les cols</li>
            <li>Le <strong>passif de l'Archer</strong> est désormais fonctionnel</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "1 changement",
        content: `
          <div class="sub-header">💎 Cristaux</div>
          <ul>
            <li>Les cristaux sont désormais <strong>stackables jusqu'à 8 fois</strong></li>
          </ul>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "NerfS_",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            <em>Bon jeu à tous, merci de votre confiance</em>
          </div>`
      }
    ]
  },
  {
    date: "19/03/2026",
    label: "19 Mars 2026",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "4 changements",
        content: `
          <div class="sub-header">🌍 SAO x Earth Leveling</div>
          <ul>
            <li>L'événement est <strong>reporté à la semaine prochaine minimum</strong> — La_Compote_ a des perturbations IRL. Mille excuses pour cela</li>
          </ul>
          <div class="sub-header">🐉 World Boss Kazor</div>
          <ul>
            <li>Le <strong>marchand de Kazor</strong> vous permet d'accéder à l'entièreté de son magasin</li>
            <li>Les <strong>Pièces de Kazor</strong> sont la matière première droppée par le boss en remplissant les conditions <em>(1k5 dmg)</em></li>
          </ul>
          <div class="callout">🚨 Désormais, le World Boss de dimanche aura lieu à <strong>18h</strong></div>
          <div class="sub-header">🎁 Compensation</div>
          <ul>
            <li>La compensation suite à la première tentative avec le World Boss <em>(15/03)</em> est arrivée auprès d'<strong>Hagil</strong></li>
          </ul>
          <div class="sub-header">⚠️ Items</div>
          <ul>
            <li>De nombreux items ont été modifiés (optimisation)</li>
            <li>Si vous observez des dysfonctionnements de stats → mettez à jour vos items en changeant de slot ou via un <strong>drop au sol</strong> + récupération</li>
          </ul>`
      },
      {
        type: "add",
        icon: "✨",
        title: "Nouveautés",
        count: "1 ajout",
        content: `
          <ul>
            <li>Une <strong>torche</strong> est désormais achetable aux marchands d'outils de niveau 1 <em>(exemple : ville de départ)</em></li>
          </ul>`
      },
      {
        type: "buff",
        icon: "📈",
        title: "Équilibrage",
        count: "6 catégories",
        content: `
          <div class="sub-header">🗿 Artefacts</div>
          <div class="skill-name">Bouclier Noir</div>
          <div class="stat-block">
            Santé &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5 &nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">15</span><br>
            Maîtrise de blocage &nbsp;&nbsp;&nbsp;: 2.5% &nbsp;<span class="arrow">→</span> <span class="val-new">3%</span><br>
            <span class="val-new">[NOUVEAU]</span> Puissance de blocage : <span class="val-new">1%</span><br>
            Dégâts d'attaque &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -7.5 &nbsp;<span class="arrow">→</span> <span class="val-new">-3.5</span><br>
            Stamina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -2.5 &nbsp;<span class="arrow">→</span> <span class="val-new">2</span><br>
            Taux de drop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1% &nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">4%</span>
          </div>
          <div class="skill-name">Masque Occulte</div>
          <div class="stat-block">
            <span class="val-new">[NOUVEAU]</span> Puissance de Blocage : <span class="val-new">2.5%</span>
          </div>
          <div class="skill-name">Plume Écarlate</div>
          <div class="stat-block">
            <span class="val-new">[NOUVEAU]</span> Puissance de Blocage : <span class="val-new">0.5%</span>
          </div>

          <div class="sub-header">💍 Amulettes</div>
          <div class="skill-name">Collier du Gardien</div>
          <div class="stat-block">
            Mana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5 &nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">15</span><br>
            Stamina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5 &nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">7.5</span><br>
            <span class="val-new">[NOUVEAU]</span> Régénération de Stamina : <span class="val-new">0.2</span><br>
            <span class="val-new">[NOUVEAU]</span> Régénération de Mana &nbsp;&nbsp;&nbsp;: <span class="val-new">0.4</span><br>
            Taux de drop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1% <span class="arrow">→</span> <span class="val-new">4%</span>
          </div>
          <div class="skill-name">Collier Tricolore</div>
          <div class="stat-block">
            <span class="val-new">[NOUVEAU]</span> Puissance de Blocage : <span class="val-new">0.5%</span>
          </div>

          <div class="sub-header">🔮 Runes</div>
          <div class="skill-name">Rune du Colosse</div>
          <div class="stat-block">
            Dégât magique &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">-3.5</span><br>
            Dégât physique &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">-3.5</span><br>
            Santé &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">-5</span><br>
            Stamina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 2.5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">3</span><br>
            Régénération de Santé &nbsp;: 0.25/s &nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">0.5/s</span><br>
            Taux de drop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">2%</span>
          </div>
          <div class="skill-name">Rune du Gardien</div>
          <div class="stat-block">
            Dégât physique &nbsp;&nbsp;&nbsp;: -10 &nbsp;<span class="arrow">→</span> <span class="val-new">-5</span><br>
            Skill Crit Chance &nbsp;: 2.5 &nbsp;<span class="arrow">→</span> <span class="val-new">3.5</span><br>
            Skill Crit Power &nbsp;&nbsp;: 1.25 <span class="arrow">→</span> <span class="val-new">2.5</span><br>
            Santé &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 10 &nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">15</span><br>
            Taux de drop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1% &nbsp;&nbsp;<span class="arrow">→</span> <span class="val-new">2%</span>
          </div>

          <div class="sub-header">💍 Anneaux</div>
          <div class="skill-name">Anneau de l'Harpie Écrasé</div>
          <div class="stat-block">
            <span class="val-new">[NOUVEAU]</span> Puissance de Blocage : <span class="val-new">1%</span>
          </div>

          <div class="sub-header">🧤 Gants</div>
          <div class="skill-name">Moufle de Noël Gris</div>
          <div class="stat-block">
            <span class="val-new">[NOUVEAU]</span> Puissance de Blocage : <span class="val-new">3%</span>
          </div>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "2 fixes",
        content: `
          <ul>
            <li>Les <strong>lores des skills</strong> affichent les bonnes statistiques pour toutes les classes</li>
            <li>Les <strong>hitbox des harpies</strong> de poison, feu et foudre</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "9 changements",
        content: `
          <div class="sub-header">⚔️ Classes</div>
          <ul>
            <li>Les <strong>mages</strong> infligent uniquement des dégâts de compétences et magiques sur leur combo</li>
            <li>Les <strong>shamans</strong> infligent uniquement des dégâts de compétences et magiques sur leur combo</li>
            <li>Optimisation FPS du <strong>passif Guerrier</strong> + augmentation de sa visibilité + indicateur : prêt/épuisé/utilisé</li>
            <li>Optimisation FPS du <strong>passif Mage</strong> + augmentation de sa visibilité + indicateur : brisée/prête</li>
            <li>Optimisation FPS du <strong>passif Assassin</strong> + augmentation de sa visibilité + indicateur : disponible/activé/épuisée/déclenché</li>
          </ul>
          <div class="sub-header">🛡️ Items</div>
          <ul>
            <li>Le <strong>Bâton à Lanterne Lunaire</strong> — la description de son skill a été modifiée : il s'agissait de "Dégâts Critique" et non "Chance Critique"</li>
            <li>Mise à jour des <strong>lores des runes</strong></li>
          </ul>
          <div class="sub-header">📊 Stats</div>
          <div class="stat-block">
            Délai du blocage : 5s <span class="arrow">→</span> <span class="val-new">3s</span><br>
            Délai de l'esquive : 3s <span class="arrow">→</span> <span class="val-new">5s</span>
          </div>
          <ul>
            <li>Il n'est plus possible d'obtenir une <strong>statistique d'attaque de base négative</strong></li>
          </ul>
          <div class="sub-header">💍 Amulette</div>
          <div class="skill-name">Collier Tricolore</div>
          <div class="stat-block">
            Rareté : Rare <span class="arrow">→</span> <span class="val-new">Epic</span>
          </div>`
      }
    ]
  },
  {
    date: "17/03/2026",
    label: "17 Mars 2026",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "3 changements",
        content: `
          <div class="sub-header">🐉 World Boss Kazor — Marchand</div>
          <ul>
            <li>Le World Boss <strong>Kazor</strong> possède un <strong>marchand à son honneur</strong>, permettant d'acheter un ensemble exclusif</li>
            <li>La monnaie d'achat est une <strong>matière première</strong> obtenue en participant à l'élimination du boss</li>
            <li>Le marchand est présent en prod mais ne présente pas encore l'ensemble des items achetables — ce sera le cas avant la prochaine apparition de Kazor</li>
          </ul>
          <div class="sub-header">⚠️ Mise à jour des items</div>
          <ul>
            <li>Des ajustements, fix et ajouts concernant l'<strong>équilibrage des items</strong> et leurs statistiques ont été faits</li>
            <li>Si vos items ne donnent plus aucune stats, veuillez les mettre à jour par un <strong>changement de slot</strong> ou un <strong>drop au sol</strong> suivi d'une récupération</li>
          </ul>
          <div class="sub-header">🎁 Compensation</div>
          <ul>
            <li>Un <strong>PNJ de compensation</strong> face à la première apparition du World Boss Kazor sera disponible à l'entrée de la zone de Kazor</li>
          </ul>`
      },
      {
        type: "add",
        icon: "✨",
        title: "Nouveautés",
        count: "2 ajouts",
        content: `
          <div class="sub-header">🔮 Runes Remover</div>
          <ul>
            <li>Les <strong>Runes Remover</strong> permettant d'enlever X nombre de runes selon sa rareté sont implémentés en jeu</li>
            <li>Obtenables en affrontant <strong>Kazor</strong> ou en achetant à son marchand — d'autres manières d'obtention arriveront</li>
          </ul>
          <div class="sub-header">⛏️ Nouveau système de Nodes</div>
          <ul>
            <li>Nouveau <strong>système de nodes</strong> pour les minerais et le bois</li>
            <li>Vous pouvez maintenant miner vos minerais <strong>sans que les autres joueurs vous dérangent</strong> — c'est client side</li>
            <li>S'accompagne d'une <strong>refonte visuelle</strong> complète</li>
          </ul>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "6 fixes",
        content: `
          <ul>
            <li>Bug des <strong>statistiques dupliquées</strong></li>
            <li>Tentative de correctif sur les <strong>crash donjons</strong> causés par le Kobold</li>
            <li>Bouton invisible <strong>mount</strong> présent dans le SAOUI</li>
            <li>Stats des <strong>gants</strong> dysfonctionnels</li>
            <li>Commande <strong>/pets|mounts menu</strong> pour accéder à son pet à distance</li>
            <li><strong>Passif mage</strong> qui rend invincible d'une autre manière</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "7 changements",
        content: `
          <ul>
            <li>Si vous découvrez la ville <strong>Urbus</strong>, votre point de spawn y sera placé — à chaque mort vous retournez à Urbus</li>
            <li>Attaques des <strong>archers</strong> passent à travers les joueurs</li>
            <li>Attaques des <strong>mages</strong> passent à travers les joueurs</li>
            <li>Les <strong>curseurs des joueurs</strong> sont de nouveau visibles dans l'eau</li>
            <li>Totem <strong>Shaman</strong> dans le sol — corrigé</li>
            <li>Totem <strong>Shaman</strong> qui spawn plus loin que prévu — corrigé</li>
          </ul>
          <div class="sub-header">🔮 Shaman</div>
          <ul>
            <li>Si vous lancez votre totem <strong>trop loin (+16 blocs)</strong>, vous regagnez votre mana perdu <em>(cooldown impossible)</em> + message d'indication</li>
          </ul>
          <div class="sub-header">🖥️ Optimisation</div>
          <ul>
            <li>Optimisation côté des <strong>plugins et serveurs</strong></li>
          </ul>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "NerfS_",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            Travaille toujours sur le <strong>P3</strong>, <strong>métiers</strong>, <strong>battle pass</strong>, <strong>rework mini-boss P2</strong> et <strong>world boss P2</strong>.<br><br>
            <em>Bon jeu à tous, merci de votre confiance</em>
          </div>`
      }
    ]
  },
  {
    date: "12/03/2026",
    label: "12 Mars 2026",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "2 changements",
        content: `
          <ul>
            <li>Le premier <strong>World Boss</strong> de l'Aincrad va bientôt faire rage sur le palier 1 <em>(Dimanche 20h)</em></li>
          </ul>
          <div class="sub-header">🏆 Système de loot du World Boss</div>
          <ul>
            <li><strong>1 loot</strong> pour tous à la fin de la mort du boss</li>
            <li><strong>1 loot</strong> pour ceux ayant combattu et remplissant les conditions de dégâts <em>(1500 dmg)</em></li>
            <li><strong>1 coffre de fin</strong>, où chacun fait tourner sa chance</li>
          </ul>
          <div class="sub-header">⚠️ AOE</div>
          <ul>
            <li>Les <strong>AOE</strong> sont désormais présents au sein des paliers, faites attention, un coup de pioche ça fait très mal...</li>
          </ul>`
      },
      {
        type: "add",
        icon: "✨",
        title: "Nouveautés",
        count: "4 ajouts",
        content: `
          <ul>
            <li>Les <strong>Marchands Ambulants</strong> sont désormais bel et bien présents</li>
            <li><strong>Amulette Taureau</strong> achetable au Marchand de Kaelor</li>
            <li>Nouveau <strong>ressource pack</strong>, redémarrez votre launcher</li>
          </ul>
          <div class="sub-header">🔮 Shaman</div>
          <ul>
            <li>En fonction de votre distance et de la position choisie pour votre totem, la <strong>vitesse sera impactée</strong></li>
          </ul>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "4 fixes",
        content: `
          <ul>
            <li>Le <strong>forgeron de lingot de fer</strong> est de nouveau présent</li>
            <li>Le <strong>totem</strong> apparaît désormais bien plus vite</li>
            <li>Le combo du <strong>guerrier</strong> suit désormais la direction du regard du joueur et permet d'attaquer les cibles volantes assez proches du sol</li>
            <li>Le combo de l'<strong>assassin</strong> suit désormais la direction du regard du joueur aussi</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "2 changements",
        content: `
          <ul>
            <li>Indication dans le <strong>lore des skills</strong> si ils sont bindable ou non</li>
            <li>Optimisation du <strong>totem des shamans</strong> en forme de heal — encore plus optimisé et évite de bloquer la vue avec des particules au milieu de l'écran</li>
          </ul>
          <div class="sub-header">🎬 Vidéos des changements</div>
          <div class="video-grid">
            <div class="video-card">
              <video controls preload="metadata"><source src="https://cdn.discordapp.com/attachments/1385998857464185054/1481743279723909282/2026-03-12_20-43-49.mp4?ex=69b46c77&is=69b31af7&hm=d666457cc8fd74adf7bf4a88cc9b44edd5bafa1fe1acbe37ee0db02699779b1f&" type="video/mp4"></video>
              <div class="video-label">Combo Guerrier</div>
            </div>
            <div class="video-card">
              <video controls preload="metadata"><source src="https://cdn.discordapp.com/attachments/1385998857464185054/1481743327110889612/2026-03-12_20-53-20.mp4?ex=69b46c82&is=69b31b02&hm=3093834fa772b491577ac0098099f23b0c7b3432db1a11496a3fe33cfb9b5286&" type="video/mp4"></video>
              <div class="video-label">Combo Assassin</div>
            </div>
          </div>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "NerfS_",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            Avec le nouveau système de donjon développé par <strong>Perrier</strong>, une grosse update l'accompagnera, modifiant certains aspects des donjons autres que ce qu'il se déroule à l'intérieur.<br><br>
            Je travaille toujours sur le <strong>P3</strong>, aucun soucis de ce côté là.<br><br>
            D'autres ajouts/modifications vont avoir lieu dans les prochaines semaines concernant l'<strong>économie</strong>.<br><br>
            <strong>Deonata</strong> a développé une grande partie concernant la pêche et l'intérêt du métier de récolte de chasseur. Le rework des métiers avance bien, il devrait arriver dans les prochaines semaines.
            <div class="callout">🎁 Code : <strong>Deonata10</strong></div>
            <strong>Pass héroïque</strong> → 80%, bientôt fini, peut arriver ce week-end.<br><br>
            Les <strong>skills combo</strong> (guerrier et assassin) affectés par la range de base des armes arrivent prochainement.<br><br>
            <em>Bon jeu à tous</em>
          </div>`
      }
    ]
  },
  {
    date: "05/03/2025",
    label: "05 Mars 2025",
    sections: [
      {
        type: "important",
        icon: "⚔️",
        title: "Importants",
        count: "6 changements",
        content: `
          <ul>
            <li>Nouveau <strong>SAOUI</strong></li>
            <li>Nouveau <strong>HDV</strong></li>
            <li>Nouveau <strong>Système d'économie</strong></li>
            <li>Transfert du combo sur le <strong>clic gauche</strong> pour les classes <strong>Assassin</strong> et <strong>Guerrier</strong></li>
            <li>Une compensation de <strong>parchemins des 3 types</strong> sera offerte en <strong>3 exemplaires</strong></li>
            <li>Retour de <strong>/audio</strong> — musiques et vocal in-game</li>
          </ul>`
      },
      {
        type: "event",
        icon: "🎆",
        title: "Événements",
        count: "Nouvel An Chinois",
        content: `
          <div class="sub-header">🏮 Nouvel An Chinois</div>
          <ul>
            <li>L'événement est officiellement <strong>terminé</strong> — la zone de farm n'est plus accessible</li>
            <li>Des PNJs pour <strong>échanger vos dernières ressources</strong> seront encore présents</li>
            <li>Les PNJs de <strong>fabrication d'items</strong> restent disponibles</li>
            <li>Le spawn reste encore un peu — profitez de sa beauté !</li>
          </ul>
          <div class="callout">🎁 Code : <strong>NANOVA10</strong></div>`
      },
      {
        type: "add",
        icon: "✨",
        title: "Ajouts",
        count: "15+ ajouts",
        content: `
          <div class="sub-header">🦌 Set des Cerfs Paisibles</div>
          <ul>
            <li>Nouvel <strong>Artefact</strong></li>
            <li>Nouveau <strong>Gant</strong></li>
            <li>Nouveau <strong>Bracelet</strong></li>
          </ul>
          <div class="sub-header">🟢 Set des Slimes Gélatineux</div>
          <ul>
            <li>Nouvelle <strong>Bague</strong></li>
            <li>Nouvelle <strong>Amulette</strong></li>
            <li>Nouveau <strong>Bracelet</strong></li>
          </ul>
          <div class="sub-header">🌿 Set de la Sylve</div>
          <ul>
            <li>Nouvel <strong>Anneau</strong></li>
          </ul>
          <div class="sub-header">🐂 Set des Taureaux</div>
          <ul>
            <li>Nouvelle <strong>Bague</strong></li>
            <li>Nouvelle <strong>Amulette</strong></li>
          </ul>
          <div class="sub-header">🛒 Marchands & Accessoires</div>
          <ul>
            <li>Nouveau Marchand d'Accessoires à <strong>Vallhat</strong></li>
            <li>Nouveau Marchand d'Accessoires à <strong>Tolbana</strong></li>
            <li>Nouveaux Accessoires au marchand de la <strong>Ville de départ (Palier 1)</strong></li>
          </ul>
          <div class="sub-header">🔮 Items Mystérieux</div>
          <ul>
            <li>Nouveaux <strong>Anneaux</strong> → Ĭ̶̠ţ̸͘ę̸̈m̵̰̂ Ï̷̫ņ̴̆c̷̣͠o̷̟͌n̸͎̐nu</li>
            <li>Nouveaux <strong>Bracelets</strong> → Ĭ̶̠ţ̸͘ę̸̈m̵̰̂ Ï̷̫ņ̴̆c̷̣͠o̷̟͌n̸͎̐nu</li>
            <li>Nouveaux <strong>Artefacts</strong> → Ĭ̶̠ţ̸͘ę̸̈m̵̰̂ Ï̷̫ņ̴̆c̷̣͠o̷̟͌n̸͎̐nu</li>
            <li>Nouvelles <strong>Amulettes</strong> → Ĭ̶̠ţ̸͘ę̸̈m̵̰̂ Ï̷̫ņ̴̆c̷̣͠o̷̟͌n̸͎̐nu</li>
            <li>Nouveaux <strong>Gants</strong> → Ĭ̶̠ţ̸͘ę̸̈m̵̰̂ Ï̷̫ņ̴̆c̷̣͠o̷̟͌n̸͎̐nu</li>
          </ul>
          <div class="sub-header">🗿 Divers</div>
          <ul>
            <li>Des <strong>mannequins</strong> apparaissent en ville : Tolbana, Ville de Départ et Hanaka</li>
          </ul>`
      },
      {
        type: "buff",
        icon: "📈",
        title: "Buffs",
        count: "Mage / Assassin / Items",
        content: `
          <div class="sub-header">💍 Anneaux</div>
          <div class="skill-name">Anneau Pumba</div>
          <div class="stat-block">
            Santé &nbsp;&nbsp;&nbsp;&nbsp;: 7 &nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">10</span><br>
            Défense &nbsp;: 0.7 <span class="arrow">→</span>&nbsp; <span class="val-new">1</span>
          </div>

          <div class="sub-header">⚔️ Armes</div>
          <ul>
            <li>Toutes les <strong>faux</strong> → <strong>+2 de dégâts de base</strong></li>
          </ul>

          <div class="sub-header">🛡️ Sets</div>
          <div class="skill-name">Loup Faiblard</div>
          <ul>
            <li><strong>[2]</strong> : Déplacé la vitesse de déplacement de [3] vers [2]</li>
            <li><strong>[3]</strong> : Ajout de <strong>+0.1 Vitesse d'Attaque</strong></li>
          </ul>

          <div class="sub-header">🧙 Mage</div>
          <div class="skill-name">Frappe de Téléportation</div>
          <div class="stat-block">
            Dégâts / niveau &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: +5/lvl &nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">+7/lvl</span><br>
            Durée étourdissement / niveau : +0.1/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+0.2/lvl</span>
          </div>

          <div class="skill-name">Givre Perçant</div>
          <div class="stat-block">
            Dégâts de base &nbsp;&nbsp;: 40 &nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">50</span><br>
            Dégâts / niveau : +8/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+10/lvl</span><br>
            Cooldown de base : 20s &nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">18s</span>
          </div>

          <div class="sub-header">🗡️ Assassin</div>
          <div class="skill-name">Combo Mortel</div>
          <div class="stat-block">
            Dégâts de base &nbsp;&nbsp;: 15 <span class="arrow">→</span>&nbsp; <span class="val-new">1</span><br>
            Scaling / niveau : 3 &nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">2</span>
          </div>
          <div class="callout">🆕 Le combo s'active automatiquement au <strong>clic gauche</strong> avec un poignard (plus besoin de le binder)</div>

          <div class="skill-name">Ruée Ravageur</div>
          <div class="stat-block">
            Dégâts / niveau &nbsp;&nbsp;: +3/lvl &nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">+5/lvl</span><br>
            Cooldown de base &nbsp;: 8s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">7s</span><br>
            Cooldown / niveau : -0.2/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">-0.1/lvl</span>
          </div>

          <div class="skill-name">Floraison de la Mort</div>
          <div class="stat-block">
            Dégâts / niveau &nbsp;&nbsp;: +5/lvl &nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">+6/lvl</span><br>
            Cooldown de base &nbsp;: 12s &nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">11s</span><br>
            Cooldown / niveau : -0.2/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">-0.1/lvl</span>
          </div>

          <div class="skill-name">Tremblement Obscur</div>
          <div class="stat-block">
            Cooldown de base : 15s <span class="arrow">→</span>&nbsp; <span class="val-new">14s</span>
          </div>

          <div class="skill-name">Dernière Danse</div>
          <div class="stat-block">
            Dégâts / niveau : +25/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+35/lvl</span>
          </div>`
      },
      {
        type: "nerf",
        icon: "📉",
        title: "Nerfs",
        count: "Mage / Assassin / Sets",
        content: `
          <div class="sub-header">🛡️ Sets</div>
          <div class="skill-name">Squelette Poussiéreux</div>
          <div class="stat-block">
            [2] Hâte d'Aptitude : 10% <span class="arrow">→</span>&nbsp; <span class="val-new">5%</span>
          </div>

          <div class="sub-header">🧙 Mage</div>
          <div class="skill-name">Frappe de Téléportation</div>
          <div class="stat-block">
            Mana / niveau : +0.3/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+2/lvl</span>
          </div>
          <div class="skill-name">Barrage Flamboyant</div>
          <div class="stat-block">
            Mana / niveau : +2/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+3/lvl</span>
          </div>
          <div class="skill-name">Prison Cryogénique</div>
          <div class="stat-block">
            Mana de base &nbsp;: 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">18</span><br>
            Mana / niveau : +1.5/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+2/lvl</span>
          </div>
          <div class="skill-name">Givre Perçant</div>
          <div class="stat-block">
            Mana de base &nbsp;: 20 &nbsp;&nbsp;&nbsp;<span class="arrow">→</span>&nbsp; <span class="val-new">22</span><br>
            Mana / niveau : +1/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+3/lvl</span>
          </div>

          <div class="sub-header">🗡️ Assassin</div>
          <div class="skill-name">Dernière Danse</div>
          <div class="stat-block">
            Stamina / niveau : +5/lvl <span class="arrow">→</span>&nbsp; <span class="val-new">+10/lvl</span>
          </div>`
      },
      {
        type: "fix",
        icon: "🔧",
        title: "Correctifs",
        count: "9 fixes",
        content: `
          <ul>
            <li>Crashs liés au <strong>Kobold</strong> <em>(sous surveillance)</em></li>
            <li><strong>Passif du Mage</strong> <em>(sous surveillance)</em></li>
            <li>Items consommables d'accès aux <strong>cosmétiques Saint-Valentin</strong></li>
            <li>Textures de l'armure du <strong>donjon Nécro</strong></li>
            <li>Les Assassins sont désormais bien <strong>immortels</strong> pendant <em>"Floraison Mortelle"</em></li>
            <li>Hitbox du skill <em>"Tourbillon Implacable"</em> du Guerrier</li>
            <li>Hitbox du skill <em>"Frappe Vicieuse"</em> du Guerrier</li>
            <li>Le <strong>Totem des Shamans</strong> n'apparaît plus dans le sol</li>
            <li>Le Totem en mode <strong>Foudre</strong> ne cible plus les alliés</li>
          </ul>`
      },
      {
        type: "adjust",
        icon: "⚙️",
        title: "Ajustements",
        count: "25+ changements",
        content: `
          <div class="sub-header">📝 Général</div>
          <ul>
            <li>Ajustements de traduction sur <strong>tous les sets</strong> (normalisation des stats)</li>
            <li>Le loot partagé <strong>valide les conditions de quête</strong> pour tous les joueurs</li>
            <li>Mise à jour des <strong>lores des skills</strong> de toutes les classes</li>
            <li>Ajustements des <strong>tooltips</strong> des skills</li>
            <li>Corrections du <strong>lore de certains items</strong></li>
            <li>Les <strong>cristaux</strong> ne sont plus stackables</li>
            <li>Le cooldown sur les <strong>coups critiques des armes</strong> → enlevé</li>
            <li>Le cooldown sur les <strong>coups critiques des compétences</strong> → enlevé</li>
          </ul>

          <div class="sub-header">⚔️ Guerrier</div>
          <ul>
            <li>Désormais <strong>immortel</strong> pendant la canalisation de son ultime</li>
            <li>Le <em>Tourbillon Implacable</em> ne force plus à avancer pendant les coups circulaires</li>
            <li>La <em>Frappe Vicieuse</em> → <strong>étourdissement de 3s</strong> aux ennemis après leur chute</li>
            <li>L'ultime fait simplement <strong>écraser son épée spirituelle au sol</strong> (plus de bond)</li>
            <li>Optimisation des hitbox de l'ultime</li>
          </ul>

          <div class="sub-header">🗡️ Assassin</div>
          <ul>
            <li>Désormais <strong>immortel</strong> pendant l'attaque en vol de son ultime</li>
            <li>Le <strong>passif</strong> est décidé de manière théorique mais encore en cours de confection — il est <strong>désactivé temporairement</strong>, sa nouvelle version arrivera prochainement</li>
          </ul>

          <div class="sub-header">🔮 Shaman</div>
          <ul>
            <li>Nouvelles animations du Totem (fin de la sphère de particules gourmande)</li>
            <li>Performances du Totem <strong>réduites par x15</strong></li>
            <li>Particules du <strong>passif</strong> légèrement plus visibles</li>
            <li>Particules du Totem <strong>Foudre</strong> nettement plus visibles</li>
            <li>L'Ultime → <strong>soulève pendant 1s</strong> + <strong>immortalité 5s</strong> (ne bloque plus en l'air)</li>
            <li>Un Shaman ne peut <strong>pas s'auto-affecter</strong> par son propre ultime <em>(peut-être modifié)</em></li>
          </ul>

          <div class="sub-header">🔗 Réassignations de Sets</div>
          <div class="stat-block">
            Bague de Narax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> Squelette Poussiéreux<br>
            Collier du Gardien &nbsp;<span class="arrow">→</span> Squelette Poussiéreux<br>
            Lien de la Sylve &nbsp;&nbsp;&nbsp;<span class="arrow">→</span> De la Sylve<br>
            Amulette des Bois &nbsp;&nbsp;<span class="arrow">→</span> De la Sylve<br>
            Bracelet Sylvestre &nbsp;<span class="arrow">→</span> De la Sylve<br>
            Talisman Féroce &nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> Taureau<br>
            Anneau Gluant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">→</span> Slime
          </div>

          <div class="sub-header">💰 Prix des Parchemins</div>
          <div class="stat-block">
            Réallocation : <span class="val-new">750 cols</span><br>
            Maîtrise &nbsp;&nbsp;&nbsp;&nbsp;: <span class="val-new">750 cols</span><br>
            Changement &nbsp;&nbsp;: <span class="val-new">1 500 cols</span>
          </div>

          <div class="sub-header">🎬 Vidéos des changements</div>
          <div class="video-grid">
            <div class="video-card">
              <video controls preload="metadata"><source src="https://cdn.discordapp.com/attachments/1452789664682475692/1479228217070977178/NewGuerrier.mp4?ex=69ab4621&is=69a9f4a1&hm=554a1ec43d9f6bf20caa3bb3d3ab1ceb661d48363090153895d1f831845603d0&" type="video/mp4"></video>
              <div class="video-label">Guerrier</div>
            </div>
            <div class="video-card">
              <video controls preload="metadata"><source src="https://cdn.discordapp.com/attachments/1452789664682475692/1479228164591849562/NewAssassin.mp4?ex=69ab4615&is=69a9f495&hm=54aff4a6ad0bf9a3e88ee92f705c4d3f83161e672351c27f1ed1264471c0d5e1&" type="video/mp4"></video>
              <div class="video-label">Assassin</div>
            </div>
            <div class="video-card">
              <video controls preload="metadata"><source src="https://cdn.discordapp.com/attachments/1452789664682475692/1479228195864838154/NewShaman.mp4?ex=69ab461c&is=69a9f49c&hm=1366b8d8dde589c2ecb555b09d0391ccda1fb46fb837fdb5d5d4ac81ee8fd69e&" type="video/mp4"></video>
              <div class="video-label">Shaman</div>
            </div>
          </div>`
      },
      {
        type: "staff",
        icon: "📣",
        title: "Notes du Staff",
        count: "3 notes",
        content: `
          <div class="staff-note">
            <div class="name">🎮 NerfS_</div>
            Pour le combo des classes Guerrier et Assassin, tout est une question d'<strong>optimisation et d'équilibrage</strong>. C'était très compliqué d'offrir au combo une réelle utilité tout en l'équilibrant. De plus, le fonctionnement de Minecraft bloquait beaucoup de possibilités. Des <strong>vidéos explicatives</strong> accompagnent ce Changelog.<br><br>
            <em>Je travaille actuellement sur l'économie, les ressources (blé, bois), le P3, les outils, les classes, et le rework de la Tisseuse et de Taurus.</em>
          </div>
          <div class="staff-note">
            <div class="name">🎣 Deonata</div>
            <em>Je suis sur la <strong>pêche</strong> — le rework est bientôt fini, il manque la gestion de récupération d'items et XP. Il faut aussi mettre en place des zones/tiers pour certains ajouts.</em>
          </div>
          <div class="staff-note">
            <div class="name">🍎 Compote</div>
            Les nouveaux plugins internes :<br><br>
            <strong>HDV (zap-auctions)</strong> — Hôtel des Ventes multi-serveur. Mettez en vente vos objets avec <strong>/ah sell &lt;prix&gt;</strong>, parcourez le marché avec <strong>/ah</strong> (alias <strong>/hdv</strong>), recherchez des items avec <strong>/ah search</strong>, et consultez votre historique de ventes. Tout est synchronisé entre les serveurs.<br><br>
            <strong>Économie (zap-economy)</strong> — Nouveau système de monnaie synchronisé. Consultez votre solde avec <strong>/money</strong>, envoyez des cols avec <strong>/pay</strong>.<br><br>
            <strong>Chat (zap-chat)</strong> — Chat global unifié entre tous les paliers. Messages privés avec <strong>/msg</strong>.
          </div>`
      }
    ]
  }
];
