const supabase = require("../../db/supabase.js");

exports.createPayslip = async (request, response) => {
  await supabase
    .from("EmployeePayroll")
    .insert({
      "payrollID": request.body.payrollID,
      "employeeID": request.body.employeeID,
      "grossPay": request.body.grossPay,
      "paye": request.body.paye,
      "aidsLevy": request.body.aidsLevy,
      "nssaContribution": request.body.nssaContribution,
      "totalDeductions": request.body.totalDeductions,
      "basePay": request.body.basePay,
      "netPay": request.body.netPay,
      "processingDate": request.body.processingDate
    })
    .then((data) => {
      if (data.status == 201){
        response.status(201).send('Payslip created successfully!');
      }
      else {
        response.status(500).send(data)
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getPayslips = async (_, response) => {
  await supabase
    .from("EmployeePayroll")
    .select()
    .then((data) => {
      if (data.status == 200) {
        if (data.data.length > 0) {
          response.status(200).send(data.data)
        }
        else {
          response.status(404).send('No data')
        }
      }
      else {
          response.status(500).send(data)
      }
   })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getPayslipByID = async (request, response) => {
  await supabase
    .from("EmployeePayroll")
    .select()
    .eq("payrollID", request.body.payrollID)
    .then((data) => {
      if (data.data.length > 0) {
        if (data.data.length > 0) {
          response.status(200).send(data.data)
        }
        else {
          response.status(404).send('No data')
        }
      }
      else {
        response.status(404).send('No data')
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.updatePayslip = async (request, response) => {
  await supabase
    .from("EmployeePayroll")
    .update({
        "employeeID": request.body.employeeID,
        "grossPay": request.body.grossPay,
        "paye": request.body.paye,
        "aidsLevy": request.body.aidsLevy,
        "nssaContribution": request.body.nssaContribution,
        "totalDeductions": request.body.totalDeductions,
        "basePay": request.body.basePay,
        "netPay": request.body.netPay,
        "processingDate": request.body.processingDate
    })
    .eq("payrollID", request.body.payrollID)
    .then((_) => {
      response.status(200).send("Payslip updated successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.deletePayslip = async (request, response) => {
  await supabase
    .from("EmployeePayroll")
    .delete()
    .eq("payrollID", request.body.payrollID)
    .then((_) => {
      response.status(200).send("Payslip deleted successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};
