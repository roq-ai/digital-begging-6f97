const mapping: Record<string, string> = {
  beggars: 'beggar',
  donors: 'donor',
  platforms: 'platform',
  resources: 'resource',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
