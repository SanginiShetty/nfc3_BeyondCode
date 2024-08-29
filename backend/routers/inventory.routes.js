import { Router } from "express";
import { addToInventory } from "../conntroller/inventory.controller.js";

const InventoryRouter = Router();
InventoryRouter.post("/add", addToInventory);

export { InventoryRouter };
