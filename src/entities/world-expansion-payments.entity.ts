import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { WorldExpansion } from './world-expansion.entity'
import { User } from './user.entity'

@Entity({ name: 'world_expansion_payments' })
export class WorldExpansionPayments {
  @PrimaryGeneratedColumn()
  id: number

  @Column('decimal', { precision: 10, scale: 1, nullable: false, default: 0 })
  money: number

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date

  @ManyToOne(() => User, {
    nullable: false,
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(
    () => WorldExpansion,
    worldExpansion => worldExpansion.worldExpansionPayments,
    {
      nullable: false,
      onDelete: 'NO ACTION',
    },
  )
  @JoinColumn({ name: 'world_expansion_id' })
  worldExpansion: WorldExpansion
}
