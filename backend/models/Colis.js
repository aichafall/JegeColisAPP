const mongoose = require('mongoose');

const colisSchema = mongoose.Schema({
      nature: { type: String, required: true },
      quantite: { type: String, required: true },
      paiement: { type: String, required: true },
      nomexpediteur: { type: String, required: true },
      expediteur: { type: Number, required: true },
      adresseexpediteur: { type: String},
      nomdestinataire: { type: String, required: true },
      destinataire: { type: Number, required: true },
      adressedestinataire: { type: String },
      ptrelaissource: { type: String },
      ptrelaisdestination: { type: String},
      nomlivreur: { type: String, default:'en attente' },
      livreur: { type: Number, default:'en attente'},
      statut: { type: String, default:'en attente' },
});

module.exports = mongoose.model('Colis', colisSchema);