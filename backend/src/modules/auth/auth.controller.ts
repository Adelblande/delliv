import { Body, Controller, Post } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { AuthService } from './auth.service';

@Controller('sessions')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  create(@Body() data: CreateSessionDto) {
    return this.authService.signIn(data.email, data.password);
  }
}
