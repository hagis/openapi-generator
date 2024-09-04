/* tslint:disable */
/* eslint-disable */
/**
 * Enum test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface FakeEnumRequestGetInline200Response
 */
export interface FakeEnumRequestGetInline200Response {
    /**
     * 
     * @type {string}
     * @memberof FakeEnumRequestGetInline200Response
     */
    stringEnum?: FakeEnumRequestGetInline200ResponseStringEnumEnum;
    /**
     * 
     * @type {string}
     * @memberof FakeEnumRequestGetInline200Response
     */
    nullableStringEnum?: FakeEnumRequestGetInline200ResponseNullableStringEnumEnum;
    /**
     * 
     * @type {number}
     * @memberof FakeEnumRequestGetInline200Response
     */
    numberEnum?: FakeEnumRequestGetInline200ResponseNumberEnumEnum;
    /**
     * 
     * @type {number}
     * @memberof FakeEnumRequestGetInline200Response
     */
    nullableNumberEnum?: FakeEnumRequestGetInline200ResponseNullableNumberEnumEnum;
}


/**
 * @export
 */
export const FakeEnumRequestGetInline200ResponseStringEnumEnum = {
    One: 'one',
    Two: 'two',
    Three: 'three'
} as const;
export type FakeEnumRequestGetInline200ResponseStringEnumEnum = typeof FakeEnumRequestGetInline200ResponseStringEnumEnum[keyof typeof FakeEnumRequestGetInline200ResponseStringEnumEnum];

/**
 * @export
 */
export const FakeEnumRequestGetInline200ResponseNullableStringEnumEnum = {
    One: 'one',
    Two: 'two',
    Three: 'three'
} as const;
export type FakeEnumRequestGetInline200ResponseNullableStringEnumEnum = typeof FakeEnumRequestGetInline200ResponseNullableStringEnumEnum[keyof typeof FakeEnumRequestGetInline200ResponseNullableStringEnumEnum];

/**
 * @export
 */
export const FakeEnumRequestGetInline200ResponseNumberEnumEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type FakeEnumRequestGetInline200ResponseNumberEnumEnum = typeof FakeEnumRequestGetInline200ResponseNumberEnumEnum[keyof typeof FakeEnumRequestGetInline200ResponseNumberEnumEnum];

/**
 * @export
 */
export const FakeEnumRequestGetInline200ResponseNullableNumberEnumEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type FakeEnumRequestGetInline200ResponseNullableNumberEnumEnum = typeof FakeEnumRequestGetInline200ResponseNullableNumberEnumEnum[keyof typeof FakeEnumRequestGetInline200ResponseNullableNumberEnumEnum];


/**
 * Check if a given object implements the FakeEnumRequestGetInline200Response interface.
 */
export function instanceOfFakeEnumRequestGetInline200Response(value: object): value is FakeEnumRequestGetInline200Response {
    return true;
}

export function FakeEnumRequestGetInline200ResponseFromJSON(json: any): FakeEnumRequestGetInline200Response {
    return FakeEnumRequestGetInline200ResponseFromJSONTyped(json, false);
}

export function FakeEnumRequestGetInline200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FakeEnumRequestGetInline200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'stringEnum': json['string-enum'] == null ? undefined : json['string-enum'],
        'nullableStringEnum': json['nullable-string-enum'] == null ? undefined : json['nullable-string-enum'],
        'numberEnum': json['number-enum'] == null ? undefined : json['number-enum'],
        'nullableNumberEnum': json['nullable-number-enum'] == null ? undefined : json['nullable-number-enum'],
    };
}

export function FakeEnumRequestGetInline200ResponseToJSON(value?: FakeEnumRequestGetInline200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'string-enum': value['stringEnum'],
        'nullable-string-enum': value['nullableStringEnum'],
        'number-enum': value['numberEnum'],
        'nullable-number-enum': value['nullableNumberEnum'],
    };
}

