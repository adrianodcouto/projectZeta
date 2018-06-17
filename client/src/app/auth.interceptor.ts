import { Observable, from } from 'rxjs';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({ setHeaders: { 'authorization': 'Bearer 5fcb502f-e0d8-4c30-b883-27eb34a0c499' } });
        return next.handle(modified);
    }

}