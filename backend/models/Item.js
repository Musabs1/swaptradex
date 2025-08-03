const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
  },
  images: [{ type: String }],
  isBoosted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['available', 'sold'], default: 'available' }
});

ItemSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Item', ItemSchema);
