function add(a, b) {
  return a + b;
}

function getFullname(user) {
  const {
    name: {first, middle, last},
  } = user;
  return [first, middle, last].filter(Boolean).join('');
}

add(1, 2);

getFullname({name: {first: 'Joe', middle: 'Bud', last: 'Matthews'}});
