import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'deliveroo/1.0 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * The Get Site Brand ID returns `brand_id` of a site which is required to be passed as
   * path parameter for the following Menu API endpoints:
   * - Get/Upload Menu
   * - Update PLUs
   * - Get/Update/Replace Menu Item Unavailabilities
   *
   *
   * @summary Get Site Brand ID
   * @throws FetchError<400, types.GetV2SiteBrandIdResponse400> Bad request
   * @throws FetchError<401, types.GetV2SiteBrandIdResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetV2SiteBrandIdResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetV2SiteBrandIdResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  get_v2SiteBrandId(metadata: types.GetV2SiteBrandIdMetadataParam): Promise<FetchResponse<200, types.GetV2SiteBrandIdResponse200> | FetchResponse<number, types.GetV2SiteBrandIdResponseDefault>> {
    return this.core.fetch('/v1/restaurant_locations/{site_id}', 'get', metadata);
  }

  /**
   * Returns a list of opening hours for each day of the week.
   *
   * @summary Get site opening Hours
   * @throws FetchError<400, types.GetSiteOpeningHoursResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<404, types.GetSiteOpeningHoursResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSiteOpeningHoursResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSiteOpeningHours(metadata: types.GetSiteOpeningHoursMetadataParam): Promise<FetchResponse<200, types.GetSiteOpeningHoursResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/opening_hours', 'get', metadata);
  }

  /**
   * Opening hours endpoint does not support partial updates so you must specify all opening
   * hours when updating data, so each call to this endpoint overwrites any existing opening
   * hours.
   *
   * @summary Update site opening hours
   * @throws FetchError<400, types.UpdateSiteOpeningHoursResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.UpdateSiteOpeningHoursResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.UpdateSiteOpeningHoursResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.UpdateSiteOpeningHoursResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  updateSiteOpeningHours(body: types.UpdateSiteOpeningHoursBodyParam, metadata: types.UpdateSiteOpeningHoursMetadataParam): Promise<FetchResponse<number, unknown>>;
  updateSiteOpeningHours(metadata: types.UpdateSiteOpeningHoursMetadataParam): Promise<FetchResponse<number, unknown>>;
  updateSiteOpeningHours(body?: types.UpdateSiteOpeningHoursBodyParam | types.UpdateSiteOpeningHoursMetadataParam, metadata?: types.UpdateSiteOpeningHoursMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/opening_hours', 'post', body, metadata);
  }

  /**
   * Returns a list of the sites a brand has.
   *
   * @summary Get sites for a brand
   * @throws FetchError<400, types.GetSitesForABrandResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<404, types.GetSitesForABrandResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSitesForABrandResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSitesForABrand(metadata: types.GetSitesForABrandMetadataParam): Promise<FetchResponse<200, types.GetSitesForABrandResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites', 'get', metadata);
  }

  /**
   * The status defines if a site is open or closed. It can be retrieved using the following
   * endpoint.
   *
   * @summary Get site status
   * @throws FetchError<400, types.GetSiteStatusResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetSiteStatusResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetSiteStatusResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSiteStatusResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSiteStatus(metadata: types.GetSiteStatusMetadataParam): Promise<FetchResponse<200, types.GetSiteStatusResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/status', 'get', metadata);
  }

  /**
   * It is not allowed to open a site outside of its opening hours, It will return 400 (bad
   * request) error.
   *
   * @summary Update site status
   * @throws FetchError<400, types.UpdateSiteStatusResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.UpdateSiteStatusResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.UpdateSiteStatusResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.UpdateSiteStatusResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  updateSiteStatus(body: types.UpdateSiteStatusBodyParam, metadata: types.UpdateSiteStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
  updateSiteStatus(metadata: types.UpdateSiteStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
  updateSiteStatus(body?: types.UpdateSiteStatusBodyParam | types.UpdateSiteStatusMetadataParam, metadata?: types.UpdateSiteStatusMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/status', 'put', body, metadata);
  }

  /**
   * Retrieves the time zone of a site.
   *
   * @summary Get site time zone
   * @throws FetchError<400, types.GetSiteTimeZoneResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetSiteTimeZoneResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetSiteTimeZoneResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSiteTimeZoneResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSiteTimeZone(metadata: types.GetSiteTimeZoneMetadataParam): Promise<FetchResponse<200, types.GetSiteTimeZoneResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/time_zone', 'get', metadata);
  }

  /**
   * A days off period can be retrieved by using this endpoint.
   *
   * @summary Get a site days off period
   * @throws FetchError<400, types.GetDaysOffByIdResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetDaysOffByIdResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetDaysOffByIdResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetDaysOffByIdResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getDaysOffById(metadata: types.GetDaysOffByIdMetadataParam): Promise<FetchResponse<200, types.GetDaysOffByIdResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/days_off/{days_off_id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to update a days-off period.  It's important to note that this
   * endpoint permits the creation of multiple days-off periods with overlapping hours.  Only
   * the start time and end time properties can be updated. It is also important to note that
   * if Deliveroo detects that a site is not functioning as expected,  a closed_period.reason
   * equals to "FORCED_CLOSURE" may be created.  This type of closed period cannot be updated
   * or canceled via the API.  If you need to cancel a "FORCED_CLOSURE" period, you must
   * contact Deliveroo directly.
   *
   *
   * @summary Update a site days off period
   * @throws FetchError<400, types.UpdateDaysOffResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.UpdateDaysOffResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.UpdateDaysOffResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.UpdateDaysOffResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  updateDaysOff(body: types.UpdateDaysOffBodyParam, metadata: types.UpdateDaysOffMetadataParam): Promise<FetchResponse<200, types.UpdateDaysOffResponse200>>;
  updateDaysOff(metadata: types.UpdateDaysOffMetadataParam): Promise<FetchResponse<200, types.UpdateDaysOffResponse200>>;
  updateDaysOff(body?: types.UpdateDaysOffBodyParam | types.UpdateDaysOffMetadataParam, metadata?: types.UpdateDaysOffMetadataParam): Promise<FetchResponse<200, types.UpdateDaysOffResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/days_off/{days_off_id}', 'put', body, metadata);
  }

  /**
   * This endpoint allows you to update a days-off period. It is important to note that if
   * Deliveroo detects that a site is not functioning as expected,  a closed_period.reason
   * equals to "FORCED_CLOSURE" may be created.  This type of closed period cannot be updated
   * or canceled via the API.  If you need to cancel a "FORCED_CLOSURE" period, you must
   * contact Deliveroo directly.
   *
   *
   * @summary Cancel a site days off period
   * @throws FetchError<400, types.CancelDaysOffResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.CancelDaysOffResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.CancelDaysOffResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.CancelDaysOffResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  cancelDaysOff(metadata: types.CancelDaysOffMetadataParam): Promise<FetchResponse<200, types.CancelDaysOffResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/days_off/{days_off_id}', 'delete', metadata);
  }

  /**
   * Endpoint that will add the new days off to the site.
   *
   * @summary Add a new site days off
   * @throws FetchError<400, types.AddNewDaysOffResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.AddNewDaysOffResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.AddNewDaysOffResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.AddNewDaysOffResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  addNewDaysOff(body: types.AddNewDaysOffBodyParam, metadata: types.AddNewDaysOffMetadataParam): Promise<FetchResponse<200, types.AddNewDaysOffResponse200>>;
  addNewDaysOff(metadata: types.AddNewDaysOffMetadataParam): Promise<FetchResponse<200, types.AddNewDaysOffResponse200>>;
  addNewDaysOff(body?: types.AddNewDaysOffBodyParam | types.AddNewDaysOffMetadataParam, metadata?: types.AddNewDaysOffMetadataParam): Promise<FetchResponse<200, types.AddNewDaysOffResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/days_off', 'post', body, metadata);
  }

  /**
   * All days off defined for site can be retrieved. Note that this data is paginated.
   *
   * @summary Get site days off
   * @throws FetchError<400, types.GetAllDaysOffForASiteResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetAllDaysOffForASiteResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetAllDaysOffForASiteResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetAllDaysOffForASiteResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getAllDaysOffForASite(metadata: types.GetAllDaysOffForASiteMetadataParam): Promise<FetchResponse<200, types.GetAllDaysOffForASiteResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/days_off', 'get', metadata);
  }

  /**
   * A site workload load mode can be retrieved using the following endpoint.
   *
   * @summary Get site workload mode
   * @throws FetchError<400, types.GetSiteWorkloadModeResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetSiteWorkloadModeResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetSiteWorkloadModeResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSiteWorkloadModeResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSiteWorkloadMode(metadata: types.GetSiteWorkloadModeMetadataParam): Promise<FetchResponse<200, types.GetSiteWorkloadModeResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/workload/mode', 'get', metadata);
  }

  /**
   * A site workload load mode can be set using the following endpoint.
   *
   * @summary Set site workload mode
   * @throws FetchError<400, types.SetSiteWorkloadModeResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.SetSiteWorkloadModeResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.SetSiteWorkloadModeResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.SetSiteWorkloadModeResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  setSiteWorkloadMode(metadata: types.SetSiteWorkloadModeMetadataParam): Promise<FetchResponse<200, types.SetSiteWorkloadModeResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/workload/mode', 'put', metadata);
  }

  /**
   * Returns the work load times, when the restaurant is busy or when the restaurant has less
   * load.
   *
   * @summary Get site workload times
   * @throws FetchError<400, types.GetSiteWorkloadTimesResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.GetSiteWorkloadTimesResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.GetSiteWorkloadTimesResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.GetSiteWorkloadTimesResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getSiteWorkloadTimes(metadata: types.GetSiteWorkloadTimesMetadataParam): Promise<FetchResponse<200, types.GetSiteWorkloadTimesResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/workload/times', 'get', metadata);
  }

  /**
   * Workload times can be set individually for each workload mode. It is important to note
   * that if a site wants to increment their busy prep time, this value must be greater than
   * quiet value and the difference must be a multiple of 5. E.g. if a site's quiet is 10min,
   * busy should be 15, 20, 25, 30, 35, etc. or any other increment that is multiple of 5.
   *
   * @summary Set site workload times
   * @throws FetchError<400, types.SetSiteWorkloadTimesResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<401, types.SetSiteWorkloadTimesResponse401> The provided API key and API token is invalid or disabled.
   * @throws FetchError<404, types.SetSiteWorkloadTimesResponse404> The specified resource could not be found.
   * @throws FetchError<500, types.SetSiteWorkloadTimesResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  setSiteWorkloadTimes(body: types.SetSiteWorkloadTimesBodyParam, metadata: types.SetSiteWorkloadTimesMetadataParam): Promise<FetchResponse<200, types.SetSiteWorkloadTimesResponse200>>;
  setSiteWorkloadTimes(metadata: types.SetSiteWorkloadTimesMetadataParam): Promise<FetchResponse<200, types.SetSiteWorkloadTimesResponse200>>;
  setSiteWorkloadTimes(body?: types.SetSiteWorkloadTimesBodyParam | types.SetSiteWorkloadTimesMetadataParam, metadata?: types.SetSiteWorkloadTimesMetadataParam): Promise<FetchResponse<200, types.SetSiteWorkloadTimesResponse200>> {
    return this.core.fetch('/v1/brands/{brand_id}/sites/{site_id}/workload/times', 'put', body, metadata);
  }

  /**
   * Returns a list of brands.
   *
   * @summary Get list of brands
   * @throws FetchError<400, types.GetAllBrandsResponse400> Typically, a required parameter is missing or invalid.
   * @throws FetchError<500, types.GetAllBrandsResponse500> Something went wrong on our end. You'll have to try again later once we've fixed it.
   */
  getAllBrands(): Promise<FetchResponse<200, types.GetAllBrandsResponse200>> {
    return this.core.fetch('/v1/brands', 'get');
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddNewDaysOffBodyParam, AddNewDaysOffMetadataParam, AddNewDaysOffResponse200, AddNewDaysOffResponse400, AddNewDaysOffResponse401, AddNewDaysOffResponse404, AddNewDaysOffResponse500, CancelDaysOffMetadataParam, CancelDaysOffResponse200, CancelDaysOffResponse400, CancelDaysOffResponse401, CancelDaysOffResponse404, CancelDaysOffResponse500, GetAllBrandsResponse200, GetAllBrandsResponse400, GetAllBrandsResponse500, GetAllDaysOffForASiteMetadataParam, GetAllDaysOffForASiteResponse200, GetAllDaysOffForASiteResponse400, GetAllDaysOffForASiteResponse401, GetAllDaysOffForASiteResponse404, GetAllDaysOffForASiteResponse500, GetDaysOffByIdMetadataParam, GetDaysOffByIdResponse200, GetDaysOffByIdResponse400, GetDaysOffByIdResponse401, GetDaysOffByIdResponse404, GetDaysOffByIdResponse500, GetSiteOpeningHoursMetadataParam, GetSiteOpeningHoursResponse200, GetSiteOpeningHoursResponse400, GetSiteOpeningHoursResponse404, GetSiteOpeningHoursResponse500, GetSiteStatusMetadataParam, GetSiteStatusResponse200, GetSiteStatusResponse400, GetSiteStatusResponse401, GetSiteStatusResponse404, GetSiteStatusResponse500, GetSiteTimeZoneMetadataParam, GetSiteTimeZoneResponse200, GetSiteTimeZoneResponse400, GetSiteTimeZoneResponse401, GetSiteTimeZoneResponse404, GetSiteTimeZoneResponse500, GetSiteWorkloadModeMetadataParam, GetSiteWorkloadModeResponse200, GetSiteWorkloadModeResponse400, GetSiteWorkloadModeResponse401, GetSiteWorkloadModeResponse404, GetSiteWorkloadModeResponse500, GetSiteWorkloadTimesMetadataParam, GetSiteWorkloadTimesResponse200, GetSiteWorkloadTimesResponse400, GetSiteWorkloadTimesResponse401, GetSiteWorkloadTimesResponse404, GetSiteWorkloadTimesResponse500, GetSitesForABrandMetadataParam, GetSitesForABrandResponse200, GetSitesForABrandResponse400, GetSitesForABrandResponse404, GetSitesForABrandResponse500, GetV2SiteBrandIdMetadataParam, GetV2SiteBrandIdResponse200, GetV2SiteBrandIdResponse400, GetV2SiteBrandIdResponse401, GetV2SiteBrandIdResponse404, GetV2SiteBrandIdResponse500, GetV2SiteBrandIdResponseDefault, SetSiteWorkloadModeMetadataParam, SetSiteWorkloadModeResponse200, SetSiteWorkloadModeResponse400, SetSiteWorkloadModeResponse401, SetSiteWorkloadModeResponse404, SetSiteWorkloadModeResponse500, SetSiteWorkloadTimesBodyParam, SetSiteWorkloadTimesMetadataParam, SetSiteWorkloadTimesResponse200, SetSiteWorkloadTimesResponse400, SetSiteWorkloadTimesResponse401, SetSiteWorkloadTimesResponse404, SetSiteWorkloadTimesResponse500, UpdateDaysOffBodyParam, UpdateDaysOffMetadataParam, UpdateDaysOffResponse200, UpdateDaysOffResponse400, UpdateDaysOffResponse401, UpdateDaysOffResponse404, UpdateDaysOffResponse500, UpdateSiteOpeningHoursBodyParam, UpdateSiteOpeningHoursMetadataParam, UpdateSiteOpeningHoursResponse400, UpdateSiteOpeningHoursResponse401, UpdateSiteOpeningHoursResponse404, UpdateSiteOpeningHoursResponse500, UpdateSiteStatusBodyParam, UpdateSiteStatusMetadataParam, UpdateSiteStatusResponse400, UpdateSiteStatusResponse401, UpdateSiteStatusResponse404, UpdateSiteStatusResponse500 } from './types';
