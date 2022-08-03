import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _route: Router, private _http: HttpClient) {}
    canActivate(): Observable<boolean> {
        return this._http
            .get(`http://0.0.0.0:8001/api/auth/isAuthenticated`, {
                headers: {
                    accessToken: localStorage.getItem('accessToken') || '',
                },
            })
            .pipe(
                map((res: any) => {
                    console.log('======================');
                    console.log('canActivate ==>', res.data);
                    console.log('======================');

                    localStorage.setItem('accessToken', res.data.accessToken);
                    if (res.data.data.isAuthenticated) {
                        return true;
                    } else {
                        this._route.navigate(['admin/login']);
                        return false;
                    }
                }),
                catchError((err: any) => {
                    this._route.navigate(['admin/login']);
                    // return false;
                    return of(false);
                }),
            );
        // return this._http.get(`/isAuthenticated`).subscribe((response: any) => {
        //   const isAuthenticated = response.data.data.isAuthenticated;
        //   console.log('========================');
        //   console.log('(canActivate) isAuthenticated', isAuthenticated);
        //   console.log('========================');
        //   if (isAuthenticated) {
        //     return true;
        //   } else {
        //     this._route.navigate(['login']);
        //     return false;
        //   }
        // });
    }
}
