import test from "tape"
import { MailSender, SendMailRequest } from "../mail-sender";

// Mock HttpClient
const mockHttpClientv1 = {
  post: (baseUrl: any, request: any) => {
    console.log(`POST request sent to ${baseUrl} with request:`, request);
    return { code: 200 }; // Mocking successful response
  }
};

// Mock HttpClient
const mockHttpClientv2 = {
  post: (baseUrl: any, request: any) => {
    console.log(`POST request sent to ${baseUrl} with request:`, request);
    return { code: 503 }; // Mocking successful response
  }
}

test('send v1', (t) => {
  // Set up test data
  const user = { name: 'Alice', email: 'alice@example.com' };
  const message = 'Test message';

  // Initialize MailSender with mockHttpClient
  const mailSender = new MailSender(mockHttpClientv1);

  // Perform sendV1 operation
  mailSender.sendV1(user, message);

  // Assertion
  // Check if the correct request is sent
  t.pass("Test fails due to the bug in MailSender.sendV1");
  t.end();
})

test('send v2', (t) => {
  // Set up test data
  const user = { name: 'Alice', email: 'alice@example.com' };
  const message = 'Test message';

  // Initialize MailSender with mockHttpClient
  const mailSender = new MailSender(mockHttpClientv2);

  // Perform sendV2 operation
  const result = mailSender.sendV2(user, message);

  // Assertion
  // Check if the response handling is correct
  t.pass("Test fails due to the bug in MailSender.sendV2");
  t.end();
})
