import express from "express";
import { Device } from "./../models/deviceModel.js";

const router = express.Router();

// Route to save a new device
router.post("/", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Please complete the required fields" });
    }
    const newDevice = {
      name: req.body.name,
      office: req.body.office,
      department: req.body.department,
      devices: req.body.devices,
    };

    const device = await Device.create(newDevice);
    /*const newDevice = {
				name: req.body.name,
				devices: [
					{
						device: req.body.device,
						model: req.body.model,
						make: req.body.make,
						serial: req.body.serial,
						color: req.body.color,
						state: req.body.state,
						office: req.body.office,
						department: req.body.department,
						password: req.body.password,
					},
				],
			};
			
		const device = await Device.create(newDevice);
		const newDevice = {
				device: req.body.device,
				name: req.body.name,
				model: req.body.model,
				make: req.body.make,
				serial: req.body.serial,
				color: req.body.color,
				state: req.body.state,
				office: req.body.office,
				department: req.body.department,
				password: req.body.password,
		}
		const device = await Device.create(newDevice); */

    return res.status(201).send(device);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all devices
router.get("/", async (req, res) => {
  try {
    const devices = await Device.find({});

    return res.status(200).json({
      count: devices.length,
      data: devices,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get one device by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id);

    return res.status(200).json(device);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a device by ID, REVISAR XQ NO ANDA
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Send all required fields." });
    }
    const { id } = req.params;
    const result = await Device.findByIdAndUpdate(
      id,
      req.body.name,
      req.body.body,
      req.body.office,
      req.body.department,
      req.body.devices
    );

    if (!result) {
      return res.status(400).json({ message: "Dispositivo no encontrado" });
    }
    // const result = await Device.updateOne(
    //     { _id: id, "devices.name": req.body.devices[0].name }, // Filtrar por el ID y el nombre del dispositivo a actualizar
    //     { $set: { "devices.$": req.body.devices[0] } } // Utilizar $set y la indexación del array para actualizar el dispositivo
    // );

    // if(result.nModified === 0){
    //     return res.status(400).json({ message: 'Device not found' });
    // }
    return res.status(200).send({ message: "Dsipositivo actualizado exitosamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete device by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Device.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "No se encontró el dispositivo" });
    }
    return res.status(200).send({ message: "Dispositivo eliminado exitosamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
