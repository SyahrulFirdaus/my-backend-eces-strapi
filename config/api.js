// module.exports = {
//   rest: {
//     defaultLimit: 25,
//     maxLimit: 100,
//     withCount: true,
//   },
// };

module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ['_v', 'id', 'created_at'],
  },
  rest: {
    defaultLimit: 100,
    maxLimit: 250,
  },
});
