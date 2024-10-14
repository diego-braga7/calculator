import { Request, Response, NextFunction, RequestHandler } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Unauthorized' });
      return; // Encerrar a execução para evitar erros de tipo
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(401).json({ message: 'Invalid token' });
      return; // Encerrar a execução
    }

    (req as any).user = decoded; // Evitar erros de tipo com `as any`
    next(); // Prosseguir para o próximo middleware
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
