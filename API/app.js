const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

// blog array with id name email object
let blogs = [
  {
    id: 1,
    name: "Blog 1",
    email: "admin@example.com",
  },
  {
    id: 2,
    name: "Blog 2",
    email: "admin@example.com",
  },
  {
    id: 3,
    name: "Blog 3",
    email: "admin@example.com",
  },
];
// middlware function app.use
// app.use((req, res, next) => {
//   if (!req.url.includes("hack")) {
//     next();
//   } else {
//     res.send("You are not allowed to access this page");
//   }
// });

// it will accept all request GET PUT PATCH POST DELETE
// app.get("/home", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About us</h1>");
// });

app.get("/getData", (req, res) => {
  res.status(200).json(blogs);
});

app.post("/saveData", (req, res) => {
  const { name, email } = req.body;
  blogs.push({
    id: blogs.length + 1,
    name,
    email,
  });
  res.json({
    success: true,
    message: "Post saved",
  });
});

app.put("/updateAll", (req, res) => {
  res.send("update all data");
});

app.patch("/update", (req, res) => {
  res.send("update data");
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  blogs = blogs.filter((blog) => blog.id != id);
  res.json({
    success: true,
    message: "Post deleted",
  });
});

app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
