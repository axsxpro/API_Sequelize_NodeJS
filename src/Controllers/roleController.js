const Role = require("../Models/Role");
const Roles = require('../Constants/roles');  // Importez vos rôles

// Récupérer tous les rôles
async function getRoles(req, res) {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Récupérer un rôle par son ID
async function getRoleById(req, res) {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Créer un nouveau rôle
async function createRole(req, res) {
  try {

    const newRole = await Role.create(req.body);
    res.status(201).json(newRole);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}


// Mettre à jour un rôle
async function updateRole(req, res) {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }
    await role.update(req.body);
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Supprimer un rôle
async function deleteRole(req, res) {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }
    await role.destroy();
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
