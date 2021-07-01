import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Tushar',
          lastName: 'Jagtap',
          areas: ['frontend', 'backend', 'career'],
          description: 'He is an great full stack developer',
          hourlyRate: 50,
        },
        {
          id: 'c2',
          firstName: 'Dinesh',
          lastName: 'Rabara',
          areas: ['frontend', 'backend'],
          description:
            'He is an great full stack developer and good in nature!!',
          hourlyRate: 100,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
