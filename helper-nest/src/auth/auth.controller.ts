import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsignIn } from 'src/common/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: IsignIn) {
    const data = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    return {
      success: true,
      statusCode: HttpStatus.OK,
      data: data,
      message: 'Successfully signed in',
    };
  }
}
