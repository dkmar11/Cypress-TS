export const routesFixtures = {
  loginPath: 'loginPage',
  dashboardPath: 'dashboard'
};

export const routesEndpoint = {
  getRoute: (id: number): string =>{return `posts/${id}`},
  postRoute: 'posts',
  putRoute: (id: number): string =>{return `posts/${id}`},
  deleteRoute: (id: number): string =>{return `posts/${id}`},
};
