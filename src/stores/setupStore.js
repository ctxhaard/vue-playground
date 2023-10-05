import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useSetupStore = defineStore('setup_store', () => {
  const user = reactive({
    name: 'Mario',
    surname: 'Rossi',
    contacts: {
      phone: '+39 123 4567',
      email: 'mario.rossi@google.com'
    }
  });
  const pings = ref(0);
  const status = ref(null);
  const sessionSince = ref(null);
  function increment() {
    pings.value++
  }
  const fullName = computed(() => `${ user.name }, ${ user.surname }: ${ user.contacts.email }`)

  return {
    user, pings, status, sessionSince, // status properties
    increment, // actions
    fullName // getters
};
});
