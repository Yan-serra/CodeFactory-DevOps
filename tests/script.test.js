import { describe, it, expect } from 'vitest';
import { createTask } from '../assets/js/task.js';

describe('Criação de Tarefa', () => {

     it('deve criar uma tarefa corretamente', () => {
          const task = createTask(
          'Estudar DevOps',
          'Estudo da cultura DevOPS.',
          'Alta'
          );

          expect(task.title).toBe('Estudar DevOps');
          expect(task.description).toBe('Estudo da cultura DevOPS.');
          expect(task.priority).toBe('Alta');
          expect(task.status).toBe('Pendente');
          expect(task.date).toBeDefined();
     });
});