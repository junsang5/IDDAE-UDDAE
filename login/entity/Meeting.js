import { EntitySchema, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

const Meeting = new EntitySchema({

   name: 'meeting',

   tableName: 'meeting',

   columns: {

        meeting_id: {

        primary: true,

        type: 'int',

        generated: true,

            },

        creator_id: {

        type: 'int',

            },

        time_created: {

        type: 'timestamp',

            },

        num_join: {

        type: 'int',

            },

        is_creator: {

        type: 'boolean',

            },

    },

   });
   export default Meeting;