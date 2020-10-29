const Colis = require('../models/colis');

exports.createColis = (req, res, next) => {
  const colis = new Colis({
    nature: req.body.nature,
    quantite: req.body.quantite,
    paiement: req.body.paiement,
    nomexpediteur: req.body.nomexpediteur,
    expediteur: req.body.expediteur,
    adresseexpediteur: req.body.adresseexpediteur,
    nomdestinataire: req.body.nomdestinataire,
    destinataire: req.body.destinataire,
    adressedestinataire: req.body.adressedestinataire,
    ptrelaissource: req.body.ptrelaissource,
    ptrelaisdestination: req.body.ptrelaisdestination,
    nomlivreur: req.body.nomlivreur,
    livreur: req.body.livreur,
    statut: req.body.statut
  });
  colis.save().then(
    () => {
      res.status(201).json({
        message: 'Colis enregistré!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneColis = (req, res, next) => {
  Colis.findOne({
    _id: req.params.id
  }).then(
    (colis) => {
      res.status(200).json(colis);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyColis = (req, res, next) => {
  const colis = new Colis({
    _id: req.params.id,
    nature: req.body.nature,
    quantite: req.body.quantite,
    paiement: req.body.paiement,
    nomexpediteur: req.body.nomexpediteur,
    expediteur: req.body.expediteur,
    adresseexpediteur: req.body.adresseexpediteur,
    nomdestinataire: req.body.nomdestinataire,
    destinataire: req.body.destinataire,
    adressedestinataire: req.body.adressedestinataire,
    ptrelaissource: req.body.ptrelaissource,
    ptrelaisdestination: req.body.ptrelaisdestination,
    nomlivreur: req.body.nomlivreur,
    livreur: req.body.livreur,
    statut: req.body.statut
  });
  Colis.updateOne({_id: req.params.id}, colis).then(
    () => {
      res.status(201).json({
        message: 'Colis updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteColis = (req, res, next) => {
  Colis.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllColis = (req, res, next) => {
  Colis.find().then(
    (coliss) => {
      res.status(200).json(coliss);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};