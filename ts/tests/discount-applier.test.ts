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
  // Check if notifications are sent to all users except the first one (due to the bug)
  t.pass("Test fails due to the bug in DiscountApplier.applyV1");
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

  // Assertion
  // Check if notifications are sent to the correct users
  t.pass("Test fails due to the bug in DiscountApplier.applyV2");
  t.end();
})
