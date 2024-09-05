/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
    TagToJSONTyped,
} from './Tag';

/**
 * A pet for sale in the pet store
 * @export
 * @interface Pet
 */
export interface Pet {
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    id?: number;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    category?: Category;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    name: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof Pet
     */
    photoUrls: Set<string>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    tags?: Array<Tag>;
    /**
     * pet status in the store
     * @type {string}
     * @memberof Pet
     * @deprecated
     */
    status?: PetStatusEnum;
}


/**
 * @export
 */
export const PetStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold'
} as const;
export type PetStatusEnum = typeof PetStatusEnum[keyof typeof PetStatusEnum];


/**
 * Check if a given object implements the Pet interface.
 */
export function instanceOfPet(value: object): value is Pet {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('photoUrls' in value) || value['photoUrls'] === undefined) return false;
    return true;
}

export function PetFromJSON(json: any): Pet {
    return PetFromJSONTyped(json, false);
}

export function PetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pet {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'category': json['category'] == null ? undefined : CategoryFromJSON(json['category']),
        'name': json['name'],
        'photoUrls': json['photoUrls'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
    };
}

  export function PetToJSON(json: any): Pet {
      return PetToJSONTyped(json, false);
  }

  export function PetToJSONTyped(value?: Pet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'category': CategoryToJSON(value['category']),
        'name': value['name'],
        'photoUrls': Array.from(value['photoUrls'] as Set<any>),
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagToJSON)),
        'status': value['status'],
    };
}

export const PetPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
    photoUrls: {
        maxItems: 8,
        minItems: 1,
        uniqueItems: true,
    },
}

