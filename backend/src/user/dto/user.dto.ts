import { IsNotEmpty } from "class-validator";

export class UserDto {

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  avatar: string;
}
