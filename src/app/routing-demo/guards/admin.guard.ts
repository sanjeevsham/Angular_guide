import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
    const hasPermission = confirm('🔐 GUARD CHECK: Are you an admin? (Click OK to enter, Cancel to block)');
    console.log('ADMIN GUARD FIRED');
    if (hasPermission) {
        return true;
    } else {
        alert('⛔ Access Denied! Redirecting you away...');
        return false;
    }
};
