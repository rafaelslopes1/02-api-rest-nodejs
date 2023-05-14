// eslint-disable-next-line no-unused-vars
import { Knex } from 'knex' // eslint-disable-line no-unused-vars

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
