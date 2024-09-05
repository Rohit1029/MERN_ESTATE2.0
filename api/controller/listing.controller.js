import Listing from '../models/listing.model.js';
import { errorHandle } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    //const result =await listing.save();
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};



