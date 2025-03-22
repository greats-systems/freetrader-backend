const supabase = require("../../db/supabase.js");

exports.populateFarmerDashboard = async (_, response) => {
  await supabase
    .from("Farmer")
    .select(
      `
          FirstName, 
          Surname,
          EmailAddress,
          MobileNumber,
          PhysicalAddress,
          FarmerID,
          FarmerNextOfKin
          (
             SpouseFirstName: FirstName,
             SpouseSurname: Surname,
             SpouseAddress: Address,
             SpousePhoneNumber: PhoneNumber
          )        
         `
    )
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
};
