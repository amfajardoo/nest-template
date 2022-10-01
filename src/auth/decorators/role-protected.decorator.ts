import { SetMetadata } from '@nestjs/common';
import { ROLES } from '@auth/enums';

export const META_ROLES = 'roles';

export const RoleProtected = (...args: ROLES[]) => {
  return SetMetadata(META_ROLES, args);
};
