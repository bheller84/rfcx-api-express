
/*
 * GET home page.
 */

exports.index = function(req, res, process, Model){

  res.render("index", {
    title: "Rainforest Connection"+process.env.NODE_ENV
  });
};