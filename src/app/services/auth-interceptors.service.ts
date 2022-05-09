import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorsService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('On the  Way');
        const modifiedRequest = req.clone({
            headers: req.headers.append("NevsAuth", '123456')
        });
        return next.handle(modifiedRequest);
    }
}