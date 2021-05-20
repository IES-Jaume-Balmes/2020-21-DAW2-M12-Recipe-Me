## Login
curl -X POST -H "Content-Type: application/json" https://localhost:8000/api/login_check -d '{"username":"sergi@recipeme.com","password":"sergi"}'

## GET SIN TOKEN
curl -X GET https://localhost:8000/api/recipes

## GET CON TOKEN
curl -X GET https://localhost:8000/api/recipes -H "Authorization: BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjE1NTI1ODUsImV4cCI6MTYyMTU1NjE4NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImZyYW5rQHJlY2lwZW1lLmNvbSJ9.W89Nfd5H3Z9_Y_CguFXtSZ0Lw1paeE9q4vyS9VuG4GmX6KINRbZt91JZOJivudNO6-kHNysgnLYdsNhCgUJSa_2HPqkT-S0vzSoiErZlmhAKz8uagMCfzBJMhWjHIl703R9_MQFvYmKH79fFbwPW-dmAG6nz3mMNkkDckWYz1FwLkfiSJ24lyu3aoNMJ8nxXN5BAUhPl_E1DvsNzyqUOcCkasYKCDjvDwDF5-lfK4V-wYrJbcHMzL0ryz4i3L8HrhVMPpRZGu2zQF0V2AcNOKXUQR8OSW-26b7DV3jGRGvzGmoR2y_OihWE_INU5n0MG4o7iS2Q-1XAAagShCYyU0Q"