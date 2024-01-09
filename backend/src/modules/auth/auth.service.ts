import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const accessToken = this.jwt.sign({ sub: user.id });

    return {
      accessToken,
      user: { ...user, password: undefined },
    };
  }

  async validation(token: string) {
    try {
      const publicKey = this.config.get('JWT_PUBLIC_KEY');
      const decoded = await this.jwt.verify(token, {
        publicKey: Buffer.from(`${publicKey}`, 'base64'),
        algorithms: ['RS256'],
      });

      return {
        email: decoded.email,
        name: decoded.name,
        id: decoded.sub,
      };
    } catch (err) {
      if (err.message === 'jwt expired') {
        throw new UnauthorizedException();
      }
      console.log('validation-->', err);
    }
  }
}
