import { Body, Controller, Post } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { AuthService } from './auth.service';
import { ValidadionSessionDto } from './dto/validation-session.dto';

@Controller('sessions')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  create(@Body() data: CreateSessionDto) {
    return this.authService.signIn(data.email, data.password);
  }

  @Post('validation')
  async validation(@Body() data: ValidadionSessionDto) {
    const response = await this.authService.validation(data.token);

    return response;
  }
}
