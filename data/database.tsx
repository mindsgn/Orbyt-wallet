import Realm from "realm";

// Declare Schema
class UserSchema extends Realm.Object {}
class WalletSchema extends Realm.Object {}
class TransactionsSchema extends Realm.Object {}

UserSchema.schema = {
    name: 'User',
    properties: {
        _id: 'objectId',
        uuid: 'string',
        password:  'string',
        email:  'string',
        phone_number:  'string',
        created_at: 'string'
    },
    primaryKey: '_id'
};

WalletSchema.schema = {
    name: 'wallets',
    properties: {
        _id: 'objectId',
        type: 'string',
        name: 'string',
        public_address: 'string',
        private_adress: 'string',
        created_at: 'string'
    },
    primaryKey: '_id'
};

TransactionsSchema.schema = {
    name: 'transactions',
    properties: {
        _id: 'objectId',
        type: 'string',
        details: 'string',
        from: 'string',
        to: 'string',
        created_at: 'string'
    },
    primaryKey: '_id'
};

//open realm
//Realm.open({ schema: [UserSchema, WalletSchema, TransactionsSchema], deleteRealmIfMigrationNeeded: true})

// Create realm
let realm = new Realm({schema: [UserSchema, WalletSchema, TransactionsSchema], schemaVersion: 1});

// Export the realm
export default realm;