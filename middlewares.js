import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};

//local변수를 global 변수로
//전역에서 사용가능하게 만들어주는 미들웨어
