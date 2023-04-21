import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class User {

	@IsNotEmpty()
	@IsNumber()
	id: number;

	@IsString()
	@IsNotEmpty()
	username: string;
}
