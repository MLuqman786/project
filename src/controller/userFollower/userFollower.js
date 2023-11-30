import userFollowerModel from "../../model/userFollower/userFollower.js";

const userFollowerController = {
  create: async (req, res) => {
    try {
      const { userId, followerId } = req.body;

      await userFollowerModel.create({
        userId,
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
      const response = await userFollowerModel.findAll(req);

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
      const response = await userFollowerModel.findOne({
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

  Update: async (req, res) => {
    try {
      const { id } = req.params;
      // const updateData = req.body;
      //   const response = await userFollowerModel.update(updateData, {
      //     where: {
      //       id,
      //     },
      //   });

      const { userId, followerId } = req.body;
      const response = await userFollowerModel.findOne({
        where: {
          id,
        },
      });

      if (!response) {
        return res.status(500).json({
          message: `${id} not found in database`,
        });
      }

      response.userId = userId;
      response.followerId = followerId;
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

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      //   let response = await userFollowerModel.destroy({
      //     where: {
      //       id,
      //     },
      //   });

      const response = await userFollowerModel.findOne({
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

export default userFollowerController;
