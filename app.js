const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

const DATA_FILE = "./employees.json";

// Get all employees
app.get("/employees", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(data);
});

// Get employee by ID
app.get("/employees/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));

    const employee = data.find(
        emp => emp.id === parseInt(req.params.id)
    );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
});

// Add employee
app.post("/employees", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));

    const newEmployee = {
        id: Date.now(),
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };

    data.push(newEmployee);

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

    res.status(201).json(newEmployee);
});

// Delete employee
app.delete("/employees/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync(DATA_FILE));

    data = data.filter(
        emp => emp.id !== parseInt(req.params.id)
    );

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

    res.json({
        message: "Employee deleted"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});