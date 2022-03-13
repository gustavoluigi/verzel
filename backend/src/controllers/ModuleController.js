const Module = require('../models/Module');

module.exports = {
  async index(req, res) {
    const modules = await Module.findAll();

    return res.json(modules);
  },

  async store(req, res) {
    const { name } = req.body;

    const moduleExists = await Module.findOne({ where: { name } });

    if (moduleExists) {
      return res.status(409).json('Já existe um módulo com este nome, por favor, tente novamente usando um novo nome.');
    }

    const module = await Module.create({ name });

    return res.json(module);
  },

  async edit(req, res) {
    const { id } = req.params;

    const module = await Module.findByPk(id);

    if (!module) {
      return res.status(400).json('Módulo não encontrado.');
    }

    module.update(req.body);

    return res.sendStatus(200).json(module);
  },

  async delete(req, res) {
    const { id } = req.params;

    const module = await Module.findByPk(id);

    if (!module) {
      return res.status(400).json('Módulo não encontrado.');
    }

    module.destroy();

    return res.status(200).json('Módulo deletado.');
  },
};
