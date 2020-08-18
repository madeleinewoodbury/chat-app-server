const users = [];

const addUser = ({ id, name, room }) => {
  if (!name || !room) return { error: 'Username and room are required.' };

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  let usersInRoom = users.filter((user) => user.room === room);
  if (usersInRoom.length > 10) {
    return { error: 'Too many users in this room, try a different room' };
  }

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: 'Username is already taken.' };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
