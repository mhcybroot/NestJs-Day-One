import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { Roles } from 'src/guards/roles/roles.decoretor';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user')
export class UserController {
  @Get()
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @ApiHeader({
    name: 'x-user-role',
    description: 'The role of the user making the request',
    required: true,
    enum: Role, // If Role is an enum, Swagger will create a dropdown!
  })
  getUser() {
    return 'User data fetched successfully';
  }
}
