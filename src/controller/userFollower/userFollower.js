import responseFollowerModel from "../../model/responseFollower/responseFollower.js";

const responseFollowerController = {
  create: async (req, res) => {
    try {
      const { responseId, followerId } = req.body;

      await responseFollowerModel.create({
        responseId,
        followerId,
      });

      return res.json({
        message: " created successfully ",
      });
    } catch (err) {
      res.json({
        message: "not created ",
        err,
      });
    }
  },
  //   --------------------------get all------------------------------

  getAll: async (req, res) => {
    try {
      const response = await responseFollowerModel.findAll(req);

      res.status(200).json({
        message: ` successfully ${response} All  `,
      });
    } catch (error) {
      return res.status(400).json({ message: "someThing went wrong", error });
    }
  },

  //   --------------------Single---------------------------

  getSingle: async () => {
    try {
      const { id } = req.params;
      const response = await responseFollowerModel.findOne({
        where: {
          id,
        },
      });
      if (!response) {
        return res.status(500).json({
          message: `${id} not found in database`,
        });
      }
      return res.status(200).json({
        message: `successfully find the data of ${id}`,
        response,
      });
    } catch (error) {
      return res.status(400).json({ message: "someThing went wrong", error });
    }
  },

  //   -------------------Update----------------------------

  responseUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      // const updateData = req.body;
      //   const response = await responseFollowerModel.update(updateData, {
      //     where: {
      //       id,
      //     },
      //   });

      const { firstName, lastName, email, password } = req.body;
      const response = await responseFollowerModel.findOne({
        where: {
          id,
        },
      });

      if (!response) {
        return res.status(500).json({
          message: `${id} not found in database`,
        });
      }

      response.firstName = firstName;
      response.lastName = lastName;
      response.email = email;
      response.password = password;
      await response.save();

      return res.status(200).json({
        message: "response updated successfully",
        response,
      });
    } catch (error) {
      return res.status(400).json({
        message: "something went wrong",
        error,
      });
    }
  },

  //   --------------------Delete---------------------------

  deleteresponse: async (req, res) => {
    try {
      const { id } = req.params;
      //   let response = await responseFollowerModel.destroy({
      //     where: {
      //       id,
      //     },
      //   });

      const response = await responseFollowerModel.findOne({
        where: {
          id,
        },
      });

      if (!response) {
        return res.status(500).json({
          message: `no response with ${id} was found`,
        });
      }

      await response.destroy();

      return res.status(201).json({
        message: "response deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message: "something went wrong",
      });
    }
  },
  //   -----------------------------------------------
};

export default responseFollowerController;
