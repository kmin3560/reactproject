const postsModel = require("../../model/post");
const jwtModule = require("../../modules/jwtModule");

const postController = {
  createPost: async (req, res) => {
    const { title, content } = req.body;
    const userInfo = req.userInfo;
    console.log(userInfo);

    const post = new postsModel({
      title,
      content,
      createdDate: new Date(),
    });

    try {
      const savedData = await post.save(); //
      res.status(200).json({
        message: "업로드 완료",
        data: savedData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    // const newData = {
    //   idx: idx++,
    //   title: title,
    //   content: content,
    //   createdDate: new Date(),
    // };
  },

  readPost: async (req, res) => {
    try {
      const result = await postsModel.find(); //전체 데이터 조회가능 특정 데이터 괄호 안에 title:{}
      if (result.length === 0) {
        res.status(400).json({
          message: "결과값이 없습니다.",
        });
        return;
      }
      res.status(200).json({
        message: "조회완료",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "db 서버 에러",
      });
    }
  },
  updatePost: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      await postsModel.findByIdAndUpdate(id, {
        title: title,
        content: content,
      });

      res.status(200).json({
        message: "업데이트 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "db 서버 에러",
      });
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      await postsModel.findByIdAndDelete(id);
      res.status(200).json({
        message: "삭제 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "db 서버 에러",
      });
    }
  },
  readDataPost: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await postsModel.findById;
      res.status(200).json({
        message: "조회 완료",
      });
      await postsModel.find;
    } catch (error) {
      res.status(500).json({
        message: "db 서버 에러",
      });
    }
  },
};

module.exports = postController;
