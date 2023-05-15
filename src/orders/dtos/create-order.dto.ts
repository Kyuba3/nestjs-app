import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  adrress: string;
}
