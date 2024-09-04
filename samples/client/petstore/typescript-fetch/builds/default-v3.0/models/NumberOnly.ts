/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NumberOnly
 */
export interface NumberOnly {
    /**
     * 
     * @type {number}
     * @memberof NumberOnly
     */
    justNumber?: number;
}

/**
 * Check if a given object implements the NumberOnly interface.
 */
export function instanceOfNumberOnly(value: object): value is NumberOnly {
    return true;
}

export function NumberOnlyFromJSON(json: any): NumberOnly {
    return NumberOnlyFromJSONTyped(json, false);
}

export function NumberOnlyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberOnly {
    if (json == null) {
        return json;
    }
    return {
        
        'justNumber': json['JustNumber'] == null ? undefined : json['JustNumber'],
    };
}

export function NumberOnlyToJSON(value?: NumberOnly | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'JustNumber': value['justNumber'],
    };
}

