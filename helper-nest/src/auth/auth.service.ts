import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ user: User; access_token: string }> {
    const user = await this.UserService.findSingle({ username: username });
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.user_id, username: user.username };
    return {
      user: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
