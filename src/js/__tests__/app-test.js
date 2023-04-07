import Team from '../app';

const members = [
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Viktor',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  },
  {
    name: 'John',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  },
];

test('should be iterable with for...of', () => {
  const team = new Team(members);
  let count = 0;
  for (const member of team) {
    expect(member).toEqual(members[count]);
    count += 1;
  }
  expect(count).toEqual(members.length);
});
