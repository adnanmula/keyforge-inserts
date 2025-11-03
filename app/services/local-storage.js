// app/adapters/application.js
import Adapter from '@ember-data/adapter';

export default class ApplicationAdapter extends Adapter {
  constructor() {
    super(...arguments);
    this.records = {}; // store records per model
  }

  findAll(store, type) {
    return Promise.resolve(Object.values(this.records[type.modelName] || {}));
  }

  findRecord(store, type, id) {
    const record = this.records[type.modelName]?.[id] || null;
    return Promise.resolve(record);
  }

  createRecord(store, type, snapshot) {
    console.log('aaa');

    const id = snapshot.id || String(Math.random());
    const record = { id, ...snapshot.attributes() };
    this.records[type.modelName] = this.records[type.modelName] || {};
    this.records[type.modelName][id] = record;
    return Promise.resolve(record);
  }

  updateRecord(store, type, snapshot) {
    const id = snapshot.id;
    const record = { id, ...snapshot.attributes() };
    this.records[type.modelName][id] = record;
    return Promise.resolve(record);
  }

  deleteRecord(store, type, snapshot) {
    const id = snapshot.id;
    delete this.records[type.modelName][id];
    return Promise.resolve();
  }
}
