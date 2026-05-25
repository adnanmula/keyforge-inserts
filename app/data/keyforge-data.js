const CardSets = {
  'CALL_OF_THE_ARCHONS': {short: 'CotA', full: 'Call of the Archons', hue: '0', exp: 1},
  'AGE_OF_ASCENSION': {short: 'AoA', full: 'Age of Ascension', hue: '201', exp: 2},
  'WORLDS_COLLIDE': {short: 'WC', full: 'Worlds Collide', hue: '296', exp: 3},
  'MASS_MUTATION': {short: 'MM', full: 'Mass Mutation', hue: '120', exp: 4},
  'DARK_TIDINGS': {short: 'DT', full: 'Dark Tidings', hue: '245', exp: 5},
  'WINDS_OF_EXCHANGE': {short: 'WoE', full: 'Winds of Exchange', hue: '358', exp: 6},
  'GRIM_REMINDERS': {short: 'GR', full: 'Grim Reminders', hue: '255', exp: 7},
  'AEMBER_SKIES': {short: 'AS', full: 'Aember Skies', hue: '0', exp: 8},
  'PROPHETIC_VISIONS': {short: 'PV', full: 'Prophetic Visions', hue: '30', exp: 9},
  'DRACONIAN_MEASURES': {short: 'DM', full: 'Draconian Measures', hue: '60', exp: 10},
  'VAULT_MASTERS_2023': {short: 'VM23', full: 'Vault Masters 2023', hue: '', exp: 100},
  'VAULT_MASTERS_2024': {short: 'VM24', full: 'Vault Masters 2024', hue: '', exp: 101},
  'VAULT_MASTERS_2025': {short: 'VM25', full: 'Vault Masters 2025', hue: '', exp: 102},
  'VAULT_MASTERS_2026': {short: 'VM26', full: 'Vault Masters 2026', hue: '', exp: 103},
  'MORE_MUTATION': {short: 'MoM', full: 'More Mutation', hue: '120', exp: 200},
  'TOKENS_OF_CHANGE': {short: 'ToC', full: 'Tokens of Change', hue: '5', exp: 201},
  'DISCOVERY': {short: 'DIS', full: 'Discovery', hue: '', exp: 300},
  'CRUCIBLE_CLASH': {short: 'CC', full: 'Crucible Clash', hue: '', exp: 301},
  'MARTIAN_CIVIL_WAR': {short: 'MCW', full: 'Martian Civil War', hue: '', exp: 400},
  'UNCHAINED_2022': {short: 'U22', full: 'Unchained 2022', hue: '', exp: 401},
  'MENAGERIE_2024': {short: 'M24', full: 'Menagerie 2024', hue: '', exp: 402},
};

let SearchExpansion =  function(sets, exp) {
  for(var set in sets){
    if(sets[set].exp === exp) {
      return set;
    }
  }
  return null;
};

const HouseList = [
  { name:'Brobnar'},
  { name:'Dis'},
  { name:'Ekwidon'},
  { name:'Geistoid'},
  { name:'Logos'},
  { name:'Mars'},
  { name:'Sanctum'},
  { name:'Saurian'},
  { name:'Shadows'},
  { name:'Star Alliance'},
  { name:'Unfathomable'},
  { name:'Untamed'},
  { name:'Redemption'},
  { name:'Skyborn'},
  { name:'Ouboros'},
  { name:'Keyraken'},
  { name:'Elders'},
  { name:'Ironix Rebels'},
]

export { CardSets, SearchExpansion, HouseList };
