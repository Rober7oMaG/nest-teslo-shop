import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from './dto';
import { Auth, GetUser } from './decorators';
import { User } from './entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDTO) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  // @Get('private')
  // @UseGuards(AuthGuard())
  // testingPrivateRoute(
  //   @GetUser() user: User,
  //   @GetUser('email') userEmail: string,
  //   @RawHeaders() rawHeaders: string[],
  //   @Headers() headers: IncomingHttpHeaders,
  // ) {
  //   return {
  //     ok: true,
  //     message: 'Hello World!',
  //     user,
  //     userEmail,
  //     rawHeaders,
  //     headers,
  //   };
  // }

  // @Get('private2')
  // @RoleProtected()
  // @UseGuards(AuthGuard(), UserRoleGuard)
  // testingPrivateRoute2(@GetUser() user: User) {
  //   return {
  //     ok: true,
  //     user,
  //   };
  // }

  // @Get('private3')
  // @Auth(ValidRoles.admin)
  // testingPrivateRoute3(@GetUser() user: User) {
  //   return {
  //     ok: true,
  //     user,
  //   };
  // }
}
