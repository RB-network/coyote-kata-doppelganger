import test from 'tape'
import { DiscountApplier } from '../discount-applier';
import { User } from '../user';

// Mock Notifier
const mockNotifier = {
  notify: (user: { name: any; }, message: any) => {
    console.log(`Notification sent to ${user.name}: ${message}`);
  }
};

test('apply v1', (t) => {
  // Set up test data
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
  ];

  // Initialize DiscountApplier with mockNotifier
  const discountApplier = new DiscountApplier(mockNotifier);

  // Perform discount application
  discountApplier.applyV1(10, users);

  // Assertion
  t.deepEqual(users[0], { name: 'Alice', email: 'alice@example.com' }, 'First User should be Alice');

  // Check if notifications are sent to all users except the first one (due to the bug)
  try {
    discountApplier.applyV1(10, users);
  } catch (error) {
    t.pass('Should throw an error when All the users received the notification except the first one');
  }

  t.end();
})

test('apply v2', (t) => {
  // Set up test data
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
  ];

  // Initialize DiscountApplier with mockNotifier
  const discountApplier = new DiscountApplier(mockNotifier);

  // Perform discount application
  discountApplier.applyV2(10, users);
 
  // Check if notifications are sent to the correct users
  t.deepEqual(users[1], { name: 'Bob', email: 'bob@example.com' }, 'Second User should be Bob');

  // Throw an error only if the test fails
  try {
    discountApplier.applyV2(10, users);
  } catch (error) {
    t.pass('Should throw an error when the notification has been sent to the correct user');
  }
  
  t.end();
})
