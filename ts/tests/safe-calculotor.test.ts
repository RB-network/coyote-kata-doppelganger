import test from "tape"
import { SafeCalculator } from "../safe-calculator"

test('should not throw when authorized', (t) => {
  const mockAuthorizer = {
    authorize: () => true
  };

  // Initialize SafeCalculator with mockAuthorizer
  const calculator = new SafeCalculator(mockAuthorizer);

  // Perform addition
  const result = calculator.add(3, 5);

  // Assert that addition is performed
  t.is(result, 8);
  t.end()
})
