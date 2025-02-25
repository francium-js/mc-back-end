import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Advancements } from 'src/entities/advancements.entity'
import { SrPlayerSkin } from 'src/entities/sr/sr-player-skins.entity'
import { SrPlayer } from 'src/entities/sr/sr-players.entity'
import { User } from 'src/entities/user.entity'
import { TokenService } from 'src/shared/services/token/token.service'

import { Item } from 'src/entities/item.entity'

import { Shulker } from 'src/entities/shulker.entity'
import { Whitelist } from 'src/entities/whitelist.entity'
import { UserStats } from 'src/entities/user-stats.entity'
import { Crystal } from 'src/entities/crystal.entity'
import {
  UserStatsController,
  UserController,
  UserSkinController,
  UserItemsController,
  UserShulkersController,
  UserVipController,
  UserCrystalController,
} from './controllers'

import {
  UserStatsService,
  UserSkinService,
  UserItemsService,
  UserService,
  UserShulkersService,
  UserVipService,
  UserCrystalsService,
} from './services'

import { AuthModule } from '../auth/auth.module'
import { AuthService } from '../auth/services'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserStats,
      Crystal,
      Advancements,
      SrPlayer,
      Item,
      SrPlayerSkin,
      Shulker,
      Whitelist,
    ]),
    AuthModule,
  ],
  controllers: [
    UserController,
    UserItemsController,
    UserStatsController,
    UserSkinController,
    UserShulkersController,
    UserVipController,
    UserItemsController,
    UserCrystalController,
  ],
  providers: [
    UserService,
    UserItemsService,
    UserStatsService,
    JwtService,
    TokenService,
    UserSkinService,
    UserShulkersService,
    UserVipService,
    AuthService,
    UserCrystalsService,
  ],
  exports: [UserVipService, JwtService],
})
export class UserModule {}
