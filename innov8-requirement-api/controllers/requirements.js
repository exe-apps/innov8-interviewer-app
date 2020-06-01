const mongoose = require("mongoose");

const Requirement = require("../models/requirements");

exports.getRequirements = (req, res, next) => {
    Requirement.find()
    .then(requirements => {
        console.log('Requirements: ', requirements);
        res.status(200).json({
            requirements: requirements
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getRequirementById = (req, res, next) => {
    const reqId = req.params.reqId;
    Requirement.findById(reqId)
      .then(requirement => {
          console.log('Requirement: ', requirement);
          res.status(200).json({
              requirement: requirement
          });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
    });
};

exports.createRequirement = (req, res, next) => {
    const requirement = new Requirement({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        scores: req.body.scores
    });
    requirement
    .save()
    .then(result => {
        console.log('Result', result);
        res.status(201).json({
            message: 'Requirement successfully added',
            createdRequirement: {
                id: result.id,
                name: result.name,
                type: result.type,
                description: result.description,
                scores: result.scores
            }
        })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.editRequirement = (req, res, next) => {
    const reqId = req.params.reqId;

    const requirement = new Requirement({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        scores: req.body.scores
    });

    Requirement
    .findById(reqId)
    .then(requirement => {
        requirement.name = req.body.name;
        requirement.type = req.body.type;
        requirement.description = req.body.description;
        requirement.scores = req.body.scores;
        return requirement.save();
    })
    .then(result => {
        console.log('Result', result);
        res.status(200).json({
            message: 'Requirement successfully updated'
        })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.deleteRequirement = (req, res, next) => {
  const reqId = req.params.reqId;

  Requirement.findByIdAndRemove(reqId)
    .then(result => {
        console.log('Requirement successfully deleted');
        res.status(200).json({
            message: 'Requirement successfully deleted'
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
  });
};