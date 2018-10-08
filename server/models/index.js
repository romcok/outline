// @flow
import ApiKey from './ApiKey';
import Authentication from './Authentication';
import Collection from './Collection';
import Document from './Document';
import DocumentTag from './DocumentTag';
import Event from './Event';
import Integration from './Integration';
import Revision from './Revision';
import Share from './Share';
import Star from './Star';
import Tag from './Tag';
import Team from './Team';
import User from './User';
import View from './View';

const models = {
  ApiKey,
  Authentication,
  Collection,
  Document,
  DocumentTag,
  Event,
  Integration,
  Revision,
  Share,
  Star,
  Tag,
  Team,
  User,
  View,
};

// based on https://github.com/sequelize/express-example/blob/master/models/index.js
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export {
  ApiKey,
  Authentication,
  Collection,
  Document,
  DocumentTag,
  Event,
  Integration,
  Revision,
  Share,
  Star,
  Tag,
  Team,
  User,
  View,
};
