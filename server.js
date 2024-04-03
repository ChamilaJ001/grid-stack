import express from "express";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Chamila", age: 12 },
    { id: 2, name: "Jhon", age: 12 },
    { id: 3, name: "Doe", age: 12 },
  ];

  res.send(`
        <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        ${users.map(
          (user) => `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
      </tr>`
        )}
        
      </table> 
    `);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
