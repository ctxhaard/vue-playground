<script setup>

import { useCounterStore } from '../stores/counter'

const store = useCounterStore()

const emails = [
  'mario.rossi@yahoo.it',
  'andrea.verdi@libero.it',
  'luca.bianchi@tin.it',
  'francesco.marrone@google.com'
]

function onButtonClick() {
  store.increment();
  store.user.contacts.email = emails[Math.round(Math.random() * (emails.length -1 ))]
  console.log(`Button pressed! store.pings: ${ store.pings }`);
  store.$patch({
    user: {
      surname: 'Bianchi'
    }
  })
}

</script>

<template>
  <div>
    <p>This is my playground</p>
    <p><button @click="onButtonClick">Click me</button></p>
    <p><input v-model="store.user.contacts.email" type="text" placeholder="Put a text here"/></p>
    <p><input v-model="store.pings" type="number" placeholder="Put a number here"/></p>
    <p>name: {{ store.user.name || '?' }}, surname: {{ store.user.surname || '?' }},
      email: {{ store.user.contacts.email || '?' }}, phone: {{ store.user.contacts.phone || '?' }}</p>
  </div>
</template>