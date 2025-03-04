//CRUD-Create,Remove,Update,Delete
import express from 'express';
const users = [{
    id: 1,
    name: 'Bhanu',
    age: 21
}]
const app = express();
const port = 3000;
app.get('/', (req,res) => {
    res.send(users);
});
app.use(express.json());
//Creation
app.post('/', (req,res) => {
    const newid = users.length > 0 ? users[users.length -1].id + 1 : 1;
    const {name,age} = req.body;
    users.push({id: newid, name, age});
    res.send("Data is recieved successfully!");
});
app.post('/api/users', (req,res) => {
    const bodydata = req.body;
    users.push(bodydata);
    res.send("New user is created successfully!");
});
app.get('/api/users/:id', (req,res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    res.send(users);
});
//Update
app.patch('/api/updateuser/:id', (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send("user is updated successfully!");
});
//DELETE
app.delete('/api/deleteuser/:id', (req,res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);
    users.splice(index,1)
    res.send("user is deleted successfully!");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});