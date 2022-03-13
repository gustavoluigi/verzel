/* eslint-disable camelcase */
const Class = require('../models/Class');
const Module = require('../models/Module');

module.exports = {
  async index(req, res) {
    const classes = await Class.findAll();

    return res.json(classes);
  },

  async moduleClasses(req, res) {
    const { module_id } = req.params;

    const module = await Module.findByPk(module_id);

    if (!module) {
      return res.status(400).json('Módulo não encontrado');
    }

    const classes = await Module.findByPk(module_id, {
      include: { association: 'classes' },
    });

    if (!classes.classes.length) {
      return res.status(400).json('Nenhuma aula encontrada para este módulo.');
    }

    return res.json(classes);
  },

  async store(req, res) {
    const { module_id } = req.params;

    const { name, date } = req.body;

    const lesson = await Class.create({ name, date, id_module: module_id });

    return res.json(lesson);
  },

  async edit(req, res) {
    const { id } = req.params;

    const lesson = await Class.findByPk(id);

    if (!lesson) {
      return res.status(400).json('Aula não encontrada.');
    }

    lesson.update(req.body);

    return res.json(lesson);
  },

  async delete(req, res) {
    const { class_id } = req.params;

    const lesson = await Class.findByPk(class_id);

    if (!lesson) {
      return res.status(400).json('Aula não encontrada.');
    }

    lesson.destroy();

    return res.status(200).json('Aula deletada.');
  },
};
