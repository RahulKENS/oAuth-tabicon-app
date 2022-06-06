import { Router } from "express";
import { uninstallHandler } from './controller';

const router = Router();

router.post('/uninstall', uninstallHandler);

export default router;
