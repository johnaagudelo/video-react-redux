import api from '../api.json';
import {normalize, schema } from 'normalizr';

/* const media = new schema.Entity(key, definicion, opciones); */
const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({ ...value, category: parent.id }),
});

const category = new scheme.Entity('category', );

const categories; 

const normalizedDate = normalize(api, categories);

export default normalizedDate;