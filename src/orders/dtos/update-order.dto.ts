import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  client: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  adrress: string;
}
