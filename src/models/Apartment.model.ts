import mongoose from 'mongoose';

export interface IApartment {
  _id?: mongoose.Types.ObjectId;
  name: string;
  description: string;
  bedRooms: number;
  bathrooms: number;
  size: number;
  images: string[];
  price: number;
}

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    bedRooms: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    size: { type: Number, required: true },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    numOfReviews: Number,
  },
  { timestamps: true }
);

export const ApartmentModel = mongoose.model<IApartment>('apartments', schema);
