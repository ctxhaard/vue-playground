<script setup>

import { useOptionStore } from '../stores/optionStore'
import { useSetupStore } from '../stores/setupStore'
import PlaygroundItem from '../components/PlaygroundItem.vue'
import { reactive, ref, computed } from 'vue'

const store = useSetupStore()

// IMPORTANT: assigning a computed value to a reactive element breaks the object
// reactivity towards the computed base elements. So it is important to "wrap" the
// computed property into a new computed
const linked_to_store = reactive({ link: computed(() => store.fullName) })
//const linked_to_store = reactive({ link: store.fullName.value })

const local_email = ref(null)

const local_computed = computed(() => `computed: ${local_email.value}`)

const local_store = reactive({
  email: local_computed
})

const emails = [
  'mario.rossi@yahoo.it',
  'andrea.verdi@libero.it',
  'luca.bianchi@tin.it',
  'francesco.marrone@google.com'
]

function onButtonClick() {
  store.increment();
  console.log(`Button pressed! store.pings: ${ store.pings }`);
  let new_email = emails[Math.round(Math.random() * (emails.length -1 ))];
  local_email.value = new_email;
  store.$patch({
    user: {
      surname: 'Bianchi',
      contacts: {
        email: new_email
      }
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
    <p>store fullName: {{ store.fullName }}</p>
    <p>linked_to_store.link: {{ linked_to_store.link }}</p>
    <p>local_store.email: {{ local_store.email }}</p>
    <PlaygroundItem
      :the_prop="store.user.contacts"
    />
  </div>
</template>