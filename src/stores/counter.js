import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    user: {
      name: 'Mario',
      surname: 'Rossi',
      contacts: {
        phone: '+39 123 4567',
        email: 'mario.rossi@google.com'
      }
    },
    pings: 0,
    status: null,
    sessionSince: null
  }),
  actions: {
    increment() {
      this.pings++
    }
  }
})
