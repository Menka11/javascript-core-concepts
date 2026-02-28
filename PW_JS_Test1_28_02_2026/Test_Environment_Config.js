// Test Environment Config
// In CI/CD pipelines, tests run against different environments. 
// Write a JavaScript program using a switch statement that takes an environment 
// name stored in a variable and prints the base URL, API key pattern, and timeout. 
// Use const for fixed values and let for the assembled config.
// Environments: dev, staging, qa, production/prod. 
// Each has different base URL, API key prefix, timeout, and description.
// Input:envName = "staging"
// Output: Environment: STAGING Base URL: https://staging-api.testingacademy.com 
// API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

const envName = 'staging';
let baseURL;
let API_key_prefix='';
let timeout;
switch(envName){
    case 'dev':
        baseURL = 'https://dev-api.testingacademy.com';
        API_key_prefix = 'dev_key_xxxx-xxxx';
        timeout = '5000ms';
        console.log(`Environment: dev Base URL: ${baseURL} API Key: ${API_key_prefix} Timeout: ${timeout}`);
        break;
    case 'staging':
        baseURL = 'https://staging-api.testingacademy.com';
        API_key_prefix = 'staging_key_xxxx-xxxx';
        timeout = '8000ms';
        console.log(`Environment: staging Base URL: ${baseURL} API Key: ${API_key_prefix} Timeout: ${timeout} Description: Staging - Pre-production mirror`);
        break;
    case 'qa':
        baseURL = 'https://qa-api.testingacademy.com';
        API_key_prefix = 'qa_key_xxxx-xxxx';
        timeout = '2000ms';
        console.log(`Environment: qa Base URL: ${baseURL} API Key: ${API_key_prefix} Timeout: ${timeout}`);
        break;
    case 'production/prod':
        baseURL = 'https://production_prod-api.testingacademy.com';
        API_key_prefix = 'production_prod_key_xxxx-xxxx';
        timeout = '4000ms';
        console.log(`Environment: production/prod Base URL: ${baseURL} API Key: ${API_key_prefix} Timeout: ${timeout}`);
        break;
    default:
        console.log('Invalid');
}