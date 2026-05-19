const CardSets = {
  'CALL_OF_THE_ARCHONS': {short: 'CotA', full: 'Call of the Archons', class:'set-cota', hue:'0', exp: 341},
  'AGE_OF_ASCENSION': {short: 'AoA', full: 'Age of Ascension' ,class:'set-aoa', hue:'201',  exp: 435},
  'WORLDS_COLLIDE': {short: 'WC', full: 'Worlds Collide', class:'set-wc', hue:'296',  exp: 452},
  'MASS_MUTATION': {short: 'MM', full: 'Mass Mutation', class:'set-mm', hue:'120',  exp: 479},
  'DARK_TIDINGS': {short: 'DT', full: 'Dark Tidings', class:'set-dt', hue:'245',  exp: 496},
  'WINDS_OF_EXCHANGE': {short: 'WoE', full: 'Winds of Exchange', class:'set-woe', hue:'358',  exp: 600},
  'GRIM_REMINDERS': {short: 'GR', full: 'Grim Reminders', class:'set-gr', hue:'255',  exp: 700},
  'AEMBER_SKIES': {short: 'AS', full: 'Aember Skies', class:'set-as', hue:'0',  exp: 800},
  'TOKENS_OF_CHANGE': {short: 'ToC', full: 'Tokens of Change', class:'set-toc', hue:'5',  exp: 855},
  'MORE_MUTATION': {short: 'MoM', full: 'More Mutation', class:'set-mom', hue:'120',  exp: 874},
  'PROPHETIC_VISIONS': {short: 'PV', full: 'Prophetic Visions', class:'set-pv', hue:'30',  exp: 886},
  'DRACONIAN_MEASURES': {short: 'DM', full: 'Draconian Measures', class:'set-dm', hue:'60',  exp: 887},
  'UNCHAINED_2022': {short: 'U22', full: 'Unchained 2022', class:'set-u22', hue:'',  exp: 601},
  'VAULT_MASTERS_2023': {short: 'VM23', full: 'Vault Masters 2023', class:'set-vm23', hue:'',  exp: 609},
  'MENAGERIE_2024': {short: 'M24', full: 'Menagerie 2024', class:'set-m24', hue:'',  exp: 722},
  'VAULT_MASTERS_2024': {short: 'VM24', full: 'Vault Masters 2024', class:'set-vm24', hue:'',  exp: 737},
  'VAULT_MASTERS_2025': {short: 'VM25', full: 'Vault Masters 2025', class:'set-vm25', hue:'',  exp: 939},
  'MARTIAN_CIVIL_WAR': {short: 'MCW', full: 'Martian Civil War', class:'set-mcw', hue:'',  exp: 892},
  'DISCOVERY': {short: 'DIS', full: 'Discovery', class:'set-dis', hue:'',  exp: 907},
  'CRUCIBLE_CLASH': {short: 'CC', full: 'Crucible Clash', class:'set-cc', hue:'',  exp: 908},
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
  { name:'Logos'},
  { name:'Sanctum'},
  { name:'Mars'},
  { name:'Dis'},
  { name:'Shadows'},
  { name:'Untamed'},
  { name:'Star Alliance'},
  { name:'Saurian'},
  { name:'Unfathomable'},
  { name:'Ekwidon'},
  { name:'Geistoid'},
  { name:'Skyborn'},
  { name:'Redemption'},
  { name:'Ouboros'},
  { name:'Keyraken'},
  { name:'Elders'},
  { name:'Ironix Rebels'},
]

export { CardSets, SearchExpansion, HouseList };
