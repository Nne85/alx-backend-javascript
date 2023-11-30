export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const math = mathFunction();
    queue.push(math);
  } catch (error) {
    queue.push(error.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
