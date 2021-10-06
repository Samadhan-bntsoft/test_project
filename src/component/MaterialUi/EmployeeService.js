const KEYS = {
  employees: "employees",
  employeeId: "employeeId"
};

 const options = () => ([
   { id: "1", title: "Development" },
   { id: "2", title: "Marketing" },
   { id: "3", title: "Testing" },
 ])

export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    let dept = options();
   return employees.map(x => ({
        ...x,
        department:dept[x.departmentId-1].title
    }))

}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
      localStorage.setItem(KEYS.employeeId, "0");
    var id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}