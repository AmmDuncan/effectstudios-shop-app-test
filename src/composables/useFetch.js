import { ref } from "vue";

export function useFetch(func) {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);

  async function fetch() {
    try {
      loading.value = true;
      const res = await func();

      data.value = res.data;
      error.value = null;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  fetch().then();

  return { loading, error, data, fetch };
}
