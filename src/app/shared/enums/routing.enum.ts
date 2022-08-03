export namespace AppRoutes {
  export enum AuthRoutes {
    VerifyOTPPage = 'verify',
    LoginPage = 'login',
  }

  export enum DashboardRoutes {
    HomePage = '',
    UsersPage = 'users',
  }

  export enum ModuleRoutes {
    AdminRoute = 'admin',
    AuthRoute = 'auth',
    DashboardRoute = 'dashboard',
  }

  export const constructRoute = (route: DashboardRoutes | AuthRoutes) => {
    let url: string = '';
    switch (route) {
      case AuthRoutes.LoginPage:
      case AuthRoutes.VerifyOTPPage:
        url = `${ModuleRoutes.AdminRoute}/${ModuleRoutes.AuthRoute}`;
        break;
      case DashboardRoutes.HomePage:
      case DashboardRoutes.UsersPage:
        url = `${ModuleRoutes.AdminRoute}/${ModuleRoutes.DashboardRoute}`;
        break;
      default:
        return '';
    }

    return `${url}/${route}`;
  };
}
