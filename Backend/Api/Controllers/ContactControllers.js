const contactModel = require(
  "../Models/ContactModel"
);


module.exports = {

  createContact: async function (req, res) {

    try {

      const fullName =
        req.body.fullName;

      const companyName =
        req.body.companyName;

      const email =
        req.body.email;

      const number =
        req.body.number;

      const jobTitle =
        req.body.jobTitle;

      const source =
        req.body.source;


      const contact =
        await contactModel.create({

          fullName:
            fullName,

          companyName:
            companyName,

          email:
            email,

          number:
            number,

          jobTitle:
            jobTitle,

          source:
            source,

        });


      return res.status(201).json({

        success: true,

        message:
          "Contact created successfully",

        contact:
          contact,

      });


    } catch (err) {

      console.log(
        "Create contact error:",
        err.message
      );


      return res.status(500).json({

        success: false,

        message:
          "Failed to create contact",

        error:
          err.message,

      });

    }

  },

};