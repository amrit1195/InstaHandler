import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class DataManagerService  {
  tag = 'app/data/services/DataManager/DataManagerService';
  protected httpClient: HttpClient;
  protected httpHeaders: HttpHeaders;
  protected httpHeaders2: HttpHeaders;
  public accessToken: string;
  public selectedProject = new Subject<any>();

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpHeaders2 = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpHeaders = new HttpHeaders().set('Authorization', this.accessToken);
    console.log(this.accessToken);
  }

  /**
   * func to check if access token is pesent
   * @returns {boolean}
   */
  accessTokenExists() {
    return this.accessToken ? true : false;
  }

  createHeaderWithUersAccessToken() {
    console.log('new object for header created');
    this.httpHeaders = new HttpHeaders().set('Authorization', this.accessToken);
  }

  /**
   * func to return name for
   * loggedIn/registered user
   * @returns {string}
   */
  getCurrentUserName() {
    // return this.currentUser.name;
  }

  /**
   * func to get current
   * logged in user id
   * @returns {string}
   */
  getCurrentUserId() {
    // return this.currentUser !== null ? this.currentUser.id : 1;
  }

  /**
   * func to login to server
   * with user creds
   * @param url
   * @param creds
   * @returns {Observable<any>}
   */
  login(url, creds): Observable<any> {
    return this.httpClient.post(url, creds, {headers: this.httpHeaders2});
  }

  /**
   * func to cal api using get Request
   * with HttpClient class
   * @param url api address
   * @param retry number of attempts in-case of no response
   * @returns {Observable<ArrayBuffer>} response returned
   */
  getRequest(url: string): Observable<any> {
    console.log({headers: this.httpHeaders});
    console.log('url', url);
    return this.httpClient.get(url, {headers: this.httpHeaders2});
  }

  /**
   * func to make post request
   * for creating new records on server
   * @param url api address
   * @param payload payload for get request
   * @param retry number of attempts in-case of connection failure
   * @returns {MonoTypeOperatorFunction<>} response returned
   */
  postRequest(url: string, payload: any): Observable<any> {
    console.log(this.tag, url);
    console.log(this.tag, payload);
    return this.httpClient.post(url, payload, {headers: this.httpHeaders2});
  }

  /**
   * func to delete record on api using
   * http
   * @param url
   * @returns {Observable<any>}
   */
  deleteRequest(url): Observable<any> {
    return this.httpClient.delete(url, {headers: this.httpHeaders});
  }

  /**
   * func to make update request
   * on api data
   * @param url
   * @param putBody
   * @returns {Observable<any>}
   */
  putRequest(url, putBody): Observable<any> {
    return this.httpClient.put(url, putBody, {headers: this.httpHeaders});
  }

  /**
   * func to send patch request to api for
   * field update on record id
   * @param url
   * @param updateBody
   * @returns {Observable<any>}
   */
  patchRequest(url, updateBody): Observable<any> {
    return this.httpClient.patch(url, updateBody, {headers: this.httpHeaders});
  }

}
