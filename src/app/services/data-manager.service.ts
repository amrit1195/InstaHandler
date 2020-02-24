import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataManagerService {
  protected httpClient: HttpClient;
  protected httpHeaders: HttpHeaders;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpHeaders = this.httpHeaders.append('Accept-Version', 'v1');
    this.httpHeaders = this.httpHeaders.append('Authorization', 'Client-ID LpY5-kwMWz43wGsK_Lw7lDAlhi6DAvCPbk0Rpk6NcFo');
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
    return this.httpClient.get(url, {headers: this.httpHeaders});
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
    return this.httpClient.post(url, payload, {headers: this.httpHeaders});
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
