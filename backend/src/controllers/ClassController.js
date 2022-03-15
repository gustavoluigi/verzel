/* eslint-disable camelcase */
const Class = require('../models/Class');
const Module = require('../models/Module');

module.exports = {
  async index(req, res) {
    const classes = await Class.findAll({
      include: [
        {
          model: Module,
          as: 'module',
        },
      ],
      order: [
        ['name', 'ASC'],
        [{ model: Module, as: 'module' }, 'name', 'ASC'],
      ],
    });

    return res.json(classes);
  },

  async show(req, res) {
    const { class_id } = req.params;
    const classes = await Class.findByPk(class_id, {
      include: [
        {
          model: Module,
          as: 'module',
        },
      ],
      order: [
        ['name', 'ASC'],
        [{ model: Module, as: 'module' }, 'name', 'ASC'],
      ],
    });

    if (!classes) {
      return res.status(404).json('Aula não encontrado.');
    }

    return res.json(classes);
  },

  async moduleClasses(req, res) {
    const { module_id } = req.params;

    const module = await Module.findByPk(module_id, {
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

    if (!module) {
      return res.status(404).json('Módulo não encontrado');
    }

    if (!module.classes.length) {
      return res.status(404).json('Nenhuma aula encontrada para este módulo.');
    }

    return res.json(module);
  },

  async store(req, res) {
    const { module_id } = req.params;

    const { name, date } = req.body;

    const lesson = await Class.create({ name, date, id_module: module_id });

    return res.json(lesson);
  },

  async edit(req, res) {
    const { class_id } = req.params;

    const lesson = await Class.findByPk(class_id);

    if (!lesson) {
      return res.status(404).json('Aula não encontrada.');
    }

    lesson.update(req.body);

    return res.json(lesson);
  },

  async delete(req, res) {
    const { class_id } = req.params;

    const lesson = await Class.findByPk(class_id);

    if (!lesson) {
      return res.status(404).json('Aula não encontrada.');
    }

    lesson.destroy();

    return res.status(200).json('Aula deletada.');
  },
};
