import type { VipEnum } from 'src/shared/enums'
import type {
  GetEnchantitemsLotsQuaryDto,
  GetLotsQuaryDto,
  GetTradeHistoryWithTimeRangeQueryDto,
} from './dtos-request'

export type CreateLotItemServiceT = {
  userId: number
  itemId: number
  price: number
  username: string
  vip: VipEnum
}

export type CreateLotShulkerServiceT = {
  userId: number
  shulkerId: number
  price: number
  username: string
  vip: VipEnum
}

export type ByeLotItemServiceT = {
  lotId: number
  buyerUserId: number
  vip: VipEnum
}

export type ByeLotShulkerServiceT = {
  lotId: number
  buyerUserId: number
  vip: VipEnum
}

export type GetItemWithEnchantsService = {
  username: string
  didNeedUserLots?: boolean
  didNeedShulkers?: boolean
} & GetEnchantitemsLotsQuaryDto

export type GetShulkerLotsService = {
  username: string
  didNeedUserLots?: boolean
} & GetLotsQuaryDto

export type GetLotsSerivce = {
  username: string
} & GetLotsQuaryDto

export type GetTradeHistoryService = {
  userId: number
  isSeller?: boolean
  page?: number
  limit?: number
}

export type getTradeHistoryWithTimeRange = {
  userId: number
} & GetTradeHistoryWithTimeRangeQueryDto
