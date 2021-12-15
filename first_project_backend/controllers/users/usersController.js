const usersController = {
  getUserInfo: (req, res) => {
    const userInfo = req.userInfo;
    if (!userInfo) {
      res.status(400).json({
        message: "유저 정보가 없습니다.",
      });
      return;
    }
    res.status(200).json({
      message: "유저 정보 조회 가능",
      data: userInfo,
    });
  },
  uploadImage: (req, res) => {
    const imageInfo = req.file;
    res.status(200).json({
      message: "업로드 완료",
      data: imageInfo,
    });
  },
};

module.exports = usersController;
