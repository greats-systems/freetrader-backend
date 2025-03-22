const supabase = require('../../db/supabase.js')

exports.createEmployee = async (request, response) => {
    let nssaPension
    const grossPay = parseFloat(request.body.grossSalary)
    if (request.body.baseSalary * 0.045 > 700){
        nssaPension = 700
    }
    else {
        nssaPension = request.body.baseSalary * 0.045
    }

    const taxableIncome = grossPay - nssaPension
    let paye = 0

    switch (true) {
        case taxableIncome >= 0 && taxableIncome <= 100:
          paye = 0;
          break;
        case taxableIncome >= 100.01 && taxableIncome <= 300:
          paye = taxableIncome * 0.2 - 20;
          break;
        case taxableIncome >= 300.01 && taxableIncome <= 1000:
          paye = taxableIncome * 0.25 - 35;
          break;
        case taxableIncome >= 1000.01 && taxableIncome <= 2000:
          paye = taxableIncome * 0.3 - 85;
          break;
        case taxableIncome >= 2000.01 && taxableIncome <= 3000:
          paye = taxableIncome * 0.35 - 185;
          break;
        case taxableIncome >= 3000.01:
          paye = taxableIncome * 0.4 - 335;
          break;
      }
      const aidsLevy = paye * 0.03;
      const totalDeductions = paye + aidsLevy + nssaPension;
      const netPay = grossPay - totalDeductions;

    await supabase
     .from("FarmerEmployee")
     .insert({
        "FarmerID" : request.body.farmerID,
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Role" : request.body.role,
        "HireDate" : request.body.hireDate,
        "BaseSalary": request.body.baseSalary,
        "GrossSalary" : request.body.grossSalary,
        "NetSalary": netPay
     })
     .then((data) => {
        if (data.status == 201){
            response.status(201).send('Employee created successfully!')
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getEmployees = async (_, response) => {
    await supabase
     .from("FarmerEmployee")
     .select()
     .then((data) => {
         if (data.status == 200) {
            if (Object.keys(data.data).length > 0) {
                response.status(200).send(data.data);
              } else {
                response.status(404).send("No data");
              }
            }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getEmployeeByID = async (request, response) => {
    await supabase
     .from("FarmerEmployee")
     .select()
     .eq("EmployeeID", request.body.employeeID)
     .then((data) => {
        if (data.status == 200) {
            if (Object.keys(data.data).length > 0) {
                response.status(200).send(data.data);
              } else {
                response.status(404).send("No data");
              }
        } 
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.updateEmployee = async (request, response) => {
    let nssaPension
    const grossPay = parseFloat(request.body.grosssalary)
    if (request.body.basesalary * 0.045 > 700){
        nssaPension = 700
    }
    else {
        nssaPension = request.body.basesalary * 0.045
    }

    const taxableIncome = grossPay - nssaPension
    let paye = 0

    switch (true) {
        case taxableIncome >= 0 && taxableIncome <= 100:
          paye = 0;
          break;
        case taxableIncome >= 100.01 && taxableIncome <= 300:
          paye = taxableIncome * 0.2 - 20;
          break;
        case taxableIncome >= 300.01 && taxableIncome <= 1000:
          paye = taxableIncome * 0.25 - 35;
          break;
        case taxableIncome >= 1000.01 && taxableIncome <= 2000:
          paye = taxableIncome * 0.3 - 85;
          break;
        case taxableIncome >= 2000.01 && taxableIncome <= 3000:
          paye = taxableIncome * 0.35 - 185;
          break;
        case taxableIncome >= 3000.01:
          paye = taxableIncome * 0.4 - 335;
          break;
      }
      const aidsLevy = paye * 0.03;
      const totalDeductions = paye + aidsLevy + nssaPension;
      const netPay = grossPay - totalDeductions;

    await supabase
     .from("FarmerEmployee")
     .update({
        "Role" : request.body.role,
        "BaseSalary": request.body.basesalary,
        "GrossSalary" : request.body.grosssalary,
        "NetSalary": netPay       
     })
     .then((_) => {
        response.status(200).send("Farmer Employee updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteEmployee = async (request, response) => {
    await supabase
     .from("FarmerEmployee")
     .delete()
     .eq("EmployeeID", request.body.employeeID)
    //  .eq("FirstName", request.body.firstName)
    //  .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer Employee deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}