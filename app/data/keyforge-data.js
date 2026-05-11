const CardSets = {
  'CALL_OF_THE_ARCHONS': {short: 'CotA', full: 'Call of the Archons', class:'set-cota', hue:'0', exp: 341},
  'AGE_OF_ASCENSION': {short: 'AoA', full: 'Age of Ascension' ,class:'set-aoa', hue:'201',  exp: 435},
  'WORLDS_COLLIDE': {short: 'WC', full: 'Worlds Collide', class:'set-wc', hue:'296',  exp: 452},
  'MASS_MUTATION': {short: 'MM', full: 'Mass Mutation', class:'set-mm', hue:'186',  exp: 479},
  'DARK_TIDINGS': {short: 'DT', full: 'Dark Tidings', class:'set-dt', hue:'245',  exp: 496},
  'WINDS_OF_EXCHANGE': {short: 'WOE', full: 'Winds of Exchange', class:'set-woe', hue:'73',  exp: 600},
  'GRIM_REMINDERS': {short: 'GR', full: 'Grim Reminders', class:'set-gr', hue:'',  exp: 700},
  'AEMBER_SKIES': {short: 'AS', full: 'Aember Skies', class:'set-as', hue:'',  exp: 800},
  'TOKENS_OF_CHANGE': {short: 'TOC', full: 'Tokens of Change', class:'set-toc', hue:'',  exp: 855},
  'MORE_MUTATION': {short: 'MoM', full: 'More Mutation', class:'set-mom', hue:'73',  exp: 874},
  'PROPHETIC_VISIONS': {short: 'PV', full: 'Prophetic Visions', class:'set-pv', hue:'',  exp: 886},
  'DRACONIAN_MEASURES': {short: 'DM', full: 'Draconian Measures', class:'set-dm', hue:'',  exp: 887},
  'UNCHAINED': {short: 'U22', full: 'Unchained 2022', class:'set-u22', hue:'',  exp: 601},
  'VAULT_MASTERS_23': {short: 'VM23', full: 'Vault Masters 2023', class:'set-vm23', hue:'',  exp: 609},
  'MENAGERIE': {short: 'M24', full: 'Menagerie 2024', class:'set-m24', hue:'',  exp: 722},
  'VAULT_MASTERS_24': {short: 'VM24', full: 'Vault Masters 2024', class:'set-vm24', hue:'',  exp: 737},
  'VAULT_MASTERS_25': {short: 'VM25', full: 'Vault Masters 2025', class:'set-vm25', hue:'',  exp: 939},
  'MARTIAN_CIVIL_WAR': {short: 'MCW', full: 'Martian Civil War', class:'set-mcw', hue:'',  exp: 892},
  'DISCOVERY': {short: 'DIS', full: 'Discovery', class:'set-dis', hue:'',  exp: 907},
};

let SearchExpansion =  function(sets, exp) {
  for(var set in sets){
    if(sets[set].exp === exp) {
      return set;
    }
  }
  return null;
};

const ExpansionList = [
  {csv: 'CALL_OF_THE_ARCHONS', short: 'CotA', full: 'Call of the Archons', class:'set-cota', hue:'0', exp: 341},
  {csv: 'AGE_OF_ASCENSION', short: 'AoA', full: 'Age of Ascension' ,class:'set-aoa', hue:'201',  exp: 435},
  {csv: 'WORLDS_COLLIDE', short: 'WC', full: 'Worlds Collide', class:'set-wc', hue:'296',  exp: 452},
  {csv: 'MASS_MUTATION', short: 'MM', full: 'Mass Mutation', class:'set-mm', hue:'186',  exp: 479},
  {csv: 'DARK_TIDINGS', short: 'DT', full: 'Dark Tidings', class:'set-dt', hue:'245',  exp: 496},
  {csv: 'WINDS_OF_EXCHANGE', short: 'WOE', full: 'Winds of Exchange', class:'set-woe', hue:'73',  exp: 600},
  {csv: 'GRIM_REMINDERS', short: 'GR', full: 'Grim Reminders', class:'set-gr', hue:'',  exp: 700},
  {csv: 'AEMBER_SKIES', short: 'AS', full: 'Aember Skies', class:'set-as', hue:'',  exp: 800},
  {csv: 'TOKENS_OF_CHANGE', short: 'TOC', full: 'Tokens of Change', class:'set-toc', hue:'',  exp: 855},
  {csv: 'MORE_MUTATION', short: 'MoM', full: 'More Mutation', class:'set-mom', hue:'73',  exp: 874},
  {csv: 'PROPHETIC_VISIONS', short: 'PV', full: 'Prophetic Visions', class:'set-pv', hue:'',  exp: 886},
  {csv: 'DRACONIAN_MEASURES', short: 'DM', full: 'Draconian Measures', class:'set-dm', hue:'',  exp: 887},
  {csv: 'UNCHAINED', short: 'U22', full: 'Unchained 2022', class:'set-u22', hue:'',  exp: 601},
  {csv: 'MENAGERIE', short: 'M24', full: 'Menagerie 2024', class:'set-m24', hue:'',  exp: 722},
  {csv: 'VAULT_MASTERS_23', short: 'VM23', full: 'Vault Masters 2023', class:'set-vm23', hue:'',  exp: 609},
  {csv: 'VAULT_MASTERS_24', short: 'VM24', full: 'Vault Masters 2024', class:'set-vm24', hue:'',  exp: 737},
  {csv: 'VAULT_MASTERS_25', short: 'VM25', full: 'Vault Masters 2025', class:'set-vm25', hue:'',  exp: 939},
  {csv: 'MARTIAN_CIVIL_WAR', short: 'MCW', full: 'Martian Civil War', class:'set-mcw', hue:'',  exp: 892},
  {csv: 'DISCOVERY', short: 'DIS', full: 'Discovery', class:'set-dis', hue:'',  exp: 907},
];

const HouseList = [
  { name:'Brobnar', defaultIconPath: 'assets/icons/svg/house/Brobnar.svg'},
  { name:'Logos', defaultIconPath: 'assets/icons/svg/house/Logos.svg'},
  { name:'Sanctum', defaultIconPath: 'assets/icons/svg/house/Sanctum.svg'},
  { name:'Mars', defaultIconPath: 'assets/icons/svg/house/Mars.svg'},
  { name:'Dis', defaultIconPath: 'assets/icons/svg/house/Dis.svg'},
  { name:'Shadows', defaultIconPath: 'assets/icons/svg/house/Shadows.svg'},
  { name:'Untamed', defaultIconPath: 'assets/icons/svg/house/Untamed.svg'},
  { name:'Star Alliance', defaultIconPath: 'assets/icons/svg/house/StarAlliance.svg'},
  { name:'Saurian', defaultIconPath: 'assets/icons/svg/house/Saurian.svg'},
  { name:'Unfathomable', defaultIconPath: 'assets/icons/svg/house/Unfathomable.svg'},
  { name:'Ekwidon', defaultIconPath: 'assets/icons/svg/house/Ekwidon.svg'},
  { name:'Geistoid', defaultIconPath: 'assets/icons/svg/house/Geistoid.svg'},
  { name:'Skyborn', defaultIconPath: 'assets/icons/svg/house/Skyborn.svg'},
  { name:'Redemption', defaultIconPath: 'assets/icons/svg/house/Redemption.svg'},
  { name:'Ouboros', defaultIconPath: 'assets/icons/svg/house/Ouboros.svg'},
  { name:'Keyraken', defaultIconPath: 'assets/icons/svg/house/Keyraken.svg'},
  { name:'Elders', defaultIconPath: 'assets/icons/svg/house/Elders.svg'},
  { name:'Ironix Rebels', defaultIconPath: 'assets/icons/svg/house/IronixRebels.svg'},
]

export { CardSets, SearchExpansion, HouseList, ExpansionList };
