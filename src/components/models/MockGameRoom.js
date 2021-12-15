const MockGameRoom = {
  title: 'Game Room Title 1',
  room_status: 'Active',
  participants: [
    {
      name: 'Arif',
      score: 10
    },
    {
      name: 'Daniel',
      score: 8
    },
    {
      name: 'Bob',
      score: 696969
    }
  ],
  activities: [
    {
      activity: 'Start a webinar on a topic of your choice',
      type: 'education',
      link: '',
      key: '6826029'
    },
    {
      activity: 'Learn how to fold a paper crane',
      type: 'education',
      participants: 1,
      price: 0.1,
      link: '',
      key: '3136036',
      accessibility: 0.05
    },
    {
      activity: 'Clean out your refrigerator',
      type: 'busywork',
      participants: 1,
      price: 0,
      link: '',
      key: '9324336',
      accessibility: 0
    },
    { activity: 'Play a game of tennis with a friend', type: 'social', participants: 2, price: 0.1, link: '', key: '1093640', accessibility: 0.4 },
    { activity: 'Play a game of Monopoly', type: 'social', participants: 4, price: 0.2, link: '', key: '1408058', accessibility: 0.3 },
    { activity: 'Make homemade ice cream', type: 'cooking', participants: 1, price: 0.2, link: '', key: '3818400', accessibility: 0.2 },
    { activity: 'Visit your past teachers', type: 'social', participants: 1, price: 0, link: '', key: '8238918', accessibility: 0.7 },
    { activity: 'Learn woodworking', type: 'diy', participants: 1, price: 0.3, link: '', key: '9216391', accessibility: 0.3 },
    { activity: 'Create a meal plan for the coming week', type: 'cooking', participants: 1, price: 0, link: '', key: '3491470', accessibility: 0 },
    { activity: 'Clean out your garage', type: 'busywork', participants: 1, price: 0, link: '', key: '7023703', accessibility: 0.1 },
    { activity: 'Make a simple musical instrument', type: 'music', participants: 1, price: 0.4, link: '', key: '7091374', accessibility: 0.25 }
  ]
}
export default MockGameRoom
