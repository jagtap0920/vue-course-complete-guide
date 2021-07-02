export default {
  registerCoach(state, payload) {
    state.coaches.unshift({
      id: new Date().toISOString(),
      ...payload,
    });
  },
};
