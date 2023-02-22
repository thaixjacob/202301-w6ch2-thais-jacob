export interface Thing {
  id: string;
  knowledge: string;
}

export const thingsBox: Thing[] = [
  { id: '0', knowledge: 'react' },
  { id: '1', knowledge: 'redux' },
  { id: '3', knowledge: 'flux' },
  { id: '4', knowledge: 'typescript' },
  { id: '5', knowledge: 'html' },
  { id: '6', knowledge: 'css' },
  { id: '7', knowledge: 'sonar' },
  { id: '8', knowledge: 'testing' },
  { id: '9', knowledge: 'palabrotas en español' },
];

export const createThing = (newThing: Thing) => {
  if (thingsBox.some(thing => thing.knowledge === newThing.knowledge)) {
    throw new Error('You already have this knowledge. Try a new one.');
  }

  thingsBox.push(newThing);
};
