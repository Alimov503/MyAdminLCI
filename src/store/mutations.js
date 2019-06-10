import { stat } from "fs";

// https://vuex.vuejs.org/en/mutations.html

export default {
    setError(state, error ) {
      state.error = error
    },
    clearError(state){
      state.error = null
    }
}
