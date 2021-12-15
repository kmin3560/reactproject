const usersModel = require("../../model/user");
const jwtModule = require("../../modules/jwtModule");

const authController = {
  signin: async (req, res) => {
    const { email, password } = req.body;

    const findUserInfo = await usersModel.findOne({ email });
    if (findUserInfo) {
      // 계정 정보가 있을 때
      const userPassword = findUserInfo.password;
      if (userPassword === password) {
        const accessToken = jwtModule.create({
          email,
        });
        res.status(200).json({
          message: "로그인 성공",
          accessToken: accessToken,
        });
      } else {
        console.log("??");
        res.status(400).json({
          message: "비밀번호를 찾을수없음",
        });
      }
    } else {
      // 계정 정보가 없을 때
      res.status(400).json({
        message: "해당 계정 정보를 찾을 수 없음",
      });
    }
  },

  signup: async (req, res) => {
    const { email, name, password } = req.body;

    let findUserInfo = await usersModel.findOne({ email });

    if (findUserInfo) {
      // 기존 유저가 있다
      res.status(400).json({
        message: "중복된 이메일, 새로운 이메일을 등록하세요",
        //중복체크 보내는 메세지 1은 중복임
        dumpYn: "1",
      });
      return;
    }

    const data = new usersModel({
      email,
      name,
      password,
      createDate: new Date(),
    });

    try {
      const saveData = await data.save();
      res.status(200).json({
        message: "회원가입 완료",
        data: saveData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};
module.exports = authController;
