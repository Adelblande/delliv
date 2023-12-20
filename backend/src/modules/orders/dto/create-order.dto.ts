import { IsString, MinLength } from 'class-validator';

export class CreateOrderDto {
  @MinLength(3)
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  status: string;
}
