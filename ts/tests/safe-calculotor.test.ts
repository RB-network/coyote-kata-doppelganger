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
  t.equal(result,8,'Add 3 and 5 shloud be 8');

  // Assert that addition is performed
  try{
    t.equal(result,8,'Add 3 and 5 shloud be 8');
  }catch (error) {
    throw new Error('Notification assertion failed for Alice');
  }
  t.end()
})
