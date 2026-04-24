import { Router } from 'express';
import { getProjects, getProjectBySlug, createProject, updateProject, deleteProject } from '../controllers/projectController';

const router = Router();

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
