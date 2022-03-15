/* eslint-disable camelcase */
const Class = require('../models/Class');
const Module = require('../models/Module');

module.exports = {
  async index(req, res) {
    const modules = await Module.findAll({
      include: [
        {
          model: Class,
          as: 'classes',
        },
      ],
      order: [
        ['name', 'ASC'],
        [{ model: Class, as: 'classes' }, 'name', 'ASC'],
      ],
    });

    return res.json(modules);
  },

  async show(req, res) {
    const { module_id } = req.params;
    const modules = await Module.findByPk(module_id);

    if (!modules) {
      return res.status(404).json('Módulo não encontrado.');
    }

    return res.json(modules);
  },

  async store(req, res) {
    const { name } = req.body;

    const moduleExists = await Module.findOne({ where: { name } });

    if (moduleExists) {
      return res
        .status(409)
        .json(
          'Já existe um módulo com este nome, por favor, tente novamente usando um novo nome.',
        );
    }

    const module = await Module.create({ name });

    return res.json(module);
  },

  async edit(req, res) {
    const { module_id } = req.params;
    const { name } = req.body;

    const module = await Module.findByPk(module_id);

    if (!module) {
      return res.status(404).json('Módulo não encontrado.');
    }

    const moduleExists = await Module.findOne({ where: { name } });

    if (moduleExists) {
      return res
        .status(409)
        .json(
          'Já existe um módulo com este nome, por favor, tente novamente usando um novo nome.',
        );
    }

    module.update(req.body);

    return res.status(200).json(module);
  },

  async delete(req, res) {
    const { module_id } = req.params;

    const module = await Module.findByPk(module_id);

    if (!module) {
      return res.status(404).json('Módulo não encontrado.');
    }

    module.destroy();

    return res.status(200).json('Módulo deletado.');
  },
};
