/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    uploadFile: function (req, res) {
        req.file('video').upload(sails.config.S3 , function (err, filesUploaded) {
          if (err){
            return res.serverError(err);
          } 
          return res.ok({
            files: filesUploaded,
            textParams: req.allParams()
          });
        });
      }
};

