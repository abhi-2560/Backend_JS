// In-memory database
let users = [
  {
    id: 1,
    name: "Abhijeet",
    email: "Abhi@example.com",
    role: "admin"
  },
  {
    id: 2,
    name: "Ramansh",
    email: "ramansh@example.com",
    role: "user"
  },
  {
    id: 3,
    name: "Naman",
    email: "naman@example.com",
    role: "user"
  }
];

// GET /health
export const healthCheck = (req, res) => {
  res.status(200).json({
    status: "ok"
  });
};

// GET /users
export const getUsers = (req, res) => {
  const { role } = req.query;

  if (role) {
    const filteredUsers = users.filter(user => user.role === role);
    return res.status(200).json(filteredUsers);
  }

  res.status(200).json(users);
};

// GET /users/:id
export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
};

// POST /users
export const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || "user"
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};