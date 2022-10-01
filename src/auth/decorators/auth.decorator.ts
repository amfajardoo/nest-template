import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '@auth/guards';
import { ROLES } from '@auth/enums';
import { RoleProtected } from './role-protected.decorator';

export function Auth(...roles: ROLES[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
