WowDataTooltip.addLocale('de_DE',{
	'meta':{
		'locale':'de_DE'
	},
	'templates':{
		'quest':{
			'reqLevel':'Benötigt Stufe <%= this["reqLevel"] %>',
			'suggestedPartyMembers':'Gruppenquest (<%= this["suggestedPartyMembers"] %>)'
		},
		'item':{
			'itemId':'Gegenstands ID: <%= this["id"] %>',
			'heroic':'Heroisch',
			'maxCount':'Einzigartig<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots':'<%= this["containerSlots"] %> Platz <%= this.localize(["itemClass", this["itemClass"], this["itemSubClass"]]) %>',
			'damage':'<%= this["minDamage"] %> - <%= this["maxDamage"] %> Schaden',
			'weaponSpeed':'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps':'(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor':'<%= this["baseArmor"] %> Rüstung',
			'maxDurability':'Haltbarkeit <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel':'Erfordert Stufe <%= this["requiredLevel"] %>',
			'requiredSkill':'Erfordert <%= this.localize(["characterSkill", this["requiredSkill"]]) %> (<%= this[requiredSkillRank] %>)',
			'requiredAbility':'Erfordert <%= this["requiredAbility"]["name"] %>',
			'minFactionId':'Erfordert Fraktion ID <%= this["minFactionId"] %> - <%= this.localize(["reputationLevel", this["minReputation"]]) %>',
			'itemLevel':'Gegenstandsstufe <%= this["itemLevel"] %>',
			'allowableClasses':'Klassen: <% for(var i=0; i<this["allowableClasses"].length; i++) { var current = this["allowableClasses"][i]; %><% if(i > 0) { %>, <% } %><span class="cclass-<%= current %>"><%= this.localize(["characterClass", current, "0"])%></span><% } %>',
			'allowableRaces':'Rassen: <% for(var i=0; i<this["allowableRaces"].length; i++) { var current = this["allowableRaces"][i]; %><% if(i > 0) { %>, <% } %><span><%= this.localize(["characterRace", current, "0"])%></span><% } %>',
			'itemStat':{
				'13':'Anlegen: Erhöht eure Ausweichwertung um <%= this["amount"] %>.',
				'14':'Anlegen: Erhöht eure Parrierwertung um <%= this["amount"] %>.',
				'31':'Anlegen: Erhöht eure Trefferwertung um <%= this["amount"] %>.',
				'32':'Anlegen: Erhöht eure kritische Trefferwertung um <%= this["amount"] %>.',
				'35':'Anlegen: Erhöht eure Abhärtungswertung um <%= this["amount"] %>.',
				'36':'Anlegen: Erhöht eure Tempowertung um <%= this["amount"] %>.',
				'37':'Anlegen: Erhöht eure Waffenkundewertung um <%= this["amount"] %>.',
				'38':'Anlegen: Erhöht eure Angriffswertung um <%= this["amount"] %>.',
				'46':'Anlegen: Erhöht eure Gesundheitsregenartion um <%= this["amount"] %>.',
				'45':'Anlegen: Erhöht Zaubermacht um <%= this["amount"] %>.',
				'47':'Anlegen: Erhöht Zauberdurchschlagskraft um <%= this["amount"] %>.',
				'49':'Anlegen: Erhöht eure Meisterschaftswertung um <%= this["amount"] %>.'
			},
			'itemSpell':'Anlegen / Benutzen / Chance beim Treffer: <%= this["spell"]["description"] %>',
			'sellPrice':'Verkaufspreis: <%= this.renderCoins(this["sellPrice"]) %>',
			'stackable':'Stapelbar (<%= this["stackable"] %>)',
			'extendedInactive':'[<%= this["extendedKeyCodeLabel"] %>] gedrückt halten um den Modus zu wechseln!',
			'extendedActive':'[<%= this["extendedKeyCodeLabel"] %>] loslassen um den Modus zu wechseln!'
		},
		'character':{
			'sri':'<%= this["level"] %>, <%= this.localize(["characterRace", this["race"], this["gender"]]) %>, <%= this.localize(["characterClass", this["class"], this["gender"]]) %>',
			'ilvl':'<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts':'Reittiere: <%= this["mounts"].length %>',
			'companions':'Begleiter: <%= this["companions"].length %>',
			'extendedInactive':'[<%= this["extendedKeyCodeLabel"] %>] gedrückt halten um den Modus zu wechseln!',
			'extendedActive':'[<%= this["extendedKeyCodeLabel"] %>] loslassen um den Modus zu wechseln!'
		},
		'guild':{
			'sri':'Stufe <%= this["level"] %> <%= this.localize(["factionSide", this["side"]]) %>-Gilde, <%= this["realm"] %>',
			'members':'<%= this["members"].length %> Mitglieder'
		},
		'arena':{
			'sri':'<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this.localize(["factionSide", this["side"]]) %> Arenateam, <%= this["realm"] %>',
			'rating-team':'Wertung: <%= this["rating"] %>',
			'rank-current':'Rang #<%= this["ranking"] %>',
			'rank-previous':'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current':'Spiele: <span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span> <span class="matches-stats">(Gesamt: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short':'<span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season':'Matches: <span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span> <span class="matches-stats">(Gesamt: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short':'<span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive':'[<%= this["extendedKeyCodeLabel"] %>] gedrückt halten für aktuelle Wochenwerte!',
			'extendedActive':'[<%= this["extendedKeyCodeLabel"] %>] loslassen für Saisonwerte!'
		}
	},
	'loading-realm':'Lade Realm...',
	'loading-quest':'Lade Quest...',
	'loading-item':'Lade Gegenstand...',
	'loading-character':'Lade Charakter...',
	'loading-guild':'Lade Gilde...',
	'loading-arena':'Lade Arenateam...',
	'label-region':'Region:',
	'label-realm':'Realm:',
	'label-quest':'Quest:',
	'label-item':'Gegenstand:',
	'label-character':'Charakter:',
	'label-guild':'Gilde:',
	'label-teamname':'Name:',
	'label-teamsize':'Größe:',
	'realm-not-found':'Realm nicht gefunden',
	'quest-not-found':'Quest nicht gefunden',
	'item-not-found':'Gegenstand nicht gefunden',
	'character-not-found':'Charakter nicht gefunden',
	'guild-not-found':'Gilde nicht gefunden',
	'arena-not-found':'Arenateam nicht gefunden',
	'unused':'Ungenutzt',
	'view-mode-arena-current':'Ansicht: Aktuelle Woche',
	'view-mode-arena-season':'Ansicht: Gesamte Saison',
	'itemIsAuctionable':'Kann versteigert werden',
	'itemBind':{'1':'Wird beim Aufheben gebunden','2':'Wird beim Anlegen gebunden','3':'Wird bei Benutzung gebunden'},
	'itemStat':{'3':'Beweglichkeit','4':'Stärke','5':'Intellekt','6':'Willenskraft','7':'Ausdauer'},
	'itemSocket':{'BLUE':'Blauer Sockel','RED':'Roter Sockel','YELLOW':'Gelber Sockel','META':'Meta Sockel','ORANGE':'Orangener Sockel','PURPLE':'Lila Sockel','GREEN':'Grüner Sockel','PRISMATIC':'Prismatischer Sockel','HYDRAULIC':'Hydraulischer Sockel','COGWHEEL':'Zahnrad Sockel'},
	'reputationFaction':{},
	'reputationLevel':{'0':'Haßerfüllt','1':'Feindselig','2':'Unfreundlich','3':'Neutral','4':'Freundlich','5':'Wohlwollend','6':'Respektvoll','7':'Ehrfürchtig'},
	'itemClass':{
		'0':{'0':'Verbrauchbar','1':'Trank','2':'Elixier','3':'Fläschchen','4':'Schriftrolle','5':'Essen &amp; Drinken','6':'Gegenstandsverzauberung','7':'Verband','8':'Anderes'},
		'1':{'0':'Tasche','1':'Seelentasche','2':'Kräutertasche','3':'Verzauberertasche','4':'Ingenierstasche','5':'Edelsteintasche','6':'Bergbautasche','7':'Ledertasche','8':'Schreibertasche','9':'Spinnerkasten'},
		'2':{'0':'Axt'/*1H*/,'1':'Axt'/*2H*/,'2':'Bogen','3':'Gewehr','4':'Streitkolben'/*1H*/,'5':'Streitkolben'/*2H*/,'6':'Stangenwaffe','7':'Schwert'/*1H*/,'8':'Schwert'/*2H*/,'10':'Stab','13':'Faustwaffe','14':'Verschiedenes','15':'Dolch','16':'Wurfwaffe','18':'Armbrust','19':'Zauberstab','20':'Angelrute'},
		'3':{'0':'Roter Edelstein','1':'Blauer Edelstein','2':'Gelber Edelstein','3':'Violetter Edelstein','4':'Grüner Edelstein','5':'Orangener Edelstein','6':'Meta Edelstein','7':'Einfacher Edelstein','8':'Prismatischer Edelstein','9':'Hydraulischer Edelstein','10':'Zahnrad Edelstein'},
		'4':{'0':'Verschiedenes','1':'Stoff','2':'Leder','3':'Schwere Rüstung','4':'Platte','6':'Schild','7':'Libram','8':'Idol','9':'Totem','10':'Siegel','11':'Relikt'},
		'7':{'0':'Handelswaren','1':'Teile','2':'Sprengstoff','3':'Geräte','4':'Juwelenschleifen','5':'Stoff','6':'Leder','7':'Metall &amp; Stein','8':'Fleisch','9':'Kräuter','10':'Elementar','11':'Anderes','12':'Verzauberkunst','13':'Materialien','14':'Gegenstandsverzauberungen'},
		'9':{'0':'Buch','1':'Lederverarbeitung','2':'Schneiderei','3':'Ingenieurskunst','4':'Schmiedekunst','5':'Kochen','6':'Alchemie','7':'Erste Hilfe','8':'Verzauberkunst','9':'Angeln','10':'Juwelenschleifen','11':'Inschriftenkunde'},
		'12':{'0':'Questgegenstand'},
		'13':{'0':'Schlüssel'},
		'15':{'0':'Plunder','1':'Reagenz','2':'Haustier','3':'Feiertag','4':'Anderes','5':'Reittier'},
		'16':{'0':'Glyph','1':'Krieger','2':'Paladin','3':'Jäger','4':'Schurke','5':'Priester','6':'Todesritter','7':'Schamane','8':'Magier','9':'Hexenmeister','11':'Druide'}
	},
	'inventoryType':{'1':'Kopf','2':'Nacken','3':'Schulter','4':'Hemd','5':'Brust','6':'Taille','7':'Beine','8':'Füße','9':'Handgelenke','10':'Hände','11':'Finger','12':'Schmuckstück','13':'Einhändig','15':'Distanz'/*Bow*/,'16':'Rücken','17':'Zweihändig','18':'Tasche','21':'Waffenhand','22':'Schildhand','23':'In Schildhand geführt','25':'Distanz'/*Thrown*/,'26':'Distanz'/*Gun,Crossbow,Wand*/},
	'characterSkill':{'129':'Erste Hilfe','164':'Schmiedekunst','165':'Lederverarbeitung','171':'Alchemie','182':'Kräuterkunde','185':'Kochen','186':'Bergbau','197':'Schneiderei','202':'Ingenieurskunst','333':'Verzauberkunst','356':'Angeln','393':'Kürschnerei','755':'Juwelenschleifen','762':'Reiten','773':'Inschriftenkunde','794':'Archäologie'},
	'characterClass':{'1':{'0':'Krieger','1':'Kriegerin'},'2':{'0':'Paladin','1':'Paladin'},'3':{'0':'Jäger','1':'Jägerin'},'4':{'0':'Schurke','1':'Schurkin'},'5':{'0':'Priester','1':'Priesterin'},'6':{'0':'Todesritter','1':'Todesritter'},'7':{'0':'Schamane','1':'Schamanin'},'8':{'0':'Magier','1':'Magierin'},'9':{'0':'Hexenmeister','1':'Hexenmeisterin'},'11':{'0':'Druide','1':'Druidin'}},
	'characterRace':{'1':{'0':'Mensch','1':'Mensch'},'2':{'0':'Orc','1':'Orc'},'3':{'0':'Zwerg','1':'Zwerg'},'4':{'0':'Nachtelf','1':'Nachtelfe'},'5':{'0':'Untoter','1':'Untote'},'6':{'0':'Tauren','1':'Tauren'},'7':{'0':'Gnom','1':'Gnom'},'8':{'0':'Troll','1':'Troll'},'9':{'0':'Goblin','1':'Goblin'},'10':{'0':'Blutelf','1':'Blutelfe'},'11':{'0':'Draenei','1':'Draenei'},'22':{'0':'Worgen','1':'Worgen'}},
	'factionSide':{'0':'Allianz','1':'Horde','alliance':'Allianz','horde':'Horde'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'Keine Warteschlange','true':'Warteschlange'},
	'realmStatus':{'false':'Offline','true':'Online'},
	'realmPopulation':{'low':'Niedrige Bevölkerung','medium':'Mittlere Bevölkerung','high':'Hohe Bevölkerung'}
});