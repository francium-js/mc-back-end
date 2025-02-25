import { Injectable, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { User } from 'src/entities/user.entity'
import type { GenerateTokensT } from 'src/modules-site/auth/types'
import type { GetUserDto } from 'src/modules-site/user/dtos-request'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async create(id: number, newToken: string): Promise<void> {
    const response = await this.userRepository.update(id, {
      refreshToken: newToken,
    })

    if (response.affected === 0) throw new NotFoundException('User not found')
  }

  generateTokens<T extends object>(payload: T): GenerateTokensT {
    const accessToken = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      expiresIn: '30m',
    })
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '30d',
      secret: this.config.get('JWT_REFRESH_SECRET'),
    })

    return {
      accessToken,
      refreshToken,
    }
  }

  remove(id: number): void {
    this.userRepository.update(id, { refreshToken: null })
  }

  validateAccessToken(token: string): Promise<GetUserDto> {
    return this.jwtService.verify(token, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
    })
  }

  validateRefreshToken(token: string): {
    id: number
    username: string
  } {
    const userData = this.jwtService.verify(token, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
    })

    return userData
  }

  async refresh(id: number, refreshToken: string): Promise<void> {
    const response = await this.userRepository.update(id, { refreshToken })

    if (response.affected === 0) throw new NotFoundException('User not found')
  }
}
