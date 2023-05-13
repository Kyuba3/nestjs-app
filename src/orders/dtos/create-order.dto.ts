import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  address: string;
}
