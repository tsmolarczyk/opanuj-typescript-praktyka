// 212-enum-roles - Wykorzystaj enumy do otypowania roli i uprawnień użytkownika. System obsługuje następujące
// role: “ADMIN”, “EDITOR” i “VIEWER” oraz następujące uprawnienia: “VIEW”, “READ”, “WRITE” oraz “DELETE”.

export enum UserPermission {
  VIEW = 'VIEW',
  READ = 'READ',
  WRITE = 'READ',
  DELETE = 'DELETE',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export interface User {
  role: UserRole;
  permissions: UserPermission[];
}

export function hasAccess(user: User, requiredPermission: UserPermission): boolean {
  if (user.role === 'ADMIN') return true;
  return user.permissions.includes(requiredPermission);
}
