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
