/**
 * This module is generated from PersonEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @module PersonEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import Person from './com/vaadin/flow/server/connect/generator/endpoints/superclassmethods/PersonEndpoint/Person';

function _delete(
    id?: number
): Promise<void> {
  return client.call('PersonEndpoint', 'delete', {id});
}
export {_delete as delete};

function _get(
    id?: number
): Promise<Person | undefined> {
  return client.call('PersonEndpoint', 'get', {id});
}
export {_get as get};

function _getPage(
    pageSize?: number,
    pageNumber?: number
): Promise<Array<Person> | undefined> {
  return client.call('PersonEndpoint', 'getPage', {pageSize, pageNumber});
}
export {_getPage as getPage};

function _size(): Promise<number | undefined> {
  return client.call('PersonEndpoint', 'size');
}
export {_size as size};

function _update(
    entity?: Person
): Promise<Person | undefined> {
  return client.call('PersonEndpoint', 'update', {entity});
}
export {_update as update};

export const PersonEndpoint = Object.freeze({
  delete: _delete,
  get: _get,
  getPage: _getPage,
  size: _size,
  update: _update,
});