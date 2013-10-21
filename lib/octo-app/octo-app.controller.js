

module.exports = {
  index : function(req,res) {
    res.render('index', {
      data : {
        hero : 'Octocat'
      }
    });
  }
};