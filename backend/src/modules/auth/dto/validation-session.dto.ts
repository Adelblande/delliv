import { IsString } from 'class-validator';

export class ValidadionSessionDto {
  @IsString()
  token: string;
}
