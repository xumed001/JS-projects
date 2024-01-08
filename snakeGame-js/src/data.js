const data = [
    {
      Month: 'JANUARY',
      Day: 11,
      Title: 'Laika: Aged Through Blood',
      Platform: 'NS',
      Genre: 'Metroidvania, action-adventure',
      Developer: 'Brainwash Gang',
      Publisher: 'Headup Games'
    },
    {
      Month: 'JANUARY',
      Day: 11,
      Title: 'Momodora: Moonlit Farewell',
      Platform: 'Win',
      Genre: 'Metroidvania',
      Developer: 'Bombservice',
      Publisher: 'Playism'
    },
    {
      Month: 'JANUARY',
      Day: 11,
      Title: 'Top Racer Collection',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Racing',
      Developer: 'QUByte Interactive',
      Publisher: 'QUByte Interactive'
    },
    {
      Month: 'JANUARY',
      Day: 11,
      Title: 'War Hospital',
      Platform: 'Win, PS5, XSX',
      Genre: 'Real-time strategy',
      Developer: 'Brave Lamb Studio',
      Publisher: 'Nacon'
    },
    {
      Month: 'JANUARY',
      Day: 12,
      Title: 'Crystal Story: Dawn of Dusk',
      Platform: 'Win',
      Genre: 'Action role-playing',
      Developer: 'Bred Frown',
      Publisher: 'Bred Frown'
    },
    {
      Month: 'JANUARY',
      Day: 12,
      Title: 'Gungrave G.O.R.E Ultimate Enhanced Edition',
      Platform: 'NS',
      Genre: 'Third-person shooter',
      Developer: 'Studio IGGYMOB',
      Publisher: 'Beep Japan'
    },
    {
      Month: 'JANUARY',
      Day: 18,
      Title: 'DreadOut 2',
      Platform: 'NS',
      Genre: 'Survival horror',
      Developer: 'Digital Happiness',
      Publisher: 'Digital Happiness'
    },
    {
      Month: 'JANUARY',
      Day: 18,
      Title: 'Prince of Persia: The Lost Crown',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Action-adventure, platform',
     Developer: 'Ubisoft Montpellier',
      Publisher: 'Ubisoft'
    },
    {
      Month: 'JANUARY',
      Day: 18,
      Title: 'Yuuna and the Haunted Hot Springs: The Thrilling Steamy Maze Kiwami',
      Platform: 'Win, iOS, Droid, NS, PS5',
      Genre: 'Role-playing',
      Developer: 'Matrix Software',
      Publisher: 'FuRyu'
    },
    {
      Month: 'JANUARY',
      Day: 19,
      Title: 'Another Code: Recollection',
      Platform: 'NS',
      Genre: 'Point-and-click adventure',
      Developer: 'Un­known',
      Publisher: 'Nintendo'
    },
    {
      Month: 'JANUARY',
      Day: 19,
      Title: 'The Last of Us Part II Remastered',
      Platform: 'PS5',
      Genre: 'Action-adventure, survival horror',
      Developer: 'Naughty Dog',
      Publisher: 'Sony Interactive Entertainment'
    },
    {
      Month: 'JANUARY',
      Day: 23,
      Title: 'Graven',
      Platform: 'Win',
      Genre: 'First-person shooter',
      Developer: 'Slipgate Ironworks',
      Publisher: '3D Realms, Fulqrum Publishing'
    },
    {
      Month: 'JANUARY',
      Day: 23,
      Title: 'Howl',
      Platform: 'PS5, XSX',
      Genre: 'Turn-based strategy',
      Developer: 'Mi’pu’mi Games',
      Publisher: 'Astragon Entertainment'
    },
    {
      Month: 'JANUARY',
      Day: 23,
      Title: 'Neptunia: Sisters vs. Sisters',
      Platform: 'NS',
      Genre: 'Role-playing',
      Developer: 'Compile Heart',
      Publisher: 'Idea Factory'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Apollo Justice: Ace Attorney Trilogy',
      Platform: 'Win, NS, PS4, XBO',
      Genre: 'Adventure, visual novel',
      Developer: 'Capcom',
      Publisher: 'Capcom'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Docchi no i ga Suki Desu ka?',
      Platform: 'NS, PS4',
      Genre: 'Visual novel',
      Developer: 'HOOKSOFT',
      Publisher: 'Entergram'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Macross Shooting Insight',
      Platform: 'Win, NS, PS4, PS5',
      Genre: 'Shoot \'em up',
      Developer: 'Kaminari Games',
      Publisher: 'Bushiroad Games'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Shiren the Wanderer: The Mystery Dungeon of Serpentcoil Island',
      Platform: 'NS',
      Genre: 'Roguelike, role-playing',
      Developer: 'Spike Chunsoft',
      Publisher: 'Spike Chunsoft'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Touhou Luna Nights',
      Platform: 'PS4, PS5',
      Genre: 'Metroidvania, action-adventure',
      Developer: 'Team Ladybug',
      Publisher: 'Playism'
    },
    {
      Month: 'JANUARY',
      Day: 25,
      Title: 'Under Night In-Birth II [Sys:Celes]',
      Platform: 'Win, NS, PS4, PS5',
      Genre: 'Fighting',
      Developer: 'French-Bread',
      Publisher: 'Arc System Works'
    },
    {
      Month: 'JANUARY',
      Day: 26,
      Title: 'Like a Dragon: Infinite Wealth',
      Platform: 'Win, PS4, PS5, XBO, XSX',
      Genre: 'Role-playing',
      Developer: 'Ryu Ga Gotoku Studio',
      Publisher: 'Sega'
    },
    {
      Month: 'JANUARY',
      Day: 26,
      Title: 'Tekken 8',
      Platform: 'Win, PS5, XSX',
      Genre: 'Fighting',
      Developer: 'Bandai Namco Studios, Arika',
      Publisher: 'Bandai Namco Entertainment'
    },
    {
      Month: 'JANUARY',
      Day: 30,
      Title: 'The Lost Legends of Redwall: The Scout Anthology',
      Platform: 'Win, PS4, PS5, XBO, XSX',
      Genre: 'Adventure',
      Developer: 'Soma Games',
      Publisher: 'Forthright Entertainment'
    },
    {
      Month: 'JANUARY',
      Day: 30,
      Title: 'Rugby 24',
      Platform: 'Win, PS4, PS5, XBO, XSX',
      Genre: 'Sports',
      Developer: 'Big Ant Studios',
      Publisher: 'Nacon'
    },
    {
      Month: 'JANUARY',
      Day: 31,
      Title: 'BlazBlue Entropy Effect',
      Platform: 'Win',
      Genre: 'Action, Roguelike',
      Developer: '91Act',
      Publisher: '91Act'
    },
    {
      Month: 'FEBRUARY',
      Day: 1,
      Title: 'Granblue Fantasy: Relink',
      Platform: 'Win, PS4, PS5',
      Genre: 'Action role-playing',
      Developer: 'Cygames',
      Publisher: 'Cygames'
    },
    {
      Month: 'FEBRUARY',
      Day: 1,
      Title: 'Jujutsu Kaisen: Cursed Clash',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Fighting',
      Developer: 'Byking, Gemdrops',
      Publisher: 'Bandai Namco Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: 1,
      Title: 'The Legend of Legacy HD Remastered',
      Platform: 'Win, NS, PS4, PS5',
      Genre: 'Role-playing',
      Developer: 'Cattle Call',
      Publisher: 'FuRyu'
    },
    {
      Month: 'FEBRUARY',
      Day: 2,
      Title: 'Jujutsu Kaisen: Cursed Clash',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Fighting',
      Developer: 'Byking, Gemdrops',
      Publisher: 'Bandai Namco Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: 2,
      Title: 'Persona 3 Reload',
      Platform: 'Win, PS4, PS5, XBO, XSX',
      Genre: 'Role-playing',
      Developer: 'P-Studio',
      Publisher: 'Atlus'
    },
    {
      Month: 'FEBRUARY',
      Day: 2,
      Title: 'Suicide Squad: Kill the Justice League',
      Platform: 'Win, PS5, XSX',
      Genre: 'Action-adventure',
      Developer: 'Rocksteady Studios',
      Publisher: 'Warner Bros. Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 8,
      Title: 'Helldivers II',
      Platform: 'Win, PS5',
      Genre: 'Third-person shooter',
      Developer: 'Arrowhead Game Studios',
      Publisher: 'Sony Interactive Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: 8,
      Title: 'Touhou Danmaku Kagura: Phantasia Lost',
      Platform: 'Win',
      Genre: 'Rhythm',
      Developer: 'Unknown X',
      Publisher: 'Unknown X'
    },
    {
      Month: 'FEBRUARY',
      Day: 13,
      Title: 'Banishers: Ghosts of New Eden',
      Platform: 'Win, PS5, XSX',
      Genre: 'Action role-playing',
      Developer: 'Don\'t Nod',
      Publisher: 'Focus Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: 13,
      Title: 'Ultros',
      Platform: 'Win, PS4, PS5',
      Genre: 'Action-adventure, Metroidvania',
      Developer: 'Hadoque',
      Publisher: 'Hadoque'
    },
    {
      Month: 'FEBRUARY',
      Day: 14,
      Title: 'Arzette: The Jewel of Faramore',
      Platform: 'Win, NS, PS4, PS5, XSX',
      Genre: 'Action-adventure, platform',
      Developer: 'Seedy Eye Software',
      Publisher: 'Limited Run Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 14,
      Title: 'Biomutant',
      Platform: 'NS',
      Genre: 'Action role-playing',
      Developer: 'Experiment 101',
      Publisher: 'THQ Nordic'
    },
    {
      Month: 'FEBRUARY',
      Day: 14,
      Title: 'Solium Infernum',
      Platform: 'Win',
      Genre: 'Strategy',
      Developer: 'League of Geeks',
      Publisher: 'League of Geeks'
    },
    {
      Month: 'FEBRUARY',
      Day: 14,
      Title: 'Tomb Raider I-III Remastered Starring Lara Croft',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Action-adventure',
      Developer: 'Aspyr',
      Publisher: 'Aspyr'
    },
    {
      Month: 'FEBRUARY',
      Day: 15,
      Title: 'Gunvolt Records Cychronicle',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Rhythm',
      Developer: 'Inti Creates',
      Publisher: 'Inti Creates'
    },
    {
      Month: 'FEBRUARY',
      Day: 15,
      Title: 'The Legend of Heroes: Trails Through Daybreak',
      Platform: 'NS',
      Genre: 'Role-playing',
      Developer: 'Nihon Falcom',
      Publisher: 'Nihon Falcom'
    },
    {
      Month: 'FEBRUARY',
      Day: 15,
      Title: 'PlateUp!',
      Platform: 'NS, PS4, PS5, XBO, XSX',
      Genre: 'Construction and management simulation',
      Developer: 'It\'s Happening',
      Publisher: 'Yogscast Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 15,
      Title: 'Spirit Hunter: Death Mark II',
      Platform: 'Win, NS, PS5',
      Genre: 'Horror',
      Developer: 'Experience',
      Publisher: 'Aksys Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 16,
      Title: 'The Legend of Heroes: Trails of Cold Steel III',
      Platform: 'PS5',
      Genre: 'Role-playing',
      Developer: 'Nihon Falcom',
      Publisher: 'NIS America'
    },
    {
      Month: 'FEBRUARY',
      Day: 16,
      Title: 'The Legend of Heroes: Trails of Cold Steel IV',
      Platform: 'PS6',
      Genre: 'Role-playing',
      Developer: 'Nihon Falcom',
      Publisher: 'NIS America'
    },
    {
      Month: 'FEBRUARY',
      Day: 16,
      Title: 'Mario vs. Donkey Kong',
      Platform: 'NS',
      Genre: 'Puzzle, platformer',
      Developer: 'Nintendo Software Technology',
      Publisher: 'Nintendo'
    },
    {
      Month: 'FEBRUARY',
      Day: 16,
      Title: 'Recolit',
      Platform: 'Win',
      Genre: 'Puzzle, adventure',
      Developer: 'Image Labo',
      Publisher: 'Image Labo, Yokaze'
    },
    {
      Month: 'FEBRUARY',
      Day: 16,
      Title: 'Skull and Bones',
      Platform: 'Win, PS5, XSX',
      Genre: 'Action-adventure',
      Developer: 'Ubisoft Singapore',
      Publisher: 'Ubisoft'
    },
    {
      Month: 'FEBRUARY',
      Day: 20,
      Title: 'irem Collection Volume 2',
      Platform: 'NS, PS4, PS5, XBO, XSX',
      Genre: 'Shoot \'em up',
      Developer: 'ININ Games, Irem, Tozai Games',
      Publisher: 'ININ Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 21,
      Title: 'Last Epoch',
      Platform: 'Win',
      Genre: 'Action role-playing',
      Developer: 'Eleventh Hour Games',
      Publisher: 'Eleventh Hour Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 21,
      Title: 'Slave Zero X',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Platform',
      Developer: 'Poppy Works',
      Publisher: 'Ziggurat Interactive'
    },
    {
      Month: 'FEBRUARY',
      Day: 21,
      Title: 'Terminator: Dark Fate - Defiance',
      Platform: 'Win',
      Genre: 'Real-time strategy',
      Developer: 'Slitherine Ltd',
      Publisher: 'Slitherine Ltd'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'CorpoNation: The Sorting Process',
      Platform: 'Win',
      Genre: 'Construction and management simulation',
      Developer: 'Canteen',
      Publisher: 'Playtonic Friends'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'King Arthur: Knight\'s Tale',
      Platform: 'PS5, XSX',
      Genre: 'Role-playing',
      Developer: 'NeocoreGames',
      Publisher: 'NeocoreGames'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Open Roads',
      Platform: 'Win, NS, PS4, PS5, XSX',
      Genre: 'Interactive movie',
      Developer: 'Open Roads Team',
      Publisher: 'Annapurna Interactive'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Pacific Drive',
      Platform: 'PS5, Win',
      Genre: 'Survival, roguelike',
      Developer: 'Ironwood Studios',
      Publisher: 'Kepler Interactive'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Retro Game Challenge 1 + 2 Replay',
      Platform: 'NS',
      Genre: 'Arcade',
      Developer: 'Bandai Namco Studios',
      Publisher: 'Bandai Namco Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Shin chan: Shiro of Coal Town',
      Platform: 'NS',
      Genre: 'Adventure',
      Developer: 'Neos',
      Publisher: 'Neos'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Sons of the Forest',
      Platform: 'Win',
      Genre: 'Survival',
      Developer: 'Endnight Games',
      Publisher: 'Newnight'
    },
    {
      Month: 'FEBRUARY',
      Day: 22,
      Title: 'Yohane the Parhelion: Numazu in the Mirage',
      Platform: 'Win, NS, PS5',
      Genre: 'Roguelike, deck-building',
      Developer: 'BeXide',
      Publisher: 'BeXide'
    },
    {
      Month: 'FEBRUARY',
      Day: 23,
      Title: 'Promenade',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Platform',
      Developer: 'Holy Cap',
      Publisher: 'Red Art Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 27,
      Title: 'Shiren the Wanderer: The Mystery Dungeon of Serpentcoil Island',
      Platform: 'NS',
      Genre: 'Roguelike, role-playing',
      Developer: 'Spike Chunsoft',
      Publisher: 'Spike Chunsoft'
    },
    {
      Month: 'FEBRUARY',
      Day: 27,
      Title: 'Sympathy Kiss',
      Platform: 'NS',
      Genre: 'Visual novel',
      Developer: 'Design Factory',
      Publisher: 'Idea Factory International'
    },
    {
      Month: 'FEBRUARY',
      Day: 27,
      Title: 'Wrath: Aeon of Ruin',
      Platform: 'Win',
      Genre: 'First-person shooter',
      Developer: 'KillPixel',
      Publisher: '3D Realms, Fulqrum Publishing'
    },
    {
      Month: 'FEBRUARY',
      Day: 28,
      Title: 'Brothers: A Tale of Two Sons Remake',
      Platform: 'Win, PS5, XSX',
      Genre: 'Adventure',
      Developer: 'Avantgarden',
      Publisher: '505 Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 28,
      Title: 'Star Wars: Dark Forces Remaster',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'First-person shooter',
      Developer: 'Nightdive Studios',
      Publisher: 'Nightdive Studios'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Bar Bella Abyss',
      Platform: 'NS, PS4, PS5',
      Genre: 'Roguelikestrategy, role-playing',
      Developer: 'Nippon Ichi Software',
      Publisher: 'Nippon Ichi Software'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Final Fantasy VII Rebirth',
      Platform: 'PS5',
      Genre: 'Action role-playing',
      Developer: 'Square Enix',
      Publisher: 'Square Enix'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Goblin Slayer Another Adventurer: Nightmare Feast',
      Platform: 'Win, NS',
      Genre: 'Role-playing',
      Developer: 'Apollosoft, Mebius',
      Publisher: 'Bushiroad Games'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Of the Red, the Light, and the Ayakashi Tsuzuri',
      Platform: 'Win, NS',
      Genre: 'Visual novel',
      Developer: 'HaccaWorks',
      Publisher: 'Dramatic Create'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Ufouria: The Saga 2',
      Platform: 'Win, NS',
      Genre: 'Platform',
      Developer: 'Sunsoft',
      Publisher: 'Sunsoft'
    },
    {
      Month: 'FEBRUARY',
      Day: 29,
      Title: 'Welcome to ParadiZe',
      Platform: 'Win, PS5, XSX',
      Genre: 'Survival, action',
      Developer: 'Eko Software',
      Publisher: 'Nacon'
    },
    {
      Month: 'FEBRUARY',
      Day: TBA,
      Title: 'Heavenly Bodies',
      Platform: 'NS',
      Genre: 'Adventure',
      Developer: '2pt Interactive',
      Publisher: '2pt Interactive'
    },
    {
      Month: 'FEBRUARY',
      Day: TBA,
      Title: 'Islands of Insight',
      Platform: 'Win',
      Genre: 'Puzzle',
      Developer: 'Lunarch Studios',
      Publisher: 'Behaviour Interactive'
    },
    {
      Month: 'FEBRUARY',
      Day: TBA,
      Title: 'The Political Machine 2024',
      Platform: 'Win',
      Genre: 'Government simulation',
      Developer: 'Stardock Entertainment',
      Publisher: 'Stardock Entertainment'
    },
    {
      Month: 'FEBRUARY',
      Day: TBA,
      Title: 'Tokyo Revengers: Last Mission',
      Platform: 'Win, NS, iOS, Droid, PS4, PS5',
      Genre: 'Action role-playing',
      Developer: 'Victor Entertainment',
      Publisher: 'Victor Entertainment'
    },
    {
      Month: 'MARCH',
      Day: 5,
      Title: 'Mediterranea Inferno',
      Platform: 'Win, NS, PS4, PS5, XSX',
      Genre: 'Visual novel',
      Developer: 'EyeGuys',
      Publisher: 'Santa Ragione'
    },
    {
      Month: 'MARCH',
      Day: 5,
      Title: 'The Outlast Trials',
      Platform: 'Win, PS4, PS5, XBO, XSX',
      Genre: 'Survival horror',
      Developer: 'Red Barrels',
      Publisher: 'Red Barrels'
    },
    {
      Month: 'MARCH',
      Day: 7,
      Title: 'As Dusk Falls',
      Platform: 'PS4, PS5',
      Genre: 'Narrative adventure',
      Developer: 'Interior Night',
      Publisher: 'Interior Night'
    },
    {
      Month: 'MARCH',
      Day: 7,
      Title: 'Fitness Boxing feat. Hatsune Miku: Isshoni Exercise',
      Platform: 'NS',
      Genre: 'Exergaming, rhythm, sports',
      Developer: 'Imagineer',
      Publisher: 'Imagineer'
    },
    {
      Month: 'MARCH',
      Day: 8,
      Title: 'Homeworld 3',
      Platform: 'Win',
      Genre: 'Real-time strategy',
      Developer: 'Blackbird Interactive',
      Publisher: 'Gearbox Publishing'
    },
    {
      Month: 'MARCH',
      Day: 8,
      Title: 'Unicorn Overlord',
      Platform: 'NS, PS4, PS5, XSX',
      Genre: 'Tactical role-playing',
      Developer: 'Vanillaware',
      Publisher: 'Atlus'
    },
    {
      Month: 'MARCH',
      Day: 14,
      Title: 'Ib',
      Platform: 'PS4, PS5',
      Genre: 'Adventure, horror',
      Developer: 'Kouri',
      Publisher: 'Playism'
    },
    {
      Month: 'MARCH',
      Day: 20,
      Title: 'Alone in the Dark',
      Platform: 'Win, PS5, XSX',
      Genre: 'Survival horror',
      Developer: 'Pieces Interactive',
      Publisher: 'THQ Nordic'
    },
    {
      Month: 'MARCH',
      Day: 22,
      Title: 'Dragon\'s Dogma 2',
      Platform: 'Win, PS5, XSX',
      Genre: 'Action role-playing',
      Developer: 'Capcom',
      Publisher: 'Capcom'
    },
    {
      Month: 'MARCH',
      Day: 22,
      Title: 'Princess Peach: Showtime!',
      Platform: 'NS',
      Genre: 'Action-adventure',
      Developer: 'Un­known',
      Publisher: 'Nintendo'
    },
    {
      Month: 'MARCH',
      Day: 22,
      Title: 'Rise of the Rōnin',
      Platform: 'PS5',
      Genre: 'Action role-playing',
      Developer: 'Team Ninja',
      Publisher: 'Sony Interactive Entertainment'
    },
    {
      Month: 'MARCH',
      Day: 26,
      Title: 'South Park: Snow Day!',
      Platform: 'Win, PS5, XSX, NS',
      Genre: 'Action role-playing',
      Developer: 'Question',
      Publisher: 'THQ Nordic'
    },
    {
      Month: 'MARCH',
      Day: 28,
      Title: 'Amairo Chocolate',
      Platform: 'NS',
      Genre: 'Visual novel',
      Developer: 'Dramatic Create',
      Publisher: 'Cabbage Soft'
    },
    {
      Month: 'MARCH',
      Day: 28,
      Title: 'Mars 2120',
      Platform: 'Win, NS, PS4, PS5, XBO, XSX',
      Genre: 'Metroidvania',
      Developer: 'QUByte Interactive',
      Publisher: 'QUByte Interactive'
    },
    {
      Month: 'MARCH',
      Day: 28,
      Title: 'Radirgy 2',
      Platform: 'NS, PS4, PS5',
      Genre: 'Shoot \'em up',
      Developer: 'RS34',
      Publisher: 'BEEP Japan'
    },
    {
      Month: 'MARCH',
      Day: TBA,
      Title: 'The Legend of Heroes: Trails Through Daybreak',
      Platform: 'NS',
      Genre: 'Role-playing',
      Developer: 'Nihon Falcom',
      Publisher: 'Clouded Leopard Entertainment'
    },
    {
      Month: 'MARCH',
      Day: TBA,
      Title: 'Tchia',
      Platform: 'Win',
      Genre: 'Adventure',
      Developer: 'Awacab',
      Publisher: 'Awacab'
    }
  ]



