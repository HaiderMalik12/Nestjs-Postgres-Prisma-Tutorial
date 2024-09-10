import { SetMetadata } from '@nestjs/common';
import { Role } from './roles.enum';

export const ROLES_KEY = 'roles';
// collect multiple arguments in the array
// collected argument will be type of ROLE
// roles parameter will be the array of Role value
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
