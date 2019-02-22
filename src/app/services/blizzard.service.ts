import { Credentials, BlizzAuthToken } from './common';
import { blizzardKey } from '../credentials/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share, shareReplay, concatMap, tap, map, mapTo, pluck, take } from 'rxjs/operators';
import { Observable, Subject, of, from, observable, forkJoin, UnaryFunction } from 'rxjs';
import { DClassRef, Locale, Region, DClass, DClasses } from './blizz-interfaces';
const apiUrls = {
    auth: 'https://us.battle.net/oauth/token?grant_type=client_credentials'
};

@Injectable()
export class BlizzardAPIService {
    private _token: BlizzAuthToken = null;
    public localeString: Locale = Locale.EN;
    public region: Region = Region.US;
    private _classes: DClass[] = null;
    private _classRequest: Observable<DClass[]>;
    get oauth_request_header(): {
        Authorization: string
    } {
        return {
            Authorization: `Basic ${btoa(`${blizzardKey.username}:${blizzardKey.key}`)}`
        };
    }
    public get_oauth_token(): Observable<BlizzAuthToken> {
        if (this.token) {
            return of(this.token);
        }
        return this.http.post<BlizzAuthToken>(apiUrls.auth, null, {
            headers: this.oauth_request_header
        }).pipe(tap(token => this.token = token), share());
    }

    public get endpointUrl() {
        return `https://${this.region}.api.blizzard.com/d3/data/hero/`;
    }

    public get token(): BlizzAuthToken {
        if (!this._token) {
            this._token = JSON.parse(localStorage.getItem('blizz_auth_token'));
        }
        return this._token;
    }
    public set token(v: BlizzAuthToken) {
        localStorage.setItem('blizz_auth_token', JSON.stringify(v));
        this._token = v;
    }



    constructor(private http: HttpClient) { }

    public getClass(classSlug: string): Observable<DClass> {
        return null;
    }

    public getClasses(): Observable<DClass[]> {
        if (this._classes) {
            return of(this._classes);
        } else if (this._classRequest) {
            return this._classRequest;
        } else {
            this.get_oauth_token().pipe(take(1)).subscribe((token) => {
                this._classRequest = forkJoin(DClasses.map(
                    (classRef: DClassRef) => {
                        return this.http.get<DClass>(
                            `${this.endpointUrl}/${classRef.slug}?locale=${this.localeString}&access_token=${token.access_token}`
                        );
                    }
                ));
            });
            return this._classRequest;
        }
    }
}
