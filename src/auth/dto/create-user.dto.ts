import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: "User's Email",
    example: 'example@mail.com',
    nullable: false,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      "User's Password (must have an uppercase, a lowercase letter, and a number)",
    example: 'Abc123',
    nullable: false,
    minLength: 6,
    maxLength: 50,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have an uppercase, a lowercase letter, and a number',
  })
  password: string;

  @ApiProperty({
    description: "User's Full Name",
    example: 'John Doe',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  fullName: string;
}
