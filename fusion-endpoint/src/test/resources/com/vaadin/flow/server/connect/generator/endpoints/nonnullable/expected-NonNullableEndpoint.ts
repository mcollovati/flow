/**
 * This module is generated from NonNullableEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @module NonNullableEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import NonNullableModel from './com/vaadin/flow/server/connect/generator/endpoints/nonnullable/NonNullableEndpoint/NonNullableModel';
import ParameterType from './com/vaadin/flow/server/connect/generator/endpoints/nonnullable/NonNullableEndpoint/ParameterType';
import ReturnType from './com/vaadin/flow/server/connect/generator/endpoints/nonnullable/NonNullableEndpoint/ReturnType';

function _echoMap(
  shouldBeNotNull: boolean
): Promise<{[key: string]: NonNullableModel;}> {
  return client.call('NonNullableEndpoint', 'echoMap', {shouldBeNotNull});
}

export {_echoMap as echoMap};

function _echoNonNullMode(
  nonNullableModels: Array<NonNullableModel>
): Promise<NonNullableModel | undefined> {
  return client.call('NonNullableEndpoint', 'echoNonNullMode', {nonNullableModels});
}

export {_echoNonNullMode as echoNonNullMode};

function _getNotNullReturnType(): Promise<ReturnType | undefined> {
  return client.call('NonNullableEndpoint', 'getNotNullReturnType');
}

export {_getNotNullReturnType as getNotNullReturnType};

function _getNullableString(
  input?: string
): Promise<string> {
  return client.call('NonNullableEndpoint', 'getNullableString', {input});
}

export {_getNullableString as getNullableString};

function _sendParameterType(
  parameterType?: ParameterType
): Promise<void> {
  return client.call('NonNullableEndpoint', 'sendParameterType', {parameterType});
}

export {_sendParameterType as sendParameterType};

function _stringNullable(): Promise<string | undefined> {
  return client.call('NonNullableEndpoint', 'stringNullable');
}

export {_stringNullable as stringNullable};

export const NonNullableEndpoint = Object.freeze({
  echoMap: _echoMap,
  echoNonNullMode: _echoNonNullMode,
  getNotNullReturnType: _getNotNullReturnType,
  getNullableString: _getNullableString,
  sendParameterType: _sendParameterType,
  stringNullable: _stringNullable,
});