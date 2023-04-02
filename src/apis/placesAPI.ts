// src/apis/productAPI.js

import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export type PlaceSearchParams = {
  query?: string;
  ll?: string;
  radius?: number;
  categories?: string;
  chains?: string;
  exclude_chains?: string;
  exclude_all_chains?: boolean;
  fields?: string;
  min_price?: number;
  max_price?: number;
  open_at?: string;
  open_now?: boolean;
  ne?: string;
  sw?: string;
  near?: string;
  sort?: string;
  limit?: number;
  session_token?: string;
};

export type GetPlaceDetailsParams = {
  fsq_id: string;
  fields?: string;
  session_token?: string;
};

export type GetPlacePhotosParams = {
  fsq_id: string;
  limit?: number;
  sort?: string;
  classifications?: string;
};

export type GetPlaceTipsParams = {
  fsq_id: string;
  limit?: number;
  fields?: string;
  sort?: string;
};

export type PlaceMatchParams = {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  cc?: string;
  ll?: string;
  fields?: string[];
};

export const PlacesAPI = {
  placeSearch: async function (params: PlaceSearchParams, cancel = false) {
    const response = await api.request({
      url: '/places/search',
      method: 'GET',
      params,
      signal: cancel
        ? cancelApiObject[this.placeSearch.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },

  getPlaceDetails: async function (
    params: GetPlaceDetailsParams,
    cancel = false
  ) {
    const response = await api.request({
      url: `/places/${params.fsq_id}`,
      method: 'GET',
      params,
      signal: cancel
        ? cancelApiObject[this.placeSearch.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },

  getPlacePhotos: async function (
    params: GetPlacePhotosParams,
    cancel = false
  ) {
    const response = await api.request({
      url: `/places/${params.fsq_id}/photos`,
      method: 'GET',
      params,
      signal: cancel
        ? cancelApiObject[this.placeSearch.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },

  getPlaceTips: async function (params: GetPlaceTipsParams, cancel = false) {
    const response = await api.request({
      url: `/places/${params.fsq_id}/tips`,
      method: 'GET',
      params,
      signal: cancel
        ? cancelApiObject[this.placeSearch.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },

  placeMatch: async function (params: PlaceMatchParams, cancel = false) {
    const response = await api.request({
      url: `/places/match`,
      method: 'GET',
      params,
      signal: cancel
        ? cancelApiObject[this.placeSearch.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },
};

// defining the cancel API object for PlacesAPI
const cancelApiObject = defineCancelApiObject(PlacesAPI);
