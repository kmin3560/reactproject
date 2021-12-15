const jwtModule = require("./jwtModule");
const userModel = require("../model/user");

const authModule = {
  loggedIn: async (req, res, next) => {
    const accessToken = req.headers.authorization;
    console.log(accessToken);
    if (!accessToken) {
      return res.status(400).json({
        message: "토큰없음",
      });
    }
    const decoded = jwtModule.verify(accessToken);
    if (decoded === -1) {
      return res.status(400).json({
        message: "만료된 토큰입니다.",
      });
    } else if (decoded === -2) {
      return res.status(400).json({
        message: "유효하지 않은 토큰입니다.",
      });
    } else if (decoded === -3) {
      return res.status(400).json({
        message: "토큰 에러입니다.",
      });
    }
    let userInfo;
    try {
      userInfo = await userModel.findOne({
        email: decoded.email,
      });
      if (!userInfo) {
        return res.status(400).json({
          message: "일치하는 유저가 없습니다.",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "유효하지 않은 유저입니다.",
        error: error,
      });
    }
    req.userInfo = userInfo;
    next();
  },
};

module.exports = authModule;
