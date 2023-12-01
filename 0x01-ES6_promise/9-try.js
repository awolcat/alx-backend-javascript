export default function guardrail(mathFunction) {
  const queue = [];
  let mathFunctionOutput = 0;
  try {
    mathFunctionOutput = mathFunction();
  } catch (error) {
    mathFunctionOutput = `${error.name}: ${error.message}`;
  } finally {
    queue.push(mathFunctionOutput, 'Guardrail was processed');
  }
  return queue;
}
