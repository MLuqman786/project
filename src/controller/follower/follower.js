import followerModel from "../../model/follower/follower.js";

const followerController = {
  create: async (req, res) => {
    try {
      const { followerName } = req.body;

      await followerModel.create({
        followerName,
      });

      return res.json({
        message: "user created successfully ",
      });
    } catch (err) {
      res.json({
        message: "user not created ",
        err,
      });
    }
  },
  //   --------------------------get all------------------------------

  getAll: async (req, res) => {
    try {
      const User = await followerModel.findAll({
        where: {
          firstName: "luqman",
        },
      });

      res.status(200).json({
        message: ` successfully ${User} All Name is Find `,
      });
    } catch (error) {
      return res.status(400).json({ message: "someThing went wrong", error });
    }
  },

  //   --------------------Single---------------------------

  getSingle: async () => {
    try {
      const { id } = req.params;
      const User = await followerModel.findOne({
        where: {
          id,
        },
      });
      if (!User) {
        return res.status(500).json({
          message: `${id} not found in database`,
        });
      }
      return res.status(200).json({
        message: `successfully find the data of ${id}`,
        User,
      });
    } catch (error) {
      return res.status(400).json({ message: "someThing went wrong", error });
    }
  },

  //   -------------------Update----------------------------

  userUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      //   const User = await followerModel.update(updateData, {
      //     where: {
      //       id,
      //     },
      //   });

      const { firstName, lastName, email, password } = req.body;
      const User = await followerModel.findOne({
        where: {
          id,
        },
      });

      if (!User) {
        return res.status(500).json({
          message: `${id} not found in database`,
        });
      }

      User.firstName = firstName;
      User.lastName = lastName;
      User.email = email;
      User.password = password;
      await User.save();

      return res.status(200).json({
        message: "user updated successfully",
        User,
      });
    } catch (error) {
      return res.status(400).json({
        message: "something went wrong",
        error,
      });
    }
  },

  //   --------------------Delete---------------------------

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      //   let User = await followerModel.destroy({
      //     where: {
      //       id,
      //     },
      //   });

      const User = await followerModel.findOne({
        where: {
          id,
        },
      });

      if (!User) {
        return res.status(500).json({
          message: `no user with ${id} was found`,
        });
      }

      await User.destroy();

      return res.status(201).json({
        message: "user deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message: "something went wrong",
      });
    }
  },
  //   -----------------------------------------------
};

export default followerController;
