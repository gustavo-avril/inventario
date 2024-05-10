import express from "express";
import { Phone } from "./../models/iPhoneModel.js";

const router = express.Router();

// Route to save a new device
router.post("/", async (req, res) => {
  try {
    if (!req.body.make) {
      return res.status(400).send({ message: "Please complete the required fields" });
    }
    const newPhone = {
      make: req.body.make,
      serial: req.body.serial,
      number: req.body.number,
      location: req.body.location,
      department: req.body.department,
      ext: req.body.ext,
    };

    const phone = await Phone.create(newPhone);

    return res.status(201).send(phone);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all devices
router.get("/", async ( res) => {
  try {
    const phones = await Phone.find({});

    return res.status(200).json({
      count: phones.length,
      data: phones.map((phone) => ({
        id: phone._id,
        make: phone.make,
        serial: phone.serial,
        location: phone.location,
        department: phone.department,
        number: phone.number,
        ext: phone.ext,
        // Add other fields as needed
      })),
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
    const phone = await Phone.findById(id);

    return res.status(200).json(phone);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a device by ID, REVISAR XQ NO ANDA
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.make) {
      return res.status(400).send({ message: "Send all required fields." });
    }
    const { id } = req.params;
    const result = await Phone.findByIdAndUpdate(
      id,
      req.body.make,
      req.body.serial,
      req.body.number,
      req.body.location,
      req.body.department,
      req.body.ext,
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
    return res.status(200).send({ message: "Dispositivo actualizado exitosamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete device by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Phone.findByIdAndDelete(id);

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
