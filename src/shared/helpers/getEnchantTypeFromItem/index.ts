import { EnchantsTypesEnum } from 'src/shared/enums'

export const getEnchantTypeFromItemType = (
  itemType: string,
): EnchantsTypesEnum => {
  if (itemType.includes(`_${EnchantsTypesEnum.HELMET}`)) {
    return EnchantsTypesEnum.HELMET
  }

  if (itemType.includes(`_${EnchantsTypesEnum.CHESTPLATE}`)) {
    return EnchantsTypesEnum.CHESTPLATE
  }

  if (itemType.includes(`_${EnchantsTypesEnum.LEGGINGS}`)) {
    return EnchantsTypesEnum.LEGGINGS
  }

  if (itemType.includes(`_${EnchantsTypesEnum.BOOTS}`)) {
    return EnchantsTypesEnum.BOOTS
  }

  if (itemType.includes(`_${EnchantsTypesEnum.SWORD}`)) {
    return EnchantsTypesEnum.SWORD
  }

  if (itemType.includes(`_${EnchantsTypesEnum.PICKAXE}`)) {
    return EnchantsTypesEnum.PICKAXE
  }

  if (itemType.includes(`_${EnchantsTypesEnum.AXE}`)) {
    return EnchantsTypesEnum.AXE
  }

  if (itemType.includes(`_${EnchantsTypesEnum.SHOVEL}`)) {
    return EnchantsTypesEnum.SHOVEL
  }

  if (itemType.includes(`_${EnchantsTypesEnum.HOE}`)) {
    return EnchantsTypesEnum.HOE
  }

  if (itemType === EnchantsTypesEnum.ELYTRA) {
    return EnchantsTypesEnum.ELYTRA
  }

  if (itemType === EnchantsTypesEnum.TRIDENT) {
    return EnchantsTypesEnum.TRIDENT
  }

  if (itemType === EnchantsTypesEnum.BOW) {
    return EnchantsTypesEnum.BOW
  }

  if (itemType === EnchantsTypesEnum.CROSSBOW) {
    return EnchantsTypesEnum.CROSSBOW
  }

  if (itemType === EnchantsTypesEnum.FISHING_ROD) {
    return EnchantsTypesEnum.FISHING_ROD
  }

  if (itemType === EnchantsTypesEnum.MACE) {
    return EnchantsTypesEnum.MACE
  }

  return null
}
