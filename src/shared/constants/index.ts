import { CrystalTypeEnum, EnchantsEnum, VipEnum, WorldEnum } from '../enums'

enum EnchantMetaTypeEnum {
  ARMOR = 'armor',
  TOOLS_AND_MELEE = 'toolsAndMelee',
  RANGE_WEAPON = 'rangeWeapon',
}

export const THIRTY_DAYS = 30 * 24 * 60 * 1000

export const WL_END_COST = 64 * 2

export const enchantsWithMaxLvl: { [key: string]: number } = {
  [EnchantsEnum.BANE_OF_ARTHROPODS]: 5,
  [EnchantsEnum.BLAST_PROTECTION]: 4,
  [EnchantsEnum.BREACH]: 4,
  [EnchantsEnum.DENSITY]: 5,
  [EnchantsEnum.DEPTH_STRIDER]: 3,
  [EnchantsEnum.EFFICIENCY]: 5,
  [EnchantsEnum.FEATHER_FALLING]: 4,
  [EnchantsEnum.FIRE_ASPECT]: 2,
  [EnchantsEnum.FIRE_PROTECTION]: 4,
  [EnchantsEnum.FORTUNE]: 3,
  [EnchantsEnum.FROST_WALKER]: 2,
  [EnchantsEnum.IMPALING]: 5,
  [EnchantsEnum.KNOCKBACK]: 2,
  [EnchantsEnum.LOOTING]: 3,
  [EnchantsEnum.LOYALTY]: 3,
  [EnchantsEnum.LUCK_OF_THE_SEA]: 3,
  [EnchantsEnum.LURE]: 3,
  [EnchantsEnum.PIERCING]: 4,
  [EnchantsEnum.POWER]: 5,
  [EnchantsEnum.PROJECTILE_PROTECTION]: 4,
  [EnchantsEnum.PROTECTION]: 4,
  [EnchantsEnum.PUNCH]: 2,
  [EnchantsEnum.QUICK_CHARGE]: 3,
  [EnchantsEnum.RESPIRATION]: 3,
  [EnchantsEnum.RIPTIDE]: 3,
  [EnchantsEnum.SHARPNESS]: 5,
  [EnchantsEnum.SMITE]: 5,
  [EnchantsEnum.SOUL_SPEED]: 3,
  [EnchantsEnum.SWEEPING_EDGE]: 3,
  [EnchantsEnum.SWIFT_SNEAK]: 3,
  [EnchantsEnum.THORNS]: 3,
  [EnchantsEnum.UNBREAKING]: 3,
  [EnchantsEnum.WIND_BURST]: 3,
  [EnchantsEnum.AQUA_AFFINITY]: 1,
  [EnchantsEnum.BINDING_CURSE]: 1,
  [EnchantsEnum.CHANNELING]: 1,
  [EnchantsEnum.VANISHING_CURSE]: 1,
  [EnchantsEnum.SILK_TOUCH]: 1,
  [EnchantsEnum.MENDING]: 1,
  [EnchantsEnum.MULTISHOT]: 1,
  [EnchantsEnum.INFINITY]: 1,
  [EnchantsEnum.FLAME]: 1,
}

export const enchantVariables: {
  [key in EnchantMetaTypeEnum]: EnchantsEnum[]
} = {
  armor: [
    EnchantsEnum.AQUA_AFFINITY,
    EnchantsEnum.RESPIRATION,
    EnchantsEnum.SWIFT_SNEAK,
    EnchantsEnum.BLAST_PROTECTION,
    EnchantsEnum.FIRE_PROTECTION,
    EnchantsEnum.PROJECTILE_PROTECTION,
    EnchantsEnum.PROTECTION,
    EnchantsEnum.THORNS,
    EnchantsEnum.DEPTH_STRIDER,
    EnchantsEnum.FROST_WALKER,
    EnchantsEnum.FEATHER_FALLING,
    EnchantsEnum.SOUL_SPEED,
    EnchantsEnum.BINDING_CURSE,
    EnchantsEnum.MENDING,
    EnchantsEnum.UNBREAKING,
    EnchantsEnum.VANISHING_CURSE,
  ],
  toolsAndMelee: [
    EnchantsEnum.FORTUNE,
    EnchantsEnum.SILK_TOUCH,
    EnchantsEnum.EFFICIENCY,
    EnchantsEnum.SHARPNESS,
    EnchantsEnum.BANE_OF_ARTHROPODS,
    EnchantsEnum.SMITE,
    EnchantsEnum.SWEEPING_EDGE,
    EnchantsEnum.FIRE_ASPECT,
    EnchantsEnum.KNOCKBACK,
    EnchantsEnum.LOOTING,
    EnchantsEnum.LUCK_OF_THE_SEA,
    EnchantsEnum.LURE,
    EnchantsEnum.MENDING,
    EnchantsEnum.UNBREAKING,
    EnchantsEnum.VANISHING_CURSE,
    EnchantsEnum.WIND_BURST,
    EnchantsEnum.DENSITY,
  ],
  rangeWeapon: [
    EnchantsEnum.CHANNELING,
    EnchantsEnum.LOYALTY,
    EnchantsEnum.RIPTIDE,
    EnchantsEnum.IMPALING,
    EnchantsEnum.INFINITY,
    EnchantsEnum.MENDING,
    EnchantsEnum.UNBREAKING,
    EnchantsEnum.VANISHING_CURSE,
    EnchantsEnum.FLAME,
    EnchantsEnum.POWER,
    EnchantsEnum.PUNCH,
    EnchantsEnum.MULTISHOT,
    EnchantsEnum.PIERCING,
    EnchantsEnum.QUICK_CHARGE,
  ],
}

export const ITEMS_COUNT = 27

export const LOTS_COUNT = 8

export const SHULKERS_COUNT = 2

export const TWINKS_COUNT = 3

export const vipMultipliers: Record<VipEnum, number> = {
  [VipEnum.IRON]: 2,
  [VipEnum.GOLD]: 4,
  [VipEnum.DIAMOND]: 6,
  [VipEnum.NETHERITE]: 8,
}

export const vipPrice: Record<VipEnum, number> = {
  [VipEnum.IRON]: 8,
  [VipEnum.GOLD]: 16,
  [VipEnum.DIAMOND]: 24,
  [VipEnum.NETHERITE]: 32,
}

export const TWINKS_PRICE = {
  FIRST_TWINK: 64 * 2,
  SECOND_TWINK: 64 * 3,
  THIRD_TWINK: 64 * 4,
}

export const ppStyles = ['feet', 'move', 'normal', 'thick', 'trail', 'swords']

export const ppEffects = [
  'angry_villager',
  'ash',
  'bubble_pop',
  'campfire_cosy_smoke',
  'cherry_leaves',
  'cloud',
  'composter',
  'crimson_spore',
  'crit',
  'damage_indicator',
  'dolphin',
  'dragon_breath',
  'dust',
  'dust_color_transition',
  'dust_plume',
  'electric_spark',
  'enchant',
  'enchanted_hit',
  'end_rod',
  'entity_effect',
  'falling_dust',
  'falling_honey',
  'falling_lava',
  'falling_nectar',
  'falling_obsidian_tear',
  'falling_spore_blossom',
  'falling_water',
  'firework',
  'fishing',
  'flame',
  'glow',
  'heart',
  'infested',
  'instant_effect',
  'item_cobweb',
  'item_slime',
  'item_snowball',
  'large_smoke',
  'lava',
  'mycelium',
  'nautilus',
  'note',
  'ominous_spawning',
  'poof',
  'portal',
  'raid_omen',
  'reverse_portal',
  'scrape',
  'sculk_charge',
  'sculk_charge_pop',
  'sculk_soul',
  'small_flame',
  'small_gust',
  'smoke',
  'sneeze',
  'snowflake',
  'soul',
  'soul_fire_flame',
  'spell',
  'spore_blossom_air',
  'squid_ink',
  'totem_of_undying',
  'trial_spawner_detection',
  'trial_spawner_detection_ominous',
  'underwater',
  'vault_connection',
  'warped_spore',
  'wax_off',
  'wax_on',
  'white_ash',
  'witch',
]

export const WorldUa = {
  [WorldEnum.WORLD]: 'Простий світ',
  [WorldEnum.WORLD_NETHER]: 'Пекло',
  [WorldEnum.WORLD_THE_END]: 'Енд',
}

export const WorldColors = {
  [WorldEnum.WORLD]: '#00FF00',
  [WorldEnum.WORLD_NETHER]: '#FF0000',
  [WorldEnum.WORLD_THE_END]: '#db13f0',
}

export const CustomModelDataPrefixMap = {
  [CrystalTypeEnum.AMETIST]: 0,
  [CrystalTypeEnum.GODDES]: 50,
  [CrystalTypeEnum.EMERALD]: 100,
}

export const CustomModelDataSufixMap = {
  [CrystalTypeEnum.AMETIST]: {
    abominableblade: 1,
    abominablegreatsaber: 2,
    abominablescythe: 3,
    amethyst_shuriken: 4,
    arcanethyst: 5,
    demonlordsgreataxe: 6,
    demonlordsword: 7,
    muramasa: 8,
  },
  [CrystalTypeEnum.GODDES]: {
    ancient_royal_great_sword: 1,
    divineaxerhitta: 2,
    divinepunisher: 3,
    divine_justice: 4,
    divine_reaper: 5,
    sunbreak: 6,
    mjolnir: 7,
    righteous_relic: 8,
    pharaohs_treasure: 9,
  },
  [CrystalTypeEnum.EMERALD]: {
    enigma: 1,
    greenscythe: 2,
    powerfusehammer: 3,
    powerfusesword: 4,
    royalchakram: 5,
    sentinels_will: 6,
    soulstealer: 7,
  },
}
