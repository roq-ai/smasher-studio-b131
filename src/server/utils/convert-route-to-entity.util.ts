const mapping: Record<string, string> = {
  files: 'file',
  projects: 'project',
  studios: 'studio',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
