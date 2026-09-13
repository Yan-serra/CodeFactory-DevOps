export function createTask(title, description, priority) {
    return {
    title,
    description,
    date: new Date().toLocaleString(),
    priority,
    status: 'Pendente'
    };
}