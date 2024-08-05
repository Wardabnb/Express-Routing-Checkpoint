export const workingHoursMiddleware =  function workingHoursMiddleware(req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };