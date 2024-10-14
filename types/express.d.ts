import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any; // Ajuste 'any' para um tipo mais específico, se necessário.
  }
}
