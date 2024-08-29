import { Router } from "express";
import { createDonation } from "../conntroller/donation.controller.js";


const userDonation =  Router()

userDonation.post('/donation', createDonation)

export { userDonation}