import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsOptional()
	@IsString()
	name: string

	@IsString()
	@IsNotEmpty({message: 'Введите почту'})
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Пароль должен содержать не менее 6 символов'
	})
	@IsString()
	@IsNotEmpty({message: 'Введите пароль'})
	password: string
}
