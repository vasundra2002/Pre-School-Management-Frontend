import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router:Router=new Router();
  if(sessionStorage.getItem('login')=="true")
  {
    return true;
  }
  else
  {
    alert('Please login to continue')
    router.navigate(['login']);
    return false;
  }
};
